
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Scissors, Flower } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="flex items-center space-x-2">
            <Scissors className={`h-10 w-10 ${scrolled ? 'text-salon-darkblue' : 'text-white'}`} />
            <Flower className={`h-8 w-8 ${scrolled ? 'text-salon-pink' : 'text-white'}`} />
            <span className={`font-serif font-bold text-xl ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              Hair By Melissa
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors ${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-salon-darkblue`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/booking" className="btn-primary">
            Book Now
          </Link>
          <Link to="/keratin" className="btn-secondary flex items-center">
            <Snowflake className="mr-1 h-4 w-4" /> Winter Special
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${
              scrolled ? "text-gray-800" : "text-white"
            } focus:outline-none`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-800 font-medium hover:text-salon-darkblue"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="btn-primary inline-block text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
            <Link
              to="/keratin"
              className="btn-secondary inline-block text-center"
              onClick={() => setIsOpen(false)}
            >
              Winter Keratin Special
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
