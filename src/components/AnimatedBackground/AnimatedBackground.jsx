import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create animated gradient mesh
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(time * 0.001) * 100,
        canvas.height * 0.3 + Math.cos(time * 0.001) * 100,
        0,
        canvas.width * 0.3,
        canvas.height * 0.3,
        400 + Math.sin(time * 0.002) * 100
      );
      
      gradient1.addColorStop(0, 'rgba(139, 92, 246, 0.4)');
      gradient1.addColorStop(0.5, 'rgba(59, 130, 246, 0.2)');
      gradient1.addColorStop(1, 'rgba(139, 92, 246, 0)');
      
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.7 + Math.cos(time * 0.0015) * 150,
        canvas.height * 0.7 + Math.sin(time * 0.0015) * 150,
        0,
        canvas.width * 0.7,
        canvas.height * 0.7,
        500 + Math.cos(time * 0.003) * 150
      );
      
      gradient2.addColorStop(0, 'rgba(245, 158, 11, 0.3)');
      gradient2.addColorStop(0.5, 'rgba(239, 68, 68, 0.15)');
      gradient2.addColorStop(1, 'rgba(245, 158, 11, 0)');
      
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const gradient3 = ctx.createRadialGradient(
        canvas.width * 0.5 + Math.sin(time * 0.0008) * 200,
        canvas.height * 0.5 + Math.cos(time * 0.0008) * 200,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        600 + Math.sin(time * 0.001) * 200
      );
      
      gradient3.addColorStop(0, 'rgba(16, 185, 129, 0.2)');
      gradient3.addColorStop(0.5, 'rgba(59, 130, 246, 0.1)');
      gradient3.addColorStop(1, 'rgba(16, 185, 129, 0)');
      
      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      time += 16;
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="animated-background-canvas"
      />
      <div className="noise-texture" />
    </>
  );
};

export default AnimatedBackground;
