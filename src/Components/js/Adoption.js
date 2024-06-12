import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Navbar from './Navbar';
//import { petsForAdoption } from './AdoptionList'; // Asegúrate de que este archivo exporte correctamente el arreglo de mascotas
import '../css/Pets.css'; // Asegúrate de que el archivo CSS se importe correctamente
import BackgroundImage from './Background';
import '../css/Card.css'
import axios from 'axios';
import { Form } from 'react-bootstrap';


function Adoption() {
  const [petsForAdoption, setAnimal] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleCloseForm = () => setShowForm(false);

  const URL = 'https://lucky-enchantment-production.up.railway.app/adopciones';
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
  return (
    <div>
      <Navbar />
      <BackgroundImage src="https://i.ibb.co/D7pVW8y/bg-pethub-2.jpg" />
      <h1 className="text-center mt-4 mb-4">MASCOTAS EN ADOPCIÓN</h1>
      <div className="container">
        <div className="text-center mb-4">
          <Button className='btn-card' variant="primary" onClick={e => setShowForm(true)}>Generar Adopcion</Button>

        </div>
        <div className="row justify-content-center">

          {petsForAdoption.map((pet, i) => (
            <PetCard key={i} pet={pet} />
          ))}
        </div>
        <Modal show={showForm} onHide={handleCloseForm}>
          <Modal.Header closeButton>
            <Modal.Title>Generar Reporte de Mascota Desaparecida</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ReportForm />
          </Modal.Body>
          <Modal.Footer>
            <Button className='btn-modal' variant="secondary" onClick={handleCloseForm}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}


function PetCard({ pet }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleAdoptar = async () => {
    const data = {
      token: localStorage.getItem('sesion'),
      idPetCatalog: pet.id_catalogo,
      petName: pet.nombre,
      petType: pet.tipo_mascota,
      race: pet.raza,
      photo: pet.foto
    }
    await axios.post("https://lucky-enchantment-production.up.railway.app/adoptar", data).then(response => 
      window.location.reload()

    ).catch(error => console.log(error));
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <Card style={{ height: '100%' }}>
        <Card.Img variant="top" src="https://i.pinimg.com/736x/0d/96/b8/0d96b84bde7a570c94ee4f8808bc6876.jpg" alt={pet.name} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title className="text-center">{pet.nombre}</Card.Title>
            <Card.Text className="text-center">{pet.edad} / {pet.tipo_mascota} años</Card.Text>
          </div>
          <Button variant="primary" className="btn-card align-self-center" onClick={handleOpenModal}>Ver Detalles</Button>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{pet.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Raza: {pet.raza}</p>
          <p>Edad: {pet.edad}</p>
          {/* <p>Descripción: {pet.description}</p> */}
          {/* <p>Género: {pet.gender}</p> */}
          {/* <p>Tamaño: {pet.size}</p> */}
          <p>Vacunado:  Sí </p>
          <p>Desparasitado: Sí </p>
          <p>Esterilizado: Sí </p>
          <Button className='btn-modal' variant="secondary" onClick={handleAdoptar}>Adoptar</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn-modal' variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function ReportForm() {
  const URLM = 'https://lucky-enchantment-production.up.railway.app/adopciones';
  const [form, setForm] = useState({
    petName: '',
    photo: 'asdads',
    petType: '',
    age: '',
    race: ''
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
    let data = { token: localStorage.getItem('sesion'), form };
    await axios.post(URLM, data).then(response => {
      if (response.status===200){
        window.location.reload();
      }
    }
    ).catch();
    setForm({
      petName: '',
      petType: '',
      photo: 'asdads',
      age: '',
      race: ''
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Nombre de Mascota</Form.Label>
        <Form.Control type="text" name="petName" value={form.petName} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Tipo de Mascota</Form.Label>
        <Form.Control as="select" name="petType" value={form.petType} onChange={handleChange} required>
          <option value="">Selecciona</option>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Foto</Form.Label>
        <Form.Control type="file" name="image" accept="image/*" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Edad</Form.Label>
        <Form.Control type="text" name="age" value={form.age} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Raza</Form.Label>
        <Form.Control type="text" name="race" value={form.race} onChange={handleChange} required />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">Generar Reporte</Button>
    </Form>
  );
}



export default Adoption;
