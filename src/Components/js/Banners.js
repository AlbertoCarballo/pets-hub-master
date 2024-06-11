import React from 'react';
import {Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Banner(){
    return (
        <Container>
        <div className="banner-container">
          <div className="banner banner-left-top">
            <img src="https://nupec.com/wp-content/uploads/2020/07/Captura-de-pantalla-2020-07-02-a-las-15.33.21.png" alt="Banner 1" />
            <h2>Mascotas</h2>
            <p>¡Tus amigos fieles están aquí! Verifica el estado y vacunas de tus mascotas.</p>
            <Link to="/pets">
              <Button className='btn-banner' variant="primary">Explore</Button>
            </Link>
          </div>
          <div className="banner banner-right-top">
            <img src="https://i.ibb.co/30P4087/VACUNAS-PARA-TUS-MASCOTAS.png" alt="Banner 2" />
            <h2>Vacunas</h2>
            <p>Protege a tus mascotas! Descubre las vacunas necesarias para mantenerlas saludables</p>
            <Link to="/vaccines">
              <Button className='btn-banner' variant="primary">Explore</Button>
            </Link>
          </div>
          <div className="banner banner-left-bottom">
            <img src="https://nupec.com/wp-content/uploads/2021/08/Captura-de-Pantalla-2021-08-02-a-las-15.11.57.png" alt="Banner 3" />
            <h2>Adopciones</h2>
            <p>Adopta un amigo: Descubre las mascotas disponibles para adopción y encuentra tu nuevo compañero</p>
            <Link to="/adoption">
              <Button className='btn-banner' variant="primary">Explore</Button>
            </Link>
          </div>
          <div className="banner banner-right-bottom">
            <img src="https://i.ibb.co/RHr3Q2w/missing-pet.png" alt="Banner 4" />
            <h2>Reportes Desapariciones</h2>
            <p>Reporta a tus mascotas extraviadas: Ayuda a encontrar a tus mascotas perdidas</p>
            <Link to="/missingpets">
              <Button className='btn-banner' variant="primary">Explore</Button>
            </Link>            
            </div>
            <div className="banner banner-mis-reportes">
            <img src="https://marketplace.canva.com/EAFN6H48baE/1/0/1131w/canva-rojo-y-amarillo-divertido-cartel-de-perro-perdido-Ka0Juu6VELE.jpg" alt="Banner 4" />
            <h2>Mis Reportes</h2>
            <p>Mis reportes: Descubre tus reportes de mascotas y vacunas</p>
            <Link to="/missingpets">
              <Button className='btn-banner' variant="primary">Explore</Button>
            </Link>            
            </div>
            <div className="banner banner-reporte-maltrato">
            <img src="https://i.ibb.co/k39n9dK/maltrato.png" alt="Banner 4" />
            <h2>Reportes Maltrato</h2>
            <p>Reporta maltrato animal: Ayuda a proteger a los animales de maltrato</p>
            <Link to="/reportabuse">
              <Button className='btn-banner' variant="primary">Explore</Button>
            </Link>            
            </div>
        </div>
      </Container>
    );
};

export default Banner;