"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacityDirection: number;
  color: string;
  sparkle: boolean;
}

export default function GoldDustCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Color palette of royal 22K gold dust & diamond glints
    const goldTones = [
      "rgba(197, 160, 89, ", // #c5a059
      "rgba(215, 190, 149, ", // #d7be95
      "rgba(247, 234, 196, ", // #f7eac4
      "rgba(140, 104, 52, ",  // #8c6834
      "rgba(255, 250, 235, ", // diamond white-gold
    ];

    const particleCount = Math.min(35, Math.floor(width / 30));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: -Math.random() * 0.45 - 0.15, // gently drift upwards like gold dust
        opacity: Math.random() * 0.6 + 0.2,
        opacityDirection: (Math.random() - 0.5) * 0.015,
        color: goldTones[Math.floor(Math.random() * goldTones.length)],
        sparkle: Math.random() > 0.6,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.parentElement?.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Move particle
        p.x += p.speedX;
        p.y += p.speedY;

        // Subtle reaction to mouse proximity (drift away slightly)
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100 && dist > 0) {
          p.x += (dx / dist) * 0.6;
          p.y += (dy / dist) * 0.6;
        }

        // Oscillate opacity for natural shimmer
        p.opacity += p.opacityDirection;
        if (p.opacity > 0.85 || p.opacity < 0.15) {
          p.opacityDirection = -p.opacityDirection;
        }

        // Wrap around boundaries
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw particle with soft halo
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.shadowBlur = p.sparkle ? 8 : 4;
        ctx.shadowColor = "rgba(197, 160, 89, 0.6)";
        ctx.fill();

        // If it's a sparkling diamond facet, draw a tiny 4-point star glint
        if (p.sparkle && p.opacity > 0.6) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity * 0.8})`;
          ctx.lineWidth = 0.6;
          const glintSize = p.size * 2.2;
          ctx.beginPath();
          ctx.moveTo(p.x - glintSize, p.y);
          ctx.lineTo(p.x + glintSize, p.y);
          ctx.moveTo(p.x, p.y - glintSize);
          ctx.lineTo(p.x, p.y + glintSize);
          ctx.stroke();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.parentElement?.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 opacity-70 block w-full h-full"
      aria-hidden="true"
    />
  );
}

