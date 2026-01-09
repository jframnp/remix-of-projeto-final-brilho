import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import logoImage from "@/assets/logo-metalurgicabrilho.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { t } = useTranslation();
  const { currentLang, changeLanguage } = useLanguage();

  const getLocalizedPath = (path: string) => {
    if (currentLang === "en") return `/en${path === "/" ? "" : path}`;
    if (currentLang === "es") return `/es${path === "/" ? "" : path}`;
    return path;
  };

  const productSubcategories = [
    { label: t("nav.diamondBurs", "Brocas Diamantadas"), path: "/produtos/brocas-diamantadas" },
    { label: t("nav.tungstenBurs", "Fresas de Tungstênio"), path: "/produtos/fresas-tungstenio" },
    { label: t("nav.ceramicBurs", "Fresas de Cerâmica"), path: "/produtos/fresas-ceramica" },
    { label: t("nav.lixas", "Lixas"), path: "/produtos/lixas" },
    { label: t("nav.tubularAdhesive", "Lixa Tubular / Adesiva"), path: "/produtos/lixa-tubular-adesiva" },
    { label: t("nav.polishers", "Polidoras"), path: "/produtos/polidoras" },
    { label: t("nav.brushes", "Escovas de Limpeza"), path: "/produtos/escovas-limpeza" },
    { label: t("nav.fiberMandril", "Fibras / Enucleadora / Mandril"), path: "/produtos/fibras-enucleadora-mandril" },
    { label: t("nav.supportSharpening", "Apoio / Afiação"), path: "/produtos/apoio-lixas-afiacao" },
  ];

  const mainMenuItems = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.institutional"), path: "/institucional" },
    { label: t("nav.products"), path: "/produtos", hasDropdown: true },
    { label: t("nav.contact"), path: "/contato" },
  ];

  const isActive = (path: string) => {
    const currentPath = location.pathname.replace(/^\/(en|es)/, "") || "/";
    return currentPath === path || currentPath.startsWith(path + "/");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg">
      {/* Top Bar - Logo + Contact */}
      <div className="bg-[#9B0000] h-[70px] md:h-[90px]">
        <div className="container mx-auto h-full px-4 md:px-[5%] flex items-center justify-between">
          {/* Logo */}
          <Link to={getLocalizedPath("/")} className="flex items-center group">
            <img 
              src={logoImage} 
              alt="Metalúrgica Brilho" 
              className="h-16 md:h-20 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-lg"
            />
          </Link>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="tel:+551139316343"
              className="flex items-center gap-2 text-white font-montserrat font-bold text-xl md:text-2xl hover:scale-105 transition-transform"
            >
              <Phone className="w-6 h-6" />
              <span>(11) 3931-6343</span>
            </a>
            <a
              href="mailto:metalurgicabrilho@gmail.com"
              className="flex items-center gap-2 text-white font-inter text-base md:text-lg hover:scale-105 transition-transform"
            >
              <Mail className="w-5 h-5" />
              <span>metalurgicabrilho@gmail.com</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Bottom Bar - Menu + Flags */}
      <div className="hidden md:block bg-[#720000] h-[50px]">
        <div className="container mx-auto h-full px-4 md:px-[5%] flex items-center justify-between">
          {/* Centered Navigation */}
          <nav className="flex-1 flex items-center justify-center gap-[40px]">
            {mainMenuItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.path} ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className={`flex items-center gap-1 text-white font-inter text-lg font-medium transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[3px] after:bg-[#FF6B6B] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                      isActive(item.path) ? "after:scale-x-100" : ""
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isProductsOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-lg shadow-2xl py-2 z-50 animate-fade-in">
                      <Link
                        to={getLocalizedPath("/produtos")}
                        onClick={() => setIsProductsOpen(false)}
                        className="block px-4 py-2 text-[#9B0000] font-montserrat font-bold hover:bg-[#FAFAFA] transition-colors border-b border-gray-100"
                      >
                        {t("nav.products")} - {t("products.selectCategory", "Ver Todos")}
                      </Link>
                      {productSubcategories.map((sub) => (
                        <Link
                          key={sub.path}
                          to={getLocalizedPath(sub.path)}
                          onClick={() => setIsProductsOpen(false)}
                          className="block px-4 py-2 text-gray-700 hover:bg-[#FAFAFA] hover:text-[#9B0000] transition-colors font-inter text-sm"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={getLocalizedPath(item.path)}
                  className={`text-white font-inter text-lg font-medium transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[3px] after:bg-[#FF6B6B] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    isActive(item.path) ? "after:scale-x-100" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
            {/* External Brilho-Nails link */}
            <a
              href="https://www.brilhonails.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-inter text-lg font-medium transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[3px] after:bg-[#FF6B6B] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              BRILHO-NAILS
            </a>
          </nav>

          {/* Flags - Right side: BR | ES | US */}
          <div className="flex items-center gap-[10px]">
            {/* Brazil - Portuguese */}
            <button
              onClick={() => changeLanguage("pt")}
              className={`text-2xl transition-all hover:scale-110 ${
                currentLang === "pt" ? "opacity-100 drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]" : "opacity-60 hover:opacity-100"
              }`}
              aria-label="Português"
              title="Português"
            >
              🇧🇷
            </button>
            {/* Spain - Spanish */}
            <button
              onClick={() => changeLanguage("es")}
              className={`text-2xl transition-all hover:scale-110 ${
                currentLang === "es" ? "opacity-100 drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]" : "opacity-60 hover:opacity-100"
              }`}
              aria-label="Español"
              title="Español"
            >
              🇪🇸
            </button>
            {/* USA - English */}
            <button
              onClick={() => changeLanguage("en")}
              className={`text-2xl transition-all hover:scale-110 ${
                currentLang === "en" ? "opacity-100 drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]" : "opacity-60 hover:opacity-100"
              }`}
              aria-label="English"
              title="English"
            >
              🇺🇸
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#720000] border-t border-white/20 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {mainMenuItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.path}>
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="flex items-center justify-between w-full text-white font-inter text-base font-medium py-2 border-b border-white/20"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isProductsOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      <Link
                        to={getLocalizedPath("/produtos")}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsProductsOpen(false);
                        }}
                        className="block text-white/90 font-inter text-sm py-1"
                      >
                        {t("products.selectCategory", "Ver Todos")}
                      </Link>
                      {productSubcategories.map((sub) => (
                        <Link
                          key={sub.path}
                          to={getLocalizedPath(sub.path)}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsProductsOpen(false);
                          }}
                          className="block text-white/80 font-inter text-sm py-1"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={getLocalizedPath(item.path)}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-white font-inter text-base font-medium py-2 border-b border-white/20 block ${
                    isActive(item.path) ? "text-[#FF6B6B]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
            <a
              href="https://www.brilhonails.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-inter text-base font-medium py-2 border-b border-white/20 block"
            >
              BRILHO-NAILS
            </a>
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
              <button
                onClick={() => {
                  changeLanguage("pt");
                  setIsMenuOpen(false);
                }}
                className={`text-3xl transition-all ${
                  currentLang === "pt" ? "opacity-100 drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]" : "opacity-60"
                }`}
                title="Português"
              >
                🇧🇷
              </button>
              {/* Spain */}
              <button
                onClick={() => {
                  changeLanguage("es");
                  setIsMenuOpen(false);
                }}
                className={`text-3xl transition-all ${
                  currentLang === "es" ? "opacity-100 drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]" : "opacity-60"
                }`}
                title="Español"
              >
                🇪🇸
              </button>
              {/* USA */}
              <button
                onClick={() => {
                  changeLanguage("en");
                  setIsMenuOpen(false);
                }}
                className={`text-3xl transition-all ${
                  currentLang === "en" ? "opacity-100 drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]" : "opacity-60"
                }`}
                title="English"
              >
                🇺🇸
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
