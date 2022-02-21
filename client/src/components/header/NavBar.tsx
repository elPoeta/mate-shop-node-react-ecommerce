import React from 'react';
import { UserIcon, ShoppingCartIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const NavBar: React.FC = (): JSX.Element => {
  return (
    <div className='header_navBar'>
      <Link to={'/login'}>
        <UserIcon className='header_navBar_icon' />
      </Link>
      <ShoppingCartIcon className='header_navBar_icon' />
    </div>
  )
}

export default NavBar;