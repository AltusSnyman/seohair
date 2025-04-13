
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-1]" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFpciUyMHNhbG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")'
        }}
      ></div>
      
      <div className="container mx-auto relative z-10 pt-20">
        <div className="max-w-3xl text-white animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Elevate Your Style with <span className="text-gold-400">Hair by Melissa</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Experience the art of professional hairstyling and transform your look with our expert services tailored to your unique style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-salon-600 hover:bg-salon-700 text-white px-8 py-3 rounded-full text-center transition-all flex items-center justify-center gap-2 group"
            >
              Book Appointment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-8 py-3 rounded-full text-center transition-all"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
