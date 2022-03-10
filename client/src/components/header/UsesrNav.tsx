import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logout } from '../../features/auth/authSlice';
import { UserI } from '../../features/auth/userI';
import '../../styles/scss/UserNav.scss';
import Spinner from '../common/Spinner';

interface Props {
  toggleMenu: () => void;
}

const UserNav: React.FC<Props> = (props): JSX.Element => {
  const { toggleMenu } = props;
  const user: UserI | null = useAppSelector(state => state.auth).user;
  const { isLoading, isError, isSuccess, message } = useAppSelector(state => state.auth);
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  }

  useEffect(() => {
    if (isError) {
      toggleMenu();
    }
    if (isSuccess || !user) {
      navigate('/')
      toggleMenu();
    }
  }, [user, isError, isSuccess, message, navigate, toggleMenu])

  if (isLoading) {
    return <Spinner className='spinner-wave' />
  }

  return (
    <section className='header_user-nav'>
      <p>Welcome {!user!.isAdmin ? <span>Customer</span> : <span>Admin</span>}</p>
      <ul className='header_user-nav-menu'>
        {user!.isAdmin && <li><Link to='/'>Admin panel</Link></li>}
        <li><Link to='/' >Dashboard</Link></li>
        <li><Link to='/' >My account</Link></li>
        <li onClick={() => handleLogout()}>Logout</li>
      </ul>
    </section>
  )
}

export default UserNav