
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Scissors, Sparkles, Zap, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      name: "Keratin Treatments",
      price: "$180",
      description: "Our keratin treatment reduces frizz, adds incredible shine, and makes styling your hair quick and easy. Results last up to 5 months.",
      icon: Zap,
      fullDescription: "Transform your frizzy, unmanageable hair into silky, smooth locks with our premium keratin treatment. This intensive conditioning process infuses keratin protein deep into your hair cuticle, eliminating frizz and reducing styling time by up to 50%. Perfect for all hair types, especially those with curly, coarse, or color-treated hair. Our treatment is formaldehyde-free and leaves your hair looking naturally smooth and healthy for up to 5 months.",
      duration: "2-3 hours",
      maintenance: "Wait 48 hours before washing. Use sulfate-free shampoo and conditioner to extend results."
    },
    {
      id: 2,
      name: "Women's Cut & Finish",
      price: "$50",
      description: "A personalized haircut service that includes a consultation, relaxing shampoo, precision cut, and professional styling.",
      icon: Scissors,
      fullDescription: "Experience a tailored haircut that perfectly complements your face shape, hair texture, and lifestyle. Your service begins with an in-depth consultation to understand your vision, followed by a relaxing shampoo with scalp massage. Melissa's precision cutting technique ensures a flawless finish, and we complete your look with professional styling using premium products.",
      duration: "45-60 minutes",
      maintenance: "Schedule a trim every 6-8 weeks to maintain your style and prevent split ends."
    },
    {
      id: 3,
      name: "Partial Foils",
      price: "$90",
      description: "Add dimension and brightness to your hair with strategically placed highlights around the face and crown.",
      icon: Sparkles,
      fullDescription: "Enhance your natural hair color with our partial foil service, focusing on areas that frame your face and add dimension. Perfect for those wanting a subtle change or low-maintenance color. We use premium, ammonia-free products to protect your hair while delivering vibrant, long-lasting results.",
      duration: "1-1.5 hours",
      maintenance: "Touch up every 4-6 weeks to maintain fresh-looking highlights."
    },
    {
      id: 4,
      name: "Half Head of Highlights",
      price: "$140",
      description: "Create depth and dimension with highlights applied to the top and sides of your hair for a natural sun-kissed look.",
      icon: Sparkles,
      fullDescription: "Our half head highlights service delivers gorgeous dimension throughout the top and sides of your hair, perfect for creating that natural sun-kissed look. Using foil techniques to precisely place color, we create a seamless blend that grows out beautifully. Includes toner to perfect your shade and a styling finish.",
      duration: "2-2.5 hours",
      maintenance: "Refresh every 6-8 weeks to maintain color vibrancy and blend."
    },
    {
      id: 5,
      name: "Full Head of Highlights",
      price: "$180",
      description: "Complete transformation with highlights applied throughout your entire head for maximum impact and dimension.",
      icon: Sparkles,
      fullDescription: "Transform your look with our full head highlighting service, adding dimension and brightness throughout your entire head of hair. This premium service includes carefully placed foils from root to tip for maximum impact, followed by a customized toner to achieve your perfect shade. Includes blow dry styling to showcase your new look.",
      duration: "2.5-3 hours",
      maintenance: "Schedule maintenance every 6-8 weeks to touch up roots and refresh color."
    },
    {
      id: 6,
      name: "Permanent Tint & Touch Up",
      price: "$90",
      description: "Perfect for covering roots or gray hair, this service refreshes your existing color at the roots.",
      icon: Sparkles,
      fullDescription: "Keep your color looking fresh with our root touch-up service, designed to seamlessly blend new growth with your existing color. Ideal for maintaining your shade or covering gray hair between full color appointments. We use premium, long-lasting color products that are gentle on your hair.",
      duration: "1-1.5 hours",
      maintenance: "Recommended every 4-6 weeks to maintain consistent color coverage."
    },
    {
      id: 7,
      name: "Permanent Tint & All Over Color",
      price: "$140",
      description: "Full color application from roots to ends, providing rich, vibrant, and even color throughout your hair.",
      icon: Sparkles,
      fullDescription: "Revitalize your look with our all-over color service, delivering rich, vibrant, and even color from roots to ends. Whether you're covering gray, changing your shade, or enhancing your natural color, our premium color products provide maximum coverage with minimal damage. Includes a conditioning treatment to keep your hair healthy and shiny.",
      duration: "1.5-2 hours",
      maintenance: "Refresh every 4-6 weeks to maintain color intensity and coverage."
    },
    {
      id: 8,
      name: "Balayage",
      price: "$230",
      description: "Hand-painted highlights that create a naturally sun-kissed look with softer, less noticeable regrowth.",
      icon: Sparkles,
      fullDescription: "Our signature balayage technique delivers stunning, hand-painted highlights for a naturally sun-kissed look that grows out beautifully. This low-maintenance color option creates dimension and movement through strategic placement of lighter tones. Includes toner and style to showcase your new multi-dimensional color.",
      duration: "3-4 hours",
      maintenance: "Refresh every 8-12 weeks, longer than traditional highlights."
    },
    {
      id: 9,
      name: "Toner",
      price: "$40",
      description: "Refine and perfect your color by neutralizing unwanted tones or adding a subtle tint to your hair.",
      icon: Sparkles,
      fullDescription: "Refine and perfect your color with our professional toning service. Ideal for neutralizing brassiness, adding depth, or refreshing faded color between major color appointments. Our ammonia-free toners deposit semi-permanent color to enhance your existing shade without damage.",
      duration: "30-45 minutes",
      maintenance: "As needed, typically every 3-4 weeks depending on hair condition and desired tone."
    },
    {
      id: 10,
      name: "Blow Wave",
      price: "$50",
      description: "Professional blow dry styling that creates smooth, voluminous hair with incredible shine and movement.",
      icon: Sparkles,
      fullDescription: "Transform your look with our professional blow wave service. Using premium styling products and expert techniques, we create smooth, voluminous hair with incredible shine and movement. Perfect for special occasions or whenever you want to feel extra polished. Includes a consultation to determine your desired finish and style.",
      duration: "45-60 minutes",
      maintenance: "Results typically last 3-5 days depending on hair type and lifestyle."
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <img
              src="https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d3eec7a01575d2d242f5.png"
              alt="Hair styling"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-serif font-bold text-white leading-tight">
              Our Premium Hair Services
            </h1>
            <p className="text-xl text-white mt-6">
              Discover our comprehensive range of hair services, each designed to transform, enhance, and maintain your beautiful locks.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-salon-lightgray rounded-lg p-8 card-shadow animate-slide-up hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${service.id * 50}ms` }}
                onClick={() => setSelectedService(service.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.classList.add('bg-salon-blue', 'bg-opacity-30');
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.classList.remove('bg-salon-blue', 'bg-opacity-30');
                }}
              >
                <service.icon className="h-10 w-10 text-salon-darkblue mb-4 transform transition-transform duration-300 hover:rotate-12" />
                <h3 className="text-xl font-serif font-semibold">{service.name}</h3>
                <p className="text-2xl font-serif text-salon-darkblue mt-2">{service.price}</p>
                <p className="text-gray-600 mt-4">{service.description}</p>
                <div className="mt-4 text-salon-darkblue font-medium">
                  Click for details
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Dialog */}
      <Dialog open={selectedService !== null} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="max-w-2xl">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif">
                  {services[selectedService - 1].name}
                </DialogTitle>
                <DialogDescription className="text-xl text-salon-darkblue font-semibold">
                  {services[selectedService - 1].price}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <p className="text-gray-700">{services[selectedService - 1].fullDescription}</p>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="font-semibold">Duration:</span> {services[selectedService - 1].duration}
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <span className="font-semibold">Maintenance:</span> 
                  <span>{services[selectedService - 1].maintenance}</span>
                </div>
                <div className="pt-4">
                  <Link to="/booking" className="btn-primary w-full text-center inline-block">
                    Book This Service
                  </Link>
                </div>
              </div>
              <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Booking CTA */}
      <section className="bg-salon-blue bg-opacity-20 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold">Ready to Experience Our Services?</h2>
            <p className="text-gray-700 mt-4">
              Book your appointment today and let Melissa transform your hair into a work of art.
            </p>
            <div className="mt-8">
              <Link to="/booking" className="btn-primary">
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
