import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "HOME", path: "/" },
    { label: "INSTITUCIONAL", path: "/institucional" },
    { label: "PRODUTOS", path: "/produtos" },
    { label: "CONTATO", path: "/contato" },
    { label: "BRILHO-NAILS", path: "/brilho-nails" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brilho-red shadow-header h-[70px] md:h-[90px]">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <svg viewBox="0 0 60 60" className="w-full h-full">
              <polygon
                points="30,2 55,17 55,47 30,62 5,47 5,17"
                fill="none"
                stroke="#EEEEEE"
                strokeWidth="3"
              />
              <polygon
                points="30,10 48,22 48,42 30,54 12,42 12,22"
                fill="#D32F2F"
              />
            </svg>
          </div>
          <span className="text-brilho-text-light font-montserrat font-bold text-sm md:text-lg tracking-wide">
            METALÚRGICA BRILHO
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-brilho-text-light font-inter text-base font-medium transition-all duration-300 hover:text-brilho-text-light relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-brilho-red-vivid after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                isActive(item.path) ? "after:scale-x-100" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Language Flags & Phone */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <button className="w-6 h-4 rounded-sm overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-full h-full bg-gradient-to-b from-green-600 via-yellow-400 to-green-600 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-blue-800"></div>
              </div>
            </button>
            <button className="w-6 h-4 rounded-sm overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-full h-full flex flex-col">
                <div className="flex-1 bg-blue-900"></div>
                <div className="flex-1 bg-white"></div>
                <div className="flex-1 bg-red-600"></div>
              </div>
            </button>
            <button className="w-6 h-4 rounded-sm overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-full h-full flex flex-col">
                <div className="flex-1 bg-red-600"></div>
                <div className="flex-1 bg-yellow-500"></div>
                <div className="flex-1 bg-red-600"></div>
              </div>
            </button>
          </div>

          <a
            href="tel:+551139916943"
            className="flex items-center gap-2 text-brilho-text-light font-montserrat font-bold text-lg md:text-xl"
          >
            <Phone className="w-5 h-5" />
            <span>(11) 3991-6943</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-brilho-text-light p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-brilho-red border-t border-brilho-red-vivid/30">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-brilho-text-light font-inter text-base font-medium py-2 border-b border-brilho-red-vivid/20 ${
                  isActive(item.path) ? "text-brilho-red-vivid" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+551139916943"
              className="flex items-center gap-2 text-brilho-text-light font-montserrat font-bold text-lg py-2"
            >
              <Phone className="w-5 h-5" />
              <span>(11) 3991-6943</span>
            </a>
            <div className="flex items-center gap-3 py-2">
              <button className="w-8 h-5 rounded-sm overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-green-600 via-yellow-400 to-green-600 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-800"></div>
                </div>
              </button>
              <button className="w-8 h-5 rounded-sm overflow-hidden">
                <div className="w-full h-full flex flex-col">
                  <div className="flex-1 bg-blue-900"></div>
                  <div className="flex-1 bg-white"></div>
                  <div className="flex-1 bg-red-600"></div>
                </div>
              </button>
              <button className="w-8 h-5 rounded-sm overflow-hidden">
                <div className="w-full h-full flex flex-col">
                  <div className="flex-1 bg-red-600"></div>
                  <div className="flex-1 bg-yellow-500"></div>
                  <div className="flex-1 bg-red-600"></div>
                </div>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
