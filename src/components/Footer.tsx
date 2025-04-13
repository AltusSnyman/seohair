
import React from 'react';
import { Scissors, Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-6 h-6 text-salon-400" />
              <span className="font-serif text-xl font-semibold">Hair by Melissa</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming your look with expert hair services tailored to your unique style.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:melissa@hairbymelissa.com" aria-label="Email" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+15551234567" aria-label="Phone" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Haircut & Styling</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Hair Coloring</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Hair Treatments</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Hair Extensions</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Special Occasion</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-400">Mon - Fri:</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Saturday:</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Hair by Melissa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
