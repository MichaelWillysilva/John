"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Eye, ArrowUpRight } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export default function InteractiveMouse() {
  const [cursorType, setCursorType] = useState<"default" | "project" | "link">("default");
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;

    const moveCursor = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;
      
      mouseX.set(currentX - 12);
      mouseY.set(currentY - 12);

      const distance = Math.hypot(currentX - lastX, currentY - lastY);

      if (distance > 15) {
        const id = particleIdRef.current++;
        
        const newParticle: Particle = {
          id,
          x: currentX,
          y: currentY,
          size: Math.random() * 4 + 2,
          color: cursorType === "project" ? "rgba(59, 130, 246, 0.5)" : "rgba(255, 255, 255, 0.4)"
        };

        setParticles((prev) => [...prev.slice(-15), newParticle]);
        
        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== id));
        }, 600);

        lastX = currentX;
        lastY = currentY;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="project"]')) {
        setCursorType("project");
      } else if (target.closest("a") || target.closest("button")) {
        setCursorType("link");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, cursorType]);

  const variants = {
    default: {
      width: 24,
      height: 24,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      border: "1px solid rgba(255, 255, 255, 0.4)",
    },
    link: {
      width: 48,
      height: 48,
      backgroundColor: "rgba(255, 255, 255, 1)",
      mixBlendMode: "difference" as const,
    },
    project: {
      width: 80,
      height: 80,
      backgroundColor: "rgb(59, 130, 246)", 
      borderRadius: "40px",
    }
  };

  return (
    <>
      {/* Camada das partículas */}
      <div className="pointer-events-none fixed top-0 left-0 w-screen h-screen z-50 overflow-hidden hidden lg:block">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 1, scale: 1, x: particle.x, y: particle.y }}
            animate={{ 
              opacity: 0, 
              scale: 0,
              y: particle.y + (Math.random() * 20 - 10),
              x: particle.x + (Math.random() * 20 - 10)
            }}
            transition={{ duration: 0.6 }}
            className="absolute rounded-full pointer-events-none mix-blend-screen blur-[0.5px]"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              marginLeft: -particle.size / 2,
              marginTop: -particle.size / 2,
            }}
          />
        ))}
      </div>

      {/* Círculo Principal do Mouse com transição corrigida para a Vercel */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 flex items-center justify-center rounded-full backdrop-blur-[1px] hidden lg:flex"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={cursorType}
        variants={variants}
        transition={{ duration: 0.1 }}
      >
        {cursorType === "project" && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-white font-semibold text-[10px] uppercase tracking-wider"
          >
            <Eye size={14} className="mb-0.5" />
            Ver
          </motion.div>
        )}
        
        {cursorType === "link" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <ArrowUpRight size={14} className="text-black" />
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
