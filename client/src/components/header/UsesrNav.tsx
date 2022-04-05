import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logout, reset } from '../../features/auth/authSlice';
import { UserI } from '../../features/auth/userI';

interface Props {
  toggleMenu: () => void;
}

const UserNav: React.FC<Props> = (props): JSX.Element => {
  const { toggleMenu } = props;
  const user: UserI | null = useAppSelector(state => state.auth).user;
  const { isError, message } = useAppSelector(state => state.auth);
  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!user) {
      navigate('/login');
    }
    return () => {
      dispatch(reset());
      navigate('/login');
      toggleMenu();
    }
  }, [user, navigate, isError, message, dispatch, toggleMenu])

  return (
    <section className='flex absolute top-[30px] -right-10 py-3 px-3 bg-emerald-600 shadow-lg shadow-emerald-700/50 border-2 border-emerald-50 rounded-tl-lg rounded-bl-lg transition ease-out duration-75'>
      <ul className='items-start'>
        <li className='text-emerald-900 py-1 border-b border-emerald-50 mb-1'>Welcome&nbsp;{!user!.isAdmin ? <span>Customer</span> : <span>Admin</span>}</li>
        {user!.isAdmin && <li><Link to='/'>Admin panel</Link></li>}
        <li><Link to='/' >Dashboard</Link></li>
        <li><Link to='/' >My account</Link></li>
        <li onClick={() => handleLogout()}>Logout</li>
      </ul>
    </section>
  )
}

export default UserNav