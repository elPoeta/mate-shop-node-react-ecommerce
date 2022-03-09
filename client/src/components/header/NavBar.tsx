import React, { useState } from 'react';
import { UserIcon, ShoppingCartIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { UserI } from '../../features/auth/userI';
import UserNav from './UsesrNav';

const NavBar: React.FC = (): JSX.Element => {
  const user: UserI = useAppSelector(state => state.auth).user || { id: '', isAdmin: false, iat: new Date(), expiresIn: new Date() };
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='header_navBar'>
      {!user.isAdmin ?
        (<Link to={'/login'}>
          <UserIcon className='header_navBar_icon' />
        </Link>) : (
          <><UserIcon className='header_navBar_icon' onClick={() => setToggleMenu(() => !toggleMenu)} />{toggleMenu && <UserNav />}</>
        )
      }
      <ShoppingCartIcon className='header_navBar_icon' />
    </div>
  )
}

export default NavBar;