import React, { useState, useEffect } from 'react';
import NavBar from './Navbar';
import BackgroundImage from './Background';
import Form from 'react-bootstrap/Form';
import '../css/MyReports.css';
import '../css/Card.css'
import Modal from 'react-bootstrap/Modal';
import { Button, Container } from 'react-bootstrap';
import '../css/Header.css';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ReportTable() {
  // const [selectedPet, setSelectedPet] = useState(null);
  const [showModalMissing, setShowModalMissing] = useState(false);
  const [showModalAbuse, setShowModalAbuse] = useState(false);
  const [showModalAdoptions, setShowModalAdoptions] = useState(false);

  const [editDescriptionAbuse, setNewDescriptionAbuse] = useState(false);
  const [abuseSelected, setabuseSelected] = useState(null);

  const [editDescriptionMissing, setNewDescriptionMissing] = useState(false);
  const [missingSelected, setMissingSelected] = useState(null);

  const [abuse, setAbuse] = useState([]);
  const [missing, setMissing] = useState([]);
  const [adoption, setAdoption] = useState([]);

  const consultarExtravios = async () => {
    axios.get('https://lucky-enchantment-production.up.railway.app/ver-extravios', { headers: { token: localStorage.getItem('sesion') } })
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          setMissing(response.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
        alert('An error occurred during login');
      });
  }

  const consultarMaltratos = async () => {
    axios.get('https://lucky-enchantment-production.up.railway.app/ver-maltratos', { headers: { token: localStorage.getItem('sesion') } })
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          setAbuse(response.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
        alert('An error occurred during login');
      });
  }

  const consultarAdopciones = async () => {
    axios.get('https://lucky-enchantment-production.up.railway.app/ver-adopciones', { headers: { token: localStorage.getItem('sesion') } })
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          setAdoption(response.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
        alert('An error occurred during login');
      });
  }



  useEffect(() => {
    if (showModalMissing) {
      consultarExtravios();
    }
  }, [showModalMissing]);


  useEffect(() => {
    if (showModalAbuse) {
      consultarMaltratos();

    }
  }, [showModalAbuse]);

  useEffect(() => {
    if (showModalAdoptions) {
      consultarAdopciones();

    }
  }, [showModalAdoptions]);

  const handleCloseModaleEditAbuse = () => {
    console.log("cerrar");
    setNewDescriptionAbuse(false);
  };

  const handleCloseModaleEditMissing = () => {
    console.log("cerrar");
    setNewDescriptionMissing(false);
  };

  const handleCloseModalMissing = () => {
    setShowModalMissing(false);
  };
  const handleCloseModalAbuse = () => {
    setShowModalAbuse(false);

  };
  const handleCloseModalAdoptions = () => {
    setShowModalAdoptions(false);

  };


  const columnsAbuse = [
    {
      name: 'Username',
      selector: row => row.nombre_usuario,
      sortable: true,
    },
    {
      name: 'raza',
      selector: row => row.raza,
      sortable: true,
    },
    {
      name: 'Descripcion',
      selector: row => row.descripcion,
      sortable: true,
    },
    {
      name: 'Fecha de Reporte',
      selector: row => row.fecha_maltrato,
      sortable: true,
    },
    {
      name: 'Estatus',
      selector: row => row.estatus,
      sortable: true,
    },
    {
      name: '/',
      button: true,
      cell: row => <i className="bi bi-pencil-fill" role='button' onClick={e => {
        setNewDescriptionAbuse(true)
        setabuseSelected(abuse.find(f => f.id_reporte === row.id_reporte));
      }}></i>
    }

  ];

  const columnsMissings = [
    {
      name: 'Petname',
      selector: row => row.nombre,
      sortable: true,
    },
    {
      name: 'Edad',
      selector: row => row.edad,
      sortable: true,
    },
    {
      name: 'Raza',
      selector: row => row.raza,
      sortable: true,
    },
    {
      name: 'Genero',
      selector: row => row.genero,
      sortable: true,
    },
    {
      name: 'Descripcion',
      selector: row => row.descripcion,
      sortable: true,
    },
    {
      name: 'Ultima Vez Visto',
      selector: row => row.visto_utlima_vez,
      sortable: true,
    },
    {
      name: 'Fecha de Reporte',
      selector: row => row.fecha_extravio,
      sortable: true,
    },
    {
      name: 'Estatus',
      selector: row => row.estatus,
      sortable: true,
    },
    {
      name: '/',
      button: true,
      cell: row => <i className="bi bi-pencil-fill" role='button' onClick={e => {
        // alert(row.id_reporte);
        setNewDescriptionMissing(true)
        setMissingSelected(missing.find(f => f.id_reporte === row.id_reporte));
      }}></i>
    }
  ];

  const columnsAdoptions = [
    {
      name: 'Username',
      selector: row => row.nombre_usuario,
      sortable: true,
    },
    {
      name: 'Petname',
      selector: row => row.nombre,
      sortable: true,
    },
    {
      name: 'PetType',
      selector: row => row.tipo_mascota,
      sortable: true,
    },
    {
      name: 'Edad',
      selector: row => row.edad,
      sortable: true,
    },
    {
      name: 'Raza',
      selector: row => row.raza,
      sortable: true,
    },
    {
      name: 'Fecha de Reporte',
      selector: row => row.fecha_reporte,
      sortable: true,
    },
    {
      name: 'Estatus',
      selector: row => row.estado,
      sortable: true,
    }


  ];

  const handleSubmitAbuse = async (e) => {
    e.preventDefault();
    if (abuseSelected) {
      let data = {
        token: localStorage.getItem('sesion'),
        idReport: abuseSelected.id_reporte,
        description: abuseSelected.descripcion
      }
      axios.patch('https://lucky-enchantment-production.up.railway.app/ver-maltratos', data).then(response => {
        if (response.status === 200) {
          window.location.reload();
        }
      }
      ).catch(error => {
        console.log(error);
      });
    };
  };

  const handleSubmitMissing = async (e) => {
    e.preventDefault();
    if (missingSelected) {
      let data = {
        token: localStorage.getItem('sesion'),
        idReport: missingSelected.id_reporte,
        description: missingSelected.descripcion
      }
      axios.patch('https://lucky-enchantment-production.up.railway.app/ver-extravios', data).then(response => {
        if (response.status === 200) {
          window.location.reload();
        }
      }
      ).catch(error => {
        console.log(error);
      });
    };
  };


  return (
    <>
      <Container>
        <div className="banners-container">
          <div className="banners banners-left-top">
            <img src="https://i.ibb.co/RHr3Q2w/missing-pet.png" alt="Banner 1" />
            <h2>Desaparecidos</h2>
            <p>¡Tus amigos fieles están aquí! Verifica el estado y vacunas de tus mascotas.</p>
            <Button className='btn-banners' variant="primary" onClick={e => setShowModalMissing(true)}>Explore</Button>
          </div>
          <div className="banners banners-right-top">
            <img src="https://i.ibb.co/k39n9dK/maltrato.png" alt="Banner 2" />
            <h2>Maltratos</h2>
            <p>Protege a tus mascotas! Descubre las vacunas necesarias para mantenerlas saludables</p>
            <Button className='btn-banners' variant="primary" onClick={e => setShowModalAbuse(true)}>Explore</Button>
          </div>
          <div className="banners banner-left-bottom">
            <img src="https://nupec.com/wp-content/uploads/2021/08/Captura-de-Pantalla-2021-08-02-a-las-15.11.57.png" alt="Banner 3" />
            <h2>Adopción</h2>
            <p>Adopta un amigo: Descubre las mascotas disponibles para adopción y encuentra tu nuevo compañero</p>
            <Button className='btn-banners' variant="primary" onClick={e => setShowModalAdoptions(true)}>Explore</Button>
          </div>
        </div>
      </Container>


      <Modal show={showModalMissing} onHide={handleCloseModalMissing} centered size='lg'>
        <Modal.Header closeButton>
          Mis Reportes
        </Modal.Header>
        <Modal.Body>
          <DataTable
            columns={columnsMissings}
            data={missing}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalMissing}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={editDescriptionMissing} onHide={handleCloseModaleEditMissing} centered size='lg'>
        <Modal.Header closeButton>
          Mis Reportes
        </Modal.Header>
        <Modal.Body>
          {missingSelected && <div>
            <Form onSubmit={handleSubmitMissing}>
              <Form.Group>
                <Form.Label>Nombre de Mascota</Form.Label>
                <Form.Control type="text" name="petName" value={missingSelected.nombre} disabled />
              </Form.Group>
              <Form.Group>
                <Form.Label>Edad</Form.Label>
                <Form.Control type="text" name="petName" value={missingSelected.edad} disabled />
              </Form.Group>
              <Form.Group>
                <Form.Label>Raza</Form.Label>
                <Form.Control type="text" name="petName" value={missingSelected.raza} disabled />
              </Form.Group>
              <Form.Group>
                <Form.Label>Genero</Form.Label>
                <Form.Control type="text" name="petName" value={missingSelected.genero} disabled />
              </Form.Group>
              <Form.Group>
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" name="petName" value={missingSelected.descripcion} onChange={e => {
                  let aux = { ...missingSelected };
                  aux.descripcion = e.target.value;
                  setMissingSelected(aux);
                }} required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Ultima Vez Visto</Form.Label>
                <Form.Control type="text" name="petName" value={missingSelected.visto_utlima_vez} disabled />
              </Form.Group>
              <Form.Group>
                <Form.Label>Fecha de Reporte</Form.Label>
                <Form.Control type="text" name="petName" value={missingSelected.fecha_extravio} disabled />
              </Form.Group>
              <Form.Group>
                <Form.Label>Esatus</Form.Label>
                <Form.Control type="text" name="petName" value={missingSelected.estatus} disabled />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">Subir Mascota</Button>
            </Form>
          </div>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModaleEditMissing}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModalAbuse} onHide={handleCloseModalAbuse} centered size='lg'>
        <Modal.Header closeButton>
          Mis Reportes
        </Modal.Header>
        <Modal.Body>
          <DataTable
            columns={columnsAbuse}
            data={abuse}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalAbuse}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={editDescriptionAbuse} onHide={handleCloseModaleEditAbuse} centered size='lg'>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          {abuseSelected && <div>
            <Form onSubmit={handleSubmitAbuse}>
              <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="petName" value={abuseSelected.nombre_usuario} disabled />
              </Form.Group>
              <Form.Group>
                <Form.Label>Raza</Form.Label>
                <Form.Control type="text" name="petName" value={abuseSelected.raza} disabled />
              </Form.Group>
              <Form.Group>
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" name="petName" value={abuseSelected.descripcion} onChange={e => {
                  let aux = { ...abuseSelected };
                  aux.descripcion = e.target.value;
                  setabuseSelected(aux);
                }} required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Fecha de Reporte</Form.Label>
                <Form.Control type="text" name="petName" value={abuseSelected.fecha_maltrato} disabled />
              </Form.Group>
              <Form.Group>
                <Form.Label>Estatus</Form.Label>
                <Form.Control type="text" name="petName" value={abuseSelected.estatus} disabled />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">Subir Mascota</Button>
            </Form>
          </div>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModaleEditAbuse}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModalAdoptions} onHide={handleCloseModalAdoptions} centered size='lg'>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <DataTable
            columns={columnsAdoptions}
            data={adoption}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalAdoptions}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

function MyReports() {
  return (
    <>
      <NavBar />
      <div className="text-center">
        <img src='https://i.ibb.co/3vRMJbc/10.jpg' className='encabezado-misreportes'></img>
      </div>
      <div className="content">
        <ReportTable />
      </div>
      <BackgroundImage src="https://i.ibb.co/D7pVW8y/bg-pethub-2.jpg" />
    </>
  );
}

export default MyReports;
