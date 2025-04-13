
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight } from 'lucide-react';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Woman with blonde balayage hair",
  },
  {
    src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFpcnN0eWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Woman with elegant updo",
  },
  {
    src: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGhhaXJzdHlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Woman with short pixie cut",
  },
  {
    src: "https://images.unsplash.com/photo-1554519515-242161756769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFpcnN0eWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Woman with curly hair",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFpciUyMHNhbG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Woman getting hair styled",
  },
  {
    src: "https://images.unsplash.com/photo-1635273051839-03cbbe5f4e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhhaXJjdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=80",
    alt: "Woman with red hair",
  },
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openModal = (index: number) => {
    setCurrentImage(index);
    setOpen(true);
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    } else {
      setCurrentImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Gallery</h2>
          <div className="w-20 h-1 bg-salon-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Browse through some of our best work and get inspired for your next visit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group" 
              onClick={() => openModal(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                <span className="text-white text-sm font-medium">Click to view</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0 shadow-none">
          <div className="relative bg-black rounded-lg overflow-hidden">
            <img 
              src={galleryImages[currentImage].src} 
              alt={galleryImages[currentImage].alt}
              className="w-full h-auto max-h-[80vh] object-contain" 
            />
            <button 
              onClick={(e) => { e.stopPropagation(); navigate('prev'); }} 
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 hover:bg-black/60 rounded-full p-2 text-white"
              aria-label="Previous image"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); navigate('next'); }} 
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 hover:bg-black/60 rounded-full p-2 text-white"
              aria-label="Next image"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
