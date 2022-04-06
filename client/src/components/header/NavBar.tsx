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
    <div className='flex items-center justify-end mr-2 md:col-start-4'>
      {!user.isAdmin ?
        (<Link to={'/login'}>
          <UserIcon className='h-6 w-6' />
        </Link>) : (
          <div className='relative'><UserIcon className='h-6 w-6 md:h-8 md:w-8' onClick={() => handleToggleMenu()} />{toggleMenu && <UserNav toggleMenu={handleToggleMenu} />}</div>
        )
      }
      <div className='ml-2'><ShoppingCartIcon className='h-6 w-6 md:h-8 md:w-8' /></div>
    </div>
  )
}

export default NavBar;