import React, { useState, useRef, useEffect } from 'react';
import '../styles/OrientadoObjetos.css';
import diagramaClases from '../assets/OrientadoObjetos.jpg';
import { 
  FaSearchPlus, 
  FaSearchMinus, 
  FaExpand, 
  FaCompress, 
  FaArrowsAlt, 
  FaHandPaper, 
  FaDownload 
} from 'react-icons/fa';

function OrientadoObjetos() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDownloading, setIsDownloading] = useState(false);
  const imageContainerRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const canvasRef = useRef(null);

  // Referencias para el arrastre
  const dragStartRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    const newZoom = Math.max(zoomLevel - 0.25, 0.5);
    setZoomLevel(newZoom);
    // Si el zoom es muy pequeño, resetear posición
    if (newZoom <= 1) {
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

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      e.preventDefault();
      isDraggingRef.current = true;
      setIsDragging(true);
      dragStartRef.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y
      };
      
      // Cambiar cursor
      if (imageWrapperRef.current) {
        imageWrapperRef.current.style.cursor = 'grabbing';
      }
    }
  };

  const handleMouseMove = (e) => {
    if (isDraggingRef.current && zoomLevel > 1) {
      const newX = e.clientX - dragStartRef.current.x;
      const newY = e.clientY - dragStartRef.current.y;
      
      // Calcular límites para no arrastrar fuera de los bordes
      const wrapperRect = imageWrapperRef.current?.getBoundingClientRect();
      const imageRect = imageContainerRef.current?.getBoundingClientRect();
      
      if (wrapperRect && imageRect) {
        const maxX = Math.max(0, (imageRect.width * zoomLevel - wrapperRect.width) / 2);
        const maxY = Math.max(0, (imageRect.height * zoomLevel - wrapperRect.height) / 2);
        
        // Limitar el arrastre dentro de los bordes
        const limitedX = Math.max(-maxX, Math.min(maxX, newX));
        const limitedY = Math.max(-maxY, Math.min(maxY, newY));
        
        setPosition({ x: limitedX, y: limitedY });
      } else {
        setPosition({ x: newX, y: newY });
      }
    }
  };

  const handleMouseUp = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setIsDragging(false);
      
      // Restaurar cursor
      if (imageWrapperRef.current) {
        imageWrapperRef.current.style.cursor = zoomLevel > 1 ? 'grab' : 'default';
      }
    }
  };

  const handleDoubleClick = (e) => {
    // Doble click para resetear posición y zoom
    handleResetZoom();
  };

  // Función para descargar la imagen
  const handleDownloadImage = async () => {
    try {
      setIsDownloading(true);
      
      // Crear un enlace temporal
      const link = document.createElement('a');
      link.href = diagramaClases;
      
      // Nombre del archivo para la descarga
      const fileName = `Diagrama-Clases-Sistema-Dental-${new Date().toISOString().split('T')[0]}.jpg`;
      link.download = fileName;
      
      // Simular click en el enlace
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Feedback visual
      setTimeout(() => setIsDownloading(false), 1500);
      
    } catch (error) {
      console.error('Error al descargar la imagen:', error);
      setIsDownloading(false);
      
      // Fallback: abrir imagen en nueva pestaña
      window.open(diagramaClases, '_blank');
    }
  };

  // Función para capturar la imagen con zoom y posición actual (opcional avanzado)
  const handleCaptureCurrentView = () => {
    if (!imageContainerRef.current || !canvasRef.current) return;
    
    setIsDownloading(true);
    
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = diagramaClases;
    
    img.onload = () => {
      try {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        // Configurar canvas con alta resolución
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        
        // Limpiar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Dibujar la imagen
        ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
        
        // Agregar marca de agua con información
        ctx.fillStyle = 'rgba(0, 122, 204, 0.7)';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'right';
        
        const watermarkText = 'Diagrama de Clases - Sistema Dental';
        const infoText = `Zoom: ${Math.round(zoomLevel * 100)}% | Generado: ${new Date().toLocaleDateString()}`;
        
        ctx.fillText(watermarkText, canvas.width - 20, canvas.height - 60);
        ctx.font = '18px Arial';
        ctx.fillText(infoText, canvas.width - 20, canvas.height - 30);
        
        // Convertir a blob y descargar
        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `Diagrama-Clases-Sistema-Dental-${Math.round(zoomLevel * 100)}-${new Date().toISOString().split('T')[0]}.png`;
          link.click();
          URL.revokeObjectURL(url);
          setIsDownloading(false);
        }, 'image/png');
        
      } catch (error) {
        console.error('Error al capturar la vista:', error);
        setIsDownloading(false);
        // Fallback a descarga simple
        handleDownloadImage();
      }
    };
    
    img.onerror = () => {
      setIsDownloading(false);
      handleDownloadImage();
    };
  };

  // Efecto para añadir/remover event listeners globales
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
  }, [isDragging, position, zoomLevel]);

  // Efecto para cambiar cursor según zoom
  useEffect(() => {
    if (imageWrapperRef.current) {
      imageWrapperRef.current.style.cursor = zoomLevel > 1 ? 'grab' : 'default';
    }
  }, [zoomLevel]);

  return (
    <div className="orientado-objetos-container">
      <h1 className="page-title">Diagrama de Clases - Orientado a Objetos</h1>
      
      <div className="diagram-description">
        <p className="description-text">
          El diagrama de clases es una representación visual de la estructura estática del sistema, 
          mostrando las clases, sus atributos, métodos y las relaciones entre ellas. 
          Es fundamental en el análisis y diseño orientado a objetos para modelar 
          la arquitectura del sistema dental.
          <span className="zoom-hint">
            🔍 {zoomLevel > 1 ? 'Arrastra la imagen con click sostenido' : 'Haz zoom para activar arrastre'}
          </span>
        </p>
      </div>

      <div className={`diagram-container ${isFullscreen ? 'fullscreen' : ''}`}>
        <div className="diagram-card">
          <div className="zoom-controls-panel">
            <div className="zoom-buttons">
              <button 
                className="zoom-btn"
                onClick={handleZoomOut}
                title="Alejar (25%)"
                disabled={zoomLevel <= 0.5}
              >
                <FaSearchMinus />
              </button>
              <span className="zoom-level">{Math.round(zoomLevel * 100)}%</span>
              <button 
                className="zoom-btn"
                onClick={handleZoomIn}
                title="Acercar (25%)"
                disabled={zoomLevel >= 3}
              >
                <FaSearchPlus />
              </button>
              <button 
                className="zoom-btn reset"
                onClick={handleResetZoom}
                title="Restablecer zoom y posición"
              >
                100%
              </button>
              
              {/* Botón de descarga */}
              <button 
                className={`zoom-btn download-btn ${isDownloading ? 'downloading' : ''}`}
                onClick={handleDownloadImage}
                title="Descargar imagen"
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <span className="download-spinner"></span>
                ) : (
                  <FaDownload />
                )}
              </button>
              
              <button 
                className={`zoom-btn fullscreen-btn ${isFullscreen ? 'active' : ''}`}
                onClick={toggleFullscreen}
                title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
              >
                {isFullscreen ? <FaCompress /> : <FaExpand />}
              </button>
              <div className="drag-indicator">
                <FaHandPaper />
                <span>{zoomLevel > 1 ? 'Arrastre activado' : 'Haz zoom > 100%'}</span>
              </div>
            </div>
            <div className="zoom-instructions">
              <p>
                {zoomLevel > 1 
                  ? '• Click SOSTENIDO y arrastra para mover • Doble click para resetear • Botones +/- para zoom'
                  : '• Click en +/- para zoom • Cuando >100% podrás arrastrar la imagen'
                }
              </p>
            </div>
          </div>

          <div 
            ref={imageWrapperRef}
            className="image-wrapper"
            onMouseDown={handleMouseDown}
            onDoubleClick={handleDoubleClick}
          >
            <div 
              ref={imageContainerRef}
              className="image-container"
              style={{
                transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
                transformOrigin: 'center center',
                transition: isDragging ? 'none' : 'transform 0.2s ease'
              }}
            >
              <img 
                src={diagramaClases} 
                alt="Diagrama de Clases del Sistema Dental" 
                className="diagram-image"
              />
            </div>
            
            {zoomLevel > 1 && !isDragging && (
              <div className="drag-hint">
                <FaArrowsAlt />
                <span>Click sostenido aquí para arrastrar</span>
              </div>
            )}
            
            {isDragging && (
              <div className="dragging-overlay">
                <div className="dragging-text">
                  <FaHandPaper className="pulse" />
                  <span>Arrastrando... Suelta para soltar</span>
                </div>
              </div>
            )}
          </div>
          
          <div className="diagram-caption">
            <h3>Diagrama de Clases - Sistema Dental</h3>
            <p>Representación de las entidades principales del sistema y sus relaciones</p>
            <div className="zoom-info">
              <div className="info-item">
                <strong>Zoom:</strong> {Math.round(zoomLevel * 100)}%
              </div>
              <div className="info-item">
                <strong>Modo:</strong> {zoomLevel > 1 ? 'Arrastre disponible' : 'Zoom normal'}
              </div>
              <div className="info-item">
                <strong>Posición:</strong> X:{Math.round(position.x)} Y:{Math.round(position.y)}
              </div>
              <div className="info-item">
                <button 
                  className="download-caption-btn"
                  onClick={handleDownloadImage}
                  disabled={isDownloading}
                >
                  {isDownloading ? 'Descargando...' : 'Descargar Imagen'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Canvas oculto para captura avanzada */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      <div className="download-options">
        <h3>Opciones de Descarga</h3>
        <div className="download-buttons">
          <button 
            className="download-option-btn primary"
            onClick={handleDownloadImage}
            disabled={isDownloading}
          >
            <FaDownload />
            <span>Descargar Imagen Original</span>
            <small>JPG - Alta calidad</small>
          </button>
          
          <button 
            className="download-option-btn secondary"
            onClick={handleCaptureCurrentView}
            disabled={isDownloading}
          >
            <FaDownload />
            <span>Descargar Vista Actual</span>
            <small>Incluye zoom {Math.round(zoomLevel * 100)}% y marca de agua</small>
          </button>
        </div>
        <p className="download-note">
          La imagen se descargará en formato JPG/PNG con la máxima calidad disponible.
        </p>
      </div>

      <div className="drag-tutorial">
        <h3>¿Cómo usar el arrastre?</h3>
        <ol>
          <li>Haz zoom por encima del 100% usando el botón <strong>+</strong></li>
          <li>Coloca el cursor sobre la imagen (verás que cambia a <FaHandPaper />)</li>
          <li>Haz <strong>CLICK SOSTENIDO</strong> (mantén presionado el botón del mouse)</li>
          <li><strong>ARRESTRA</strong> el mouse en cualquier dirección</li>
          <li><strong>SUELTA</strong> el click para detener el arrastre</li>
          <li>Doble click en cualquier parte para volver al centro</li>
          <li><strong>Descarga</strong> la imagen usando el botón <FaDownload /> en cualquier momento</li>
        </ol>
      </div>

      <div className="classes-explanation">
        <h2>Clases Principales del Sistema</h2>
        <div className="classes-grid">
          <div className="class-card">
            <h3>Paciente</h3>
            <ul>
              <li><strong>Atributos:</strong> id, nombre, teléfono, email, fechaNacimiento</li>
              <li><strong>Métodos:</strong> registrar(), actualizar(), consultarHistorial()</li>
            </ul>
          </div>
          <div className="class-card">
            <h3>Cita</h3>
            <ul>
              <li><strong>Atributos:</strong> id, fecha, hora, estado, motivo</li>
              <li><strong>Métodos:</strong> programar(), cancelar(), confirmar()</li>
            </ul>
          </div>
          <div className="class-card">
            <h3>Tratamiento</h3>
            <ul>
              <li><strong>Atributos:</strong> id, nombre, descripcion, costo, duracion</li>
              <li><strong>Métodos:</strong> asignar(), finalizar(), calcularCosto()</li>
            </ul>
          </div>
          <div className="class-card">
            <h3>Dentista</h3>
            <ul>
              <li><strong>Atributos:</strong> id, nombre, especialidad, horario</li>
              <li><strong>Métodos:</strong> asignarCita(), registrarTratamiento()</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrientadoObjetos;