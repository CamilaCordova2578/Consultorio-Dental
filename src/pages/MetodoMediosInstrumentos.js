import React from 'react';
import '../styles/MetodoMediosInstrumentos.css';
import { FaComments, FaChartBar, FaSync, FaEye, FaCog, FaHammer, FaRulerCombined } from 'react-icons/fa';

const MetodoMediosInstrumentos = () => {
  return (
    <div className="metodo-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">7. MÉTODO, MEDIOS E INSTRUMENTOS DE INVESTIGACIÓN</h1>
          <div className="title-line"></div>
          <p className="page-subtitle">Enfoque Metodológico y Herramientas de Investigación</p>
        </div>
        
        <div className="content-wrapper">
          <div className="content-card">
            <div className="approach-section">
              <div className="section-header">

                <h2>7.1 Enfoque Metodológico</h2>
              </div>
              
              <div className="approach-content">
                <p>
                  Para el desarrollo de este proyecto, se empleará un <strong>enfoque mixto</strong> que combina 
                  tres tipos de investigación complementarios, permitiendo un análisis integral y profundo 
                  del problema y su solución.
                </p>
                
                <div className="research-types">
                  <div className="research-card">
                    <FaComments className="research-icon" />
                    <h3>Investigación Cualitativa</h3>
                    <p>
                      Para comprender profundamente los procesos, necesidades y percepciones de los usuarios 
                      y stakeholders del consultorio.
                    </p>
                    <div className="research-methods">
                      <span className="method-tag">Entrevistas</span>
                      <span className="method-tag">Observación</span>
                      <span className="method-tag">Grupos focales</span>
                    </div>
                  </div>
                  
                  <div className="research-card">
                    <FaChartBar className="research-icon" />
                    <h3>Investigación Cuantitativa</h3>
                    <p>
                      Para medir eficiencias operativas, establecer métricas de mejora y evaluar el 
                      impacto de la solución implementada.
                    </p>
                    <div className="research-methods">
                      <span className="method-tag">Encuestas</span>
                      <span className="method-tag">Estadísticas</span>
                      <span className="method-tag">Métricas</span>
                    </div>
                  </div>
                  
                  <div className="research-card">
                    <FaSync className="research-icon" />
                    <h3>Investigación-Acción</h3>
                    <p>
                      Para el desarrollo iterativo del sistema con retroalimentación continua de 
                      usuarios y ajustes progresivos.
                    </p>
                    <div className="research-methods">
                      <span className="method-tag">Prototipos</span>
                      <span className="method-tag">Pruebas</span>
                      <span className="method-tag">Retroalimentación</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="data-collection-section">
              <div className="section-header">
                <h2>7.2 Métodos de Recolección de Datos</h2>
              </div>
              
              <div className="collection-methods">
                <div className="method-grid">
                  <div className="method-item">
                    <div className="method-number">01</div>
                    <div className="method-details">
                      <h4>Entrevistas Semiestructuradas</h4>
                      <p>Con personal administrativo, odontólogos y pacientes para identificar necesidades específicas</p>
                    </div>
                  </div>
                  
                  <div className="method-item">
                    <div className="method-number">02</div>
                    <div className="method-details">
                      <h4>Observación Directa</h4>
                      <p>De los procesos operativos actuales para identificar cuellos de botella y oportunidades</p>
                    </div>
                  </div>
                  
                  <div className="method-item">
                    <div className="method-number">03</div>
                    <div className="method-details">
                      <h4>Revisión Documental</h4>
                      <p>De formatos, registros y documentos utilizados actualmente en el consultorio</p>
                    </div>
                  </div>
                  
                  <div className="method-item">
                    <div className="method-number">04</div>
                    <div className="method-details">
                      <h4>Encuestas de Satisfacción</h4>
                      <p>Para medir la percepción actual del servicio y expectativas de mejora</p>
                    </div>
                  </div>
                  
                  <div className="method-item">
                    <div className="method-number">05</div>
                    <div className="method-details">
                      <h4>Análisis de Casos</h4>
                      <p>De sistemas similares implementados en otros consultorios odontológicos</p>
                    </div>
                  </div>
                  
                  <div className="method-item">
                    <div className="method-number">06</div>
                    <div className="method-details">
                      <h4>Pruebas de Usabilidad</h4>
                      <p>Con prototipos del sistema para validar funcionalidad y facilidad de uso</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="justification-section">
              <div className="section-header">
                <h2>7.3 Justificación del Método</h2>
              </div>
              
              <div className="justification-content">
                <div className="methodology-intro">
                  <h3>Metodología Principal: Análisis Estructurado con Diagramas de Flujo de Datos (DFD)</h3>
                  <p>
                    La metodología seleccionada se justifica por las siguientes características fundamentales:
                  </p>
                </div>
                
                <div className="justification-points">
                  <div className="point-card">
                    <div className="point-header">
                      <FaEye className="point-icon" />
                      <h4>Claridad Visual y Comunicación Efectiva</h4>
                    </div>
                    <p>
                      Los DFD transforman procesos complejos en representaciones gráficas intuitivas, 
                      facilitando la validación de requisitos por parte del personal (odontólogos y administrativos) 
                      y proporcionando especificaciones precisas a los desarrolladores.
                    </p>
                  </div>
                  
                  <div className="point-card">
                    <div className="point-header">
                      <FaCog className="point-icon" />
                      <h4>Enfoque Centrado en Procesos</h4>
                    </div>
                    <p>
                      Modelan naturalmente la simultaneidad de flujos de trabajo (atención clínica, administración, 
                      facturación) y las transiciones estado-estado (por ejemplo, de citas programadas a realizadas).
                    </p>
                  </div>
                  
                  <div className="point-card">
                    <div className="point-header">
                      <FaHammer className="point-icon" />
                      <h4>Modularidad y Escalabilidad</h4>
                    </div>
                    <p>
                      Su estructura jerárquica (Nivel 0 → Nivel 1) permite el desarrollo incremental por fases 
                      y facilita el mantenimiento selectivo del sistema, adaptándose a futuras expansiones.
                    </p>
                  </div>
                  
                  <div className="point-card">
                    <div className="point-header">
                      <FaRulerCombined className="point-icon" />
                      <h4>Rigor en la Especificación de Requisitos</h4>
                    </div>
                    <p>
                      Impone disciplina en la definición de límites del sistema, interfaces externas y 
                      los datos mínimos necesarios, reduciendo ambigüedades en las especificaciones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="scope-limitations-section">
              <div className="section-header">
                <h2>7.4 Alcances y Limitaciones</h2>
              </div>
              
              <div className="scope-content">
                <div className="scope-column">
                  <div className="scope-card">
                    <div className="scope-header positive">
                      <h3>Alcances del Sistema</h3>
                    </div>
                    <ul>
                      <li>Sistema apto para consultorios con <strong>1-3 odontólogos</strong></li>
                      <li>Cobertura de <strong>procesos administrativos y clínicos básicos</strong></li>
                      <li>Integración básica con <strong>sistemas fiscales (SAT)</strong></li>
                      <li>Gestión integral de <strong>pacientes, citas y tratamientos</strong></li>
                      <li>Generación de <strong>reportes administrativos básicos</strong></li>
                      <li>Control de <strong>pagos y facturación</strong></li>
                    </ul>
                  </div>
                </div>
                
                <div className="scope-column">
                  <div className="scope-card">
                    <div className="scope-header negative">
                      <h3>Limitaciones del Sistema</h3>
                    </div>
                    <ul>
                      <li>No incluye <strong>gestión de inventario complejo</strong></li>
                      <li>No contempla <strong>integración con equipos clínicos digitales</strong></li>
                      <li>No incluye funcionalidades de <strong>odontogramas avanzados</strong></li>
                      <li>No maneja <strong>imágenes radiológicas DICOM</strong></li>
                      <li>No incluye <strong>telemedicina o consultas remotas</strong></li>
                      <li>No contempla <strong>gestión de laboratorios dentales externos</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="scope-conclusion">
                <p>
                  Estas definiciones de alcance y limitaciones establecen <strong>expectativas claras</strong> sobre lo que el sistema 
                  podrá y no podrá hacer, evitando malentendidos y asegurando que la solución se ajuste a las 
                  necesidades reales y posibilidades del consultorio Sonrisa Dental.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetodoMediosInstrumentos;