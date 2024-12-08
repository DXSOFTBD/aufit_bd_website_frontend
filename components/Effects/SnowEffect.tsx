'use client';

import { useEffect } from 'react';

const SnowEffect = () => {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      
      // Random properties for each snowflake
      const size = Math.random() * 5 + 2;
      const startingLeft = Math.random() * window.innerWidth;
      const animationDuration = Math.random() * 3 + 2;
      const opacity = Math.random() * 0.6 + 0.2;
      
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.left = `${startingLeft}px`;
      snowflake.style.animationDuration = `${animationDuration}s`;
      snowflake.style.opacity = `${opacity}`;
      
      document.body.appendChild(snowflake);
      
      // Remove snowflake after animation
      setTimeout(() => {
        snowflake.remove();
      }, animationDuration * 1000);
    };

    // Create snowflakes periodically
    const snowflakeInterval = setInterval(createSnowflake, 200);

    return () => {
      clearInterval(snowflakeInterval);
      // Clean up existing snowflakes
      document.querySelectorAll('.snowflake').forEach(flake => flake.remove());
    };
  }, []);

  return null;
};

export default SnowEffect;