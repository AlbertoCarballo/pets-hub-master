import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from './Logo';
import '../css/Navbar.css';
import { users } from './Users';

function NavBar() {
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     if(localStorage.getItem('user')) {
    //         setUser(JSON.parse(localStorage.getItem('user')));
    //     }else(console.log('User not found'));
    // }, []);
    return (
        <div className="navbar-container">
            <Navbar expand="lg" className="bg-body-tertiary mb-3 fixed-top">
                <Container fluid className='nav-bar'>
                    <div className="navbar-brand-container">
                        <Logo />
                        <Navbar.Brand href="home">Pets Hub</Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-lg"
                        aria-labelledby="offcanvasNavbarLabel-expand-lg"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="home">Home</Nav.Link>
                                <img src={user?.foto ? user.foto: "https://cdn-icons-png.flaticon.com/512/6326/6326055.png"} className='user-foto'></img>
                                <NavDropdown title={user?.nombre ? user.nombre: "User"} id="offcanvasNavbarDropdown-expand-lg" className="dropdown">
                                    <NavDropdown.Item href="profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={e=>{
                                        localStorage.clear();
                                        window.location.href = "/login";
                                    }}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;