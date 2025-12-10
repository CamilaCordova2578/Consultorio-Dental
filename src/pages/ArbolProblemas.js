import React from 'react';
import '../styles/ArbolProblemas.css';
import ArbolProblemasImg from '../assets/ArbolProblemas.jpg';
import { FaChartBar, FaMoneyBillWave, FaUserMd } from 'react-icons/fa';

const ArbolProblemas = () => {
  return (
    <div className="arbol-problemas-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">4. ÁRBOL DE PROBLEMAS</h1>
          <div className="title-line"></div>
          <p className="page-subtitle">Diagnóstico de Causas y Efectos</p>
        </div>
        
        <div className="content-wrapper">
          <div className="content-card">
            <div className="problem-definition">
              <h2>Problema Central Identificado</h2>
              <div className="central-problem">
                <span className="problem-tag">PROBLEMA CENTRAL</span>
                <h3>Ineficiencia en la Gestión Integral del Consultorio Odontológico</h3>
                <p>
                  Esta problemática principal afecta todos los procesos operativos del consultorio Sonrisa Dental, 
                  generando una cadena de efectos negativos en diferentes áreas de funcionamiento.
                </p>
              </div>
            </div>
            
            <div className="effects-section">
              <h3>Áreas Afectadas (Efectos)</h3>
              <p className="section-intro">
                El problema central genera consecuencias negativas en tres áreas críticas del consultorio:
              </p>
              
              <div className="effects-grid">
                <div className="effect-card">
                  <div className="effect-header">
                    <FaChartBar className="effect-icon" />
                    <h4>Gestión Operativa</h4>
                  </div>
                  <div className="effect-content">
                    <ul>
                      <li>Pérdida de tiempo en procesos administrativos</li>
                      <li>Duplicidad de esfuerzos</li>
                      <li>Falta de coordinación entre áreas</li>
                      <li>Procesos lentos y desorganizados</li>
                    </ul>
                  </div>
                </div>
                
                <div className="effect-card">
                  <div className="effect-header">
                    <FaMoneyBillWave className="effect-icon" />
                    <h4>Administración Financiera</h4>
                  </div>
                  <div className="effect-content">
                    <ul>
                      <li>Control inadecuado de pagos</li>
                      <li>Facturación errónea</li>
                      <li>Dificultad en seguimiento de cuentas</li>
                      <li>Pérdidas económicas no detectadas</li>
                    </ul>
                  </div>
                </div>
                
                <div className="effect-card">
                  <div className="effect-header">
                    <FaUserMd className="effect-icon" />
                    <h4>Atención al Paciente</h4>
                  </div>
                  <div className="effect-content">
                    <ul>
                      <li>Retrasos en la atención</li>
                      <li>Errores en programación de citas</li>
                      <li>Información clínica dispersa</li>
                      <li>Insatisfacción del paciente</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="causes-section">
              <h3>Causas Raíz Identificadas</h3>
              <p className="section-intro">
                Las causas fundamentales que provocan esta ineficiencia incluyen:
              </p>
              
              <div className="causes-container">
                <div className="cause-card">
                  <div className="cause-number">01</div>
                  <div className="cause-content">
                    <h4>Falta de Digitalización de Registros</h4>
                    <p>
                      Dependencia total de sistemas manuales (papelería, agendas físicas) que dificultan 
                      el acceso, organización y actualización de la información.
                    </p>
                  </div>
                </div>
                
                <div className="cause-card">
                  <div className="cause-number">02</div>
                  <div className="cause-content">
                    <h4>Ausencia de Protocolos Estandarizados</h4>
                    <p>
                      Falta de procedimientos unificados y documentados para las diferentes actividades 
                      del consultorio, generando inconsistencia en los procesos.
                    </p>
                  </div>
                </div>
                
                <div className="cause-card">
                  <div className="cause-number">03</div>
                  <div className="cause-content">
                    <h4>Inversión Limitada en Sistemas Administrativos</h4>
                    <p>
                      Priorización de recursos en equipos médicos sobre sistemas de gestión, resultando 
                      en herramientas administrativas obsoletas o inexistentes.
                    </p>
                  </div>
                </div>
                
                <div className="cause-card">
                  <div className="cause-number">04</div>
                  <div className="cause-content">
                    <h4>Resistencia al Cambio y Falta de Conocimiento Tecnológico</h4>
                    <p>
                      Aversión a la implementación de nuevas tecnologías por parte del personal y 
                      carencia de capacitación en el uso de herramientas digitales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="diagram-section">
              <h3>Representación Gráfica del Árbol de Problemas</h3>
              <p className="section-intro">
                A continuación se presenta el diagrama que ilustra la relación entre causas, problema central y efectos:
              </p>
              
              <div className="diagram-container">
                <img 
                  src={ArbolProblemasImg} 
                  alt="Diagrama del Árbol de Problemas" 
                  className="problem-diagram"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/800x600?text=Diagrama+del+Árbol+de+Problemas';
                  }}
                />
                <div className="diagram-caption">
                  Figura 1: Árbol de Problemas - Relación Causa-Efecto en la Gestión del Consultorio
                </div>
              </div>
              
              <div className="diagram-explanation">
                <h4>Interpretación del Diagrama</h4>
                <p>
                  El diagrama muestra visualmente cómo las <strong>cuatro causas raíz</strong> (base del árbol) 
                  convergen para generar el <strong>problema central</strong> (tronco), el cual a su vez se ramifica 
                  en los <strong>tres efectos principales</strong> (ramas) que afectan el funcionamiento del consultorio. 
                  Esta representación permite comprender la interconexión entre los diferentes elementos del problema.
                </p>
              </div>
            </div>
            
            <div className="conclusion-section highlight">
              <h3>Análisis de Relaciones</h3>
              <p>
                El análisis del árbol de problemas revela que la <strong>falta de digitalización</strong> y la 
                <strong> ausencia de protocolos</strong> son las causas más críticas, ya que afectan directamente 
                todos los procesos operativos. Estas, combinadas con la <strong>resistencia al cambio</strong> y la 
                <strong> limitada inversión en sistemas</strong>, crean un círculo vicioso que perpetúa la 
                ineficiencia y dificulta la implementación de soluciones tecnológicas.
              </p>
              <p className="conclusion-highlight">
                Comprender estas relaciones causa-efecto es fundamental para diseñar una solución integral 
                que ataque no solo los síntomas, sino también las raíces del problema.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArbolProblemas;