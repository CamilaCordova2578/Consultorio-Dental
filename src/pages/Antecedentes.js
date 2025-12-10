import React from 'react';
import '../styles/Antecedentes.css';

const Antecedentes = () => {
  return (
    <div className="antecedentes-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">2. ANTECEDENTES</h1>
          <div className="title-line"></div>
          <p className="page-subtitle">Justificación del Proyecto</p>
        </div>
        
        <div className="content-wrapper">
          <div className="content-card">
            <div className="content-section">
              <h2>Contexto de la Problemática</h2>
              <p>
                Investigaciones previas y análisis del sector odontológico indican que un número significativo de consultorios 
                médicos y odontológicos continúan operando con <strong>procesos manuales o sistemas parcialmente integrados</strong>. 
                Esta situación genera múltiples dificultades en la gestión diaria, afectando tanto la eficiencia operativa como 
                la calidad del servicio al paciente.
              </p>
            </div>
            
            <div className="content-section">
              <h3>Evidencias de Mejora con Sistemas Informáticos</h3>
              <p>
                Estudios de caso y experiencias documentadas demuestran que la implementación de <strong>sistemas informáticos 
                especializados</strong> ha resultado ser una estrategia altamente efectiva para:
              </p>
              
              <div className="improvement-grid">
                <div className="improvement-card">
                  <div className="icon-box">
                    <i className="icon"></i>
                  </div>
                  <h4>Automatización de Registros</h4>
                  <p>Digitalización completa del registro de pacientes y tratamientos</p>
                </div>
                
                <div className="improvement-card">
                  <div className="icon-box">
                    <i className="icon"></i>
                  </div>
                  <h4>Gestión de Programación</h4>
                  <p>Optimización en la asignación y control de citas médicas</p>
                </div>
                
                <div className="improvement-card">
                  <div className="icon-box">
                    <i className="icon"></i>
                  </div>
                  <h4>Control de Tratamientos</h4>
                  <p>Seguimiento integral de procedimientos y planes de tratamiento</p>
                </div>
              </div>
            </div>
            
            <div className="content-section">
              <h3>Beneficios Documentados</h3>
              <p>
                La implementación de sistemas similares ha demostrado <strong>mejoras significativas</strong> en múltiples áreas:
              </p>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <span className="benefit-number">01</span>
                  <div className="benefit-content">
                    <h4>Eficiencia Operativa</h4>
                    <p>Reducción de tiempos de gestión administrativa en más del 40%</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <span className="benefit-number">02</span>
                  <div className="benefit-content">
                    <h4>Precisión de Datos</h4>
                    <p>Disminución de errores en registro de información del 25% al 3%</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <span className="benefit-number">03</span>
                  <div className="benefit-content">
                    <h4>Satisfacción del Paciente</h4>
                    <p>Mejora en la experiencia del paciente y reducción de tiempos de espera</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="content-section highlight">
              <h3>Fundamento Metodológico</h3>
              <p>
                La aplicación de <strong>modelos de análisis de sistemas estructurados</strong>, específicamente el Modelo Ambiental 
                y el Modelo de Comportamiento, proporciona un marco metodológico sólido que facilita:
              </p>
              <ul>
                <li>El diseño de soluciones adaptadas a las necesidades reales del consultorio</li>
                <li>La identificación precisa de los procesos críticos</li>
                <li>La definición clara de las interacciones del sistema con su entorno</li>
                <li>La especificación detallada de los flujos de información</li>
              </ul>
            </div>
            
            <div className="conclusion-section">
              <h3>Conclusión Justificativa</h3>
              <p>
                Considerando el contexto actual del consultorio <strong>Sonrisa Dental</strong>, los antecedentes documentados 
                sobre mejoras con sistemas informáticos, y la metodología estructurada disponible, el desarrollo de este 
                sistema está <strong>plenamente justificado y es necesario</strong> para modernizar sus procesos operativos, 
                optimizar la gestión de la información y mejorar la calidad del servicio odontológico ofrecido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Antecedentes;