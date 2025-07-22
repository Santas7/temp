import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPortal } from "react-dom";

interface CarouselProps {
  images: string[];
  className?: string;
  imageClassName?: string;
}

export const Carousel = ({ images, className = "", imageClassName = "object-contain max-h-[500px] w-full rounded-md" }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Блокировка скролла при открытом модальном окне
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Закрытие модального окна по ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen]);

  if (images.length === 0) return null;

  // Компонент модального окна
  const Modal = () => (
    <div 
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-[10000] bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-full p-2 backdrop-blur-sm"
        onClick={closeModal}
      >
        <X className="w-6 h-6" />
      </Button>

      <div 
        className="relative w-full max-w-5xl mx-auto"
        style={{ aspectRatio: '16/9', maxHeight: '70vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={`Project image ${currentIndex + 1} enlarged`}
          className="w-full h-full object-contain rounded-lg shadow-2xl"
        />

        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="fixed left-4 top-1/2 -translate-y-1/2 z-[10000] bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-full p-2 backdrop-blur-sm"
              onClick={goToPrevious}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="fixed right-4 top-1/2 -translate-y-1/2 z-[10000] bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-full p-2 backdrop-blur-sm"
              onClick={goToNext}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </>
        )}
      </div>

      {images.length > 1 ? (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[10000] flex flex-col items-center space-y-3">
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-white" : "bg-white/40"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <div className="text-white text-sm font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      ) : (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[10000] text-white text-sm font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
          1 / 1
        </div>
      )}
    </div>
  );

  if (images.length === 1) {
    return (
      <div className={`relative rounded-xl overflow-hidden bg-gray-50 ${className}`}>
        <div className="relative h-[500px] p-4"> {/* Увеличена высота и добавлены отступы */}
          <img
            src={images[0]}
            alt="Project image"
            className={imageClassName}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 bg-white/90 hover:bg-white shadow-md text-gray-800 hover:text-gray-900 rounded-full p-2.5" // Отступы от краев
            onClick={openModal}
          >
            <Maximize2 className="w-5 h-5" />
          </Button>
        </div>

        {isModalOpen && createPortal(<Modal />, document.body)}
      </div>
    );
  }

  return (
    <div className={`relative rounded-xl overflow-hidden bg-gray-50 ${className}`}>
      <div className="relative h-[500px]"> {/* Увеличена высота и добавлены отступы */}
        <img
          src={images[currentIndex]}
          alt={`Project image ${currentIndex + 1}`}
          className={`${imageClassName} transition-all duration-300`}
        />

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-6 right-6 bg-white/90 hover:bg-white shadow-md text-gray-800 hover:text-gray-900 rounded-full p-2.5" // Отступы от краев
          onClick={openModal}
        >
          <Maximize2 className="w-5 h-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-md text-gray-800 hover:text-gray-900 rounded-full p-2.5" // Отступы от краев
          onClick={goToPrevious}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-md text-gray-800 hover:text-gray-900 rounded-full p-2.5" // Отступы от краев
          onClick={goToNext}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {isModalOpen && createPortal(<Modal />, document.body)}
    </div>
  );
};