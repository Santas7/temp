import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselProps {
  images: string[];
  className?: string;
}

export const Carousel = ({ images, className = "" }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className={`relative rounded-xl overflow-hidden ${className}`}>
        <img 
          src={images[0]} 
          alt="Project image" 
          className="w-full h-64 object-cover"
        />
      </div>
    );
  }

  return (
    <div className={`relative rounded-xl overflow-hidden ${className}`}>
      <div className="relative h-64 overflow-hidden">
        <img 
          src={images[currentIndex]} 
          alt={`Project image ${currentIndex + 1}`} 
          className="w-full h-full object-cover transition-all duration-300 carousel-image"
        />
        
        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 carousel-nav"
          onClick={goToPrevious}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 carousel-nav"
          onClick={goToNext}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};