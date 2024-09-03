import React, { useEffect } from 'react';
import './LightSwitch.css';

const LightSwitch = () => {
  const handleSwitchClick = () => {
    window.location.href = '/portfolio.html'; // Redirige a la nueva página HTML
  };

  useEffect(() => {
    const neonText = document.querySelector('.neon-text');
    // Detener el parpadeo después de 3 segundos
    const timer = setTimeout(() => {
      if (neonText) {
        neonText.style.animation = 'none';
        neonText.style.textShadow = 
          '0 0 5px #f0e68c, ' +
          '0 0 10px #f0e68c, ' +
          '0 0 15px #f0e68c, ' +
          '0 0 20px #f0e68c, ' +
          '0 0 40px #f0e68c';
      }
    }, 3000);

    // Limpiar el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="switch-container">
      <div className="neon-text">Activa tu luz</div>
      <label className="light-switch">
        <input type="checkbox" onClick={handleSwitchClick} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default LightSwitch;
