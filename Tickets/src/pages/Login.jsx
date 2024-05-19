import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

const Login = () => {
  // preia datele din form si le salveaza
  const [inputs, setInputs] = useState({});
  //const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // sa vad daca preia datele din form
    console.log(inputs);
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
        {/* Si la astea era htmlFor nu stiu ce era :) */}
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
        </div>
      </form>
    </div>
  );
};

export default Login;
