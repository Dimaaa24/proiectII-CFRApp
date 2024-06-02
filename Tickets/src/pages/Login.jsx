import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = inputs;

    // Simulated login logic
    if (username === password) {
      try {
        const response = await fetch('http://localhost:5110/Users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: 0, // Placeholder value
            email: "", // Placeholder value
            userName: username,
            password: password
          })
        });

        if (response.status === 409) {
          setErrorMessage('User already exists or conflict');
        } else if (response.ok) {
          const data = await response.json();
          if (username === 'admin') {
            navigate('/adminpage');
          } else {
            navigate('/userpage');
          }
          console.log('Success:', data);
        } else {
          setErrorMessage('Failed to log in: ' + response.statusText);
        }
      } catch (error) {
        setErrorMessage('Error: ' + error.message);
      }
    } else {
      setErrorMessage('Login failed: Username and password do not match');
    }
  };

  return (
    <div className="pt-10 flex justify-center">
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username..."
          autoComplete="off"
          className="form-control-material text-center text-black"
          required
          onChange={handleChange}
        />
        <label className="password pt-4">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password..."
          autoComplete="off"
          className="form-control-material text-center text-black"
          required
          onChange={handleChange}
        />
        <div className="multiple-choice-login">
          <button className="button-login hover:red" type="submit">
            Log In
          </button>
          <a
            href="./Register"
            className="hover:text-red-400 ease-in duration-150 pt-4"
          >
            Don't have an account?
          </a>
          <a
            href="./forgotpassword"
            className="hover:text-red-400 ease-in duration-150 pt-4"
          >
            Forgot password
          </a>
        </div>
        {errorMessage && <p className="text-red-500 pt-4">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
