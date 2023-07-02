import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


export default function Login() {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const Handlevent = () => {
    Swal.fire({
      title: 'Login Sucessfully!',
      // text: 'Thanks for reviewing our product',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  
  }
  return (
    <>
      <div className="container bg-light p-5 col-5 mx-auto m-5 " >
        <h3 className='mb-4'>Welcome! Please Login to continue</h3>

        <form onSubmit={handleFormSubmission}>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label" >
              Phone Number or Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder='Please enter your Email or Phone no'
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div className="mb-3 ">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder='Please enter your password'
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <div className="d-grid col-12 mx-auto ">
            <button className="btn btn-danger p-2" type="submit" onClick={Handlevent}>Login</button>
          </div>

        </form>

        <Link className='nav-link text-danger text-end ' to="/signup"><small><span className='text-dark'>Not Registered yet? </span>Signup</small></Link>

      </div>
    </>
  )
}
