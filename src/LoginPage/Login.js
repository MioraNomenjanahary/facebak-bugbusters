import React from 'react';
import './Login.css';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className="login_body">
      <header className="login_header">
        <img
          className="facebookLogo"
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="Facebook"
        />
        <div>
          <p>Recent Logins</p>
        </div>

        <div className='card'>
                <button className='buttonIcon'>
                    <FontAwesomeIcon icon={faPlusCircle} className="circle-icon" />
                </button>
                <div className='foot'></div>
        </div>
      </header>
      

        <div className='login_section'>  
          <div className='identifiants'>        
            <div className='input'>
              <input placeholder='Email or Phone Number'/>
              <input placeholder='Password'/>
            </div>
            <button className='login_button'>
              Log in
            </button>
            <Link>Forget password?</Link>

            <hr/>

            <Link className='sign' to='/Signup'>  
              <button>
                Create new account
              </button>
            </Link>
          </div>
            <p>Create a Page for a celebrity, brand or business.</p>
        </div>


    </div>
  );
}

export default Login;
