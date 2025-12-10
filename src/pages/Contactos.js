import React, { useState } from 'react';
import '../styles/Contactos.css';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaCalendarAlt,
  FaUserMd,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';

function Contactos() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Por favor complete todos los campos requeridos'
      });
      return;
    }

    // Simulación de envío exitoso
    setFormStatus({
      submitted: true,
      error: false,
      message: '¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.'
    });

    // Resetear formulario
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    });

    // Resetear mensaje después de 5 segundos
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="contactos-container">
      <h1 className="page-title">Contactos</h1>

      {/* Introducción */}
      <div className="intro-section">
        <div className="intro-card">
          <div className="intro-header">
            <FaUserMd className="intro-icon" />
            <div>
              <h2>Consultorio Dental Sonrisa Saludable</h2>
              <p className="intro-subtitle">Tu salud dental es nuestra prioridad</p>
            </div>
          </div>
          <div className="intro-content">
            <p>
              Estamos aquí para atenderte y responder a todas tus preguntas. 
              Contáctanos a través de cualquiera de nuestros canales disponibles 
              y nuestro equipo te brindará la mejor atención personalizada.
            </p>
          </div>
        </div>
      </div>

      {/* Información de contacto principal */}
      <div className="contact-info-section">
        <h2>Información de Contacto</h2>
        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-icon phone">
              <FaPhone />
            </div>
            <div className="contact-content">
              <h3>Teléfonos</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label">Consultas y Citas:</span>
                  <a href="tel:+59170000000" className="contact-value">+591 7000 0000</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Emergencias 24/7:</span>
                  <a href="tel:+59170000001" className="contact-value emergency">+591 7000 0001</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">WhatsApp:</span>
                  <a href="https://wa.me/59170000000" target="_blank" rel="noopener noreferrer" className="contact-value whatsapp">
                    <FaWhatsapp /> +591 7000 0000
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon email">
              <FaEnvelope />
            </div>
            <div className="contact-content">
              <h3>Correo Electrónico</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label">Información General:</span>
                  <a href="mailto:info@sonrisasaludable.com" className="contact-value">info@sonrisasaludable.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Citas y Reservas:</span>
                  <a href="mailto:citas@sonrisasaludable.com" className="contact-value">citas@sonrisasaludable.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Facturación:</span>
                  <a href="mailto:facturacion@sonrisasaludable.com" className="contact-value">facturacion@sonrisasaludable.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon location">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-content">
              <h3>Ubicación</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label">Dirección:</span>
                  <span className="contact-value">Av. Principal #123, Zona Central, La Paz, Bolivia</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Referencia:</span>
                  <span className="contact-value">Frente al Parque Urbano, Edificio Dental Center, Piso 3</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon schedule">
              <FaClock />
            </div>
            <div className="contact-content">
              <h3>Horario de Atención</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label">Lunes a Viernes:</span>
                  <span className="contact-value">8:00 AM - 8:00 PM</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Sábados:</span>
                  <span className="contact-value">9:00 AM - 2:00 PM</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Domingos:</span>
                  <span className="contact-value">Solo Emergencias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario de contacto */}
      <div className="form-section">
        <div className="form-header">
          <FaPaperPlane className="form-icon" />
          <h2>Envíanos un Mensaje</h2>
          <p>Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre">
                Nombre Completo <span className="required">*</span>
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ingresa tu nombre completo"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Correo Electrónico <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="+591 7000 0000"
              />
            </div>

            <div className="form-group">
              <label htmlFor="asunto">Asunto</label>
              <select
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
              >
                <option value="">Selecciona un asunto</option>
                <option value="consulta">Consulta General</option>
                <option value="cita">Solicitud de Cita</option>
                <option value="emergencia">Emergencia Dental</option>
                <option value="presupuesto">Solicitud de Presupuesto</option>
                <option value="facturacion">Facturación</option>
                <option value="otros">Otros</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">
              Mensaje <span className="required">*</span>
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Describe tu consulta o necesidad..."
              rows="6"
              required
            ></textarea>
          </div>

          {formStatus.message && (
            <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
              {formStatus.error ? <FaExclamationCircle /> : <FaCheckCircle />}
              <span>{formStatus.message}</span>
            </div>
          )}

          <button type="submit" className="submit-btn">
            <FaPaperPlane />
            Enviar Mensaje
          </button>
        </form>
      </div>

      {/* Equipo médico */}
      <div className="team-section">
        <h2>Nuestro Equipo Médico</h2>
        <div className="team-cards">
          <div className="team-card">
            <div className="team-photo">
              <div className="photo-placeholder">DR</div>
            </div>
            <div className="team-info">
              <h3>Dr. Carlos Rodríguez</h3>
              <p className="team-specialty">Odontólogo General</p>
              <p className="team-contact">c.rodriguez@sonrisasaludable.com</p>
              <p className="team-schedule">
                <FaCalendarAlt /> Lunes, Miércoles, Viernes
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-photo">
              <div className="photo-placeholder">DRA</div>
            </div>
            <div className="team-info">
              <h3>Dra. Ana Martínez</h3>
              <p className="team-specialty">Ortodoncista</p>
              <p className="team-contact">a.martinez@sonrisasaludable.com</p>
              <p className="team-schedule">
                <FaCalendarAlt /> Martes, Jueves, Sábados
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-photo">
              <div className="photo-placeholder">DR</div>
            </div>
            <div className="team-info">
              <h3>Dr. Luis Fernández</h3>
              <p className="team-specialty">Cirujano Dental</p>
              <p className="team-contact">l.fernandez@sonrisasaludable.com</p>
              <p className="team-schedule">
                <FaCalendarAlt /> Lunes a Viernes
              </p>
            </div>
          </div>
        </div>
      </div>

     

      {/* Mapa y ubicación */}
      <div className="map-section">
        <h2>Ubicación del Consultorio</h2>
        <div className="map-container">
          <div className="map-placeholder">
            <div className="map-marker">
              <FaMapMarkerAlt />
            </div>
            <div className="map-info">
              <h3>Consultorio Dental Sonrisa Saludable</h3>
              <p>Av. Principal #123, Zona Central, La Paz, Bolivia</p>
              <div className="map-instructions">
                <h4>Instrucciones para llegar:</h4>
                <ul>
                  <li>📍 A 2 cuadras del Parque Urbano Central</li>
                  <li>🚗 Estacionamiento disponible en el edificio</li>
                  <li>🚍 Líneas de micro: 123, 456, 789</li>
                  <li>🚕 Taxis recomendados: Radio Taxi 123-4567</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="map-iframe">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.3568756721025!2d-68.13332178590865!3d-16.499944788614758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edfb71c731cd3%3A0x9b1227df7e52aa54!2sParque%20Urbano%20Central%2C%20La%20Paz!5e0!3m2!1ses-419!2sbo!4v1709871922273!5m2!1ses-419!2sbo"
                width="100%"
                height="423"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Consultorio Dental"
            ></iframe>
            </div>

        </div>
      </div>

      {/* FAQ o preguntas frecuentes */}
      <div className="faq-section">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>¿Cómo puedo agendar una cita?</h3>
            <p>
              Puedes agendar una cita llamando al +591 7000 0000, enviando un correo a 
              citas@sonrisasaludable.com o completando nuestro formulario de contacto.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Aceptan seguros médicos?</h3>
            <p>
              Sí, trabajamos con las principales aseguradoras del país. Contáctanos 
              para verificar la cobertura de tu seguro.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué debo hacer en caso de emergencia dental?</h3>
            <p>
              Llama inmediatamente al +591 7000 0001 (emergencias 24/7) o acude directamente 
              a nuestro consultorio. Estamos preparados para atender emergencias.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Cuál es el costo de la primera consulta?</h3>
            <p>
              La primera consulta de evaluación tiene un costo promocional de Bs. 50. 
              Incluye evaluación completa y diagnóstico inicial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactos;