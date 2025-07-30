
"use client";

import { useEffect, useRef } from "react";

interface Circle {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };
  ttl: number;
  draw: () => void;
  update: () => void;
}

const MouseAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const circles: Circle[] = [];
    const mouse = { x: 0, y: 0 };

    const colors = [
      '#ff0000', // Red
  '#00ff00', // Green
  '#ffa500', // Orange
  '#ffffff', // White
  '#ff4500', // Orange-Red
  '#32cd32', // Lime Green
  '#ff5b14', // Bright Orange
  '#edf1f5', // Soft White
    ];

    class CircleImpl implements Circle {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: { x: number; y: number };
      ttl: number;

      constructor(x: number, y: number, radius: number, color: string, velocity: { x: number; y: number }) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.ttl = 300; // Time to live
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        this.ttl--;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.draw();
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      for (let i = 0; i < 2; i++) {
        const radius = Math.random() * 4 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const velocity = {
          x: (Math.random() - 0.5) * 4,
          y: (Math.random() - 0.5) * 4,
        };
        circles.push(new CircleImpl(mouse.x, mouse.y, radius, color, velocity));
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);
      circles.forEach((circle, index) => {
        if (circle.ttl <= 0) {
          circles.splice(index, 1);
        } else {
          circle.update();
        }
      });
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, pointerEvents: 'none' }} />;
};

export default MouseAnimation;
