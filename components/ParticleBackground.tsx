import React, { useRef, useEffect } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 120;
    
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 180,
      isPressed: false
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      angle: number;
      spin: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2.5 + 1;
        this.speedX = (Math.random() * 0.6 - 0.3);
        this.speedY = (Math.random() * 0.6 - 0.3);
        this.angle = Math.random() * Math.PI * 2;
        this.spin = Math.random() * 0.02 - 0.01;
        
        const colors = [
          'rgba(173, 216, 230, ', // Light blue
          'rgba(147, 51, 234, ',  // Purple
          'rgba(59, 130, 246, ',  // Blue
          'rgba(236, 72, 153, '   // Pink/Magenta
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.angle += this.spin;
        this.x += this.speedX + Math.sin(this.angle) * 0.2;
        this.y += this.speedY + Math.cos(this.angle) * 0.2;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          const push = mouse.isPressed ? -force * 8 : force * 4;
          this.x -= Math.cos(angle) * push;
          this.y -= Math.sin(angle) * push;
        }

        // Boundary wrap
        if (this.x > canvas.width + 20) this.x = -20;
        else if (this.x < -20) this.x = canvas.width + 20;

        if (this.y > canvas.height + 20) this.y = -20;
        else if (this.y < -20) this.y = canvas.height + 20;
      }

      draw() {
        if (!ctx) return;
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const proximityAlpha = distance < mouse.radius ? 1 : 0.4;

        ctx.fillStyle = this.color + proximityAlpha + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, distance < mouse.radius ? this.size * 1.5 : this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const connect = () => {
      if (!ctx) return;
      const maxDistance = 140;
      const maxDistanceSq = maxDistance * maxDistance;

      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distanceSq = dx * dx + dy * dy;

          if (distanceSq < maxDistanceSq) {
            const opacity = (1 - (distanceSq / maxDistanceSq)) * 0.35;
            ctx.strokeStyle = `rgba(173, 216, 230, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawResonanceRings = () => {
      if (!ctx || mouse.x < 0 || mouse.y < 0) return;
      // Draw subtle reactive aura around mouse
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, mouse.radius);
      gradient.addColorStop(0, 'rgba(173, 216, 230, 0.08)');
      gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.04)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawResonanceRings();

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      connect();

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    init();
    animate();

    const resizeHandler = () => {
      resizeCanvas();
    };

    const mouseMoveHandler = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const mouseLeaveHandler = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const mouseDownHandler = () => {
      mouse.isPressed = true;
    };

    const mouseUpHandler = () => {
      mouse.isPressed = false;
    };

    window.addEventListener('resize', resizeHandler);
    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseleave', mouseLeaveHandler);
    window.addEventListener('mousedown', mouseDownHandler);
    window.addEventListener('mouseup', mouseUpHandler);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('mouseleave', mouseLeaveHandler);
      window.removeEventListener('mousedown', mouseDownHandler);
      window.removeEventListener('mouseup', mouseUpHandler);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-b from-[#0b0c16] via-[#100c24] to-[#07080f]" 
    />
  );
};

export default ParticleBackground;
