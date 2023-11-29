import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'


function Header() {
  return (
    <div>
        <Navbar className="bg-success w-100">
        <Container>
          <Navbar.Brand >
            <Link to={"/"}>
            <img
              alt=""
              src="https://i.postimg.cc/pVpg0zwd/downloads-react.jpg"
              width="80"
              height="55"
              className="d-inline-block align-top"
            />
            </Link>
            <b  className='text-white ms-4 mt-4 fs-2'>Find Happiness</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header