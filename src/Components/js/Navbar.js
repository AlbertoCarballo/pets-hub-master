import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logo from './Logo';
import '../css/Navbar.css';
import axios from 'axios';

function NavBar() {
    const [user, setUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState({
        userName: '',
        description: ''
    });



    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);
    //     const problemData = {
    //         email: formData.get('email'),
    //         description: formData.get('description')
    //     };
    //     console.log('Problem reported:', problemData);
    //     // Aquí puedes agregar la lógica para enviar el reporte a un servidor, por ejemplo
    //     handleCloseModal();
    // };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {

        
        let data = { token: localStorage.getItem('sesion'), form };
        await axios.post('https://lucky-enchantment-production.up.railway.app/problemas', data).then(
           // respuesta => window.location.reload()
        ).catch();
        setForm({
            userName: '',
            description: ''
        });
    };

    return (
        <div className="navbar-container">
            <Navbar expand="lg" className="bg-custom mb-3 fixed-top">
                <Container fluid className='nav-bar'>
                    <div className="navbar-brand-container">
                        <Logo />
                        <Navbar.Brand href="home" className="navbar-brand-custom">Pets Hub</Navbar.Brand>
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
                                <Nav.Link href="home" className="nav-link-custom">Home</Nav.Link>
                                <Nav.Link href="pets" className="nav-link-custom">Mascotas</Nav.Link>
                                <Nav.Link href="vaccines" className="nav-link-custom">Vacunas</Nav.Link>
                                <Nav.Link href="adoption" className="nav-link-custom">Adopciones</Nav.Link>
                                <Nav.Link href="missingpets" className="nav-link-custom">Desapariciones</Nav.Link>
                                <Nav.Link href="reportabuse" className="nav-link-custom">Maltrato</Nav.Link>
                                <Nav.Link href="reports" className="nav-link-custom">Mis Reportes</Nav.Link>
                                <Nav.Link onClick={handleShowModal} className="nav-link-custom">Reportar Problema</Nav.Link>
                                <img src={user?.foto ? user.foto : "https://cdn-icons-png.flaticon.com/512/6326/6326055.png"} className='user-foto' alt='User' />
                                <NavDropdown title={user?.nombre ? user.nombre : "User"} id="offcanvasNavbarDropdown-expand-lg" className="dropdown-custom">
                                    <NavDropdown.Item href="profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={e => {
                                        localStorage.clear();
                                        window.location.href = "/login";
                                    }}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Reportar un Problema</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Nombre Usuario</Form.Label>
                            <Form.Control type="text" name="userName" placeholder="Ingresa tu nombre" value={form.userName} onChange={handleChange}required />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Descripción del Problema</Form.Label>
                            <Form.Control as="textarea" name="description" rows={3} value={form.description} onChange={handleChange} placeholder="Describe el problema" required />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">
                            Enviar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default NavBar;

