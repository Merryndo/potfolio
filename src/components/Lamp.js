// src/components/Lamp.js
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Lamp.css'; // Asegúrate de tener este archivo CSS

const Lamp = ({ onClick }) => {
  const [props, api] = useSpring(() => ({
    transform: 'rotate(0deg)',
    config: { tension: 300, friction: 50 }, // Ajusta la tensión y la fricción para más balanceo
  }));

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setMouseX(x);
    setMouseY(y);
  };

  useEffect(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const angleX = (mouseX - centerX) / centerX * 85; // Ajusta el factor para más o menos movimiento
    const angleY = (mouseY - centerY) / centerY * -85; // Ajusta el factor para más o menos movimiento
    
    if (isMouseOver) {
      api.start({
        transform: `rotate(${angleX}deg)`,
        reset: true,
      });
    } else {
      api.start({
        transform: 'rotate(0deg)',
        reset: true,
      });
    }
  }, [mouseX, mouseY, isMouseOver, api]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="lamp-container"
      onClick={onClick}
    >
      <animated.img
        src="/lampara.png" // Ajusta el path a tu imagen
        alt="Lamp"
        className="lamp-image"
        style={props}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      />
    </div>
  );
};

export default Lamp;
