import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { UserI } from '../../features/auth/userI';

const UserNav = () => {
  const user: UserI | null = useAppSelector(state => state.auth).user;
  return (
    <section className='header_user-nav'>
      <p>Welcome {!user!.isAdmin ? <span>Customer</span> : <span>Admin</span>}</p>
      <ul className='header_user-nav-menu'>
        <li>My account</li>
        {user!.isAdmin && <li>Admin panel</li>}
        <li>Logout</li>
      </ul>
    </section>
  )
}

export default UserNav