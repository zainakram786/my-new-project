
"use client";

import { useEffect, useRef } from "react";

const MouseAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let time = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      time += 0.02; // Slower pulse
      ctx.clearRect(0, 0, width, height);

      const radius = 15;
      const pulse = 0.5 + Math.sin(time) * 0.4; // Pulse from 0.1 to 0.9

      // Create a radial gradient for the fill
      const gradient = ctx.createRadialGradient(
        mouse.current.x,
        mouse.current.y,
        0,
        mouse.current.x,
        mouse.current.y,
        radius
      );

      // Add color stops for the fill
      gradient.addColorStop(0, `rgba(0, 173, 238, ${pulse})`); // Center color pulses
      gradient.addColorStop(0.8, 'rgba(0, 173, 238, 0.1)');   // Mid color
      gradient.addColorStop(1, 'rgba(0, 173, 238, 0)');      // Outer edge is transparent

      ctx.fillStyle = gradient;

      // Draw the filled circle
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, radius, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.closePath();

      // Draw the glowing, blinking border
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = `rgba(0, 173, 238, ${pulse * 0.8})`; // Blinking stroke
      ctx.lineWidth = 2;
      ctx.shadowBlur = 10 + 5 * Math.sin(time); // Blinking glow
      ctx.shadowColor = 'rgba(0, 173, 238, 1)';
      ctx.stroke();
      ctx.closePath();

      // Reset shadow properties
      ctx.shadowBlur = 0;

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, pointerEvents: 'none' }} />;
};

export default MouseAnimation;
