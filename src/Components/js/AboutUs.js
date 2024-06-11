import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import '../css/AboutUs.css';

function AboutUs() {
  return (
    <Container className="about-us-container">
      <div className="section">
        <h2>¿Quiénes Somos?</h2>
        <p>Somos una organización dedicada al bienestar de las mascotas. Nuestra misión es proporcionar un lugar seguro y amoroso para todas las mascotas.</p>
      </div>
      <div className="section">
        <h2>Sobre el Sitio Web</h2>
        <p>Nuestro sitio web ofrece una plataforma para la adopción de mascotas, información sobre vacunaciones y reportes de desapariciones. Trabajamos arduamente para mantener a las mascotas felices y saludables.</p>
      </div>
      <div className="section">
        <h2>Novedades</h2>
        <p>Mantente al día con nuestras últimas novedades y eventos. Organizamos campañas de vacunación, jornadas de adopción y más.</p>
      </div>
      <div className="section team">
        <h2>Equipo de Desarrollo</h2>
        <div className="team-banner">
          <div className="team-member">
            <div className="member-image">
              <img src="https://cdn.discordapp.com/attachments/1059886544120455309/1245168888484986920/WhatsApp_Image_2024-05-25_at_20.30.52_1.jpeg?ex=66586e25&is=66571ca5&hm=25a4a55c3e88d230b5e44e0394cd8b1f28910c03b3e7caf707ac0c334c014ece&" alt="Integrante 1" />
            </div>
            <div className="member-info">
              <h3 className='text-center'>Jesús Alberto Carballo Caballero</h3>
              <p>Backend</p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src="https://i.ibb.co/smbn31B/IMG-2035.jpg" alt="Integrante 2" />
            </div>
            <div className="member-info">
              <h3 className='text-center'>Andrey Julian Gutierrez Arce</h3>
              <p>Frontend</p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src="https://cdn.discordapp.com/attachments/1059886544120455309/1245168888899965008/WhatsApp_Image_2024-05-25_at_20.31.45_1.jpeg?ex=66586e25&is=66571ca5&hm=e9f070ec48cf908cf843d09bc2a4b87b55fdbc7b124e4b87ef984fb8ef35a197&" alt="Integrante 3" />
            </div>
            <div className="member-info">
              <h3 className='text-center'>Zulidany Ignacio Sánchez</h3>
              <p>Designer</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutUs;