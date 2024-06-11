import React from 'react';
import { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

import Navbar from './Navbar';
import { reportAbuse } from './ReportAbuseList';
import BackgroundImage from './Background';
import '../css/Card.css'

function CardReport({ report }) {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <Card className="h-100" style={{ margin: '0 10px' }}>
                <Card.Img variant="top" src={report.image} alt={report.name} />
                <Card.Body className="d-flex flex-column">
                    <div className="mb-4">
                        <Card.Title className="text-center" style={{ marginBottom: '5px' }}>{report.name}</Card.Title>
                        <Card.Text className='text-center' style={{ marginBottom: '10px' }}>{report.pet}</Card.Text>
                    </div>
                    <div className="mt-auto">
                        <Button variant="primary" className="btn-card w-100" onClick={handleOpenModal}>Ver Detalles</Button>
                    </div>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{report.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Raza: {report.pet}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn-modal' variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

function ReportAbuse() {
    return (
        <div>
            <Navbar />
            <BackgroundImage src="https://i.ibb.co/D7pVW8y/bg-pethub-2.jpg" />
            <h1 className="text-center mt-4 mb-4">REPORTE MALTRATO</h1>
            <div className="container">
                <div className="row justify-content-center">
                    {reportAbuse.map((report) => (
                        <CardReport key={report.id} report={report} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ReportAbuse;
