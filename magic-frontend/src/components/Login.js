import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
function Login() {
  const [email, setEmail] = useState("");
  const [successMessage,setSuccessMessage] = useState("")

  function handleFormSubmit(e){
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "email": email })
  };
  fetch('http://localhost:8000/api/signup', requestOptions)
  .then(response => response.json())
  .then(response => setSuccessMessage(response.success_message));
  }
  return (
    <>
    <div className='Container'>
        <div className='row justify-content-center mt-5 pb-4'>
          <div className="col-md-4">
            <div className="card">
              <div className ="card-header">
                <center>
                  <h4>Login</h4>
                </center>
              </div>
              <div className='card-body'>
                <form method='post' action="#" name="userRegistration" onSubmit={handleFormSubmit}>
                  <div className="input-group mb-3">
                  {/* <span className="input-group-text" id="basic-addon1"><i className="fas fa-user"></i></span> */}
                  <input type="email" className="form-control" placeholder="Email Address"  name="email" onChange={(event) => setEmail(event.target.value)} value={email}/>
                  </div>
                  <div><p>Please, enter your email Address</p></div>
                  <div align="center"><input type="submit" value="let's go"/></div>
                  <p style={{color: "green"}}>{successMessage}</p>
                </form>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </>
  )
}

export default Login