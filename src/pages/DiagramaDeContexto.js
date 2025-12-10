import React, { useState, useRef, useEffect } from 'react';
import '../styles/DiagramaDeContexto.css';
import diagramaContexto from '../assets/DiagramaContexto.jpg';
import { 
  FaSearchPlus, 
  FaSearchMinus, 
  FaExpand, 
  FaCompress, 
  FaArrowsAlt, 
  FaHandPaper,
  FaInfoCircle,
  FaDownload,
  FaShareAlt,
  FaBullseye,
  FaExchangeAlt,
  FaUsers,
  FaCog
} from 'react-icons/fa';

function DiagramaDeContexto() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showInfo, setShowInfo] = useState(false);
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
    link.href = diagramaContexto;
    link.download = 'Diagrama_de_Contexto_Sistema_Dental.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="diagrama-contexto-container">
      <h1 className="page-title">Diagrama de Contexto</h1>
      
      <div className="description-section">
        <div className="description-card">
          <div className="description-header">
            <FaInfoCircle className="description-icon" />
            <h2>¿Qué es un Diagrama de Contexto?</h2>
          </div>
          <p className="description-text">
            El <strong>Diagrama de Contexto</strong> es una representación gráfica de alto nivel que muestra 
            cómo el sistema interactúa con entidades externas (actores). Define los límites del sistema 
            y las principales entradas y salidas de información. En este caso, muestra las interacciones 
            del Sistema Dental con pacientes, dentistas y otros sistemas externos.
          </p>
          <button className="info-toggle-btn" onClick={toggleInfo}>
            <FaInfoCircle />
            {showInfo ? ' Ocultar detalles' : ' Ver detalles del diagrama'}
          </button>
        </div>
      </div>

      {showInfo && (
        <div className="diagram-info-panel">
          <h3>Elementos del Diagrama de Contexto</h3>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-badge primary">Sistema Central</div>
              <p>Representa el Sistema de Información Dental</p>
            </div>
            <div className="info-item">
              <div className="info-badge success">Entidades Externas</div>
              <p>Pacientes, Dentistas, Sistema de Facturación</p>
            </div>
            <div className="info-item">
              <div className="info-badge warning">Flujos de Entrada</div>
              <p>Solicitudes de citas, datos de pacientes, pagos</p>
            </div>
            <div className="info-item">
              <div className="info-badge danger">Flujos de Salida</div>
              <p>Confirmaciones, recordatorios, facturas, reportes</p>
            </div>
          </div>
        </div>
      )}

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
                src={diagramaContexto} 
                alt="Diagrama de Contexto del Sistema Dental" 
                className="context-diagram-image"
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
            <h3>Diagrama de Contexto - Sistema de Información Dental</h3>
            <p>
              Este diagrama muestra las interacciones del sistema con entidades externas: 
              pacientes, dentistas, sistema de facturación y proveedores. Representa el flujo 
              de información en el contexto del consultorio dental.
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

      <div className="interpretation-section">
        <h2>Interpretación del Diagrama</h2>
        <div className="interpretation-grid">
          <div className="interpretation-card">
            <FaBullseye className="interpretation-icon" />
            <h3>Propósito Principal</h3>
            <p>
              Define los límites del sistema y establece claramente qué está dentro 
              y fuera del alcance del Sistema de Información Dental.
            </p>
          </div>
          
          <div className="interpretation-card">
            <FaExchangeAlt className="interpretation-icon" />
            <h3>Flujos de Información</h3>
            <p>
              Muestra cómo la información fluye entre el sistema y las entidades 
              externas, identificando los datos de entrada y salida.
            </p>
          </div>
          
          <div className="interpretation-card">
            <FaUsers className="interpretation-icon" />
            <h3>Actores Involucrados</h3>
            <p>
              Identifica todos los actores que interactúan con el sistema: 
              pacientes, personal administrativo, dentistas y sistemas externos.
            </p>
          </div>
          
          <div className="interpretation-card">
            <FaCog className="interpretation-icon" />
            <h3>Base para Diseño</h3>
            <p>
              Sirve como punto de partida para el diseño detallado del sistema 
              y para identificar requerimientos específicos.
            </p>
          </div>
        </div>
      </div>

      <div className="usage-guide">
        <h3>Guía de Uso del Visualizador</h3>
        <div className="guide-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Zoom y Navegación</h4>
              <p>Usa los botones + y - para ajustar el nivel de zoom. Cuando el zoom supere el 100%, podrás arrastrar la imagen con click sostenido.</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Pantalla Completa</h4>
              <p>Haz click en el icono de expandir para ver el diagrama en pantalla completa. Ideal para revisar detalles específicos.</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Descarga</h4>
              <p>Puedes descargar el diagrama en alta calidad haciendo click en el botón de descarga, para uso offline o impresión.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiagramaDeContexto;