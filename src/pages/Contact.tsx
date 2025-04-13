
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <img
              src="https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65a12053d8203d2b9fd.png"
              alt="Contact us"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-serif font-bold text-white leading-tight">
              Contact Us
            </h1>
            <p className="text-xl text-white mt-6">
              We'd love to hear from you. Reach out with any questions or to book your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold">Get In Touch</h2>
              <p className="text-gray-700 mt-4">
                Have questions or ready to schedule your appointment? Reach out to us through any of these methods or use the contact form.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-salon-darkblue mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-gray-600 mt-1">Magnolia Lane, Kaukapakapa, Rural Auckland, New Zealand</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-salon-darkblue mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600 mt-1">027 520 1613</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-salon-darkblue mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600 mt-1">melissa@hairbymelissa.co.nz</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-salon-darkblue mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <div className="text-gray-600 mt-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-semibold text-xl">Follow Us</h3>
                <div className="flex space-x-4 mt-4">
                  <a 
                    href="#" 
                    className="bg-salon-blue h-10 w-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-salon-blue h-10 w-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-salon-blue h-10 w-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-salon-lightgray p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-serif font-bold">Send Us a Message</h2>
              <p className="text-gray-700 mt-2 mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <div className="h-[700px]">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/EfCZIIMh2EZjccykdCeV"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                  id="inline-EfCZIIMh2EZjccykdCeV"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-salon-blue bg-opacity-20 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-center mb-8">Our Location</h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
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

export default Contact;
