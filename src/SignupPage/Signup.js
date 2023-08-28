import React, { useState } from 'react';
import './Signup.css'; 
import { Link } from 'react-router-dom';

function Signup() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div className="signup_body">
      <header className="signup_header">
        <h1>Create an Account</h1>
        <p>It's quick and easy.</p>
      </header>

      <div className='signup_section'>
        <div className='signup_form'>
          <input placeholder='First Name' />
          <input placeholder='Last Name' />
          <input placeholder='Email or Phone Number' />
          <input placeholder='Password' type='password' />
          <input placeholder='Confirm Password' type='password' />
          
          <div className='checkBox'>
            <label>
              <input
                type='checkbox'
                checked={isChecked}
                onChange={handleCheckboxChange}
                className='case'
              /> I agree to the Terms
            </label>
          </div>
          
          <button className='signup_button'>
            Sign Up
          </button>
          
          <p className='login_link'>
            Already have an account?
            <Link to='/login'> Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
