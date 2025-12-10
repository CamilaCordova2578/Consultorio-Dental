import React from 'react';
import '../styles/PropositoEstudio.css';

const PropositoEstudio = () => {
  return (
    <div className="proposito-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">6. PROPÓSITO DEL ESTUDIO</h1>
          <div className="title-line"></div>
          <p className="page-subtitle">Definición de Objetivos Generales y Específicos</p>
        </div>
        
        <div className="content-wrapper">
          <div className="content-card">
            <div className="purpose-intro">
              <h2>Enfoque del Estudio</h2>
              <p>
                El propósito de este estudio es establecer los objetivos que guiarán el desarrollo del sistema 
                informático para el consultorio Sonrisa Dental. Estos objetivos proporcionan una hoja de ruta 
                clara y medible para alcanzar la solución integral propuesta en la formulación del problema.
              </p>
            </div>
            
            <div className="general-objective-section">
              <div className="section-header">
                <h3>6.1 Objetivo General</h3>
              </div>
              
              <div className="objective-card main">
                <div className="objective-content">
                  <p className="objective-text">
                    Desarrollar el <strong>análisis y diseño de un sistema informático integral</strong> para el consultorio 
                    Sonrisa Dental que permita <strong>automatizar y centralizar la gestión de citas, pagos y tratamientos</strong>, 
                    con el fin de <strong>mejorar la eficiencia operativa</strong>, optimizar la organización interna y brindar 
                    una atención más ágil, ordenada y segura a los pacientes.
                  </p>
                </div>
                
                <div className="objective-components">
                  <h4>Componentes del Objetivo General</h4>
                  <div className="components-grid">
                    <div className="component-item">
                      <div className="component-number">A</div>
                      <p>Análisis y diseño del sistema</p>
                    </div>
                    <div className="component-item">
                      <div className="component-number">B</div>
                      <p>Automatización y centralización</p>
                    </div>
                    <div className="component-item">
                      <div className="component-number">C</div>
                      <p>Mejora de eficiencia operativa</p>
                    </div>
                    <div className="component-item">
                      <div className="component-number">D</div>
                      <p>Atención de calidad al paciente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="specific-objectives-section">
              <div className="section-header">
                <h3>6.2 Objetivos Específicos</h3>
              </div>
              
              <div className="objectives-list">
                <div className="objective-item">
                  <div className="objective-number">01</div>
                  <div className="objective-details">
                    <h4>Identificar los procesos actuales</h4>
                    <p>
                      Analizar exhaustivamente los procesos actuales relacionados con pacientes, citas, pagos y tratamientos 
                      para reconocer las deficiencias operativas específicas y oportunidades de mejora.
                    </p>
                  </div>
                </div>
                
                <div className="objective-item">
                  <div className="objective-number">02</div>
                  <div className="objective-details">
                    <h4>Aplicar el Modelo Ambiental</h4>
                    <p>
                      Implementar el Modelo Ambiental para determinar los actores relevantes, eventos externos significativos 
                      y las interacciones críticas del sistema con su entorno operativo.
                    </p>
                  </div>
                </div>
                
                <div className="objective-item">
                  <div className="objective-number">03</div>
                  <div className="objective-details">
                    <h4>Aplicar el Modelo de Comportamiento</h4>
                    <p>
                      Utilizar el Modelo de Comportamiento para describir detalladamente las respuestas del sistema ante los 
                      eventos identificados, estableciendo los flujos de proceso necesarios.
                    </p>
                  </div>
                </div>
                
                <div className="objective-item">
                  <div className="objective-number">04</div>
                  <div className="objective-details">
                    <h4>Definir requerimientos del sistema</h4>
                    <p>
                      Establecer claramente los requerimientos funcionales y no funcionales del sistema, considerando las 
                      necesidades específicas del consultorio y las expectativas de los usuarios.
                    </p>
                  </div>
                </div>
                
                <div className="objective-item">
                  <div className="objective-number">05</div>
                  <div className="objective-details">
                    <h4>Diseñar módulos principales</h4>
                    <p>
                      Diseñar los módulos principales del sistema, incluyendo registro de pacientes, administración de citas, 
                      gestión de pagos y control de tratamientos, con interfaces intuitivas y funcionales.
                    </p>
                  </div>
                </div>
                
                <div className="objective-item">
                  <div className="objective-number">06</div>
                  <div className="objective-details">
                    <h4>Establecer modelo de datos</h4>
                    <p>
                      Crear un modelo de datos robusto y eficiente que centralice toda la información administrativa y clínica, 
                      asegurando integridad, consistencia y seguridad de los datos.
                    </p>
                  </div>
                </div>
                
                <div className="objective-item">
                  <div className="objective-number">07</div>
                  <div className="objective-details">
                    <h4>Proponer solución tecnológica</h4>
                    <p>
                      Elaborar una propuesta de solución tecnológica integral que modernice los procesos actuales y mejore 
                      sustancialmente la calidad del servicio ofrecido a los pacientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="alignment-section">
              <h3>Alineación con la Formulación del Problema</h3>
              
              <div className="alignment-content">
                <div className="alignment-chart">
                  <div className="chart-row">
                    <div className="chart-cell problem">Problema Formulado</div>
                    <div className="chart-arrow">→</div>
                    <div className="chart-cell objective">Objetivo Correspondiente</div>
                  </div>
                  
                  <div className="chart-row">
                    <div className="chart-cell problem">Sistema informático integral</div>
                    <div className="chart-arrow">→</div>
                    <div className="chart-cell objective">Objetivos 4, 5, 7</div>
                  </div>
                  
                  <div className="chart-row">
                    <div className="chart-cell problem">Automatización y centralización</div>
                    <div className="chart-arrow">→</div>
                    <div className="chart-cell objective">Objetivos 5, 6</div>
                  </div>
                  
                  <div className="chart-row">
                    <div className="chart-cell problem">Optimización operativa</div>
                    <div className="chart-arrow">→</div>
                    <div className="chart-cell objective">Objetivos 1, 2, 3</div>
                  </div>
                  
                  <div className="chart-row">
                    <div className="chart-cell problem">Mejora en la atención</div>
                    <div className="chart-arrow">→</div>
                    <div className="chart-cell objective">Objetivos 5, 7</div>
                  </div>
                </div>
                
                <div className="alignment-explanation">
                  <p>
                    Cada objetivo específico está diseñado para abordar un aspecto particular del problema formulado, 
                    creando una <strong>correspondencia directa</strong> entre la necesidad identificada y la solución propuesta. 
                    Esta alineación garantiza que todos los aspectos del problema sean cubiertos de manera integral.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="expected-results-section highlight">
              <h3>Resultados Esperados</h3>
              
              <div className="results-content">
                <p>
                  Al cumplir con los objetivos establecidos, se esperan los siguientes resultados:
                </p>
                
                <div className="results-list">
                  <div className="result-item">
                    <div className="result-check">✓</div>
                    <p>Documentación completa del análisis y diseño del sistema</p>
                  </div>
                  
                  <div className="result-item">
                    <div className="result-check">✓</div>
                    <p>Modelos ambientales y de comportamiento detallados</p>
                  </div>
                  
                  <div className="result-item">
                    <div className="result-check">✓</div>
                    <p>Especificación de requerimientos funcionales y no funcionales</p>
                  </div>
                  
                  <div className="result-item">
                    <div className="result-check">✓</div>
                    <p>Diseño de interfaz y arquitectura del sistema</p>
                  </div>
                  
                  <div className="result-item">
                    <div className="result-check">✓</div>
                    <p>Modelo de datos normalizado y optimizado</p>
                  </div>
                  
                  <div className="result-item">
                    <div className="result-check">✓</div>
                    <p>Propuesta tecnológica viable y escalable</p>
                  </div>
                </div>
                
                <div className="final-conclusion">
                  <p>
                    Estos objetivos proporcionan una <strong>hoja de ruta clara y estructurada</strong> para el desarrollo 
                    del sistema, asegurando que cada fase del proyecto contribuya directamente a resolver el problema 
                    identificado y alcanzar la solución integral propuesta para el consultorio Sonrisa Dental.
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

export default PropositoEstudio;