import React from 'react';
import '../styles/PlanteamientoProblema.css';

const PlanteamientoProblema = () => {
  return (
    <div className="planteamiento-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">3. PLANTEAMIENTO DEL PROBLEMA</h1>
          <div className="title-line"></div>
          <p className="page-subtitle">Ineficiencia en la Gestión del Consultorio Sonrisa Dental</p>
        </div>
        
        <div className="content-wrapper">
          <div className="content-card">
            <div className="problem-summary">
              <h2>Problema Central</h2>
              <p className="problem-statement">
                El consultorio <strong>Sonrisa Dental</strong> carece de un sistema informático integral para la gestión de sus 
                operaciones, lo que provoca diversas dificultades operativas que afectan tanto la eficiencia interna como la 
                calidad del servicio al paciente.
              </p>
            </div>
            
            <div className="main-problems">
              <h3>Problemas Principales Identificados</h3>
              
              <div className="problems-grid">
                <div className="problem-card critical">
                  <div className="problem-header">
                    <span className="problem-number">01</span>
                    <h4>Gestión Ineficiente de Citas</h4>
                  </div>
                  <div className="problem-content">
                    <p>
                      La programación y cancelación manual de citas genera una serie de problemas operativos:
                    </p>
                    <ul>
                      <li><strong>Errores frecuentes</strong> en la asignación de horarios</li>
                      <li><strong>Duplicidad de citas</strong> en un mismo horario</li>
                      <li>Retrasos significativos en la atención</li>
                      <li>Pérdida de oportunidades por mala programación</li>
                    </ul>
                    <div className="problem-impact">
                      <span className="impact-label">IMPACTO:</span>
                      <span className="impact-text">Afecta directamente la satisfacción del paciente</span>
                    </div>
                  </div>
                </div>
                
                <div className="problem-card critical">
                  <div className="problem-header">
                    <span className="problem-number">02</span>
                    <h4>Gestión Descentralizada de Pagos</h4>
                  </div>
                  <div className="problem-content">
                    <p>
                      La administración manual de pagos y comprobantes presenta serias limitaciones:
                    </p>
                    <ul>
                      <li>Falta de un <strong>registro automático</strong> y centralizado</li>
                      <li><strong>Inconsistencias</strong> en los registros contables</li>
                      <li>Demoras en el proceso de cobro y facturación</li>
                      <li>Dificultad para el seguimiento de pagos pendientes</li>
                    </ul>
                    <div className="problem-impact">
                      <span className="impact-label">IMPACTO:</span>
                      <span className="impact-text">Riesgo de pérdidas financieras y problemas contables</span>
                    </div>
                  </div>
                </div>
                
                <div className="problem-card critical">
                  <div className="problem-header">
                    <span className="problem-number">03</span>
                    <h4>Historial Clínico Desorganizado</h4>
                  </div>
                  <div className="problem-content">
                    <p>
                      El manejo del historial de tratamientos presenta graves deficiencias:
                    </p>
                    <ul>
                      <li>Registros físicos que se <strong>extravián o deteriorán</strong></li>
                      <li>Documentación <strong>dispersa</strong> en diferentes formatos</li>
                      <li>Dificultad para acceder a información crítica rápidamente</li>
                      <li>Alto riesgo de pérdida de datos importantes</li>
                    </ul>
                    <div className="problem-impact">
                      <span className="impact-label">IMPACTO:</span>
                      <span className="impact-text">Compromete la calidad y continuidad de la atención médica</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="consequences-section">
              <h3>Consecuencias Directas</h3>
              <div className="consequences-list">
                <div className="consequence-item">
                  <div className="consequence-icon">⏰</div>
                  <div className="consequence-content">
                    <h4>Pérdida de Tiempo</h4>
                    <p>Hasta 2 horas diarias en tareas administrativas manuales</p>
                  </div>
                </div>
                
                <div className="consequence-item">
                  <div className="consequence-icon">💸</div>
                  <div className="consequence-content">
                    <h4>Pérdidas Económicas</h4>
                    <p>Facturación errónea y cobros pendientes no detectados</p>
                  </div>
                </div>
                
                <div className="consequence-item">
                  <div className="consequence-icon">😞</div>
                  <div className="consequence-content">
                    <h4>Insatisfacción del Paciente</h4>
                    <p>Retrasos, errores y mala experiencia en el servicio</p>
                  </div>
                </div>
                
                <div className="consequence-item">
                  <div className="consequence-icon">⚠️</div>
                  <div className="consequence-content">
                    <h4>Riesgo Médico</h4>
                    <p>Información clínica incompleta o inaccesible</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="solution-section highlight">
              <h3>Solución Propuesta</h3>
              <div className="solution-content">
                <p className="solution-statement">
                  Para abordar integralmente estas problemáticas, se propone la <strong>implementación urgente de un sistema 
                  informático integral</strong> diseñado específicamente para las necesidades del consultorio Sonrisa Dental.
                </p>
                
                <div className="solution-features">
                  <h4>Características Clave de la Solución:</h4>
                  <div className="features-grid">
                    <div className="feature-item">
                      <div className="feature-icon">💻</div>
                      <h5>Centralización de Información</h5>
                      <p>Unificar todos los datos en una única plataforma accesible</p>
                    </div>
                    
                    <div className="feature-item">
                      <div className="feature-icon">⚡</div>
                      <h5>Optimización de Procesos</h5>
                      <p>Automatizar tareas repetitivas y reducir errores humanos</p>
                    </div>
                    
                    <div className="feature-item">
                      <div className="feature-icon">👨‍⚕️</div>
                      <h5>Mejora en la Atención</h5>
                      <p>Agilizar la atención al paciente y mejorar la experiencia</p>
                    </div>
                    
                    <div className="feature-item">
                      <div className="feature-icon">📊</div>
                      <h5>Reportes y Análisis</h5>
                      <p>Generar información para la toma de decisiones estratégicas</p>
                    </div>
                  </div>
                </div>
                
                <div className="solution-conclusion">
                  <p>
                    La implementación de este sistema no solo resolverá los problemas operativos actuales, sino que también 
                    <strong> posicionará al consultorio Sonrisa Dental</strong> como una institución moderna, eficiente y 
                    comprometida con la excelencia en el servicio odontológico.
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

export default PlanteamientoProblema;