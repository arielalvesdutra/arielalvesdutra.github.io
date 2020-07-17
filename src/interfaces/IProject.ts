import IImage from './IImage'
import IRepository from './IRepository'

export default interface IProject {
  title: string
  description: string
  image: IImage
  repositories: IRepository[]
}
