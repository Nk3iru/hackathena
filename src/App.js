import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
//import pickCollege from './professionalsForm/selectedStudents';
=======
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
Amplify.configure(awsExports)
>>>>>>> 882942c28ec6e80723a8581589a3c9a3918ba3ee

function App(  {signOut, user } ) {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          LetsMnt
        </a>
      </header>
   
    </div>

  
=======
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
>>>>>>> 882942c28ec6e80723a8581589a3c9a3918ba3ee
  );
}

export default withAuthenticator(App);
