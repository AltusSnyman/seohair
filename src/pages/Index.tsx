import { Link } from "react-router-dom";
import { Calendar, Scissors, Award, Sparkles, Star, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  const services = [
    { name: "Keratin Treatments", price: "$180", icon: Sparkles },
    { name: "Women's Cut & Finish", price: "$50", icon: Scissors },
    { name: "Partial Foils", price: "$90", icon: Scissors },
    { name: "Half Head of Highlights", price: "$140", icon: Scissors },
    { name: "Full Head of Highlights", price: "$180", icon: Scissors },
    { name: "Permanent Tint & Touch Up", price: "$90", icon: Scissors },
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      review: "Melissa transformed my dull, lifeless hair into a vibrant masterpiece. The keratin treatment was a game-changer for my frizzy hair!",
      rating: 5,
    },
    {
      id: 2,
      name: "Jessica Miller",
      review: "I've been to many salons, but none compare to Hair By Melissa. The balayage she did on my hair has received so many compliments.",
      rating: 5,
    },
    {
      id: 3,
      name: "Rachel Thompson",
      review: "Melissa takes the time to understand exactly what you want. My highlights look so natural and blend perfectly with my base color.",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <img
              src="https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d3f671384b206baef377.png"
              alt="Beautiful hair"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        </div>
        
        <div className="container-custom relative z-10 mt-20">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
              Elevate Your Hair to Stunning New Heights
            </h1>
            <p className="text-xl text-white mt-6">
              Experience premium hair coloring, keratin treatments, and expert styling from Melissa, crafting beautiful transformations tailored to your unique style.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/booking" className="btn-primary">
                Book Now
              </Link>
              <Link to="/services" className="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-md hover:bg-white hover:text-black transition duration-300 ease-in-out">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Preview Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-serif font-bold">Our Premium Services</h2>
            <p className="text-gray-600 mt-4">
              Discover our range of high-quality hair services designed to transform, enhance, and maintain your beautiful locks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-salon-lightgray rounded-lg p-8 card-shadow animate-slide-up hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="h-10 w-10 text-salon-darkblue mb-4 transform transition-transform duration-300 hover:rotate-12" />
                <h3 className="text-xl font-serif font-semibold">{service.name}</h3>
                <p className="text-gray-600 mt-2">Starting at {service.price}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center mt-4 text-salon-darkblue hover:underline"
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <section className="bg-salon-blue bg-opacity-20 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <h2 className="text-4xl font-serif font-bold">About Melissa</h2>
              <p className="text-gray-700 mt-4">
                With 5 years of experience in the hair industry, Melissa has built a reputation for creating beautiful, personalized hair transformations. Specializing in color techniques and keratin treatments, her passion for helping clients look and feel their best shines through in every appointment.
              </p>
              <p className="text-gray-700 mt-4">
                Using only premium products and staying at the forefront of industry trends, Melissa ensures that each client receives a bespoke service tailored to their unique hair type, face shape, and lifestyle.
              </p>
              <Link to="/about" className="btn-primary inline-block mt-6">
                Learn More About Us
              </Link>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65ac7a0155bc1d24545.png"
                  alt="Melissa working on client's hair"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Award className="h-8 w-8 text-salon-darkblue mr-3" />
                    <div>
                      <p className="font-serif font-semibold">Qualified</p>
                      <p className="text-sm text-gray-600">Color Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-serif font-bold">What Our Clients Say</h2>
            <p className="text-gray-600 mt-4">
              Hear from our wonderful clients about their experiences at Hair By Melissa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div 
                key={review.id}
                className="bg-salon-lightgray rounded-lg p-8 card-shadow animate-slide-up"
                style={{ animationDelay: `${review.id * 100}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">{review.review}</p>
                <p className="font-medium mt-4">- {review.name}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/testimonials" className="btn-primary">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>
      
      {/* Gallery Preview */}
      <section className="section-padding bg-salon-pink bg-opacity-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-serif font-bold">Our Gallery</h2>
            <p className="text-gray-600 mt-4">
              Browse through some of our stunning transformations and get inspired for your next visit.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d45dc7a0157964d24379.png" 
                alt="Hair transformation" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d45dc7a015f66ed24378.png" 
                alt="Hair transformation" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d201419a3c858.png" 
                alt="Hair transformation" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d20c16aa3c857.png" 
                alt="Hair transformation" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/gallery" className="btn-primary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>
      
      {/* Booking CTA */}
      <section className="relative section-padding">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <img
              src="https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65a12053d06f9d2b9fc.png"
              alt="Beautiful hair"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-serif font-bold">Ready for a Transformation?</h2>
            <p className="text-xl mt-4">
              Book your appointment today and experience the Hair By Melissa difference.
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/booking" className="btn-primary inline-flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-serif font-bold">Find Us</h2>
            <p className="text-gray-600 mt-4">
              Visit our boutique salon located in Magnolia Lane, Kaukapakapa.
            </p>
          </div>
          
          <div className="bg-salon-lightgray rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51188.31438193855!2d174.48289783973983!3d-36.61726962066159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0ccd0a6cb14ae1%3A0x500ef6143a31611!2sKaukapakapa%2C%20Auckland%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1712885742714!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Hair By Melissa location"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
