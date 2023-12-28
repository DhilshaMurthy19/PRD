import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [loginError, setLoginError] = useState('');
  const [forgotPasswordSuccess, setForgotPasswordSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Validate email and password, then authenticate with backend
    if (email && password) {
      // Authenticate logic (API call, JWT handling, etc.)
      // Example: This is just a placeholder
      if (email === 'user@example.com' && password === 'password') {
        // Redirect to dashboard or perform necessary actions upon successful login
        // For example: history.push('/dashboard');
        setLoginError('');
      } else {
        setLoginError('Invalid email or password');
      }
    } else {
      setLoginError('Please enter email and password');
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Send a reset password link to the provided email
    // Example: This is just a placeholder for a successful reset
    if (forgotPasswordEmail) {
      setForgotPasswordSuccess(true);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {loginError && <p>{loginError}</p>}

      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Email"
          value={forgotPasswordEmail}
          onChange={(e) => setForgotPasswordEmail(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
      {forgotPasswordSuccess && <p>Password reset link sent to your email!</p>}
    </div>
  );
};

export default LoginPage;