import React, { useState, useRef, useEffect } from 'react';
import '../styles/CasoDeUsoNegocio.css';
import casoUsoNegocio from '../assets/CUN.jpg';
import { 
  FaSearchPlus, 
  FaSearchMinus, 
  FaExpand, 
  FaCompress, 
  FaArrowsAlt, 
  FaHandPaper,
  FaInfoCircle,
  FaDownload,
  FaListUl,
  FaUsers,
  FaExchangeAlt,
  FaCheckCircle,
  FaQuestionCircle,
  FaBullseye,
  FaClipboardList,
  FaLink
} from 'react-icons/fa';

function CasoUsoNegocio() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showInfo, setShowInfo] = useState(true);
  const imageContainerRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);

  // Funciones de zoom
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
    if (zoomLevel - 0.25 <= 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      handleResetZoom();
    }
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  // Funciones de arrastre
  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      e.preventDefault();
      isDraggingRef.current = true;
      setIsDragging(true);
      dragStartRef.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y
      };
      
      if (imageWrapperRef.current) {
        imageWrapperRef.current.style.cursor = 'grabbing';
      }
    }
  };

  const handleMouseMove = (e) => {
    if (isDraggingRef.current && zoomLevel > 1) {
      const newX = e.clientX - dragStartRef.current.x;
      const newY = e.clientY - dragStartRef.current.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setIsDragging(false);
      if (imageWrapperRef.current) {
        imageWrapperRef.current.style.cursor = zoomLevel > 1 ? 'grab' : 'default';
      }
    }
  };

  const handleDoubleClick = () => {
    handleResetZoom();
  };

  // Event listeners globales para arrastre
  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.body.style.userSelect = '';
    };
  }, [isDragging]);

  // Cambiar cursor según zoom
  useEffect(() => {
    if (imageWrapperRef.current) {
      imageWrapperRef.current.style.cursor = zoomLevel > 1 ? 'grab' : 'default';
    }
  }, [zoomLevel]);

  // Función para descargar la imagen
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = casoUsoNegocio;
    link.download = 'Caso_de_Uso_de_Negocio_Sistema_Dental.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="caso-uso-container">
      <h1 className="page-title">Caso de Uso de Negocio (CUN)</h1>
      
      {/* Introducción */}
      <div className="intro-section">
        <div className="intro-card">
          <div className="intro-header">
            <FaUsers className="intro-icon" />
            <div>
              <h2>Diagrama de Casos de Uso de Negocio</h2>
              <p className="intro-subtitle">Representación de las interacciones entre actores y el sistema</p>
            </div>
          </div>
          <div className="intro-content">
            <p>
              El <strong>Diagrama de Casos de Uso de Negocio</strong> muestra las principales 
              funcionalidades del sistema desde la perspectiva del negocio y los diferentes 
              actores involucrados. Este diagrama identifica <strong>qué hace el sistema</strong> 
              y <strong>quién interactúa</strong> con él.
            </p>
            <div className="intro-features">
              <div className="feature">
                <FaListUl className="feature-icon" />
                <span>Identifica funcionalidades clave</span>
              </div>
              <div className="feature">
                <FaUsers className="feature-icon" />
                <span>Define actores y sus roles</span>
              </div>
              <div className="feature">
                <FaExchangeAlt className="feature-icon" />
                <span>Muestra relaciones e interacciones</span>
              </div>
              <div className="feature">
                <FaCheckCircle className="feature-icon" />
                <span>Establece el alcance del sistema</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Panel de información */}
      {showInfo && (
        <div className="info-panel">
          <div className="info-header">
            <FaInfoCircle className="info-icon" />
            <h3>¿Qué es un Caso de Uso de Negocio?</h3>
            <button className="close-info-btn" onClick={toggleInfo}>×</button>
          </div>
          <div className="info-content">
            <div className="info-grid">
              <div className="info-card">
                <FaBullseye className="info-badge primary" />
                <div className="info-text">
                  <h4>Propósito</h4>
                  <p>Modelar las funcionalidades del sistema desde la perspectiva del negocio</p>
                </div>
              </div>
              <div className="info-card">
                <FaUsers className="info-badge secondary" />
                <div className="info-text">
                  <h4>Actores</h4>
                  <p>Identificar todos los usuarios y sistemas que interactúan con el sistema</p>
                </div>
              </div>
              <div className="info-card">
                <FaClipboardList className="info-badge tertiary" />
                <div className="info-text">
                  <h4>Casos de Uso</h4>
                  <p>Describir las funcionalidades principales que el sistema debe proveer</p>
                </div>
              </div>
              <div className="info-card">
                <FaLink className="info-badge quaternary" />
                <div className="info-text">
                  <h4>Relaciones</h4>
                  <p>Establecer las conexiones entre actores y casos de uso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Visualizador principal */}
      <div className={`visualizer-container ${isFullscreen ? 'fullscreen' : ''}`}>
        <div className="visualizer-card">
          <div className="controls-panel">
            <div className="controls-left">
              <div className="zoom-controls">
                <button 
                  className="control-btn"
                  onClick={handleZoomOut}
                  title="Alejar (25%)"
                  disabled={zoomLevel <= 0.5}
                >
                  <FaSearchMinus />
                </button>
                <span className="zoom-display">{Math.round(zoomLevel * 100)}%</span>
                <button 
                  className="control-btn"
                  onClick={handleZoomIn}
                  title="Acercar (25%)"
                  disabled={zoomLevel >= 3}
                >
                  <FaSearchPlus />
                </button>
                <button 
                  className="control-btn reset"
                  onClick={handleResetZoom}
                  title="Restablecer zoom"
                >
                  100%
                </button>
              </div>
              
              <div className="view-controls">
                <button 
                  className={`control-btn view-btn ${isFullscreen ? 'active' : ''}`}
                  onClick={toggleFullscreen}
                  title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
                >
                  {isFullscreen ? <FaCompress /> : <FaExpand />}
                </button>
                <button 
                  className="control-btn download-btn"
                  onClick={handleDownload}
                  title="Descargar imagen"
                >
                  <FaDownload />
                </button>
                <button 
                  className="control-btn info-btn"
                  onClick={toggleInfo}
                  title={showInfo ? "Ocultar información" : "Mostrar información"}
                >
                  <FaInfoCircle />
                </button>
                <div className="drag-status">
                  <FaHandPaper />
                  <span>{zoomLevel > 1 ? 'Arrastre disponible' : 'Zoom normal'}</span>
                </div>
              </div>
            </div>
            
            <div className="controls-right">
              <div className="instructions">
                <p>
                  {zoomLevel > 1 
                    ? 'Click sostenido + arrastre para mover • Doble click para resetear'
                    : 'Haz zoom para activar el arrastre de la imagen'
                  }
                </p>
              </div>
            </div>
          </div>

          <div 
            ref={imageWrapperRef}
            className="image-visualizer"
            onMouseDown={handleMouseDown}
            onDoubleClick={handleDoubleClick}
          >
            <div 
              ref={imageContainerRef}
              className="image-transform-container"
              style={{
                transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
                transformOrigin: 'center center',
                transition: isDragging ? 'none' : 'transform 0.2s ease'
              }}
            >
              <img 
                src={casoUsoNegocio} 
                alt="Diagrama de Casos de Uso de Negocio del Sistema Dental" 
                className="caso-uso-image"
              />
            </div>
            
            {zoomLevel > 1 && !isDragging && (
              <div className="drag-hint">
                <FaArrowsAlt />
                <span>Click sostenido para arrastrar la imagen</span>
              </div>
            )}
            
            {isDragging && (
              <div className="dragging-overlay">
                <div className="dragging-message">
                  <FaHandPaper className="pulse-icon" />
                  <span>Arrastrando... Suelta para soltar</span>
                </div>
              </div>
            )}
          </div>
          
          <div className="image-caption">
            <h3>Diagrama de Casos de Uso de Negocio - Sistema Dental</h3>
            <p>
              Este diagrama representa los principales casos de uso del sistema dental, 
              mostrando las interacciones entre pacientes, dentistas, asistentes y el sistema 
              administrativo. Incluye funcionalidades como gestión de citas, tratamientos, 
              pagos y reportes.
            </p>
            <div className="caption-info">
              <div className="info-tag">
                <strong>Zoom:</strong> {Math.round(zoomLevel * 100)}%
              </div>
              <div className="info-tag">
                <strong>Resolución:</strong> Alta definición
              </div>
              <div className="info-tag">
                <strong>Formato:</strong> JPG
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Análisis detallado */}
      <div className="analysis-section">
        <h2>Análisis del Diagrama</h2>
        <div className="analysis-grid">
          <div className="analysis-card">
            <FaUsers className="analysis-icon" />
            <div className="analysis-content">
              <h3>Actores Principales</h3>
              <ul>
                <li><strong>Paciente:</strong> Interactúa con citas, tratamientos y pagos</li>
                <li><strong>Dentista:</strong> Gestiona tratamientos y agenda médica</li>
                <li><strong>Asistente:</strong> Administra citas y atención al cliente</li>
                <li><strong>Sistema:</strong> Procesa información y genera reportes</li>
              </ul>
            </div>
          </div>

          <div className="analysis-card">
            <FaClipboardList className="analysis-icon" />
            <div className="analysis-content">
              <h3>Casos de Uso Clave</h3>
              <ul>
                <li><strong>Gestión de Pacientes:</strong> Registro, actualización y consulta</li>
                <li><strong>Administración de Citas:</strong> Programación y cancelación</li>
                <li><strong>Control de Tratamientos:</strong> Registro y seguimiento</li>
                <li><strong>Gestión de Pagos:</strong> Facturación y control financiero</li>
                <li><strong>Reportes:</strong> Estadísticas y análisis de datos</li>
              </ul>
            </div>
          </div>

          <div className="analysis-card">
            <FaLink className="analysis-icon" />
            <div className="analysis-content">
              <h3>Relaciones Identificadas</h3>
              <ul>
                <li><strong>Inclusión (include):</strong> Casos de uso que se ejecutan siempre</li>
                <li><strong>Extensión (extend):</strong> Casos de uso opcionales</li>
                <li><strong>Generalización:</strong> Relaciones de herencia entre actores</li>
                <li><strong>Asociación:</strong> Conexiones entre actores y casos de uso</li>
              </ul>
            </div>
          </div>

          <div className="analysis-card">
            <FaBullseye className="analysis-icon" />
            <div className="analysis-content">
              <h3>Alcance del Sistema</h3>
              <ul>
                <li><strong>Interno:</strong> Gestión administrativa del consultorio</li>
                <li><strong>Externo:</strong> Interacción con pacientes y proveedores</li>
                <li><strong>Operativo:</strong> Procesos diarios del consultorio</li>
                <li><strong>Estratégico:</strong> Reportes y toma de decisiones</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tabla de casos de uso */}
      <div className="use-cases-section">
        <h2>Tabla de Casos de Uso</h2>
        <div className="table-container">
          <table className="use-cases-table">
            <thead>
              <tr>
                <th>Caso de Uso</th>
                <th>Actor Principal</th>
                <th>Descripción</th>
                <th>Prioridad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Registrar Paciente</td>
                <td>Asistente</td>
                <td>Crear nuevo registro de paciente en el sistema</td>
                <td><span className="priority high">Alta</span></td>
              </tr>
              <tr>
                <td>Programar Cita</td>
                <td>Paciente/Asistente</td>
                <td>Reservar fecha y hora para atención médica</td>
                <td><span className="priority high">Alta</span></td>
              </tr>
              <tr>
                <td>Registrar Tratamiento</td>
                <td>Dentista</td>
                <td>Documentar procedimientos realizados al paciente</td>
                <td><span className="priority high">Alta</span></td>
              </tr>
              <tr>
                <td>Generar Factura</td>
                <td>Sistema/Asistente</td>
                <td>Crear documento de cobro por servicios</td>
                <td><span className="priority medium">Media</span></td>
              </tr>
              <tr>
                <td>Consultar Historial</td>
                <td>Paciente/Dentista</td>
                <td>Visualizar registros médicos anteriores</td>
                <td><span className="priority medium">Media</span></td>
              </tr>
              <tr>
                <td>Generar Reporte</td>
                <td>Administrador</td>
                <td>Crear estadísticas y análisis del consultorio</td>
                <td><span className="priority low">Baja</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Símbolos y convenciones */}
      <div className="symbols-section">
        <h2>Símbolos y Convenciones UML</h2>
        <div className="symbols-grid">
          <div className="symbol-card">
            <div className="symbol-shape actor">👤</div>
            <div className="symbol-info">
              <h4>Actor</h4>
              <p>Representa un usuario o sistema externo que interactúa</p>
            </div>
          </div>
          <div className="symbol-card">
            <div className="symbol-shape use-case">○</div>
            <div className="symbol-info">
              <h4>Caso de Uso</h4>
              <p>Funcionalidad específica que el sistema provee</p>
            </div>
          </div>
          <div className="symbol-card">
            <div className="symbol-shape association">━┯━</div>
            <div className="symbol-info">
              <h4>Asociación</h4>
              <p>Conexión entre actor y caso de uso</p>
            </div>
          </div>
          <div className="symbol-card">
            <div className="symbol-shape include">«include»</div>
            <div className="symbol-info">
              <h4>Inclusión</h4>
              <p>Caso de uso que se ejecuta siempre</p>
            </div>
          </div>
          <div className="symbol-card">
            <div className="symbol-shape extend">«extend»</div>
            <div className="symbol-info">
              <h4>Extensión</h4>
              <p>Caso de uso opcional o condicional</p>
            </div>
          </div>
          <div className="symbol-card">
            <div className="symbol-shape generalization">▷</div>
            <div className="symbol-info">
              <h4>Generalización</h4>
              <p>Relación de herencia entre actores</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-grid">
          <div className="faq-card">
            <FaQuestionCircle className="faq-icon" />
            <h3>¿Para qué sirve el CUN?</h3>
            <p>Para entender las funcionalidades del sistema desde la perspectiva del negocio y comunicar requerimientos entre stakeholders.</p>
          </div>
          <div className="faq-card">
            <FaQuestionCircle className="faq-icon" />
            <h3>¿Quiénes son los actores?</h3>
            <p>Cualquier entidad que interactúe con el sistema: usuarios humanos, otros sistemas, organizaciones externas.</p>
          </div>
          <div className="faq-card">
            <FaQuestionCircle className="faq-icon" />
            <h3>¿Cómo se lee el diagrama?</h3>
            <p>Los actores se conectan a los casos de uso que realizan. Las flechas indican dirección de la interacción.</p>
          </div>
          <div className="faq-card">
            <FaQuestionCircle className="faq-icon" />
            <h3>¿Qué no incluye el CUN?</h3>
            <p>No muestra secuencia, tiempo, detalles técnicos ni implementación. Solo funcionalidades desde vista de negocio.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CasoUsoNegocio;