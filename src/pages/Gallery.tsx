
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d3f671384b206baef377.png",
    "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d3eec7a01575d2d242f5.png",
    "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d45dc7a0157964d24379.png",
    "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d45dc7a015f66ed24378.png",
    "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d45d12053d0241d2b806.png",
    "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d201419a3c858.png",
    "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d20c16aa3c857.png",
    "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56dc7a0158170d2446c.png",
    "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56d71384b7b5faef45d.png",
    "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d652c7a015cdb3d2453d.png",
    "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65ac7a0155bc1d24545.png",
    "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65a12053d06f9d2b9fc.png",
    "https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65a12053d8203d2b9fd.png",
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <img
              src="https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d45d12053d0241d2b806.png"
              alt="Hair styling"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-serif font-bold text-white leading-tight">
              Our Gallery
            </h1>
            <p className="text-xl text-white mt-6">
              Browse through our portfolio of stunning hair transformations and get inspired for your next visit.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] card-shadow"
                onClick={() => openLightbox(image)}
              >
                <img 
                  src={image} 
                  alt={`Hair By Andrea - Gallery ${index + 1}`}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="40" 
                      height="40" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 focus:outline-none"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged gallery image" 
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
