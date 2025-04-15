"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CertificateSwapperProps {
  xCertificate: StaticImageData;
  pCertificate: StaticImageData;
}

function CertificateSwapper({ xCertificate, pCertificate }: CertificateSwapperProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const certificates = [
    { id: "x", image: xCertificate, alt: "Certificate CS50X", title: "CS50's Introduction to Computer Science" },
    { id: "p", image: pCertificate, alt: "Certificate CS50P", title: "CS50's Introduction to Programming with Python" }
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  }, [certificates.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, isAutoPlaying, nextSlide]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Certificate title */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mx-4">
          {certificates[activeIndex].title}
        </h3>
      </div>
      
      {/* Slider container */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src={certificates[activeIndex].image}
                alt={certificates[activeIndex].alt}
                className="w-full h-auto"
                width={800}
                height={600}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation controls */}
        <div className="hidden md:flex absolute inset-x-0 top-1/2 -translate-y-1/2 justify-between px-4 z-10">
          <button 
            onClick={() => {
              prevSlide();
              setIsAutoPlaying(false);
            }}
            className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow hover:bg-white transition-all duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => {
              nextSlide();
              setIsAutoPlaying(false);
            }}
            className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow hover:bg-white transition-all duration-200"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Certificate selector */}
      <div className="flex justify-center mt-6 space-x-4">
        {certificates.map((cert, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`px-4 py-2 rounded-md transition-all duration-200 ${
              activeIndex === index 
                ? "bg-blue-600 text-white shadow-md" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            aria-label={`View ${cert.title}`}
          >
            CS50{cert.id.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CertificateSwapper;