import React, { useContext, useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry } from "@fortawesome/free-regular-svg-icons";
import { FaGithub, FaGoogle, FaLock, FaTwitter, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const {loginUser, githubUser, googleUser} = useContext(AuthContext)
  const [errores , setErrores] = useState('')
  
  const location = useLocation()
  const navigate = location?.state?.from.pathname || "/"

  const loginHandler = (event) =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
    .then(result => {
      const userProfile = result.user
      console.log(userProfile)
    })
    .catch(error => {
      console.log(error)
      // setErrores(error.massage)
    })
  }
  return (
    <div className="mx-auto mt-4">
      <div className="main_div mx-auto">
        <div className="title">Login Form</div>
        <div className="social_icons">
          <Link onClick={googleUser} href="#">
          <FaGoogle className="inline"/> <span>Google</span>
          </Link>
          <Link onClick={githubUser} href="#">
            <FaGithub className="inline"/>
            <span>Github</span>
          </Link>
        </div>
        <form onSubmit={loginHandler} action="#">
          <div className="input_box">
            <input type="text" name="email" placeholder="Email" required />
            <div className="icon">
             <FaUser/>
            </div>
          </div>
          <div className="input_box">
            <input type="password" name="password" placeholder="Password" required />
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
          <div className="sign_up">
            Not a member? <Link to="/register">Signup now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
