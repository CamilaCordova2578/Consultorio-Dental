// Video.js (versión actualizada con colores de contactos)
import React from 'react';
import '../styles/Video.css';

function Video() {
  return (
    <div className="video-page-simple">
      <div className="video-container-simple">
        <h1 className="video-main-title">Video del Proyecto</h1>
        <p className="video-subtitle">
          Mira la presentación completa de nuestro proyecto
        </p>
        
        <div className="video-responsive">
          <iframe
            src="https://www.youtube.com/embed/Ldps2RKynaY"
            title="Video del Proyecto"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="direct-link">
          <a 
            href="https://youtu.be/Ldps2RKynaY?si=KVDFtibnL6l00222" 
            target="_blank" 
            rel="noopener noreferrer"
            className="video-action-btn"
          >
            Ver en YouTube
          </a>
        </div>
      </div>
    </div>
  );
}

export default Video;