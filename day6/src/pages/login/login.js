import React from 'react';
import './login.css'; // Import the CSS file
import {Link} from "react-router-dom";
import Navbar from '../navbar';
class SignInSignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignUp: false
    };
  }

  handleSignInClick = () => {
    this.setState({ isSignUp: false });
  }

  handleSignUpClick = () => {
    this.setState({ isSignUp: true });
  }

  render() {
    const { isSignUp } = this.state;

    return (
      <>
      {/* <div>
<Navbar/>
      </div> */}
      <div className={`contain ${isSignUp ? 'right-panel-active' : ''}`}>
        <div className="form-contain signin-contain">
          <form action="#" className='q'>
            <h1 className='s'>Sign in</h1>
            
            <span>Or Sign in with your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            
            <Link to="/"><button>Sign In</button></Link>
          </form>
        </div>
        <div className="form-contain signup-contain">
          <form action="#" className='q'>
            <h1 className='s'>Sign Up</h1>
            
            <span>Or Sign up with your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <Link to="/"><button>Sign up</button></Link>
          </form>
        </div>
        <div className="overlay-contain">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className='s'>Good Day, Friend</h1>
              <p>Enter your details to get started.</p>
              <button id="signinBtn" className="ghost" onClick={this.handleSignInClick}>Sign in</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className='s'>Good Day, Friend</h1>
              <p>Enter your details to get started.</p>
              <button id="signupBtn" className="ghost" onClick={this.handleSignUpClick}>Sign up</button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default SignInSignUpPage;