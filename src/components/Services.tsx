
import React from 'react';
import { Scissors, Palette, RotateCw, Brush, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'Haircut & Styling',
    description: 'Precision cuts tailored to your face shape and lifestyle, with expert styling to complete your look.',
    price: 'From $55',
    icon: Scissors
  },
  {
    title: 'Hair Coloring',
    description: 'Full color, highlights, balayage, and ombre techniques using premium products for vibrant, lasting results.',
    price: 'From $85',
    icon: Brush
  },
  {
    title: 'Hair Treatments',
    description: 'Nourishing treatments to repair, strengthen and revitalize damaged hair, including keratin and deep conditioning.',
    price: 'From $65',
    icon: Sparkles
  },
  {
    title: 'Hair Extensions',
    description: 'Premium quality extensions professionally applied for added length, volume, or both.',
    price: 'From $150',
    icon: Palette
  },
  {
    title: 'Special Occasion',
    description: 'Elegant updos and styling for weddings, proms, and special events that will make you stand out.',
    price: 'From $75',
    icon: Sparkles
  },
  {
    title: 'Perms & Texturizing',
    description: 'Add body, volume, and texture with our modern perm techniques for all hair types.',
    price: 'From $95',
    icon: RotateCw
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-salon-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            We offer a comprehensive range of professional hair services to help you look and feel your best.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 hover:border-salon-200 group"
            >
              <div className="mb-4 flex justify-between items-center">
                <div className="p-3 bg-salon-50 rounded-full text-salon-600 group-hover:bg-salon-100 transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium text-salon-700">{service.price}</span>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-salon-600 hover:bg-salon-700 text-white px-8 py-3 rounded-full text-center transition-all"
          >
            Book Your Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
