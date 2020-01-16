import React from 'react'

import './Presentation.scss'

const Presentation = () => {
  return (
    <section className="presentation" data-background-source="https://pixabay.com/pt/photos/x%C3%ADcara-de-caf%C3%A9-laptop-escrit%C3%B3rio-1280537/">
      <div className="presentation__overBackground">
        <img className="presentation__profileImg" alt="Foto de perfil"  
              src={require(`../assets/img/profile.jpg`)}  />
        <h1>Ariel Alves Dutra</h1>
        <div>
          Desenvolvedor de Software
        </div>
      </div>
    </section>
  )
}

export default Presentation
