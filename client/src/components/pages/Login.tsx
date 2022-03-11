import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { reset, login } from '../../features/auth/authSlice';
import { LoginFormData } from '../../interfaces/loginFormData';
import Spinner from '../common/Spinner';
import LoginForm from '../user/LoginForm';

import '../../styles/scss/LoginRegister.scss';

const Login: React.FC = (): JSX.Element => {
  const [formData, setFormdata] = useState({ email: '', password: '' });

  const { email, password } = formData;

  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  const { user, isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      console.log("ERROR ")
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const handleSubmit = (ev: React.FormEvent): void => {
    ev.preventDefault();
    const userData: LoginFormData = {
      email,
      password,
    }
    dispatch(login(userData));
  }

  const handleChange = (ev: React.FormEvent): void => {
    setFormdata(prevFormData => (
      {
        ...prevFormData,
        [(ev.target as HTMLInputElement).name]: (ev.target as HTMLInputElement).value
      }
    ))
  }

  if (isLoading) {
    return <Spinner className='spinner-wave' />
  }

  return (
    <div className='auth_container'>
      <section>
        <LoginForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
        />
      </section>
      <Link to='/register'>Sign up</Link>
      <div></div>
    </div>
  )
}

export default Login;