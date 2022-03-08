import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { reset, register } from '../../features/auth/authSlice';
import { RegisterFormData } from '../../interfaces/loginFormData';
import Spinner from '../common/Spinner';
import RegisterForm from '../user/RegisterForm';

const Register: React.FC = (): JSX.Element => {
  const [formData, setFormdata] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const { name, email, password, confirmPassword } = formData;

  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  const { user, isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.auth
  );

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
    const userData: RegisterFormData = {
      name,
      email,
      password,
      confirmPassword
    }
    dispatch(register(userData));
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
    <div>
      <RegisterForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  )
}

export default Register;