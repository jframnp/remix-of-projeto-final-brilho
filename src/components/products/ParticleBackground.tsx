import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  sparkle: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles (10-20 diamond shapes as specified)
    const initParticles = () => {
      particlesRef.current = [];
      // 10-20 particles as specified
      const particleCount = Math.min(20, Math.max(10, Math.floor((canvas.width * canvas.height) / 30000)));
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 10 + 4, // Larger diamonds
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3 - 0.2, // Slight upward drift
          opacity: Math.random() * 0.6 + 0.3,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          sparkle: Math.random() * Math.PI * 2,
        });
      }
    };

    initParticles();

    const drawDiamond = (
      x: number, 
      y: number, 
      size: number, 
      rotation: number, 
      opacity: number,
      sparklePhase: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Diamond shape
      ctx.beginPath();
      ctx.moveTo(0, -size * 1.2);
      ctx.lineTo(size * 0.8, 0);
      ctx.lineTo(0, size * 1.2);
      ctx.lineTo(-size * 0.8, 0);
      ctx.closePath();
      
      // Gradient fill with sparkle effect
      const sparkleIntensity = (Math.sin(sparklePhase) + 1) / 2;
      const baseOpacity = opacity * (0.7 + sparkleIntensity * 0.3);
      
      const gradient = ctx.createLinearGradient(-size, -size, size, size);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${baseOpacity})`);
      gradient.addColorStop(0.3, `rgba(255, 220, 220, ${baseOpacity * 0.9})`);
      gradient.addColorStop(0.6, `rgba(255, 180, 180, ${baseOpacity * 0.7})`);
      gradient.addColorStop(1, `rgba(255, 150, 150, ${baseOpacity * 0.5})`);
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Add inner highlight for sparkle
      if (sparkleIntensity > 0.7) {
        ctx.beginPath();
        ctx.arc(0, -size * 0.3, size * 0.15, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${sparkleIntensity * 0.8})`;
        ctx.fill();
      }
      
      // Add subtle edge glow
      ctx.beginPath();
      ctx.moveTo(0, -size * 1.2);
      ctx.lineTo(size * 0.8, 0);
      ctx.lineTo(0, size * 1.2);
      ctx.lineTo(-size * 0.8, 0);
      ctx.closePath();
      ctx.strokeStyle = `rgba(255, 255, 255, ${baseOpacity * 0.3})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      
      ctx.restore();
    };

    const animate = () => {
      timeRef.current += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Float animation - 5s as specified
        particle.x += particle.speedX;
        particle.y += particle.speedY + Math.sin(timeRef.current + particle.sparkle) * 0.2;
        particle.rotation += particle.rotationSpeed;
        particle.sparkle += 0.03;

        // Wrap around edges with smooth transition
        if (particle.y < -20) particle.y = canvas.height + 20;
        if (particle.y > canvas.height + 20) particle.y = -20;
        if (particle.x < -20) particle.x = canvas.width + 20;
        if (particle.x > canvas.width + 20) particle.x = -20;

        drawDiamond(
          particle.x, 
          particle.y, 
          particle.size, 
          particle.rotation, 
          particle.opacity,
          particle.sparkle
        );
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default ParticleBackground;
