import React from 'react'

const LoginForm: React.FC = (): JSX.Element => {
  return (
    <>
      <form>
        <input type="email" placeholder='email' />
        <input type="password" placeholder='password' />
        <button>Sign in</button>
      </form>
    </>
  )
}

export default LoginForm