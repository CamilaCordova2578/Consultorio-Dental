import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    { path: "/", label: "Inicio" },
    { 
      label: "Marco Teórico ▾",
      submenu: [
        { path: "/introduccion", label: "Introducción" },
        { path: "/antecedentes", label: "Antecedentes" },
        { path: "/planteamiento-del-problema", label: "Planteamiento del Problema" },
        { path: "/arbol-de-problemas", label: "Árbol de Problemas" },
        { path: "/formulacion-del-problema", label: "Formulación del Problema" },
        { path: "/proposito-del-estudio", label: "Propósito del Estudio" },
        { path: "/metodo-medios-instrumentos", label: "Método, Medios e Instrumentos de Investigación" },
        { path: "/planificacion-actividades", label: "Planificación de Actividades" }
      ]
    },
    { 
      label: "Análisis Estructurado ▾",
      submenu: [
        { 
          label: "Modelo Ambiental ▸",
          submenu: [
            { path: "/declaracion-propositos", label: "Declaración de Propósitos" },
            { path: "/diagrama-contexto", label: "Diagrama de Contexto" },
            { path: "/lista-acotecimientos", label: "Lista de Acotecimientos" }
          ]
        },
        { 
          label: "Modelo de Comportamiento ▸",
          submenu: [
            { path: "/diagrama-flujo-datos", label: "Diagrama Flujo de Datos" },
            { path: "/caso-uso-negocio", label: "Caso de Uso de Negocio" },
            { path: "/caso-uso-sistemas", label: "Caso de Uso de Sistemas" }
          ]
        }
      ]
    },
    { path: "/orientado-objetos", label: "Orientado a Objetos" },
    { path: "/video", label: "Video" },
    { path: "/contactos", label: "Contactos" }
  ];

  const renderMenu = (items, level = 1, parentIndex = '') => {
    return (
      <ul className={`submenu level-${level}`}>
        {items.map((item, index) => {
          const itemKey = `${parentIndex}-${index}`;
          const isActive = activeMenu && activeMenu.startsWith(itemKey);
          
          return (
            <li 
              key={index}
              className={isActive ? 'active' : ''}
              onMouseEnter={() => setActiveMenu(itemKey)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {item.path ? (
                <Link to={item.path} className="submenu-link">
                  {item.label}
                </Link>
              ) : (
                <span className="submenu-label">{item.label}</span>
              )}
              {item.submenu && renderMenu(item.submenu, level + 1, itemKey)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <nav className="main-nav">
      <ul className="nav-list">
        {menuItems.map((item, index) => {
          const isActive = activeMenu && activeMenu.startsWith(`${index}`);
          
          return (
            <li 
              key={index}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onMouseEnter={() => setActiveMenu(`${index}`)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {item.path ? (
                <Link to={item.path} className="nav-link">
                  {item.label}
                </Link>
              ) : (
                <span className="nav-link">{item.label}</span>
              )}
              {item.submenu && renderMenu(item.submenu, 1, `${index}`)}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;