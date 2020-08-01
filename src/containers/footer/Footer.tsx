import React from 'react'

import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__contacts">
        <li className="footer__contacts__contact">
          <a className="footer__contacts__contact__link" target="_blank" rel="noopener noreferrer"
            href="https://linkedin.com/in/arielalvesdutra">
            LinkedIn
          </a>
        </li>
        <li className="footer__contacts__contact">
          <a className="footer__contacts__contact__link" target="_blank" rel="noopener noreferrer"
            href="https://github.com/arielalvesdutra">
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
