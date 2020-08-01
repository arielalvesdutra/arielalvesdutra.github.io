import React,{ ReactChild } from 'react'
import './Main.scss'

interface MainProps {
  mainTitle: string
  children?: ReactChild
}

const Main = ({ mainTitle, children }: MainProps) => {

  return (
    <main className="main" >
      <div className="main__content">
        <h1>{mainTitle}</h1>
        {children}
      </div>
    </main>
  )
}

export default Main
