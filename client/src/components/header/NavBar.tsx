import React from 'react';
import { UserIcon, ShoppingCartIcon } from '@heroicons/react/solid';

const NavBar: React.FC = (): JSX.Element => {
  return (
    <div className='header_navBar'>
      <UserIcon className='header_navBar_icon' />
      <ShoppingCartIcon className='header_navBar_icon' />
    </div>
  )
}

export default NavBar;