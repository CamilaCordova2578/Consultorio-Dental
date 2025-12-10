import React from 'react';
import '../styles/PlanificacionActividades.css';
import DiagramaGrantt from '../assets/DiagramaGrantt.jpg';

const PlanificacionActividades = () => {
  return (
    <div className="planificacion-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">8. PLANIFICACIÓN DE ACTIVIDADES</h1>
          <div className="title-line"></div>
          <p className="page-subtitle">Metodología de Implementación del Proyecto</p>
        </div>
        
        <div className="content-wrapper">
          <div className="content-card">
            <div className="implementation-intro">
              <h2>Metodología de Implementación</h2>
              <p>
                La implementación del sistema informático para el consultorio Sonrisa Dental se organiza 
                en una <strong>secuencia estructurada de etapas fundamentales</strong>, cada una con objetivos 
                específicos y entregables claramente definidos.
              </p>
            </div>
            
            <div className="stages-section">
              <h3>Etapas de Implementación del Proyecto</h3>
              
              <div className="stages-timeline">
                <div className="timeline-item">
                  <div className="timeline-number">01</div>
                  <div className="timeline-content">
                    <h4>Etapa de Exploración y Diagnóstico</h4>
                    <p>
                      Captura de información mediante entrevistas y observación directa, y examen exhaustivo 
                      de procedimientos operativos vigentes para identificar dificultades y oportunidades de optimización.
                    </p>
                    <div className="stage-activities">
                      <span className="activity">Entrevistas iniciales</span>
                      <span className="activity">Observación de procesos</span>
                      <span className="activity">Análisis documental</span>
                    </div>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-number">02</div>
                  <div className="timeline-content">
                    <h4>Etapa de Conceptualización y Especificación</h4>
                    <p>
                      Creación de representaciones gráficas de procesos (diagramas de flujo) y modelos de sistemas (UML), 
                      y definición detallada del diseño de la interfaz gráfica de usuario.
                    </p>
                    <div className="stage-activities">
                      <span className="activity">Diseño de procesos</span>
                      <span className="activity">Modelado UML</span>
                      <span className="activity">Prototipado de interfaz</span>
                    </div>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-number">03</div>
                  <div className="timeline-content">
                    <h4>Etapa de Construcción y Despliegue</h4>
                    <p>
                      Codificación del sistema con tecnologías idóneas, instalación, puesta en marcha e interconexión 
                      de todos los componentes del sistema.
                    </p>
                    <div className="stage-activities">
                      <span className="activity">Desarrollo de código</span>
                      <span className="activity">Configuración de servidores</span>
                      <span className="activity">Migración de datos</span>
                    </div>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-number">04</div>
                  <div className="timeline-content">
                    <h4>Etapa de Validación y Optimización</h4>
                    <p>
                      Ejecución de un plan de pruebas exhaustivo para corregir fallos y evaluaciones de usabilidad 
                      con usuarios finales para optimizar la experiencia.
                    </p>
                    <div className="stage-activities">
                      <span className="activity">Pruebas de funcionalidad</span>
                      <span className="activity">Pruebas de usabilidad</span>
                      <span className="activity">Ajustes y optimizaciones</span>
                    </div>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-number">05</div>
                  <div className="timeline-content">
                    <h4>Etapa de Formación y Adiestramiento</h4>
                    <p>
                      Implementación de un programa completo de capacitación progresiva y personalizada para 
                      todo el personal del consultorio.
                    </p>
                    <div className="stage-activities">
                      <span className="activity">Capacitación inicial</span>
                      <span className="activity">Sesiones prácticas</span>
                      <span className="activity">Material de apoyo</span>
                    </div>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-number">06</div>
                  <div className="timeline-content">
                    <h4>Etapa de Monitoreo y Evaluación Continua</h4>
                    <p>
                      Establecimiento de un mecanismo de seguimiento permanente para medir el desempeño del sistema 
                      y su impacto en indicadores clave (productividad, resultados financieros y satisfacción).
                    </p>
                    <div className="stage-activities">
                      <span className="activity">Monitoreo continuo</span>
                      <span className="activity">Evaluación de impacto</span>
                      <span className="activity">Reportes periódicos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="tasks-section">
              <h3>Tareas del Proyecto</h3>
              <p className="section-intro">
                El plan de trabajo se desarrolla a lo largo de <strong>siete semanas</strong>, con las siguientes tareas principales:
              </p>
              
              <div className="tasks-overview">
                <div className="week-tasks">
                  <h4>Semana 1 - 2</h4>
                  <div className="task-item">
                    <span className="task-name">Formulación de Preguntas</span>
                    <div className="task-bar" style={{width: '100%'}}></div>
                  </div>
                </div>
                
                <div className="week-tasks">
                  <h4>Semana 2 - 4</h4>
                  <div className="task-item">
                    <span className="task-name">Investigación</span>
                    <div className="task-bar" style={{width: '100%'}}></div>
                  </div>
                </div>
                
                <div className="week-tasks">
                  <h4>Semana 3 - 4</h4>
                  <div className="task-item">
                    <span className="task-name">Diseño Conceptual</span>
                    <div className="task-bar" style={{width: '100%'}}></div>
                  </div>
                </div>
                
                <div className="week-tasks">
                  <h4>Semana 4 - 5</h4>
                  <div className="task-item">
                    <span className="task-name">Modelado de Datos</span>
                    <div className="task-bar" style={{width: '100%'}}></div>
                  </div>
                </div>
                
                <div className="week-tasks">
                  <h4>Semana 4 - 7</h4>
                  <div className="task-item">
                    <span className="task-name">Sección Desarrollo</span>
                    <div className="task-bar" style={{width: '100%'}}></div>
                  </div>
                </div>
                
                <div className="week-tasks">
                  <h4>Semana 5 - 7</h4>
                  <div className="task-item">
                    <span className="task-name">Sección Pruebas</span>
                    <div className="task-bar" style={{width: '100%'}}></div>
                  </div>
                </div>
                
                <div className="week-tasks">
                  <h4>Semana 6 - 7</h4>
                  <div className="task-item">
                    <span className="task-name">Documentación Final</span>
                    <div className="task-bar" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="gantt-section">
              <h3>Diagrama de Gantt</h3>
              <p className="section-intro">
                A continuación se presenta el diagrama de Gantt que visualiza la planificación temporal 
                de todas las actividades del proyecto:
              </p>
              
              <div className="gantt-container">
                <img 
                  src={DiagramaGrantt} 
                  alt="Diagrama de Gantt - Planificación de Actividades del Proyecto" 
                  className="gantt-diagram"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/800x400?text=Diagrama+de+Gantt+del+Proyecto';
                  }}
                />
                <div className="gantt-caption">
                  Figura 2: Diagrama de Gantt - Planificación Temporal del Proyecto (7 Semanas)
                </div>
              </div>
              
              <div className="gantt-explanation">
                <h4>Interpretación del Diagrama de Gantt</h4>
                <p>
                  El diagrama de Gantt muestra visualmente la <strong>duración y superposición</strong> de las diferentes 
                  actividades del proyecto. Las barras horizontales representan cada tarea, con su longitud 
                  indicando la duración en semanas. Las dependencias entre tareas se muestran mediante 
                  conexiones, mientras que los hitos importantes están marcados con símbolos especiales.
                </p>
                
                <div className="gantt-legend">
                  <div className="legend-item">
                    <div className="legend-color task-color"></div>
                    <span>Tarea en ejecución</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color milestone-color"></div>
                    <span>Hito importante</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color dependency-color"></div>
                    <span>Dependencia entre tareas</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="implementation-conclusion highlight">
              <h3>Consideraciones Finales de Implementación</h3>
              <div className="conclusion-content">
                <p>
                  Esta planificación detallada asegura que el proyecto se desarrolle de manera <strong>ordenada, eficiente y controlada</strong>. 
                  Cada etapa está diseñada para construir sobre los resultados de la anterior, minimizando riesgos 
                  y maximizando las probabilidades de éxito.
                </p>
                
                <div className="key-factors">
                  <h4>Factores Clave para el Éxito:</h4>
                  <ul>
                    <li><strong>Comunicación constante</strong> con todos los stakeholders</li>
                    <li><strong>Flexibilidad</strong> para adaptarse a cambios necesarios</li>
                    <li><strong>Seguimiento riguroso</strong> del avance contra el plan</li>
                    <li><strong>Participación activa</strong> del personal del consultorio</li>
                    <li><strong>Documentación completa</strong> de todos los procesos</li>
                  </ul>
                </div>
                
                <div className="final-message">
                  <p>
                    Con esta planificación estructurada, el consultorio Sonrisa Dental contará con una hoja de ruta 
                    clara para la implementación exitosa del sistema informático que transformará sus operaciones 
                    y mejorará significativamente la calidad del servicio ofrecido a sus pacientes.
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

export default PlanificacionActividades;