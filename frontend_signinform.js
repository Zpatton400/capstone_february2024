import React, { useContext, useState } from 'react';
import { AuthContext } from './path-to-auth-context';

const SignInForm = () => {
  const { setCurrentUser } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Call the backend API to authenticate the user
    // If successful, set the current user in the context
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={credentials.username} onChange={handleChange} placeholder="Username" />
      <input name="password" type="password" value={credentials.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;