#!/bin/bash

current_branch="$(git symbolic-ref --short HEAD)"

function print_message() {
  parameter=$1
  echo ">>> $parameter..."
}

function list_files() {
  ls -lath
}

function install_project_dependencies() {
  print_message "Installing/updating dependencies"
  npm i
}

function build() {
  print_message "Building"
  npm run build
  cp -r build/* ./
}

function delete_old_master_create_new() {
  print_message "Deleting old master branch and creating a new one"
  git checkout develop
  git branch -D master
  git checkout -b master
}

function remove_non_build_content() {
  print_message "Removing content not related with master"
  list_files
  rm -rf build/ scripts/ src/ tsconfig.json README.md package* public .env-example .env
  list_files
}

function add_end_push_master_force() {
  print_message "Git add"
  git add .

  print_message "Git commit"
  git commit -m "Deploy"

  print_message "Git push origin master --force"
  git push origin master --force
}

function checkout_to_working_branch() {
  git checkout $current_branch
  git reset --hard
}

function deploy() {
  print_message "Starting deploy. This script must be executed from root folder..."
  print_message "Current branch $current_branch"
  install_project_dependencies
  delete_old_master_create_new
  build
  remove_non_build_content
  add_end_push_master_force
  checkout_to_working_branch
  print_message "Deploy concluded with success"
}

deploy
