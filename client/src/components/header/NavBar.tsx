import React, { useState } from 'react';
import { UserIcon, ShoppingCartIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { UserI } from '../../features/auth/userI';
import UserNav from './UsesrNav';

const NavBar: React.FC = (): JSX.Element => {
  const user: UserI = useAppSelector(state => state.auth).user || { id: '', isAdmin: false, iat: new Date(), expiresIn: new Date() };
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(() => !toggleMenu);
  }

  return (
    <div className='flex items-center justify-end mr-2'>
      {!user.isAdmin ?
        (<Link to={'/login'}>
          <UserIcon className='h-6 w-6' />
        </Link>) : (
          <><UserIcon className='h-6 w-6' onClick={() => handleToggleMenu()} />{toggleMenu && <UserNav toggleMenu={handleToggleMenu} />}</>
        )
      }
      <ShoppingCartIcon className='h-6 w-6 ml-2' />
    </div>
  )
}

export default NavBar;