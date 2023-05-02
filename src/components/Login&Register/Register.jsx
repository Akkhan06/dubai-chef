import React, { useState } from "react";
import "./reister.css";
import { Link } from "react-router-dom";

const Register = () => {
    const [accept, setAccepted] = useState(false)
    const handlerAccepted = event => {
        setAccepted(event.target.checked)
      }
  return (
    <div>
      <div className="wrapper mx-auto my-10">
        <h2>Registration</h2>
        <form action="#">
          <div className="input-box">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              name="image"
              placeholder="Prifile image"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Create password"
              required
            />
          </div>
          <div className="policy">
            <input onClick={handlerAccepted} type="checkbox" />
            <h3>I accept all <Link className="text-blue-500" to="/trams">terms & condition</Link></h3>
          </div>
          <button  className="input-box button">
            <input disabled={!accept} type="Submit" value="Register Now" />
          </button>
          <div className="text">
            <h3>
              Already have an account? <Link to="/login">Login now</Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
