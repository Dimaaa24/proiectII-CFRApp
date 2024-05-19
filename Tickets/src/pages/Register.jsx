import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [inputs, setInputs] = useState({});
  // const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };
  return (
    <div className="pt-10 flex justify-center">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="italic">Register form</h1>
        <label className="" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email"
          autoComplete="off"
          className="form-control-material text-center text-black"
          required
          onChange={handleChange}
        />
        {/* Era htmlFor idk de ce */}
        <label className="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username"
          autoComplete="off"
          className="form-control-material text-center text-black"
          required
          onChange={handleChange}
        />
        <label className="" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          autoComplete="off"
          className="form-control-material text-center text-black"
          required
          onChange={handleChange}
        />
        <label className="" htmlFor="confirm_password">
          Confirm password
        </label>
        <input
          type="password"
          name="confirm_password"
          id="confirm_password"
          placeholder="Confirm your password "
          autoComplete="off"
          className="form-control-material text-center text-black"
          required
          onChange={handleChange}
        />
        <div className="multiple-choice-login">
          <button className="button-login" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
