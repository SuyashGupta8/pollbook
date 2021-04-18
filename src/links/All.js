import { NavDropdown } from 'react-bootstrap';

const NavItems = () => {
    return (
        <NavDropdown title="All" id="white">
        <NavDropdown.Item href="logout">logout</NavDropdown.Item>
        <NavDropdown.Item href="about">About Us</NavDropdown.Item>
        <NavDropdown.Item href="contact">Contact Us</NavDropdown.Item>
        <NavDropdown.Item href="donate">Donate</NavDropdown.Item>
        <NavDropdown.Divider />
    </NavDropdown>
    );
}

 export default NavItems;