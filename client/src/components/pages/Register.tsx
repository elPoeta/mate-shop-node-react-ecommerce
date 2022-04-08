import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
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
    <div className='grid grid-cols-1 gap-3 w-[90%] shadow-md p-2 bg-emerald-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:w-[30%]'>
      <section className='border border-emerald-600 rounded-sm p-4 bg-white'>
        <RegisterForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
        />
      </section>
      <Link to='/login' className='p-2 border border-emerald-500 rounded-full text-emerald-800 w-40 text-center bg-white'>Sign in</Link>
      <div></div>
    </div>
  )
}

export default Register;