import React from 'react';
import '../styles/ListaDeAcontecimientos.css';
import { 
  FaUser, 
  FaCalendarAlt, 
  FaMoneyBillWave, 
  FaTooth, 
  FaUserMd, 
  FaUserFriends,
  FaClipboardList,
  FaHistory,
  FaBell,
  FaFileInvoiceDollar,
  FaLock,
  FaUnlock,
  FaCheckCircle,
  FaTimesCircle,
  FaEdit,
  FaTrash,
  FaSearch,
  FaPrint
} from 'react-icons/fa';

function ListaDeAcontecimientos() {
  const acontecimientos = [
    {
      id: 1,
      actor: 'Paciente',
      icon: <FaUser />,
      color: '#007acc',
      acciones: [
        {
          id: 1,
          texto: 'Ingresa al sistema registrando sus datos personales por primera vez',
          icon: <FaUser className="action-icon" />
        },
        {
          id: 2,
          texto: 'Inicia sesión o finaliza sesión utilizando sus credenciales',
          icon: <FaLock className="action-icon" />
        }
      ]
    },
    {
      id: 2,
      actor: 'Paciente',
      icon: <FaCalendarAlt />,
      color: '#007acc',
      acciones: [
        {
          id: 3,
          texto: 'Solicita al sistema la programación de una cita según fechas y horarios disponibles',
          icon: <FaCalendarAlt className="action-icon" />
        },
        {
          id: 4,
          texto: 'Recibe la lista de fechas y horarios disponibles para reservar una cita',
          icon: <FaClipboardList className="action-icon" />
        },
        {
          id: 5,
          texto: 'Confirma la reserva de una cita en un horario disponible',
          icon: <FaCheckCircle className="action-icon" />
        },
        {
          id: 11,
          texto: 'Solicita la cancelación de una cita previamente programada',
          icon: <FaTimesCircle className="action-icon" />
        }
      ]
    },
    {
      id: 3,
      actor: 'Paciente',
      icon: <FaMoneyBillWave />,
      color: '#007acc',
      acciones: [
        {
          id: 6,
          texto: 'Realiza el pago de una consulta mediante las opciones ofrecidas por el sistema',
          icon: <FaMoneyBillWave className="action-icon" />
        },
        {
          id: 7,
          texto: 'Recibe la factura correspondiente al pago realizado',
          icon: <FaFileInvoiceDollar className="action-icon" />
        },
        {
          id: 8,
          texto: 'Realiza el pago de un tratamiento odontológico',
          icon: <FaMoneyBillWave className="action-icon" />
        },
        {
          id: 9,
          texto: 'Recibe el modelo de pago del tratamiento solicitado (contado, cuotas, paquete, etc.)',
          icon: <FaClipboardList className="action-icon" />
        },
        {
          id: 10,
          texto: 'Selecciona el modelo de pago de tratamiento dentro de las opciones generadas por el sistema',
          icon: <FaCheckCircle className="action-icon" />
        }
      ]
    },
    {
      id: 4,
      actor: 'Paciente',
      icon: <FaTooth />,
      color: '#007acc',
      acciones: [
        {
          id: 13,
          texto: 'Recibe notificación de que una cita debe ser reprogramada por cambios en la agenda del consultorio',
          icon: <FaBell className="action-icon" />
        },
        {
          id: 15,
          texto: 'Revisa el historial de tratamientos registrados',
          icon: <FaHistory className="action-icon" />
        }
      ]
    },
    {
      id: 5,
      actor: 'Dentista',
      icon: <FaUserMd />,
      color: '#28a745',
      acciones: [
        {
          id: 14,
          texto: 'Registra en el sistema los tratamientos realizados al Paciente',
          icon: <FaEdit className="action-icon" />
        },
        {
          id: 16,
          texto: 'Consulta su propia agenda de citas',
          icon: <FaSearch className="action-icon" />
        },
        {
          id: 17,
          texto: 'Solicita al sistema la generación de su agenda diaria de trabajo',
          icon: <FaPrint className="action-icon" />
        },
        {
          id: 19,
          texto: 'Registra el costo de un tratamiento dentro del sistema',
          icon: <FaEdit className="action-icon" />
        },
        {
          id: 20,
          texto: 'Actualiza el costo de un tratamiento previamente registrado',
          icon: <FaEdit className="action-icon" />
        }
      ]
    },
    {
      id: 6,
      actor: 'Asistente',
      icon: <FaUserFriends />,
      color: '#ff9900',
      acciones: [
        {
          id: 21,
          texto: 'Consulta la agenda diaria de citas',
          icon: <FaSearch className="action-icon" />
        },
        {
          id: 22,
          texto: 'Recibe la agenda diaria con las citas del día',
          icon: <FaClipboardList className="action-icon" />
        },
        {
          id: 23,
          texto: 'Cancela una cita por solicitud del Dentista o por reprogramación interna del consultorio',
          icon: <FaTrash className="action-icon" />
        }
      ]
    },
    {
      id: 7,
      actor: 'Sistema',
      icon: <FaClipboardList />,
      color: '#6633cc',
      acciones: [
        {
          id: 4,
          texto: 'Devuelve al Paciente la lista de fechas y horarios disponibles para reservar una cita',
          icon: <FaClipboardList className="action-icon" />
        },
        {
          id: 7,
          texto: 'Genera y devuelve al Paciente la factura correspondiente al pago realizado',
          icon: <FaFileInvoiceDollar className="action-icon" />
        },
        {
          id: 9,
          texto: 'Genera el modelo de pago del tratamiento solicitado (contado, cuotas, paquete, etc.)',
          icon: <FaClipboardList className="action-icon" />
        },
        {
          id: 12,
          texto: 'Confirma la cancelación y libera el horario de la agenda',
          icon: <FaCheckCircle className="action-icon" />
        },
        {
          id: 13,
          texto: 'Notifica al Paciente que una cita debe ser reprogramada por cambios en la agenda del consultorio',
          icon: <FaBell className="action-icon" />
        },
        {
          id: 15,
          texto: 'Genera y devuelve el historial completo de tratamientos del Paciente',
          icon: <FaHistory className="action-icon" />
        },
        {
          id: 17,
          texto: 'Genera la agenda diaria de trabajo del Dentista',
          icon: <FaPrint className="action-icon" />
        },
        {
          id: 22,
          texto: 'Genera y devuelve la agenda diaria con las citas del día',
          icon: <FaClipboardList className="action-icon" />
        }
      ]
    }
  ];

  return (
    <div className="lista-container">
      <h1 className="page-title">Lista de Acontecimientos</h1>
      
      {/* Introducción */}
      <div className="intro-section">
        <div className="intro-card">
          <div className="intro-header">
            <FaClipboardList className="intro-icon" />
            <h2>Eventos del Sistema Dental</h2>
          </div>
          <div className="intro-content">
            <p>
              La siguiente lista describe los <strong>acontecimientos principales</strong> que ocurren 
              en el sistema de información del Consultorio Dental Sonrisa Saludable. Cada evento 
              representa una interacción entre los actores del sistema y está organizado por 
              categorías para facilitar su comprensión.
            </p>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">{acontecimientos.length}</div>
                <div className="stat-label">Categorías</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">23</div>
                <div className="stat-label">Acontecimientos Totales</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4</div>
                <div className="stat-label">Actores Principales</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leyenda de actores */}
      <div className="legend-section">
        <h3>Leyenda de Actores</h3>
        <div className="actors-legend">
          <div className="actor-badge" style={{ '--actor-color': '#007acc' }}>
            <FaUser />
            <span>Paciente</span>
          </div>
          <div className="actor-badge" style={{ '--actor-color': '#28a745' }}>
            <FaUserMd />
            <span>Dentista</span>
          </div>
          <div className="actor-badge" style={{ '--actor-color': '#ff9900' }}>
            <FaUserFriends />
            <span>Asistente</span>
          </div>
          <div className="actor-badge" style={{ '--actor-color': '#6633cc' }}>
            <FaClipboardList />
            <span>Sistema</span>
          </div>
        </div>
      </div>

      {/* Lista de acontecimientos por actor */}
      <div className="events-container">
        {acontecimientos.map((actor) => (
          <div key={actor.id} className="actor-section">
            <div className="actor-header" style={{ backgroundColor: actor.color }}>
              <div className="actor-title">
                {actor.icon}
                <h3>{actor.actor}</h3>
                <span className="events-count">{actor.acciones.length} eventos</span>
              </div>
              <div className="actor-color" style={{ backgroundColor: actor.color }}></div>
            </div>

            <div className="events-list">
              {actor.acciones.map((accion) => (
                <div key={accion.id} className="event-card">
                  <div className="event-number">{accion.id}</div>
                  <div className="event-content">
                    <div className="event-header">
                      {accion.icon}
                      <h4>Evento {accion.id}</h4>
                    </div>
                    <p className="event-description">{accion.texto}</p>
                    <div className="event-footer">
                      <div className="event-actor">
                        <span className="actor-label">Actor:</span>
                        <span className="actor-name">{actor.actor}</span>
                      </div>
                      <div className="event-type">
                        <span className="type-label">Tipo:</span>
                        <span className="type-name">
                          {accion.id <= 5 ? 'Inicio' : 
                           accion.id <= 12 ? 'Procesamiento' : 
                           accion.id <= 18 ? 'Consulta' : 'Actualización'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Resumen y análisis */}
      <div className="summary-section">
        <div className="summary-card">
          <h3>Análisis de la Lista de Acontecimientos</h3>
          <div className="summary-content">
            <div className="analysis-grid">
              <div className="analysis-item">
                <div className="analysis-icon"></div>
                <div className="analysis-text">
                  <h4>Estructura Organizada</h4>
                  <p>Los eventos están categorizados por actor para facilitar el análisis</p>
                </div>
              </div>
              <div className="analysis-item">
                <div className="analysis-icon"></div>
                <div className="analysis-text">
                  <h4>Flujo Continuo</h4>
                  <p>Los eventos forman un ciclo completo de atención al paciente</p>
                </div>
              </div>
              <div className="analysis-item">
                <div className="analysis-icon"></div>
                <div className="analysis-text">
                  <h4>Enfoque Centrado</h4>
                  <p>La mayoría de eventos giran alrededor de la experiencia del paciente</p>
                </div>
              </div>
              <div className="analysis-item">
                <div className="analysis-icon"></div>
                <div className="analysis-text">
                  <h4>Automatización</h4>
                  <p>El sistema automatiza procesos clave como facturación y agenda</p>
                </div>
              </div>
            </div>
            
            <div className="workflow-section">
              <h4>Flujo de Trabajo Principal</h4>
              <div className="workflow-steps">
                <div className="workflow-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h5>Registro y Autenticación</h5>
                    <p>Paciente se registra e inicia sesión en el sistema</p>
                  </div>
                </div>
                <div className="workflow-arrow">→</div>
                <div className="workflow-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h5>Programación de Citas</h5>
                    <p>Reserva, confirmación y posible cancelación de citas</p>
                  </div>
                </div>
                <div className="workflow-arrow">→</div>
                <div className="workflow-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h5>Tratamientos y Pagos</h5>
                    <p>Ejecución de tratamientos y gestión de pagos</p>
                  </div>
                </div>
                <div className="workflow-arrow">→</div>
                <div className="workflow-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h5>Documentación</h5>
                    <p>Generación de facturas e historiales médicos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default ListaDeAcontecimientos;