import React from 'react';
import '../styles/DeclaracionDePropositos.css';
import { FaBullseye, FaUsers, FaCalendarAlt, FaTooth, FaFileInvoiceDollar, FaChartLine } from 'react-icons/fa';

function DeclaracionDePropositos() {
  return (
    <div className="declaracion-container">
      <h1 className="page-title">Declaración de Propósitos</h1>
      
      <div className="intro-section">
        <div className="intro-header">
          <FaBullseye className="intro-icon" />
          <h2>Propósito General del Sistema</h2>
        </div>
        <p className="intro-text">
          Se propone desarrollar un <strong>Sistema de Información para el Consultorio Sorisa Dental</strong> 
          que permita optimizar la gestión administrativa y clínica mediante análisis estructurado.
        </p>
      </div>

      <div className="content-grid">
        <div className="content-card">
          <div className="card-header">
            <div className="card-icon">
              <FaUsers />
            </div>
            <h3>Gestión de Pacientes</h3>
          </div>
          <div className="card-body">
            <p>
              El sistema automatizará el <strong>registro y seguimiento de pacientes</strong>, 
              facilitando el trabajo del personal y mejorando la eficiencia del consultorio.
            </p>
            <ul>
              <li>Datos completos de pacientes</li>
              <li>Historial médico actualizado</li>
              <li>Seguimiento personalizado</li>
            </ul>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <div className="card-icon">
              <FaCalendarAlt />
            </div>
            <h3>Administración de Citas</h3>
          </div>
          <div className="card-body">
            <p>
              Programación y organización de <strong>citas sin duplicaciones</strong>, 
              optimizando el tiempo y recursos del consultorio.
            </p>
            <ul>
              <li>Agenda electrónica integrada</li>
              <li>Recordatorios automáticos</li>
              <li>Control de disponibilidad</li>
            </ul>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <div className="card-icon">
              <FaTooth />
            </div>
            <h3>Registro de Tratamientos</h3>
          </div>
          <div className="card-body">
            <p>
              Registro detallado de <strong>tratamientos, diagnósticos, procedimientos y costos</strong>, 
              manteniendo un historial completo.
            </p>
            <ul>
              <li>Detalle de procedimientos</li>
              <li>Seguimiento de tratamientos</li>
              <li>Registro fotográfico</li>
            </ul>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <div className="card-icon">
              <FaFileInvoiceDollar />
            </div>
            <h3>Administración Financiera</h3>
          </div>
          <div className="card-body">
            <p>
              Incluye la administración de <strong>planes dentales, pagos y facturación</strong>, 
              para un control financiero completo.
            </p>
            <ul>
              <li>Control de pagos</li>
              <li>Facturación electrónica</li>
              <li>Reportes financieros</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="benefits-section">
        <div className="benefits-header">
          <FaChartLine className="benefits-icon" />
          <h2>Beneficios Esperados</h2>
        </div>
        
        <div className="benefits-content">
          <div className="benefit-item">
            <div className="benefit-number">01</div>
            <div className="benefit-text">
              <h4>Modernización de Procesos</h4>
              <p>
                Sorisa Dental busca <strong>modernizar sus procesos internos</strong>, 
                reduciendo errores y agilizando tareas administrativas.
              </p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-number">02</div>
            <div className="benefit-text">
              <h4>Información Actualizada</h4>
              <p>
                Contar con <strong>información actualizada y centralizada</strong>, 
                garantizando un servicio más eficiente, organizado y profesional.
              </p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-number">03</div>
            <div className="benefit-text">
              <h4>Transformación Digital</h4>
              <p>
                Transformar la gestión del Consultorio Dental Sonrisa Saludable en un proceso 
                más <strong>ágil, preciso y centrado en el paciente</strong>.
              </p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-number">04</div>
            <div className="benefit-text">
              <h4>Crecimiento Sostenible</h4>
              <p>
                Contribuir al <strong>crecimiento sostenible del negocio</strong> y 
                a la satisfacción de sus clientes mediante una mejor atención.
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className="objectives-section">
        <h3>Objetivos Específicos</h3>
        <div className="objectives-list">
          <div className="objective">
            <div className="objective-check">✓</div>
            <p>Automatizar el registro y seguimiento de pacientes</p>
          </div>
          <div className="objective">
            <div className="objective-check">✓</div>
            <p>Optimizar la programación y organización de citas</p>
          </div>
          <div className="objective">
            <div className="objective-check">✓</div>
            <p>Mantener un registro detallado de tratamientos y costos</p>
          </div>
          <div className="objective">
            <div className="objective-check">✓</div>
            <p>Implementar control financiero y facturación</p>
          </div>
          <div className="objective">
            <div className="objective-check">✓</div>
            <p>Reducir errores en procesos administrativos</p>
          </div>
          <div className="objective">
            <div className="objective-check">✓</div>
            <p>Mejorar la experiencia del paciente</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeclaracionDePropositos;