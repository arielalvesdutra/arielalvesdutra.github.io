import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import useIsActivePath from '../../hooks/useIsActivePath'
import './Header.scss';


const Header = () => {
  const pathName = useLocation().pathname

  const [isActive] = useIsActivePath({
    pathName,
    activeClass: 'header__nav__links__link--active'
  })

  return (
    <header className="header">
      <div className="header__brand">
        <Link to="/" className="header__brand__link">
          <div className="header__brand__title">
            Ariel Alves Dutra
          </div>
          <div className="header__brand__description">
            Desenvolvedor Web
        </div>
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__nav__links">
          <li className={`header__nav__links__link ${isActive({ expectedPathName: '/', exact: true })}`}>
            <Link to="/">Sobre</Link>
          </li>
          <li className={`header__nav__links__link ${isActive({ expectedPathName: '/contacts' })}`}>
            <Link to="/contacts">Contatos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
