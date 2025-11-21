import React from 'react';
import AuthForm from './AuthForm';

const SignUp = (props) => {
  const handleSignUpSubmit = async (credentials, navigate) => {
    console.log('Signup form submitted');
    const { name, email, password, confirmPassword } = credentials;

    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords don't match");
      }

      // ✅ FIXED: Backticks instead of single quotes
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/createuser`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      console.log('Response:', json);

      if (json.success) {
        localStorage.setItem('token', json.authToken);
        navigate('/');
        props.showAlert('Account created successfully', 'success');
      } else {
        props.showAlert(json.error || 'Invalid Credentials', 'danger');
      }
    } catch (error) {
      console.error('Error during signup:', error.message);
      props.showAlert(error.message, 'danger');
    }
  };

  return <AuthForm formType="signup" onSubmit={handleSignUpSubmit} />;
};

export default SignUp;
