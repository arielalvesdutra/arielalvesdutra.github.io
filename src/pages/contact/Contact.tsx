import React from 'react'
import Main from '../../containers/main/Main'


const AboutMe = () => {

  return (
    <Main mainTitle="Contatos">
      <>
        <div>
          <p>Moro em Canoas, Rio Grande do Sul - Brasil.</p>
          <p>
            Meus contatos são:
          </p>
          <ul>
            <li><b>E-mail</b>: alves.lsn@gmail.com</li>
            <li>
              <span><b>LinkedIn</b>: </span>
              <a href="https://www.linkedin.com/in/arielalvesdutra" target="_blank" rel="noopener noreferrer">
                www.linkedin.com/in/arielalvesdutra
              </a>
            </li>
            <li>
              <span><b>GitHub</b>: </span>
              <a href="https://github.com/arielalvesdutra" target="_blank" rel="noopener noreferrer">
                  www.github.com/arielalvesdutra
              </a>
            </li>
          </ul>
        </div>
      </>
    </Main>
  )
}

export default AboutMe
