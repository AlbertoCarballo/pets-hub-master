import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Navbar from './Navbar';
//import { vaccines } from './VaccinesList'; // Asegúrate de que este archivo exporte correctamente el arreglo de vacunas
import '../css/Vaccines.css';
import BackgroundImage from './Background';
import axios from 'axios';
// useEffects: meto axios par una vez,
// validar que al momento de cargar el estado este vacio ejecute el axios
// si vaccine esta vacio, no se ejecute, un if
// Componente principal que renderiza todas las vacunas
function Vaccines() {
  const [vaccines, setVacunas] = useState([]);
  const URL = 'https://lucky-enchantment-production.up.railway.app/vacunas';


  useEffect(() => {
    if (!(vaccines.length > 0)) {
      console.log('ENTRO');
      axios.get(URL)
        .then(function (response) {
          console.log(response.data);
          if (response.status === 200) {
            setVacunas(response.data.data);
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
      <h1 className="vacuna-titulo">VACUNAS</h1>
      <div className="container">
        <div className="row justify-content-center">
          {vaccines.map((vacuna, i) => (
           // console.log(vacuna)
            <VaccinesList key={i} vacuna={vacuna} />
          ))}
        </div>
      </div>
    </div>
  );
}


function VaccinesList({ vacuna }) {
  // const [showModal, setShowModal] = useState(false); // Estado para controlar si el modal está abierto o cerrado


  // onClick={handleOpenModal}


  // const handleOpenModal = () => setShowModal(true); // Función para abrir el modal
  // const handleCloseModal = () => setShowModal(false); // Función para cerrar el modal

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <Card style={{ height: '100%', margin: '0 10px' }}>
        <Card.Img variant="top" src="https://www.paho.org/sites/default/files/styles/top_hero/public/2021-04/vaccine-safety-1500x810.jpg?h=b0b513fd&itok=1XdEjKAn" alt={vacuna.name} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title className="text-center">{vacuna.vacuna}</Card.Title>
            <Card.Text>Duracion: {vacuna.duracion}</Card.Text>
            <Card.Text>Sucursal de aplicacion: {vacuna.sucursal}</Card.Text>
          </div>
          
          {/* <Button id='btn' variant="primary" className="btn-card align-self-center" >Ver</Button> Abrir modal al hacer clic */}
        </Card.Body>
      </Card>

      {/* Modal
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{vacuna.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{vacuna.descripcionExtensa}</p>
          <p>Efectos Secundarios: {vacuna.efectosSecundarios}</p>
          <p>Edad mínima de aplicación: {vacuna.edadMinima}</p>
          <p>Para: {vacuna.mascotasAplicacion}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal> */}

    </div>
  );
}


export default Vaccines;
