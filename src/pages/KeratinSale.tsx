import { useEffect, useRef } from "react";
import { Snowflake, MapPin, Clock, Star } from "lucide-react";
import CountdownTimer from "../components/CountdownTimer";

const KeratinSale = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // SEO Meta tags for keratin treatment page
    document.title = "Keratin Treatment Helensville Kaukapakapa - Hair by Melissa | Premium Hair Straightening Auckland";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional keratin treatment in Helensville, Kaukapakapa. Premier hair straightening salon serving Auckland. Book your discounted keratin treatment today - save $20!');
    }
    
    // Add Open Graph tags
    const addMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    addMetaTag('og:title', 'Keratin Treatment Helensville Kaukapakapa - Hair by Melissa');
    addMetaTag('og:description', 'Professional keratin treatment in Helensville. Premier boutique hair salon serving Kaukapakapa, Waitoki, Wainui. Save $20 on your keratin hair straightening treatment.');
    addMetaTag('og:url', 'https://hairbymelissa.co.nz/keratin');
    addMetaTag('og:type', 'website');
    
    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://hairbymelissa.co.nz/keratin');
    
    // Add JSON-LD Schema markup
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Hair By Melissa",
      "description": "Professional keratin treatment and hair straightening salon in Helensville, Kaukapakapa",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Magnolia Lane",
        "addressLocality": "Kaukapakapa",
        "addressRegion": "Auckland",
        "addressCountry": "NZ"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-36.55",
        "longitude": "174.42"
      },
      "url": "https://hairbymelissa.co.nz",
      "telephone": "+64-21-123-4567",
      "priceRange": "$150-$250",
      "serviceArea": ["Helensville", "Kaukapakapa", "Waitoki", "Wainui", "Auckland"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Hair Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Keratin Treatment",
              "description": "Professional keratin hair straightening treatment"
            },
            "price": "180",
            "priceCurrency": "NZD"
          }
        ]
      }
    };
    
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schema);
    
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
                  Professional Keratin Treatment Helensville Kaukapakapa - Premium Hair Straightening
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
                  <h2 className="text-xl font-semibold mb-3">Why Choose Our Boutique Hair Salon in Helensville?</h2>
                  <p>Transform your hair with our premium keratin treatment, specially formulated for New Zealand's climate. Our private hair studio in Kaukapakapa serves clients from Helensville, Waitoki, Wainui, and throughout rural Auckland.</p>
                  <h3 className="text-lg font-semibold mt-4 mb-2">Our Professional Keratin Hair Straightening Treatment:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Eliminates frizz and adds incredible shine - perfect for Auckland's humid climate</li>
                    <li>Reduces styling time by up to 50% - ideal for busy lifestyles</li>
                    <li>Lasts up to 3-5 months with proper care and maintenance</li>
                    <li>Makes hair more manageable in New Zealand's variable weather conditions</li>
                    <li>Suitable for all hair types and lengths</li>
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
              <h2 className="text-3xl font-serif font-bold text-center mb-4">
                Get Your Discount Code Now
              </h2>
              <div className="flex justify-center mb-4">
                <CountdownTimer />
              </div>
              <p className="text-center mb-6 text-lg">
                Fill in your details in the next 2 minutes and we'll give you access to the exclusive discounted booking page.
              </p>
              <p className="text-center mb-8 text-lg font-semibold">
                Why spend $201 when you can only spend $179?
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
      
      {/* Why Choose Us Section */}
      <section className="py-10 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-8">Why Choose Hair By Melissa for Keratin Treatment in Helensville?</h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Boutique Hair Salon Experience</h3>
                <p className="mb-4">Located on Magnolia Lane in Kaukapakapa, our private hair studio offers a personalized, intimate experience. No crowded salons - just professional, one-on-one attention.</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Private consultation and treatment</li>
                  <li>Flexible appointment times</li>
                  <li>Serving Helensville, Waitoki, Wainui areas</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Expert Hair Straightening Specialist</h3>
                <p className="mb-4">Melissa specializes in keratin treatments and hair straightening techniques, with years of experience working with all hair types and textures.</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Certified keratin treatment specialist</li>
                  <li>Premium product selection</li>
                  <li>Ongoing aftercare support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-8">Frequently Asked Questions About Keratin Treatment</h2>
            
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold mb-2">How long does a keratin treatment last?</h3>
                <p>Our professional keratin treatments typically last 3-5 months, depending on your hair type and aftercare routine. We provide detailed aftercare instructions to maximize longevity.</p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold mb-2">Is keratin treatment suitable for all hair types?</h3>
                <p>Yes! Keratin treatment works on all hair types, from fine to coarse, and is particularly effective on frizzy, damaged, or chemically treated hair. We customize the treatment to your specific hair needs.</p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold mb-2">What's the difference between keratin treatment and hair straightening?</h3>
                <p>Keratin treatment is a conditioning treatment that reduces frizz and adds shine while maintaining your hair's natural texture. Traditional straightening permanently alters hair structure. Keratin is gentler and more natural-looking.</p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold mb-2">How do I book a keratin treatment in Helensville?</h3>
                <p>Simply fill out the form above to receive your discount code, then use our online booking system. We're conveniently located in Kaukapakapa, easily accessible from Helensville, Waitoki, and Wainui.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 bg-purple-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-center mb-8">What Helensville Clients Say About Our Keratin Treatment</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="italic mb-4">"My hair has never looked better! No more frizz, even in Auckland's winter rain. The drive from Helensville to Kaukapakapa was so worth it!"</p>
                <p className="font-bold">- Sarah T., Helensville</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="italic mb-4">"I save so much time getting ready in the morning. My hair is sleek and manageable without effort. Melissa's boutique salon is exactly what I was looking for!"</p>
                <p className="font-bold">- Emma L., Waitoki</p>
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
      
      {/* Hidden Meta Pixel container for additional tracking if needed */}
      <div id="pixel-container" className="hidden">
        {/* Meta Pixel is loaded globally via MetaPixel component */}
      </div>
    </div>
  );
};

export default KeratinSale;
