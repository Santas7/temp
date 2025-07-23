import { useState, useEffect, memo } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselProps {
  images: string[];
  className?: string;
  imageClassName?: string;
}

const Modal = memo(
  ({
    images,
    currentIndex,
    setCurrentIndex,
    goToPrevious,
    goToNext,
    closeModal,
  }: {
    images: string[];
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
    goToPrevious: () => void;
    goToNext: () => void;
    closeModal: () => void;
  }) => (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={closeModal}
      role="dialog"
      aria-label="Image modal"
    >
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-[10000] bg-white/20 hover:bg-white/30 text-white rounded-full p-2.5"
        onClick={closeModal}
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </Button>

      <div
        className="relative w-full max-w-5xl mx-auto h-[70vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Project image ${currentIndex + 1}`}
            className="w-full h-full object-contain rounded-lg shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onError={(e) => {
              e.currentTarget.src = "/fallback-image.jpg";
            }}
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-[10000] bg-white/20 hover:bg-white/30 text-white rounded-full p-2.5"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-[10000] bg-white/20 hover:bg-white/30 text-white rounded-full p-2.5"
              onClick={goToNext}
              aria-label="Next image"
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
                  index === currentIndex ? "bg-white scale-125" : "bg-white/40"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          <div className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      ) : (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[10000] text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
          1 / 1
        </div>
      )}
    </div>
  )
);

export const Carousel = memo(
  ({
    images,
    className = "",
    imageClassName = "object-contain w-full h-full rounded-md",
  }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loadedImages, setLoadedImages] = useState<boolean[]>([]);

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

    // Preload images with error handling
    useEffect(() => {
      const loadImages = async () => {
        const loadStatus = new Array(images.length).fill(false);
        await Promise.all(
          images.map((image, index) =>
            new Promise<void>((resolve) => {
              const img = new Image();
              img.src = image;
              img.onload = () => {
                loadStatus[index] = true;
                resolve();
              };
              img.onerror = () => {
                loadStatus[index] = false;
                resolve();
              };
            })
          )
        );
        setLoadedImages(loadStatus);
      };
      loadImages();
    }, [images]);

    // Handle scroll lock
    useEffect(() => {
      if (isModalOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [isModalOpen]);

    // Handle ESC key
    useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          closeModal();
        }
      };
      if (isModalOpen) {
        document.addEventListener("keydown", handleEsc);
      }
      return () => {
        document.removeEventListener("keydown", handleEsc);
      };
    }, [isModalOpen]);

    if (images.length === 0) return null;

    return (
      <div
        className={`relative rounded-xl overflow-hidden bg-gray-50 ${className}`}
      >
        <div className="relative w-full aspect-[16/9] max-h-[500px]">
          <AnimatePresence>
            {loadedImages[currentIndex] ? (
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Project image ${currentIndex + 1}`}
                className={imageClassName}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  e.currentTarget.src = "/fallback-image.jpg";
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className="text-gray-500">Loading...</span>
              </div>
            )}
          </AnimatePresence>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-white/90 hover:bg-white shadow-md text-gray-800 hover:text-gray-900 rounded-full p-2"
            onClick={openModal}
            aria-label="Enlarge image"
          >
            <Maximize2 className="w-5 h-5" />
          </Button>

          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-md text-gray-800 hover:text-gray-900 rounded-full p-2"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-md text-gray-800 hover:text-gray-900 rounded-full p-2"
                onClick={goToNext}
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-white scale-125" : "bg-white/50"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {isModalOpen &&
          createPortal(
            <Modal
              images={images}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              goToPrevious={goToPrevious}
              goToNext={goToNext}
              closeModal={closeModal}
            />,
            document.body
          )}
      </div>
    );
  }
);