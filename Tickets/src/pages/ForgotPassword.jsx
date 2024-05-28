import React, { useState } from 'react';


const ForgotPassword = () => {
  const [inputs, setInputs] = useState({});
  
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Logic to handle forgot password submission
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
        <label className="password pt-4">New Password</label>
        <input
          type="password"
          name="newpassword"
          id="newpassword"
          placeholder="Enter your new password..."
          autoComplete="off"
          className="form-control-material text-center text-black"
          required
          onChange={handleChange}
        />
     
        <div className="multiple-choice-login">
          <button className="button-login hover:red" type="submit">
            Reset Password
          </button>
          <a
            href="./login"
            className="hover:text-red-400 ease-in duration-150 pt-4"
          >
            
          </a>
         
        </div>

       
         
        
      </form>
    </div>
  );
};

export default ForgotPassword;
