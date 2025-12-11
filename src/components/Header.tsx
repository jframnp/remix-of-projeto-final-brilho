import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X } from "lucide-react";

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
    <header className="fixed top-0 left-0 right-0 z-50 shadow-header">
      {/* Top Bar - 90px */}
      <div className="bg-[#D32F2F] h-[70px] md:h-[90px]">
        <div className="container mx-auto h-full px-4 md:px-[5%] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 md:w-14 md:h-14">
              <svg viewBox="0 0 60 60" className="w-full h-full drop-shadow-lg">
                {/* Outer hexagon with metallic effect */}
                <defs>
                  <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="50%" stopColor="#C0C0C0" />
                    <stop offset="100%" stopColor="#808080" />
                  </linearGradient>
                  <linearGradient id="innerRedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF4444" />
                    <stop offset="50%" stopColor="#D32F2F" />
                    <stop offset="100%" stopColor="#9B0000" />
                  </linearGradient>
                </defs>
                <polygon
                  points="30,2 55,17 55,47 30,62 5,47 5,17"
                  fill="url(#metalGradient)"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
                <polygon
                  points="30,8 50,20 50,44 30,56 10,44 10,20"
                  fill="url(#innerRedGradient)"
                />
              </svg>
            </div>
            <span className="text-white font-montserrat font-bold text-sm md:text-xl tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
              METALÚRGICA BRILHO
            </span>
          </Link>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="tel:+551139316343"
              className="flex items-center gap-2 text-white font-montserrat font-bold text-xl md:text-2xl"
            >
              <Phone className="w-6 h-6" />
              <span>(11) 3931-6343</span>
            </a>
            <a
              href="mailto:metalurgicabrilho@gmail.com"
              className="flex items-center gap-2 text-white font-inter text-base md:text-lg"
            >
              <Mail className="w-5 h-5" />
              <span>metalurgicabrilho@gmail.com</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Bottom Bar - Menu - 50px */}
      <div className="hidden md:block bg-[#9B0000] h-[50px]">
        <div className="container mx-auto h-full px-4 md:px-[5%] flex items-center justify-between">
          {/* Centered Navigation */}
          <nav className="flex-1 flex items-center justify-center gap-[50px]">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white font-inter text-lg font-medium transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[3px] after:bg-[#FF6B6B] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  isActive(item.path) ? "after:scale-x-100" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Flags - Right side */}
          <div className="flex items-center gap-[10px]">
            {/* Brazil */}
            <button className="w-6 h-[18px] rounded-sm overflow-hidden opacity-90 hover:opacity-100 transition-opacity" aria-label="Português">
              <div className="w-full h-full bg-[#009C3B] flex items-center justify-center relative">
                <div className="w-4 h-3 bg-[#FFDF00] rotate-45 absolute" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
                <div className="w-2 h-2 rounded-full bg-[#002776] absolute"></div>
              </div>
            </button>
            {/* China */}
            <button className="w-6 h-[18px] rounded-sm overflow-hidden opacity-90 hover:opacity-100 transition-opacity" aria-label="中文">
              <div className="w-full h-full bg-[#DE2910] flex items-start justify-start p-0.5">
                <div className="text-[#FFDE00] text-[8px] leading-none">★</div>
              </div>
            </button>
            {/* USA */}
            <button className="w-6 h-[18px] rounded-sm overflow-hidden opacity-90 hover:opacity-100 transition-opacity" aria-label="English">
              <div className="w-full h-full flex flex-col">
                <div className="flex-1 bg-[#B22234]"></div>
                <div className="flex-1 bg-white"></div>
                <div className="flex-1 bg-[#B22234]"></div>
                <div className="flex-1 bg-white"></div>
                <div className="flex-1 bg-[#B22234]"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#9B0000] border-t border-white/20">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-white font-inter text-base font-medium py-2 border-b border-white/20 ${
                  isActive(item.path) ? "text-[#FF6B6B]" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+551139316343"
              className="flex items-center gap-2 text-white font-montserrat font-bold text-lg py-2"
            >
              <Phone className="w-5 h-5" />
              <span>(11) 3931-6343</span>
            </a>
            <a
              href="mailto:metalurgicabrilho@gmail.com"
              className="flex items-center gap-2 text-white font-inter text-base py-2"
            >
              <Mail className="w-5 h-5" />
              <span>metalurgicabrilho@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 py-2">
              {/* Brazil */}
              <button className="w-8 h-5 rounded-sm overflow-hidden">
                <div className="w-full h-full bg-[#009C3B] flex items-center justify-center relative">
                  <div className="w-5 h-3 bg-[#FFDF00] rotate-45 absolute" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
                  <div className="w-2 h-2 rounded-full bg-[#002776] absolute"></div>
                </div>
              </button>
              {/* China */}
              <button className="w-8 h-5 rounded-sm overflow-hidden">
                <div className="w-full h-full bg-[#DE2910] flex items-start justify-start p-0.5">
                  <div className="text-[#FFDE00] text-[10px] leading-none">★</div>
                </div>
              </button>
              {/* USA */}
              <button className="w-8 h-5 rounded-sm overflow-hidden">
                <div className="w-full h-full flex flex-col">
                  <div className="flex-1 bg-[#B22234]"></div>
                  <div className="flex-1 bg-white"></div>
                  <div className="flex-1 bg-[#B22234]"></div>
                  <div className="flex-1 bg-white"></div>
                  <div className="flex-1 bg-[#B22234]"></div>
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
