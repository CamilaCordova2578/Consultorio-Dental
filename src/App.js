import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import AnalisisEstructurado from './pages/AnalisisEstructurado';
import OrientadoObjetos from './pages/OrientadoObjetos';
import MarcoTeorico from './pages/MarcoTeorico';
import Contactos from './pages/Contactos';
import Video from './pages/Video';

// Nuevos componentes para las rutas del navbar
import DeclaracionDePropositos from './pages/DeclaracionDePropositos';
import DiagramaDeContexto from './pages/DiagramaDeContexto';
import ListaDeAcontecimientos from './pages/ListaDeAcontecimientos';
import DiagramaFlujoDeDatos from './pages/DiagramaFlujoDeDatos';

// Nuevas rutas para Marco Teórico
import Introduccion from './pages/Introduccion';
import Antecedentes from './pages/Antecedentes';
import PlanteamientoProblema from './pages/PlanteamientoProblema';
import ArbolProblemas from './pages/ArbolProblemas';
import FormulacionProblema from './pages/FormulacionProblema';
import PropositoEstudio from './pages/PropositoEstudio';
import MetodoMediosInstrumentos from './pages/MetodoMediosInstrumentos';
import PlanificacionActividades from './pages/PlanificacionActividades';

// Nuevas rutas para Casos de Uso (Modelo de Comportamiento)
import CasoUsoNegocio from './pages/CasoUsoNegocio';
import CasoUsoSistemas from './pages/CasoUsoSistemas';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analisis-estructurado" element={<AnalisisEstructurado />} />
          <Route path="/orientado-objetos" element={<OrientadoObjetos />} />
          <Route path="/marco-teorico" element={<MarcoTeorico />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/video" element={<Video />} />
          
          {/* Rutas existentes del navbar - Análisis Estructurado */}
          <Route path="/declaracion-propositos" element={<DeclaracionDePropositos />} />
          <Route path="/diagrama-contexto" element={<DiagramaDeContexto />} />
          <Route path="/lista-acotecimientos" element={<ListaDeAcontecimientos />} />
          <Route path="/diagrama-flujo-datos" element={<DiagramaFlujoDeDatos />} />
          
          {/* Nuevas rutas para Marco Teórico */}
          <Route path="/introduccion" element={<Introduccion />} />
          <Route path="/antecedentes" element={<Antecedentes />} />
          <Route path="/planteamiento-del-problema" element={<PlanteamientoProblema />} />
          <Route path="/arbol-de-problemas" element={<ArbolProblemas />} />
          <Route path="/formulacion-del-problema" element={<FormulacionProblema />} />
          <Route path="/proposito-del-estudio" element={<PropositoEstudio />} />
          <Route path="/metodo-medios-instrumentos" element={<MetodoMediosInstrumentos />} />
          <Route path="/planificacion-actividades" element={<PlanificacionActividades />} />
          
          {/* Nuevas rutas para Casos de Uso */}
          <Route path="/caso-uso-negocio" element={<CasoUsoNegocio />} />
          <Route path="/caso-uso-sistemas" element={<CasoUsoSistemas />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;