import React from 'react'
import { Navbar,Container,Nav,Button,Badge } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <>
    <Navbar style={{backgroundColor: "#6296cb"}} variant="dark"  sticky="top">
        <Container >
            <Navbar.Brand href="/">
            {/* <img
                alt=""
                src=''
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '} */}
            MTD
            </Navbar.Brand>
        </Container>
        <Nav>
            {/* <Link to=""><Button variant="dark">Logout</Button></Link> */}
            {/* <Link to=""><Button variant="dark">Login</Button></Link> */}
        </Nav>
    </Navbar>
  </>
  )
}

export default NavBar