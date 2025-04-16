
import { useEffect, useRef } from "react";
import { Snowflake, MapPin, Clock } from "lucide-react";

const KeratinSale = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Simplified Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container-custom">
          <div className="flex items-center space-x-2">
            <img
              src="https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67ff7f22c7a01596d4dd377a.png"
              alt="Hair By Melissa"
              className="h-16 w-16 object-contain"
            />
            <span className="font-serif font-bold text-2xl text-gray-800">
              Hair By Melissa
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-salon-darkblue">
                <div className="flex items-center mb-4">
                  <Snowflake className="text-blue-500 mr-2" />
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full uppercase">Exclusive Winter Offer</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 leading-tight mb-4">
                  Say Goodbye to Winter Frizz with Our Keratin Treatment
                </h1>
                
                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 my-6">
                  <p className="font-bold text-lg">Limited Time Offer: <span className="text-red-600">Save $20</span></p>
                  <p className="text-gray-700">Now Only <span className="line-through text-gray-500">$200</span> <span className="text-2xl font-bold">$180</span></p>
                  <p className="text-sm text-gray-600 mt-1">* Only 5 spots remaining at this price</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-salon-darkblue mr-2" />
                    <p>Magnolia Lane, Kaukapakapa, Rural Auckland, NZ</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-salon-darkblue mr-2" />
                    <p>Limited Winter Availability - Book Now to Secure Your Spot</p>
                  </div>
                </div>
                
                <div className="prose max-w-none mb-6">
                  <p>Transform your hair this winter with our premium keratin treatment that:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Eliminates frizz and adds incredible shine</li>
                    <li>Reduces styling time by up to 50%</li>
                    <li>Lasts up to 3-5 months with proper care</li>
                    <li>Makes hair more manageable in wet winter conditions</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src="https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67ff7f22c7a01596d4dd377a.png" 
                alt="Keratin Treatment Results" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-serif font-bold text-center mb-6">
                Book Your Keratin Treatment Now
              </h2>
              <p className="text-center mb-8 text-lg">
                <span className="font-bold">Act fast!</span> This special $20 discount is only available for a limited time.
              </p>
              
              <div className="form-container h-[450px]">
                <iframe
                  ref={iframeRef}
                  src="https://api.leadconnectorhq.com/widget/form/kF5b70cQAd0zR8zI642S"
                  style={{width:"100%", height:"100%", border:"none", borderRadius:"3px"}}
                  id="inline-kF5b70cQAd0zR8zI642S" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Keratin"
                  data-height="432"
                  data-layout-iframe-id="inline-kF5b70cQAd0zR8zI642S"
                  data-form-id="kF5b70cQAd0zR8zI642S"
                  title="Keratin"
                ></iframe>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Hair By Melissa. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                <span id="pixel-container">
                  {/* Placeholder for Meta Pixel */}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-10 bg-purple-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-center mb-8">What Clients Say About Our Keratin Treatment</h3>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="italic mb-4">"My hair has never looked better! No more frizz, even in Auckland's winter rain. Worth every penny!"</p>
                <p className="font-bold">- Sarah T.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="italic mb-4">"I save so much time getting ready in the morning. My hair is sleek and manageable without effort."</p>
                <p className="font-bold">- Emma L.</p>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <a href="#inline-kF5b70cQAd0zR8zI642S" className="btn-primary text-center">
                Secure Your Discounted Treatment Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeratinSale;
