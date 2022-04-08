import React from 'react'
import { RegisterFormData } from '../../interfaces/loginFormData';

interface Props {
  formData: RegisterFormData;
  handleSubmit: (ev: React.FormEvent) => void;
  handleChange: (ev: React.ChangeEvent) => void;
}

const RegisterForm: React.FC<Props> = (props): JSX.Element => {
  const { formData, handleChange, handleSubmit } = props;
  const { name, email, password, confirmPassword } = formData;

  return (
    <>
      <form onSubmit={(ev) => handleSubmit(ev)} className="flex flex-col">
        <input type="text" id="name" name="name" placeholder='name' value={name} onChange={(ev) => handleChange(ev)} className="p-2 border border-emerald-500 rounded-full mb-2" />
        <input type="email" id="email" name="email" placeholder='email' value={email} onChange={(ev) => handleChange(ev)} className="p-2 border border-emerald-500 rounded-full mb-2" />
        <input type="password" id="password" name="password" placeholder='password' value={password} onChange={(ev) => handleChange(ev)} className="p-2 border border-emerald-500 rounded-full mb-2" />
        <input type="confirmPassword" id="confirmPassword" name="confirmPassword" placeholder='confirmPassword' value={confirmPassword} onChange={(ev) => handleChange(ev)} className="p-2 border border-emerald-500 rounded-full mb-2" />
        <button className='p-2 border rounded-lg text-center bg-emerald-600 text-emerald-50'>Sign up</button>
      </form>
    </>
  )
}

export default RegisterForm;