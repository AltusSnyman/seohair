
import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Scissors className="w-6 h-6 text-salon-600" />
          <span className="font-serif text-xl font-semibold">Hair by Melissa</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium hover:text-salon-600 transition-colors">Home</a>
          <a href="#services" className="text-sm font-medium hover:text-salon-600 transition-colors">Services</a>
          <a href="#gallery" className="text-sm font-medium hover:text-salon-600 transition-colors">Gallery</a>
          <a href="#about" className="text-sm font-medium hover:text-salon-600 transition-colors">About</a>
          <a href="#contact" className="text-sm font-medium hover:text-salon-600 transition-colors">Contact</a>
          <a 
            href="#contact" 
            className="bg-salon-600 hover:bg-salon-700 text-white px-5 py-2 rounded-full transition-colors"
          >
            Book Now
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="container mx-auto py-4 flex flex-col gap-4">
          <a href="#home" className="py-2 text-sm font-medium hover:text-salon-600 transition-colors" onClick={toggleMenu}>Home</a>
          <a href="#services" className="py-2 text-sm font-medium hover:text-salon-600 transition-colors" onClick={toggleMenu}>Services</a>
          <a href="#gallery" className="py-2 text-sm font-medium hover:text-salon-600 transition-colors" onClick={toggleMenu}>Gallery</a>
          <a href="#about" className="py-2 text-sm font-medium hover:text-salon-600 transition-colors" onClick={toggleMenu}>About</a>
          <a href="#contact" className="py-2 text-sm font-medium hover:text-salon-600 transition-colors" onClick={toggleMenu}>Contact</a>
          <a 
            href="#contact" 
            className="bg-salon-600 hover:bg-salon-700 text-white py-3 rounded-full text-center transition-colors"
            onClick={toggleMenu}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
