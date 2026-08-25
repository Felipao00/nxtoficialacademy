"use client";

import { useEffect, useRef, useState } from "react";

export default function Demo() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const scrollStartLeft = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto scroll com requestAnimationFrame
  useEffect(() => {
    if (!isVisible || isPaused || isDragging) return;

    let lastTime = 0;
    const speed = 0.8; // Velocidade do scroll

    const animate = (timestamp: number) => {
      if (lastTime === 0) lastTime = timestamp;
      const delta = timestamp - lastTime;
      lastTime = timestamp;

      if (scrollRef.current) {
        const container = scrollRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll - 5) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += speed * (delta / 16);
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible, isPaused, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    dragStartX.current = e.clientX;
    if (scrollRef.current) {
      scrollStartLeft.current = scrollRef.current.scrollLeft;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const dx = e.clientX - dragStartX.current;
    scrollRef.current.scrollLeft = scrollStartLeft.current - dx;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    dragStartX.current = e.touches[0].clientX;
    if (scrollRef.current) {
      scrollStartLeft.current = scrollRef.current.scrollLeft;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const dx = e.touches[0].clientX - dragStartX.current;
    scrollRef.current.scrollLeft = scrollStartLeft.current - dx;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const banners = [
    { image: "/images/banner-1.png", name: "Ferramenta 1" },
    { image: "/images/banner-2.png", name: "Ferramenta 2" },
    { image: "/images/banner-3.png", name: "Ferramenta 3" },
    { image: "/images/banner-4.png", name: "Ferramenta 4" },
    { image: "/images/banner-5.png", name: "Ferramenta 5" },
    { image: "/images/banner-6.png", name: "Ferramenta 6" }
  ];

  const loopedBanners = [...banners, ...banners, ...banners];

  return (
    <section ref={sectionRef} className="py-10 sm:py-16 bg-black overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2 sm:mb-3">
            O que você vai{" "}
            <span className="text-emerald-400">encontrar</span>
          </h2>
          <p className="text-xs sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Cada ferramenta tem seu próprio módulo com explicações de como usar e para que serve.
          </p>
        </div>

        <div 
          className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div 
            ref={scrollRef}
            className="flex gap-3 sm:gap-5 overflow-x-auto cursor-grab active:cursor-grabbing select-none py-3"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch"
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {loopedBanners.map((banner, index) => (
              <div
                key={index}
                className="flex-shrink-0 transition-all duration-300 hover:-translate-y-2"
                style={{ width: "220px" }}
              >
                <div className="relative rounded-xl overflow-hidden border border-white/5 transition-all duration-300">
                  <div className="relative">
                    <img
                      src={banner.image}
                      alt={banner.name}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                      draggable={false}
                    />
                    
                    {/* BORRÃO SUAVE */}
                    <div className="absolute bottom-8 left-0 right-0 h-14 backdrop-blur-[6px]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-500 text-[10px] sm:text-xs mt-4">
          Arraste para o lado e veja mais ✨
        </p>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}