import React from 'react'
import { MenuIcon } from '@heroicons/react/solid';
import Logo from './Logo';
import NavBar from './NavBar';

import SearchBar from './SearchBar';

const Header: React.FC = (): JSX.Element => {
  return (
    <div className='bg-emerald-800 text-emerald-100 text-lg'>
      <header className='grid grid-cols-3'>
        <div className='flex items-center justify-center'>
          <MenuIcon className="h-5 w-5" />
          <h1 className='relative'>Mate Sh<Logo />&nbsp;p</h1>
        </div>
        <NavBar />
        <SearchBar />
      </header>
    </div>
  )
}

export default Header;