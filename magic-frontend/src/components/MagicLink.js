import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Spinner,Row,Col} from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast';

function MagicLink() {
    let {token } = useParams();
    let  { email } = useParams();
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState("");
    const [successMessage,setSuccessMessage] = useState("")
    const [loader,setLoader] = useState(false)

    useEffect(()=>{
      setPassword(token)
      setLoader(true)
    },[])
      
    // const timer = setTimeout(() => {  }, 1000);


    const changePassword = () => {
      console.log("changepassword--------->")
      if (token){

          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "email": email,"token":token })
        };
        fetch('http://localhost:8000/api/signin', requestOptions)
        .then(response => response.json())
        .then(response => 
          {
            console.log("---------------response>",response,response.success_message.token)
            setSuccessMessage(response.success_message.token);
            setPassword("");
            setLoader(false);
            setShow(true);
          });
      }

    }

    const timer = () =>{
      setTimeout(changePassword,2000)
    }
  return (
    <>
    {password ? timer(): ""}

    <div className='Container'>
      {loader? 
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner> 
      : ""}
    
        <div className='row justify-content-center mt-5 pb-4'>
          <div className="col-md-4">
            <div className="card">
              <div className ="card-header" style={{backgroundColor: "#00bfef"}}>
                <center>
                  <h4>MTD</h4>
                </center>
              </div>
              <div className='card-body'>
                <form method='post' action="#" name="userRegistration">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="password"  name="email"  value={password} />
                  </div>
                  <p style={{color: "green"}}>{successMessage}</p>
                  <div align="center"><input  style={{backgroundColor: "#00bfef"}} type="submit" value="Login"/></div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Row>
        <Col md={6} className="mb-2"></Col>          
        <Col md={6} className="mb-2">
            <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
              {/* <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Woohoo, you have logged in successfully!</strong>
                <small>just now</small>
              </Toast.Header> */}
              <Toast.Body style={{backgroundColor: "green"}}>Woohoo, you have logged in successfully!</Toast.Body>
            </Toast>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default MagicLink