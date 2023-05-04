import React, { useContext, useState } from "react";
import "./Login.css";
import { FaGithub, FaGoogle, FaLock, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";


const Login = () => {
  const [error, setError] = useState()
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()
 const auth = getAuth(app)

  const {loginUser, googleUser, updateUser} = useContext(AuthContext)

  
  const navigate = useNavigate();
  
  // ===========SET TARGETED LOCATION===========
    const location = useLocation()
    console.log(location)
    const from = location?.state?.from.pathname || "/"


    // ==========GOOGLE LOGIN SYSTEM==============
  const googleHandler = (event) => {
    event.preventDefault()
    signInWithPopup(auth, googleProvider) 
    .then(result => {
      console.log(result)
      navigate(from)
    })
    .catch(error => {
      
    })
  }

// ==========GITHUB LOGIN SYSTEM==============
  const githubUser = (event) => {
    event.preventDefault()
    signInWithPopup(auth, githubProvider)  
    .then(result => {
      console.log(result)
      navigate(from)
    })
    .catch(error => {
     
    })
}



  
  
  const loginHandler = (event) =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if(!email || !password) {
      setError("Cannot leave any field empty")
      return
  }
    loginUser(email, password)
    .then(result => {
      const userProfile = result.user
      console.log(userProfile)
      navigate(from)
    })
    .catch(error => {
      setError(error.message)
    })
  }
  return (
    <div className="mx-auto mt-4">
      <div className="main_div mx-auto">
        <div className="title">Login Form</div>
        <div className="social_icons">
          <Link onClick={googleHandler} href="#">
          <FaGoogle className="inline"/> <span>Google</span>
          </Link>
          <Link onClick={githubUser} href="#">
            <FaGithub className="inline"/>
            <span>Github</span>
          </Link>
        </div>
        <form onSubmit={loginHandler} action="#">
          <div className="input_box">
            <input type="text" name="email" placeholder="Email" />
            <div className="icon">
             <FaUser/>
            </div>
          </div>
          <div className="input_box">
            <input type="password" name="password" placeholder="Password"  />
            <div className="icon">
              <FaLock/>
            </div>
          </div>
          <div className="option_div">
            <div className="check_box">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <div className="forget_div">
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <div className="input_box button">
            <input type="submit" value="Login" />
          </div>

          <h1 className="text-red-500">{error && error}</h1>

          <div className="sign_up">
            Not a member? <Link to="/register">Signup now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
