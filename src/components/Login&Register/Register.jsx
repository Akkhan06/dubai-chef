import React, { useContext, useState } from "react";
import "./reister.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState()
  const {createUser, updateUser} = useContext(AuthContext)
    const [accept, setAccepted] = useState(false)
    const handlerAccepted = event => {
        setAccepted(event.target.checked)
      }

      const registerHandler = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photo = form.image.value
        const email = form.email.value
        const password = form.password.value
       
        if(!name || !photo || !email || !password) {
          setError("Cannot leave any field empty")
          return
      } 
      
      if(password.length < 6) {
          setError("password at least 6 character")
          return
      }

      setError(null)


        console.log(name, photo, email, password)

        createUser(email, password)
        .then(result => {
          const user = result.user
          console.log(user)
          updateUser(name, photo)
          .then((result) => {
              const userss = result.user
              console.log(userss)
          }).catch((error) => {
          
          })
        })
        .catch(error => {
          console.log(error)
        })
      }

  return (
    <div>
      <div className="wrapper mx-auto my-10">
        <h2>Registration</h2>
        <form onSubmit={registerHandler} action="#">
          <div className="input-box">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
             
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              name="image"
              placeholder="Prifile image"
             
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
              
            />
          </div>
          <div className="policy">
            <input onClick={handlerAccepted} type="checkbox" />
            <h3>I accept all <Link className="text-blue-500" to="/trams">terms & condition</Link></h3>
          </div>
          <h1 className="text-red-500">{error && error}</h1>
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
