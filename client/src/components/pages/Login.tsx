import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { reset, login } from '../../features/auth/authSlice';
import { LoginFormData } from '../../interfaces/loginFormData';
import LoginForm from '../user/LoginForm';

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
      // navigate('/')
      console.log("USER ", user)
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const handleSubmit = (ev: React.FormEvent): void => {
    ev.preventDefault();
    const userData: LoginFormData = {
      email,
      password,
    }
    console.log("DATA SUBMIT ", userData)
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
    return <h2>LOADING...</h2>
  }

  return (
    <div>
      <LoginForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />
    </div>
  )
}

export default Login;