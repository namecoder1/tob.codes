"use client";

import Image from "next/image";
import { useState } from "react";
import { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CertificateSwapperProps {
  xCertificate: StaticImageData;
  pCertificate: StaticImageData;
}

function CertificateSwapper({ xCertificate, pCertificate }: CertificateSwapperProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const certificates = [
    { id: "x", image: xCertificate, alt: "Certificate CS50X" },
    { id: "p", image: pCertificate, alt: "Certificate CS50P" }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full">
      {/* Slider container */}
      <div className="relative overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {certificates.map((cert) => (
            <div key={cert.id} className="w-full flex-shrink-0 flex justify-center">
              <Image
                src={cert.image}
                alt={cert.alt}
                className="max-w-full md:max-w-[70%] lg:max-w-[650px] h-auto object-contain"
                width={800}
                height={600}
                priority
              />
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 gap-2">
        {certificates.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === index 
                ? "bg-blue-500 w-6" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CertificateSwapper;