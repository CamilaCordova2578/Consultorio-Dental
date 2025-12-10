import React, { useState, useRef, useEffect } from 'react';
import '../styles/CasoUsoSistema.css';
import casoUsoSistema from '../assets/CUS.jpg';
import { 
  FaSearchPlus, 
  FaSearchMinus, 
  FaExpand, 
  FaCompress, 
  FaArrowsAlt, 
  FaHandPaper,
  FaInfoCircle,
  FaDownload,
  FaCogs,
  FaCode,
  FaMicrochip,
  FaCheckCircle,
  FaQuestionCircle,
  FaLayerGroup,
  FaBuilding,
  FaLaptop
} from 'react-icons/fa';

function CasoUsoSistemas() {
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
    link.href = casoUsoSistema;
    link.download = 'Caso_de_Uso_de_Sistema_Sistema_Dental.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="caso-uso-sistema-container">
      <h1 className="page-title">Caso de Uso de Sistema (CUS)</h1>
      
      {/* Introducción */}
      <div className="intro-section">
        <div className="intro-card">
          <div className="intro-header">
            <FaCogs className="intro-icon" />
            <div>
              <h2>Diagrama de Casos de Uso de Sistema</h2>
              <p className="intro-subtitle">Nivel de detalle técnico y especificación de requerimientos</p>
            </div>
          </div>
          <div className="intro-content">
            <p>
              El <strong>Diagrama de Casos de Uso de Sistema</strong> representa las interacciones 
              detalladas entre los actores y el sistema, especificando el comportamiento interno, 
              flujos alternativos y excepciones. Es un <strong>nivel más técnico</strong> que el 
              CUN y sirve como base para el desarrollo.
            </p>
            <div className="intro-features">
              <div className="feature">
                <FaCode className="feature-icon" />
                <span>Especificación técnica detallada</span>
              </div>
              <div className="feature">
                <FaMicrochip className="feature-icon" />
                <span>Flujos principales y alternativos</span>
              </div>
              <div className="feature">
                <FaLayerGroup className="feature-icon" />
                <span>Nivel de sistema (caja negra)</span>
              </div>
              <div className="feature">
                <FaCheckCircle className="feature-icon" />
                <span>Base para casos de prueba</span>
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
            <h3>¿Qué es un Caso de Uso de Sistema?</h3>
            <button className="close-info-btn" onClick={toggleInfo}>×</button>
          </div>
          <div className="info-content">
            <div className="info-grid">
              <div className="info-card">
                <div className="info-text">
                  <h4>Propósito</h4>
                  <p>Especificar los requerimientos funcionales desde la perspectiva del sistema</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-text">
                  <h4>Nivel de Detalle</h4>
                  <p>Mayor detalle técnico que el CUN, incluye flujos alternativos</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-text">
                  <h4>Especificación</h4>
                  <p>Describe precondiciones, flujo principal, alternativas y postcondiciones</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-text">
                  <h4>Pruebas</h4>
                  <p>Sirve como base para la elaboración de casos de prueba</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Comparación CUN vs CUS */}
      <div className="comparison-section">
        <h2>Diferencias: CUN vs CUS</h2>
        <div className="comparison-cards">
          <div className="comparison-card cun">
            <div className="comparison-header">
              <FaBuilding className="comparison-icon" />
              <h3>Caso de Uso de Negocio (CUN)</h3>
            </div>
            <ul className="comparison-list">
              <li><strong>Nivel:</strong> Negocio / Organizacional</li>
              <li><strong>Perspectiva:</strong> Qué hace el sistema</li>
              <li><strong>Detalle:</strong> General / Alto nivel</li>
              <li><strong>Público:</strong> Stakeholders de negocio</li>
              <li><strong>Enfoque:</strong> Funcionalidades principales</li>
            </ul>
          </div>
          
          <div className="vs-badge">VS</div>
          
          <div className="comparison-card cus">
            <div className="comparison-header">
              <FaLaptop className="comparison-icon" />
              <h3>Caso de Uso de Sistema (CUS)</h3>
            </div>
            <ul className="comparison-list">
              <li><strong>Nivel:</strong> Sistema / Técnico</li>
              <li><strong>Perspectiva:</strong> Cómo lo hace el sistema</li>
              <li><strong>Detalle:</strong> Específico / Detallado</li>
              <li><strong>Público:</strong> Desarrolladores / Analistas</li>
              <li><strong>Enfoque:</strong> Comportamiento interno</li>
            </ul>
          </div>
        </div>
      </div>

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
                src={casoUsoSistema} 
                alt="Diagrama de Casos de Uso de Sistema del Sistema Dental" 
                className="caso-uso-sistema-image"
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
            <h3>Diagrama de Casos de Uso de Sistema - Sistema Dental</h3>
            <p>
              Este diagrama especifica los casos de uso a nivel de sistema, mostrando las 
              interacciones detalladas, flujos alternativos, precondiciones y postcondiciones 
              para cada funcionalidad del sistema dental.
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

      {/* Especificaciones detalladas */}
      <div className="specifications-section">
        <h2>Especificaciones Técnicas</h2>
        <div className="specifications-grid">
          <div className="spec-card">
            
            <div className="spec-content">
              <h3>Estructura del CUS</h3>
              <ul>
                <li><strong>Identificador:</strong> Código único del caso de uso</li>
                <li><strong>Nombre:</strong> Nombre descriptivo en infinitivo</li>
                <li><strong>Actores:</strong> Usuarios/sistemas que interactúan</li>
                <li><strong>Precondiciones:</strong> Estado requerido antes de ejecutar</li>
                <li><strong>Flujo Principal:</strong> Secuencia normal de pasos</li>
                <li><strong>Flujos Alternativos:</strong> Variaciones y excepciones</li>
                <li><strong>Postcondiciones:</strong> Estado resultante</li>
              </ul>
            </div>
          </div>

          <div className="spec-card">
            
            <div className="spec-content">
              <h3>Flujos de Eventos</h3>
              <ul>
                <li><strong>Flujo Básico:</strong> Camino principal exitoso</li>
                <li><strong>Flujos Alternativos:</strong> Caminos secundarios</li>
                <li><strong>Excepciones:</strong> Situaciones de error</li>
                <li><strong>Subflujos:</strong> Secuencias reutilizables</li>
                <li><strong>Puntos de Extensión:</strong> Lugares para añadir comportamiento</li>
                <li><strong>Condiciones:</strong> Guardas y validaciones</li>
              </ul>
            </div>
          </div>

          <div className="spec-card">
           
            <div className="spec-content">
              <h3>Relaciones</h3>
              <ul>
                <li><strong>Include:</strong> Relación de uso obligatorio</li>
                <li><strong>Extend:</strong> Relación de extensión condicional</li>
                <li><strong>Generalización:</strong> Herencia entre casos de uso</li>
                <li><strong>Especialización:</strong> Casos de uso específicos</li>
                <li><strong>Dependencia:</strong> Relaciones temporales</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Ejemplo de caso de uso detallado */}
      <div className="example-section">
        <h2>Ejemplo de Especificación Detallada</h2>
        <div className="example-card">
          <div className="example-header">
            <h3>Caso de Uso: Programar Cita Médica</h3>
            <div className="example-badge">CUS-001</div>
          </div>
          <div className="example-content">
            <div className="example-grid">
              <div className="example-item">
                <h4>Actores</h4>
                <p>Paciente, Asistente, Sistema de Agenda</p>
              </div>
              <div className="example-item">
                <h4>Precondiciones</h4>
                <p>Paciente registrado en el sistema, Agenda del dentista disponible</p>
              </div>
              <div className="example-item">
                <h4>Flujo Principal</h4>
                <ol>
                  <li>Paciente solicita programar cita</li>
                  <li>Sistema muestra disponibilidad</li>
                  <li>Paciente selecciona fecha/hora</li>
                  <li>Sistema valida disponibilidad</li>
                  <li>Sistema confirma la cita</li>
                  <li>Sistema envía confirmación</li>
                </ol>
              </div>
              <div className="example-item">
                <h4>Flujos Alternativos</h4>
                <ul>
                  <li><strong>A1:</strong> Fecha no disponible - sugerir alternativas</li>
                  <li><strong>A2:</strong> Paciente no registrado - redirigir a registro</li>
                  <li><strong>A3:</strong> Conflicto de horario - notificar al asistente</li>
                </ul>
              </div>
              <div className="example-item">
                <h4>Postcondiciones</h4>
                <p>Cita registrada en agenda, Confirmación enviada, Recordatorio programado</p>
              </div>
              <div className="example-item">
                <h4>Reglas de Negocio</h4>
                <ul>
                  <li>Las citas deben programarse con 24h de anticipación</li>
                  <li>Máximo 2 citas por paciente por semana</li>
                  <li>Cancelaciones permitidas hasta 12h antes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Beneficios del CUS */}
      <div className="benefits-section">
        <h2>Beneficios del CUS</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Comunicación Clara</h3>
            <p>Facilita la comunicación entre desarrolladores, analistas y stakeholders</p>
          </div>
          <div className="benefit-card">
            <h3>Base para Pruebas</h3>
            <p>Provee escenarios específicos para diseño de casos de prueba</p>
          </div>
          <div className="benefit-card">

            <h3>Estimación Precisas</h3>
            <p>Ayuda a estimar esfuerzo de desarrollo por funcionalidad</p>
          </div>
          <div className="benefit-card">
            <h3>Trazabilidad</h3>
            <p>Permite rastrear requerimientos desde análisis hasta implementación</p>
          </div>
          <div className="benefit-card">
            <h3>Validación</h3>
            <p>Permite validar que el sistema cumple con los requerimientos</p>
          </div>
          <div className="benefit-card">
            <h3>Documentación</h3>
            <p>Provee documentación técnica para mantenimiento futuro</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Preguntas Frecuentes sobre CUS</h2>
        <div className="faq-grid">
          <div className="faq-card">
            <FaQuestionCircle className="faq-icon" />
            <h3>¿Cuándo usar CUS vs CUN?</h3>
            <p>Usa CUN para comunicación con stakeholders de negocio y CUS para especificaciones técnicas de desarrollo.</p>
          </div>
          <div className="faq-card">
            <FaQuestionCircle className="faq-icon" />
            <h3>¿Qué nivel de detalle es apropiado?</h3>
            <p>Suficiente para que un desarrollador pueda implementar la funcionalidad sin ambigüedades.</p>
          </div>
          <div className="faq-card">
            <FaQuestionCircle className="faq-icon" />
            <h3>¿Quién crea los CUS?</h3>
            <p>Los analistas de sistemas en colaboración con desarrolladores y expertos de dominio.</p>
          </div>
          <div className="faq-card">
            <FaQuestionCircle className="faq-icon" />
            <h3>¿Es necesario para todos los casos?</h3>
            <p>Para funcionalidades complejas o críticas sí, para funcionalidades simples puede ser excesivo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CasoUsoSistemas;