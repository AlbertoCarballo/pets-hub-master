import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Navbar from './Navbar';
import '../css/Pets.css';
import BackgroundImage from './Background';
import '../css/Card.css';
import axios from 'axios';


function ReportAbuse() {
    const [reports, setReports] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [petsForAdoption, setAnimal] = useState([]);
    const URL = 'http://localhost:4000/reportes-maltrato';
    useEffect(() => {
        if (!(petsForAdoption.length > 0)) {
            console.log('ENTRO');
            axios.get(URL)
                .then(function (response) {
                    console.log(response.data);
                    if (response.status === 200) {
                        setAnimal(response.data.data);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    alert('An error occurred during login');
                });
        }
    }, []);

    const addReport = (report) => {
        setReports([report, ...reports]);
    };

    const handleShowForm = () => setShowForm(true);
    const handleCloseForm = () => setShowForm(false);

    return (
        <div>
            <Navbar />
            <BackgroundImage src="https://i.ibb.co/D7pVW8y/bg-pethub-2.jpg" />
            <h1 className="text-center mt-4 mb-4">Generar Reporte de Mascota Maltratados</h1>
            <div className="container">
                <div className="text-center mb-4">
                    <Button className='btn-card' variant="primary" onClick={handleShowForm}>Generar Reporte</Button>
                </div>
                <div className="row justify-content-center">
                    {petsForAdoption.map((pet, i) => (
                        <MissingPetCard key={i} pet={pet} />
                    ))}
                </div>
                {/* Modal para el formulario */}
                <Modal show={showForm} onHide={handleCloseForm}>
                    <Modal.Header closeButton>
                        <Modal.Title>Reporte de Maltratos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ReportForm addReport={addReport} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='btn-modal' variant="secondary" onClick={handleCloseForm}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}
function MissingPetCard({ pet }) {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const statusStyle = {
        backgroundColor: pet.status === 'Perdido' ? 'red' : 'green',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '5px',
        fontWeight: 'bold',
        textAlign: 'center'
    };

    return (
        <div className="col-sm-6 col-md-4 col-lg-4 mb-4">
            <Card style={{ height: '100%', margin: '0 10px' }}>
            <Card.Img  variant="top" src="https://i.ibb.co/0C6Rp2Q/Captura-de-pantalla-2024-06-11-a-la-s-5-38-56-p-m.png" alt={pet.name} style={{ height: "250px"}}/>
                <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                        <Card.Title className="text-center">{pet.raza}</Card.Title>
                        <Card.Text>Fecha de maltrato: {pet.fecha_maltrato} </Card.Text>
                        <div style={statusStyle}>{pet.estado}</div>
                    </div>
                    <Button variant="primary" className="btn-card align-self-center mt-2" onClick={handleOpenModal}>Ver</Button>
                </Card.Body>
            </Card>

            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{pet.raza}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Tipo de Mascota: {pet.tipo_mascota}</p>
                    <p>Género: {pet.genero}</p>
                    <p>Descripción: {pet.descripcion}</p>
                    <p>Fecha de desaparición: {pet.fecha_maltrato}</p>
                    {pet.status === 'Encontrado' && <p>Fecha de encontrado: {pet.dateFound}</p>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

function ReportForm({ addReport }) {
    const URLM = 'http://localhost:4000/reportes-maltrato';
    const [form, setForm] = useState({
        petType: '',
        gender: '',
        breed: '',
        description: '',
        doa: ''

    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newReport = {
            ...form,
            id: Date.now(),
            image: "asd",
        };
        let data = { token: localStorage.getItem('sesion'), form };
        await axios.post(URLM, data).then(
            respuesta => window.location.reload()
        ).catch();
        setForm({
            petType: '',
            gender: '',
            breed: '',
            description: '',
            doa: ''
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Tipo de Mascota</Form.Label>
                <Form.Control as="select" name="petType" value={form.petType} onChange={handleChange} required>
                    <option value="">Selecciona</option>
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Género</Form.Label>
                <Form.Control as="select" name="gender" value={form.gender} onChange={handleChange} required>
                    <option value="">Selecciona</option>
                    <option value="Macho">Macho</option>
                    <option value="Hembra">Hembra</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Raza</Form.Label>
                <Form.Control type="text" name="breed" value={form.breed} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" name="description" value={form.description} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Fecha de Maltrato</Form.Label>
                <Form.Control type="date" name="doa" value={form.dateMissing} onChange={handleChange} required />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">Generar Reporte</Button>
        </Form>
    );
}


export default ReportAbuse;
