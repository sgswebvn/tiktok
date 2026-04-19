// app/components/ImageSlider.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "/images/2.png",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg"
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  // Xử lý swipe (drag)
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 80; // độ nhạy kéo (càng nhỏ càng dễ swipe)

    if (info.offset.x > swipeThreshold) {
      goToPrevious();
    } else if (info.offset.x < -swipeThreshold) {
      goToNext();
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* Khu vực ảnh chính - hỗ trợ drag/swipe */}
      <motion.div
        className="relative aspect-square overflow-hidden rounded-3xl bg-zinc-100 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -50, right: 50 }}   // giới hạn kéo nhẹ
        onDragEnd={handleDragEnd}
        whileDrag={{ scale: 0.98 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image 
              src={images[currentIndex]} 
              alt={`Ảnh sản phẩm ${currentIndex + 1}`}
              fill 
              className="object-cover"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Nút trái phải (vẫn giữ để dễ dùng) */}
      <button 
        onClick={goToPrevious}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all active:scale-90 z-10"
        aria-label="Ảnh trước"
      >
        <ChevronLeft size={28} className="text-zinc-700" />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all active:scale-90 z-10"
        aria-label="Ảnh sau"
      >
        <ChevronRight size={28} className="text-zinc-700" />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center gap-3 mt-6">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              idx === currentIndex 
                ? 'bg-black scale-125' 
                : 'bg-zinc-300 hover:bg-zinc-400'
            }`}
            aria-label={`Đến ảnh ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}