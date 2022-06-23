import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { Credentials, useLogin } from './loginHelpers';

// TODO: move the form's components to ui library

function Login() {
  const [formData, setFormData] = useState<Credentials>({ email: '', password: '' });
  const { login } = useLogin();
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (isAuthenticated()) {
    return <Navigate to="/characters" state={{ from: location }} replace />;
  }

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
