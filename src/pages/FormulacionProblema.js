import React from 'react';
import '../styles/FormulacionProblema.css';

const FormulacionProblema = () => {
  return (
    <div className="formulacion-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">5. FORMULACIÓN DEL PROBLEMA</h1>
          <div className="title-line"></div>
          <p className="page-subtitle">Definición de la Pregunta Central de Investigación</p>
        </div>
        
        <div className="content-wrapper">
          <div className="content-card">
            <div className="formulation-intro">
              <h2>Contexto de la Formulación</h2>
              <p>
                Basado en el análisis del árbol de problemas y la identificación de causas y efectos, 
                se procede a formular la pregunta de investigación que guiará el desarrollo de la solución. 
                Esta formulación establece el enfoque preciso del estudio y define el alcance de la solución propuesta.
              </p>
            </div>
            
            <div className="central-question-section">
              <div className="question-header">
                <div className="question-icon">❓</div>
                <h3>Pregunta Central de Investigación</h3>
              </div>
              
              <div className="question-card">
                <div className="question-content">
                  <p className="question-text">
                    ¿Cómo puede el consultorio <strong>Sonrisa Dental</strong> implementar un sistema informático integral que permita 
                    <strong> automatizar y centralizar la gestión de citas, pagos y tratamientos</strong>, optimizando la eficiencia 
                    operativa, mejorando la coordinación del personal y garantizando una atención más ágil y organizada para sus pacientes?
                  </p>
                </div>
                
                <div className="question-analysis">
                  <h4>Análisis de la Pregunta</h4>
                  <p>
                    Esta pregunta de investigación contiene cuatro elementos fundamentales que deben ser abordados:
                  </p>
                </div>
              </div>
            </div>
            
            <div className="elements-section">
              <h3>Elementos Clave de la Formulación</h3>
              
              <div className="elements-grid">
                <div className="element-card">
                  <div className="element-number">01</div>
                  <div className="element-content">
                    <h4>Sistema Informático Integral</h4>
                    <p>
                      Desarrollo de una solución tecnológica completa que abarque todos los procesos 
                      administrativos y clínicos del consultorio.
                    </p>
                  </div>
                </div>
                
                <div className="element-card">
                  <div className="element-number">02</div>
                  <div className="element-content">
                    <h4>Automatización y Centralización</h4>
                    <p>
                      Transformación de procesos manuales en procesos automatizados y consolidación 
                      de información dispersa en una plataforma única.
                    </p>
                  </div>
                </div>
                
                <div className="element-card">
                  <div className="element-number">03</div>
                  <div className="element-content">
                    <h4>Optimización Operativa</h4>
                    <p>
                      Mejora en la eficiencia de los procesos internos y mejor coordinación entre 
                      el personal administrativo y clínico.
                    </p>
                  </div>
                </div>
                
                <div className="element-card">
                  <div className="element-number">04</div>
                  <div className="element-content">
                    <h4>Mejora en la Atención</h4>
                    <p>
                      Garantizar un servicio más ágil, organizado y de mayor calidad para los 
                      pacientes del consultorio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="scope-section">
              <h3>Alcance Definido por la Formulación</h3>
              
              <div className="scope-content">
                <div className="scope-included">
                  <h4>Incluido en el Alcance</h4>
                  <ul>
                    <li>Desarrollo del análisis y diseño del sistema</li>
                    <li>Definición de requerimientos funcionales</li>
                    <li>Diseño de módulos principales</li>
                    <li>Modelado de procesos automatizados</li>
                    <li>Propuesta de arquitectura tecnológica</li>
                    <li>Plan de implementación</li>
                  </ul>
                </div>
                
                <div className="scope-excluded">
                  <h4>Excluido del Alcance</h4>
                  <ul>
                    <li>Desarrollo de código del sistema</li>
                    <li>Implementación física del sistema</li>
                    <li>Capacitación extensiva del personal</li>
                    <li>Mantenimiento posterior a la implementación</li>
                    <li>Hardware y equipos físicos</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="importance-section highlight">
              <h3>Importancia de la Formulación Correcta</h3>
              <div className="importance-content">
                <p>
                  Una formulación precisa del problema es fundamental porque:
                </p>
                
                <div className="importance-points">
                  <div className="importance-point">
                   
                    <div className="point-content">
                      <h5>Define el Enfoque</h5>
                      <p>Establece límites claros para la investigación</p>
                    </div>
                  </div>
                  
                  <div className="importance-point">
                    <div className="point-content">
                      <h5>Guía la Metodología</h5>
                      <p>Orienta la selección de métodos y herramientas</p>
                    </div>
                  </div>
                  
                  <div className="importance-point">
                    
                    <div className="point-content">
                      <h5>Permite Evaluación</h5>
                      <p>Facilita la medición del éxito de la solución</p>
                    </div>
                  </div>
                  
                  <div className="importance-point">
                    <div className="point-content">
                      <h5>Optimiza Recursos</h5>
                      <p>Evita dispersión y maximiza el uso de recursos</p>
                    </div>
                  </div>
                </div>
                
                <div className="formulation-conclusion">
                  <p>
                    La pregunta formulada establece un marco claro y alcanzable para el desarrollo del 
                    sistema, enfocándose en la <strong>automatización, centralización y optimización</strong> como pilares 
                    fundamentales de la solución propuesta para el consultorio Sonrisa Dental.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulacionProblema;