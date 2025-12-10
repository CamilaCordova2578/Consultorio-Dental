import React from 'react';
import Carousel from '../components/Carousel';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <h1 className="project-title">
        SISTEMA DE INFORMACIÓN PARA EL CONTROL DE CITAS Y TRATAMIENTOS ODONTOLÓGICOS 
        PARA EL CONSULTORIO SONRISA DENTAL
      </h1>

      <section className="description-carousel-container">
        <div className="description-section">
          <h4>
            El Sistema de Información para el Control de Citas y Tratamientos Odontológicos 
            del consultorio Sonrisa Dental tiene como propósito automatizar la gestión de 
            pacientes, citas y tratamientos. Permite registrar y actualizar datos de pacientes, 
            programar y controlar citas, y llevar un seguimiento detallado de los tratamientos 
            realizados. Con ello se mejora la organización del consultorio, se reduce el tiempo 
            administrativo y se ofrece una atención más eficiente y personalizada.
          </h4>
        </div>

        <Carousel />
      </section>

      
    
    </div>
  );
};

export default Home;