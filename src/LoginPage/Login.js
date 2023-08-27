import React, {useState} from 'react';
import './Login.css';
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


function Login() {
  const [showLoginWindow, setShowLoginWindow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleButtonIconClick = () => {
    setShowLoginWindow(true);
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  const handleCloseWindow = () => {
    setShowLoginWindow(false);
  }
  
  return (
    <div className="login_body">
      <header className="login_header">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="Facebook"
        />
        <div>
          <h2>Recent Logins</h2>
          <p>Click your picture or add an account.</p>
        </div>

        <div className='card'>
            <button className='buttonIcon' onClick={handleButtonIconClick}>
              <FontAwesomeIcon icon={faPlusCircle} className="circle-icon" />
            </button>

            <div className='foot'>
              <p>
                Add Account
              </p>
            </div>
              {
                showLoginWindow && (
                  <div className='loginWindow'>
                    {
                      <div className='window'>
                        <div className='windowHeader'>
                          <h1>Log Into Facebook</h1>
                          <FontAwesomeIcon icon={faTimesCircle} onClick={handleCloseWindow} className='timesCircle'/>
                        </div>
                        <hr className='windowHr'/>
                        <div className='windowInput'>
                          <input placeholder='Email or phone number'/>
                          <input placeholder='Password'/>
                        </div>
                        <div className='checkBox'>
                          <label>
                            <input type='checkbox'
                                  checked={isChecked}
                                  onChange={handleCheckboxChange}
                                  className='case'
                            /> Remember Password
                          </label>
                        </div>
                        <button className='window_loginButton'>
                          Log in
                        </button>
                        <Link className='auth'>Forget password?</Link>                        
                      </div>
                    }
                  </div>)
                  }
        </div>
      </header>

        <div className='login_section'>  
          <div className='identifiants'>        
            <div className='input'>
              <input placeholder='Email or Phone Number'/>
              <input placeholder='Password'/>
            <button className='login_button'>
              Log in
            </button>
            <Link className='auth'>Forget password?</Link>

            <hr/>

            <Link to='/Signup'>  
              <button  className='sign'>
                Create new account
              </button>
            </Link>
          </div>
        </div>
          <p> <span>Create a Page</span>, for a celebrity, brand or business.</p>
        </div>
    </div>
  );
}

export default Login;
