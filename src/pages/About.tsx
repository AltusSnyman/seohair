
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Award, Sparkles, Clock, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <img
              src="https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56dc7a0158170d2446c.png"
              alt="Melissa working on client's hair"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-serif font-bold text-white leading-tight">
              About Hair By Melissa
            </h1>
            <p className="text-xl text-white mt-6">
              Our story, mission, and the passionate team behind Hair By Melissa.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold">Our Story</h2>
              <p className="text-gray-700 mt-4">
                Hair By Melissa was founded with a simple yet powerful vision: to provide exceptional hair services that not only transform appearances but also boost confidence and self-expression.
              </p>
              <p className="text-gray-700 mt-4">
                Located in the picturesque Peak Village in Kaukapakapa, Rural Auckland, New Zealand, our boutique salon offers a tranquil escape from the busy city life while providing top-tier hair services.
              </p>
              <p className="text-gray-700 mt-4">
                Since opening the salon, Melissa has created a warm, welcoming environment where clients can relax and leave feeling fabulous. The intimate setting allows for personalized attention and a truly bespoke experience for each client.
              </p>
            </div>
            <div>
              <img
                src="https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d20c16aa3c857.png"
                alt="Melissa's salon"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-serif font-bold text-center">Why Choose Hair By Melissa</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center bg-salon-lightgray p-8 rounded-lg card-shadow">
                <Award className="h-12 w-12 text-salon-darkblue mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold">Expertise</h3>
                <p className="text-gray-600 mt-4">
                  Melissa brings 5 years of experience from top hair salons, staying current with the latest techniques and trends.
                </p>
              </div>
              <div className="text-center bg-salon-lightgray p-8 rounded-lg card-shadow">
                <Sparkles className="h-12 w-12 text-salon-darkblue mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold">Premium Products</h3>
                <p className="text-gray-600 mt-4">
                  We use only the highest quality products that are gentle on your hair and provide exceptional results.
                </p>
              </div>
              <div className="text-center bg-salon-lightgray p-8 rounded-lg card-shadow">
                <Clock className="h-12 w-12 text-salon-darkblue mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold">Personalized Service</h3>
                <p className="text-gray-600 mt-4">
                  Each service begins with a thorough consultation to understand your needs and create a look that's uniquely yours.
                </p>
              </div>
              <div className="text-center bg-salon-lightgray p-8 rounded-lg card-shadow">
                <Shield className="h-12 w-12 text-salon-darkblue mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold">Boutique Experience</h3>
                <p className="text-gray-600 mt-4">
                  Our intimate salon in Peak Village offers a peaceful retreat and undivided attention throughout your visit.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-serif font-bold">Meet Melissa</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
              <div className="order-2 lg:order-1">
                <p className="text-gray-700">
                  As the founder and lead stylist at Hair By Melissa, Melissa brings 5 years of experience from leading hair salons and a genuine passion for hair artistry to every client interaction.
                </p>
                <p className="text-gray-700 mt-4">
                  Specializing in color techniques and keratin treatments, Melissa has dedicated her career to mastering the art of hair transformation. Her approach combines technical precision with an artistic eye, allowing her to create looks that enhance each client's unique features and lifestyle.
                </p>
                <p className="text-gray-700 mt-4">
                  Melissa's commitment to ongoing education ensures that she remains at the forefront of industry innovations, bringing the latest techniques and products to her valued clients. Her warm, attentive manner creates a comfortable experience where clients feel heard, understood, and pampered.
                </p>
                <p className="text-gray-700 mt-4">
                  "My greatest joy comes from seeing a client's face light up when they see their new look for the first time. That moment of confidence and happiness is what drives my passion for this art." - Melissa
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d652c7a015cdb3d2453d.png"
                  alt="Melissa"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
