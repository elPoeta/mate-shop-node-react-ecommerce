import React from 'react'
import { LoginFormData } from '../../interfaces/loginFormData';

interface Props {
  formData: LoginFormData;
  handleSubmit: (ev: React.FormEvent) => void;
  handleChange: (ev: React.ChangeEvent) => void;
}

const LoginForm: React.FC<Props> = (props): JSX.Element => {
  const { formData, handleChange, handleSubmit } = props;
  const { email, password } = formData;

  return (
    <>
      <form onSubmit={(ev) => handleSubmit(ev)} className="flex flex-col">
        <input type="email" id="email" name="email" placeholder='email' value={email} onChange={(ev) => handleChange(ev)} className="p-2 border border-emerald-500 rounded-full mb-2" />
        <input type="password" id="password" name="password" placeholder='password' value={password} onChange={(ev) => handleChange(ev)} className="p-2 border border-emerald-500 rounded-full mb-2" />
        <button className='p-2 border rounded-lg text-center bg-emerald-600 text-emerald-50'>Sign in</button>
      </form>
    </>
  )
}

export default LoginForm