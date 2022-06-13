import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MagicLink() {
    const handleFormSubmit = () =>{}
    let { token } = useParams();
    let { email } = useParams();
  return (
    <>
    <div className='Container'>
        <div className='row justify-content-center mt-5 pb-4'>
          <div className="col-md-4">
            <div className="card">
              <div className ="card-header">
                <center>
                  <h4>MTD</h4>
                </center>
              </div>
              <div className='card-body'>
                <form method='post' action="#" name="userRegistration" onSubmit={handleFormSubmit}>
                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="password"  name="email"  value=""/>
                  </div>
                  <div align="center"><input type="submit" value="Login"/></div>
                </form>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </>
  )
}

export default MagicLink