import React from 'react'
import { MenuIcon } from '@heroicons/react/solid';
import Logo from './Logo';
import NavBar from './NavBar';

import SearchBar from './SearchBar';

const Header: React.FC = (): JSX.Element => {
  return (
    <div className='bg-emerald-800 text-emerald-100 text-2xl md:text-3xl'>
      <header className='grid grid-cols-3 md:grid-cols-4'>
        <div className='flex items-center justify-left'>
          <MenuIcon className="h-8 w-8 md:hidden" />
          <h1 className='relative md:ml-2'>Mate Sh<Logo />&nbsp;&nbsp;p</h1>
        </div>
        <NavBar />
        <SearchBar />
      </header>
    </div>
  )
}

export default Header;