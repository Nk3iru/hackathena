import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
Amplify.configure(awsExports)


function App(  {signOut, user } ) {
  return (
    <>
       <Navbar bg="light" variant="light" expand="lg" sticky="top">
          <Navbar.Brand href="#home">Letsmtn</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/how-we-work">How We Work</Nav.Link>
                <Nav.Link href="/our-team">Our Team</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              </NavDropdown>
              </Nav>
              
              <Button variant="outline-success" onClick={signOut}>Sign Out</Button>
            
          </Navbar.Collapse>
        </Navbar>
      <br/>
      <h2>Home Page</h2>
   
    </>

  );
}

export default withAuthenticator(App);
