import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Register()
{
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    const handleChange = (event) => {
      const { name, value } = event.target;
      setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
      }
    return( 
        <div className="design">
        <div className="container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h1>REGISTER</h1>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" placeholder=" " autoComplete="off" className="form-control-material" required onChange={handleChange} />
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder=" " autoComplete="off" className="form-control-material" required onChange={handleChange} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder=" " autoComplete="off" className="form-control-material" required onChange={handleChange} />
            <label htmlFor="confirm_password">Confirm password</label>
            <input type="password" name="confirm_password" id="confirm_password" placeholder=" " autoComplete="off" className="form-control-material" required onChange={handleChange} />
            <div className="multiple-choice-login">
              <button className="button-login" type="submit">Register</button>
              
            </div>
          </form>
        </div>
      </div>
    )
}
export default Register