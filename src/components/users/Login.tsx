import React, { useState } from 'react';
import { Credentials, useLogin } from './loginHelpers';

// TODO: move form components to ui library

function Login() {
  const { login } = useLogin();
  const [formData, setFormData] = useState<Credentials>({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email address
        <input required id="email" type="email" onChange={handleInputChange} />
      </label>
      <label htmlFor="password">
        Password
        <input required id="password" type="password" onChange={handleInputChange} />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
}

export default Login;
