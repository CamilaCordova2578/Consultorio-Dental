import React from 'react';
import Navbar from './Navbar';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo">
        <img 
          src="https://marketplace.canva.com/EAEtkL72dnE/1/0/1600w/canva-logo-consultorio-dental-azul-pastel-xeHgv-97YGY.jpg" 
          alt="Logo Dental" 
        />
        <h1>Sonrisa Dental</h1>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;