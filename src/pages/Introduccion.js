import React from 'react';
import '../styles/Introduccion.css';

const Introduccion = () => {
  return (
    <div className="introduccion-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">1. INTRODUCCIÓN</h1>
          <div className="title-line"></div>
        </div>
        
        <div className="content-wrapper">
          <div className="content-card">
            <h2 className="content-subtitle">Sistema Odontológico Sonrisa Dental</h2>
            
            <div className="content-section">
              <p>
                El proyecto tiene como objetivo principal desarrollar un <strong>Sistema de Información de Citas y Tratamientos Odontológicos</strong> 
                para el consultorio <strong>Sonrisa Dental</strong>. Actualmente, el consultorio depende exclusivamente de procesos manuales que 
                generan desorganización, retrasos en la atención y pérdida de información crítica.
              </p>
            </div>
            
            <div className="content-section">
              <h3>Propósito del Sistema</h3>
              <p>
                El nuevo sistema busca <strong>automatizar las actividades clave</strong> del consultorio, incluyendo:
              </p>
              <ul>
                <li>Registro centralizado de pacientes</li>
                <li>Programación y gestión de citas</li>
                <li>Administración de pagos y comprobantes</li>
                <li>Control del historial clínico completo</li>
              </ul>
            </div>
            
            <div className="content-section">
              <h3>Enfoque Metodológico</h3>
              <p>
                Para el desarrollo del sistema, se aplicarán los principios fundamentales del <strong>Modelo Ambiental</strong> y el 
                <strong> Modelo de Comportamiento</strong>. Estos enfoques permitirán identificar de manera estructurada:
              </p>
              <ul>
                <li>Los eventos que afectan al sistema</li>
                <li>Las respuestas requeridas</li>
                <li>Las interacciones con el entorno</li>
                <li>Los procesos internos necesarios</li>
              </ul>
            </div>
            
            <div className="content-section highlight">
              <h3>Meta Final</h3>
              <p>
                La implementación de este sistema tiene como meta principal <strong>mejorar significativamente la eficiencia operativa</strong> 
                del consultorio y <strong>elevar la calidad de la atención</strong> brindada a los pacientes, transformando los procesos 
                manuales actuales en un flujo de trabajo digitalizado y optimizado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduccion;