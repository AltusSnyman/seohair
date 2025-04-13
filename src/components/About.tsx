
import React from 'react';
import { Award, Star, UserCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">About Melissa</h2>
            <div className="w-20 h-1 bg-salon-500 mb-6"></div>
            <p className="text-gray-600 mb-6">
              With over 15 years of experience in the hair industry, Melissa has established herself as a trusted stylist known for her attention to detail and commitment to client satisfaction.
            </p>
            <p className="text-gray-600 mb-6">
              After training at the prestigious Vidal Sassoon Academy and working in top salons across the country, Melissa opened her own studio to provide personalized hair services in a welcoming environment.
            </p>
            <p className="text-gray-600 mb-8">
              Her philosophy is simple: listen carefully to clients' needs, provide expert advice, and deliver results that make them feel confident and beautiful.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Award className="text-gold-500 w-5 h-5" />
                <span className="font-medium">Award-winning stylist</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-gold-500 w-5 h-5" />
                <span className="font-medium">15+ years experience</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="text-gold-500 w-5 h-5" />
                <span className="font-medium">Certified colorist</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpciUyMHN0eWxpc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=80" 
              alt="Melissa the hair stylist" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">5.0 (120+ reviews)</span>
              </div>
              <p className="italic text-gray-700">
                "Melissa really listens to what you want and delivers every time. I wouldn't trust anyone else with my hair!"
              </p>
              <p className="mt-2 font-medium">— Sarah M., Client for 6 years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
