import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Scissors, Flower } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scissors className="h-10 w-10 text-salon-darkblue" />
              <Flower className="h-8 w-8 text-salon-pink" />
              <span className="font-serif font-bold text-xl text-white">Hair By Melissa</span>
            </div>
            <p className="text-gray-300 mt-4">
              Elevating your hair experience with premium coloring services, keratin treatments, and expert styling.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-white hover:text-salon-darkblue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-salon-darkblue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-salon-darkblue transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-white transition-colors">Book Appointment</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-serif mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-salon-darkblue flex-shrink-0" />
                <span className="text-gray-300">Magnolia Lane, Kaukapakapa, Rural Auckland, NZ</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-salon-darkblue flex-shrink-0" />
                <span className="text-gray-300">027 520 1613</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-salon-darkblue flex-shrink-0" />
                <span className="text-gray-300">melissa@hairbymelissa.co.nz</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Hair By Melissa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
