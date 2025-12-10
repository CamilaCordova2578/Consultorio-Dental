import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>&copy; {currentYear} Consultorio Sonrisa Dental | Todos los derechos reservados</p>
      
      <div className="social-links">
        <a 
          href="https://www.facebook.com" 
          className="social-link facebook" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        
        <a 
          href="https://www.instagram.com" 
          className="social-link instagram" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        
        <a 
          href="https://wa.me/59170000000" 
          className="social-link whatsapp" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;