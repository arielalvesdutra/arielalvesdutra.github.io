import React from 'react'
import './Contacts.scss'

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="contacts__overBackground">
        <h3>Contatos</h3>
        <ul className="contacts__list">
          <li className="contacts__contact">
            <a className="contacts__contact__link" target="_blank" rel="noopener noreferrer" 
              href="https://twitter.com/arielalvesdutra">
              <span>Twitter</span>
            </a>
          </li>
          <li className="contacts__contact">
            <a className="contacts__contact__link" target="_blank" rel="noopener noreferrer"
              href="https://linkedin.com/in/arielalvesdutra">
              <span>LinkedIn</span>
            </a>
          </li>
          <li className="contacts__contact">
            <a className="contacts__contact__link" target="_blank" rel="noopener noreferrer"
              href="https://github.com/arielalvesdutra">
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contacts
