
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";

const Booking = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Load the script for the form embed
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Handle iframe height adjustment
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (iframeRef.current && event.data.type === 'setHeight' && event.data.height) {
        iframeRef.current.style.height = `${event.data.height}px`;
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <img
              src="https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d45dc7a0157964d24379.png"
              alt="Booking appointment"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-serif font-bold text-white leading-tight">
              Book Your Appointment
            </h1>
            <p className="text-xl text-white mt-6">
              Schedule your visit to Hair By Melissa and get ready for a stunning transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Embed Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <h2 className="text-3xl font-serif font-bold text-center mb-8">Schedule Your Appointment</h2>
            <div className="calendar-container">
              <iframe 
                ref={iframeRef}
                src="https://api.leadconnectorhq.com/widget/service-menu/67fe3af34e4a6b61c1bc9563" 
                style={{width: "100%", border: "none", minHeight: "800px"}}
                scrolling="no" 
                id="67fe3af34e4a6b61c1bc9563_1744717515041"
                title="Booking Calendar"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
