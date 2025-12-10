import React, { useState } from 'react';
import '../styles/DiagramaFlujoDeDatos.css';
import { 
  FaChevronDown, 
  FaChevronUp, 
  FaLayerGroup, 
  FaSearchPlus,
  FaDownload,
  FaInfoCircle,
  FaArrowRight,
  FaListOl
} from 'react-icons/fa';

// IMPORTAR TODAS LAS IMÁGENES DESDE assets
import Nivel1DFD from '../assets/Nivel1DFD.jpg';
import DFDGrafico1 from '../assets/DFD-Grafico1.jpg';
import DFDGrafico2 from '../assets/DFD-Grafico2.jpg';
import DFDGrafico3 from '../assets/DFD-Grafico3.jpg';
import DFDGrafico4 from '../assets/DFD-Grafico4.jpg';
import Nivel2Grafico1 from '../assets/DFD-Grafico1.jpg';
import Nivel2Grafico2 from '../assets/DFD-Grafico2.jpg';
import Nivel2Grafico3 from '../assets/DFD-Grafico3.jpg';
import Nivel2Grafico4 from '../assets/DFD-Grafico4.jpg';

function DiagramaFlujoDeDatos() {
  // Estado para controlar qué nivel está expandido
  const [expandedLevel, setExpandedLevel] = useState('nivel1');
  // Estado para controlar qué gráfico está activo en cada nivel
  const [activeGraph, setActiveGraph] = useState({
    nivel1: 'grafico1',
    nivel2: 'grafico1'
  });

  // Datos de los gráficos del Nivel 1 - TODOS LOS 5 GRÁFICOS
  const nivel1Graphs = [
    {
      id: 'grafico1',
      name: 'Nivel 1 - Diagrama Principal',
      image: Nivel1DFD,
      description: 'Diagrama de contexto general del sistema dental'
    }
  ];

  // Datos de los gráficos del Nivel 2
  const nivel2Graphs = [
    {
      id: 'grafico1',
      name: 'Nivel 2 - Detalle Registro',
      image: Nivel2Grafico1,
      description: 'Detalle de proceso: Registro de pacientes'
    },
    {
      id: 'grafico2',
      name: 'Nivel 2 - Detalle Citas',
      image: Nivel2Grafico2,
      description: 'Detalle de proceso: Programación de citas'
    },
    {
      id: 'grafico3',
      name: 'Nivel 2 - Detalle Tratamientos',
      image: Nivel2Grafico3,
      description: 'Detalle de proceso: Ejecución de tratamientos'
    },
    {
      id: 'grafico4',
      name: 'Nivel 2 - Detalle Pagos',
      image: Nivel2Grafico4,
      description: 'Detalle de proceso: Gestión de pagos'
    }
  ];

  const toggleLevel = (level) => {
    setExpandedLevel(expandedLevel === level ? null : level);
  };

  const handleGraphSelect = (level, graphId) => {
    setActiveGraph({
      ...activeGraph,
      [level]: graphId
    });
  };

  const handleDownload = (imageSrc, filename) => {
    // Crear un enlace temporal para descargar
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = filename || 'diagrama.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Obtener el gráfico activo actual
  const getActiveGraph = (level) => {
    const graphs = level === 'nivel1' ? nivel1Graphs : nivel2Graphs;
    return graphs.find(graph => graph.id === activeGraph[level]) || graphs[0];
  };

  return (
    <div className="dfd-container">
      <h1 className="page-title">Diagrama de Flujo de Datos (DFD)</h1>

      {/* Introducción */}
      <div className="intro-section">
        <div className="intro-header">
          <FaLayerGroup className="intro-icon" />
          <div>
            <h2>Sistema de Niveles del DFD</h2>
            <p className="intro-subtitle">
              Explore los diagramas de flujo de datos organizados por niveles de abstracción
            </p>
          </div>
        </div>
        <div className="intro-content">
          <p>
            Los <strong>Diagramas de Flujo de Datos (DFD)</strong> representan el flujo de información 
            dentro del sistema dental. Se organizan en <strong>dos niveles</strong>:
          </p>
          <div className="levels-overview">
            <div className="level-card">
              <div className="level-badge primary">Nivel 1</div>
              <h4>Vista General</h4>
              <p>Procesos principales del sistema</p>
              <span className="level-count">{nivel1Graphs.length} gráficos</span>
            </div>
            <FaArrowRight className="arrow-icon" />
            <div className="level-card">
              <div className="level-badge secondary">Nivel 2</div>
              <h4>Vista Detallada</h4>
              <p>Desglose de procesos específicos</p>
              <span className="level-count">{nivel2Graphs.length} gráficos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navegación por niveles */}
      <div className="levels-navigation">
        {/* Nivel 1 */}
        <div className={`level-section ${expandedLevel === 'nivel1' ? 'expanded' : ''}`}>
          <div className="level-header" onClick={() => toggleLevel('nivel1')}>
            <div className="level-title">
              <FaListOl className="level-icon" />
              <h3>Nivel 1 - Diagramas Principales</h3>
              <span className="graph-count">{nivel1Graphs.length} gráficos</span>
            </div>
            <div className="level-toggle">
              {expandedLevel === 'nivel1' ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>

          {expandedLevel === 'nivel1' && (
            <div className="level-content">
              {/* Selector de gráficos del Nivel 1 */}
              <div className="graph-selector">
                <h4>Seleccione un gráfico:</h4>
                <div className="graph-tabs">
                  {nivel1Graphs.map((graph, index) => (
                    <button
                      key={graph.id}
                      className={`graph-tab ${activeGraph.nivel1 === graph.id ? 'active' : ''}`}
                      onClick={() => handleGraphSelect('nivel1', graph.id)}
                    >
                      <span className="tab-number">{index + 1}</span>
                      <span className="tab-text">Gráfico {index + 1}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Visualizador del gráfico seleccionado */}
              <div className="graph-viewer">
                <div className="viewer-header">
                  <div className="graph-info">
                    <h4>{getActiveGraph('nivel1').name}</h4>
                    <p>{getActiveGraph('nivel1').description}</p>
                  </div>
                  <div className="viewer-controls">
                    <button 
                      className="control-btn"
                      onClick={() => handleDownload(
                        getActiveGraph('nivel1').image,
                        `${getActiveGraph('nivel1').name}.jpg`
                      )}
                      title="Descargar imagen"
                    >
                      <FaDownload />
                    </button>
                    <button className="control-btn info-btn" title="Información">
                      <FaInfoCircle />
                    </button>
                  </div>
                </div>

                <div className="image-container">
                  <img 
                    src={getActiveGraph('nivel1').image} 
                    alt={getActiveGraph('nivel1').name}
                    className="dfd-image"
                  />
                  <div className="image-overlay">
                    <div className="zoom-hint">
                      <FaSearchPlus />
                      <span>La imagen se muestra en su tamaño original</span>
                    </div>
                  </div>
                </div>

                <div className="graph-navigation">
                  <div className="nav-buttons">
                    {nivel1Graphs.map((graph, index) => (
                      <button
                        key={graph.id}
                        className={`nav-dot ${activeGraph.nivel1 === graph.id ? 'active' : ''}`}
                        onClick={() => handleGraphSelect('nivel1', graph.id)}
                        title={`Ir al gráfico ${index + 1}`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                  <div className="nav-info">
                    <span>
                      Gráfico {nivel1Graphs.findIndex(g => g.id === activeGraph.nivel1) + 1} 
                      de {nivel1Graphs.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Nivel 2 */}
        <div className={`level-section ${expandedLevel === 'nivel2' ? 'expanded' : ''}`}>
          <div className="level-header" onClick={() => toggleLevel('nivel2')}>
            <div className="level-title">
              <FaListOl className="level-icon" />
              <h3>Nivel 2 - Diagramas Detallados</h3>
              <span className="graph-count">{nivel2Graphs.length} gráficos</span>
            </div>
            <div className="level-toggle">
              {expandedLevel === 'nivel2' ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>

          {expandedLevel === 'nivel2' && (
            <div className="level-content">
              {/* Selector de gráficos del Nivel 2 */}
              <div className="graph-selector">
                <h4>Seleccione un gráfico detallado:</h4>
                <div className="graph-tabs">
                  {nivel2Graphs.map((graph, index) => (
                    <button
                      key={graph.id}
                      className={`graph-tab ${activeGraph.nivel2 === graph.id ? 'active' : ''}`}
                      onClick={() => handleGraphSelect('nivel2', graph.id)}
                    >
                     
                      <span className="tab-text">Grafico {index + 1}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Visualizador del gráfico seleccionado */}
              <div className="graph-viewer">
                <div className="viewer-header">
                  <div className="graph-info">
                    <h4>{getActiveGraph('nivel2').name}</h4>
                    <p>{getActiveGraph('nivel2').description}</p>
                  </div>
                  <div className="viewer-controls">
                    <button 
                      className="control-btn"
                      onClick={() => handleDownload(
                        getActiveGraph('nivel2').image,
                        `${getActiveGraph('nivel2').name}.jpg`
                      )}
                      title="Descargar imagen"
                    >
                      <FaDownload />
                    </button>
                    <button className="control-btn info-btn" title="Información">
                      <FaInfoCircle />
                    </button>
                  </div>
                </div>

                <div className="image-container">
                  <img 
                    src={getActiveGraph('nivel2').image} 
                    alt={getActiveGraph('nivel2').name}
                    className="dfd-image"
                  />
                  <div className="image-overlay">
                    <div className="zoom-hint">
                      <FaSearchPlus />
                      <span>Diagrama detallado de procesos específicos</span>
                    </div>
                  </div>
                </div>

                <div className="graph-navigation">
                  <div className="nav-buttons">
                    {nivel2Graphs.map((graph, index) => (
                      <button
                        key={graph.id}
                        className={`nav-dot ${activeGraph.nivel2 === graph.id ? 'active' : ''}`}
                        onClick={() => handleGraphSelect('nivel2', graph.id)}
                        title={`Ir al detalle ${index + 1}`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                  <div className="nav-info">
                    <span>
                      Gráfico {nivel2Graphs.findIndex(g => g.id === activeGraph.nivel2) + 1} 
                      de {nivel2Graphs.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Información sobre DFD */}
      <div className="dfd-info-section">
        <h3>¿Qué es un Diagrama de Flujo de Datos (DFD)?</h3>
        <div className="info-grid">
         
          <div className="info-card">
            <div className="info-icon"></div>
            <h4>Niveles de Abstracción</h4>
            <p>Organizado en niveles que van de lo general a lo específico.</p>
          </div>
          <div className="info-card">
            <div className="info-icon"></div>
            <h4>Análisis de Procesos</h4>
            <p>Permite identificar procesos, almacenes de datos y entidades externas.</p>
          </div>
          <div className="info-card">
            <div className="info-icon"></div>
            <h4>Propósito</h4>
            <p>Facilita la comprensión del sistema y la comunicación entre stakeholders.</p>
          </div>
        </div>
      </div>

      {/* Guía de uso */}
      <div className="usage-guide">
        <h3>Cómo navegar por los diagramas</h3>
        <div className="guide-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Selecciona un nivel</h4>
              <p>Haz click en "Nivel 1" o "Nivel 2" para expandir la sección correspondiente.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Elige un gráfico</h4>
              <p>Selecciona uno de los gráficos disponibles usando las pestañas numeradas.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Explora el diagrama</h4>
              <p>Visualiza el diagrama seleccionado en alta resolución.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Descarga si es necesario</h4>
              <p>Usa el botón de descarga para obtener una copia local del diagrama.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Leyenda de símbolos DFD */}
      <div className="legend-section">
        <h3>Leyenda de Símbolos DFD</h3>
        <div className="symbols-grid">
          <div className="symbol-item">
            <div className="symbol-shape circle">○</div>
            <div className="symbol-info">
              <h5>Proceso</h5>
              <p>Transformación de datos (círculo)</p>
            </div>
          </div>
          <div className="symbol-item">
            <div className="symbol-shape rectangle">━┯━</div>
            <div className="symbol-info">
              <h5>Flujo de Datos</h5>
              <p>Movimiento de datos (flecha)</p>
            </div>
          </div>
          <div className="symbol-item">
            <div className="symbol-shape square">□</div>
            <div className="symbol-info">
              <h5>Entidad Externa</h5>
              <p>Fuente o destino de datos (rectángulo)</p>
            </div>
          </div>
          <div className="symbol-item">
            <div className="symbol-shape parallel">〓</div>
            <div className="symbol-info">
              <h5>Almacén de Datos</h5>
              <p>Repositorio de datos (líneas paralelas)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiagramaFlujoDeDatos;