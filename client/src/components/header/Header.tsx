import React from 'react'
import { MenuIcon } from '@heroicons/react/solid';
import Logo from './Logo';
import NavBar from './NavBar';

import '../../styles/scss/Header.scss';
import SearchBar from './SearchBar';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className='header'>
      <div className='header_brand'>
        <MenuIcon className="header_hamburger" />
        <h1>Mate Sh<Logo />p</h1>
      </div>
      <NavBar />
      <SearchBar />
    </header>
  )
}

export default Header;