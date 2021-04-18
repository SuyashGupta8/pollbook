import React from 'react';
import Home from '../links/Home';
import  Links from '../links/All';
import CustomForm from '../forms/form';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: true };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Links></Links>
                <Home></Home>
                <Nav.Link className="white-color" href="/link">Link</Nav.Link>
    
              </Nav>
              <CustomForm ></CustomForm>
            </Navbar.Collapse>
          </Navbar>
      );
    }else {
      return "not logged in"
    }
  }
}
export default Header;
