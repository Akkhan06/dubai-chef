import React from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry } from "@fortawesome/free-regular-svg-icons";
import { FaGithub, FaGoogle, FaLock, FaTwitter, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mx-auto mt-4">
      <div className="main_div mx-auto">
        <div className="title">Login Form</div>
        <div className="social_icons">
          <Link href="#">
          <FaGoogle className="inline"/> <span>Google</span>
          </Link>
          <a href="#">
            <FaGithub className="inline"/>
            <span>Github</span>
          </a>
        </div>
        <form action="#">
          <div className="input_box">
            <input type="text" placeholder="Email or Phone" required />
            <div className="icon">
             <FaUser/>
            </div>
          </div>
          <div className="input_box">
            <input type="password" placeholder="Password" required />
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
