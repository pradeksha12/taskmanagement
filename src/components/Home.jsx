// 
import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import { Container, Row, Col } from 'react-bootstrap';
//import {logo}  from '../components/logo.jpg';
import myImg from '../components/logo.jpg';
function Home() {
  return (

    <div>

      <nav className="head">

        <h1> TaskMaster</h1>

        <ul className="nav-links">
          <li>
            <Link to="/mainlogin">Login</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <section className='headerimg'>
        <div>
          <h1 className='h1'>TaskMaster is a<br></br> Task and Time <br>
          </br>Management Software</h1>

        </div>
      </section>
      <section className='h'>
        <div className='belowheader'>
          <Container>
            <Row >
              <Col lg={6} md={4} className='d-flex justify-content-center '>
                <h4>
                  Make Sure Your Team<br></br>
                  Is Actually Getting Work Done
                </h4>

              </Col>
              <Col lg={6} md={4} className='d-flex justify-content-center '>
                <p>
                  In this digital era, keep your teams organized and meet deadlines with TaskMaster time tracking software specially designed for Remote, Distributed, and Co-Located teams.
                </p>

              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} GROCIFY. All rights reserved.</p>
        </div>
      </footer>
    </div>

  );
}

export default Home;