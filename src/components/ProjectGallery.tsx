
import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type ProjectGalleryProps = {
  images: {
    id: string;
    url: string;
    alt: string;
  }[];
  className?: string;
};

const ProjectGallery = ({ images, className }: ProjectGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleImageLoad = (index: number) => {
    setImagesLoaded((current) => ({
      ...current,
      [index]: true,
    }));
  };

  if (!images || images.length === 0) {
    return <div className={`bg-muted aspect-video rounded-lg ${className}`} />;
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
        <div
          className={`absolute inset-0 flex items-center justify-center bg-muted animate-pulse ${
            imagesLoaded[activeIndex] ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
        />
        
        <img
          src={images[activeIndex].url}
          alt={images[activeIndex].alt}
          className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
            imagesLoaded[activeIndex] ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => handleImageLoad(activeIndex)}
        />
        
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/60 backdrop-blur-sm hover:bg-background/80 text-foreground rounded-full"
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/60 backdrop-blur-sm hover:bg-background/80 text-foreground rounded-full"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </Button>
          </>
        )}
        
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 bg-background/60 backdrop-blur-sm hover:bg-background/80 text-foreground rounded-full"
              aria-label="View fullscreen"
            >
              <Maximize size={18} />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0 bg-background/95 backdrop-blur-md">
            <div className="relative h-[80vh]">
              <img
                src={images[activeIndex].url}
                alt={images[activeIndex].alt}
                className="w-full h-full object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2 hide-scrollbar">
          {images.map((image, idx) => (
            <button
              key={image.id}
              className={`relative flex-shrink-0 h-16 w-16 rounded-md overflow-hidden border-2 transition-all ${
                idx === activeIndex
                  ? "border-primary"
                  : "border-transparent hover:border-muted-foreground/50"
              }`}
              onClick={() => handleThumbnailClick(idx)}
              aria-label={`View image ${idx + 1}`}
            >
              <img
                src={image.url}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
