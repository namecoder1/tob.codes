'use client'
import React, { useState, useEffect } from "react";

const AnimatedBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Sfondo animato */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-2xl pointer-events-none"
        style={{
          transform: `translate(${position.x / 100}px, ${position.y / 1}px)`,
          transition: "transform 0.1s ease-out",
        }}
      ></div>

      {/* Contenuto della pagina */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedBackground;