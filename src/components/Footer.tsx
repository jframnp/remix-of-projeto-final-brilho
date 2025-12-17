import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();

  const getLocalizedPath = (path: string) => {
    if (currentLang === "en") return `/en${path === "/" ? "" : path}`;
    if (currentLang === "zh") return `/zh${path === "/" ? "" : path}`;
    return path;
  };

  return (
    <footer className="bg-[#1a1a1a] min-h-[450px]">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Column 1 - MENU */}
          <div>
            <h3 className="text-white font-montserrat font-bold text-lg mb-8 tracking-wider">
              MENU
            </h3>
            <nav className="flex flex-col gap-4">
              <Link
                to={getLocalizedPath("/")}
                className="text-white/90 font-inter text-base hover:text-white hover:translate-x-1 transition-all leading-relaxed"
              >
                Metalúrgica Brilho
              </Link>
              <Link
                to={getLocalizedPath("/institucional")}
                className="text-white/90 font-inter text-base hover:text-white hover:translate-x-1 transition-all leading-relaxed"
              >
                {t("footer.about", "Sobre")}
              </Link>
              <Link
                to={getLocalizedPath("/produtos")}
                className="text-white/90 font-inter text-base hover:text-white hover:translate-x-1 transition-all leading-relaxed"
              >
                {t("footer.products")}
              </Link>
              <Link
                to={getLocalizedPath("/odonto-dentaria")}
                className="text-white/90 font-inter text-base hover:text-white hover:translate-x-1 transition-all leading-relaxed"
              >
                {t("nav.odontoDentaria", "Odonto Dentária")}
              </Link>
              <Link
                to={getLocalizedPath("/podologia")}
                className="text-white/90 font-inter text-base hover:text-white hover:translate-x-1 transition-all leading-relaxed"
              >
                {t("nav.podologia", "Podologia")}
              </Link>
              <Link
                to={getLocalizedPath("/esmalteria-nails")}
                className="text-white/90 font-inter text-base hover:text-white hover:translate-x-1 transition-all leading-relaxed"
              >
                {t("nav.esmalteriaNails", "Esmalteria e Nails Designer")}
              </Link>
              <Link
                to={getLocalizedPath("/diversos")}
                className="text-white/90 font-inter text-base hover:text-white hover:translate-x-1 transition-all leading-relaxed"
              >
                {t("nav.diversos", "Diversos")}
              </Link>
            </nav>
          </div>

          {/* Column 2 - LOGO AND INFO (CENTER) */}
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative w-20 h-20 mb-4 hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 80 80" className="w-full h-full">
                  <polygon
                    points="40,4 72,22 72,58 40,76 8,58 8,22"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />
                  <polygon
                    points="40,12 64,26 64,54 40,68 16,54 16,26"
                    fill="#D32F2F"
                  />
                  <text
                    x="40"
                    y="48"
                    textAnchor="middle"
                    fill="white"
                    fontSize="28"
                    fontWeight="bold"
                    fontFamily="serif"
                  >
                    B
                  </text>
                </svg>
              </div>
              <span className="text-white font-montserrat font-bold text-xl tracking-wider">
                METALÚRGICA BRILHO<sup className="text-xs">®</sup>
              </span>
            </div>

            {/* CNPJ / IE */}
            <div className="text-white/80 font-inter text-sm mb-6 space-y-1">
              <p>CNPJ: 05.411.841/0001-06</p>
              <p>INSCRIÇÃO ESTADUAL: 118.327.925.118</p>
            </div>

            {/* ANVISA Seal */}
            <div className="bg-white rounded-lg px-6 py-4 mb-6 flex items-center gap-3 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                  <circle cx="20" cy="20" r="18" fill="#006341" />
                  <circle cx="20" cy="20" r="14" fill="#FFC61E" />
                  <circle cx="20" cy="20" r="10" fill="#003087" />
                  <text
                    x="20"
                    y="24"
                    textAnchor="middle"
                    fill="white"
                    fontSize="8"
                    fontWeight="bold"
                  >
                    BR
                  </text>
                </svg>
                <div className="text-left">
                  <p className="text-[#006341] font-bold text-sm">ANVISA</p>
                  <p className="text-gray-700 text-sm font-semibold">Nº 8019.208</p>
                </div>
              </div>
            </div>

            {/* Company Description */}
            <p className="text-white/70 font-inter text-sm leading-relaxed max-w-md">
              A Metalúrgica Brilho possui 20 anos de experiência em micro moldagem 
              por injeção e montagem de componentes de alta precisão para indústrias 
              de diversos setores. Nossa empresa está localizada em São Paulo e 
              oferece soluções completas em fabricação de instrumentos para podologia, 
              manicure e odontologia.{" "}
              <Link to={getLocalizedPath("/institucional")} className="text-white underline hover:text-white/80 transition-colors">
                saiba mais
              </Link>
            </p>
          </div>

          {/* Column 3 - ADDRESS AND CONTACT */}
          <div>
            {/* Address */}
            <h3 className="text-white font-montserrat font-bold text-lg mb-6 tracking-wider">
              {t("footer.addressTitle", "ENDEREÇO")}
            </h3>
            <div className="text-white/90 font-inter text-base leading-relaxed mb-8">
              <p>Rua Coronel Botelho, 58</p>
              <p>Butantã – São Paulo – SP – 05508-020</p>
              <p className="mt-2">Cidade: São Paulo – SP</p>
            </div>

            {/* Phones */}
            <h3 className="text-white font-montserrat font-bold text-lg mb-6 tracking-wider">
              {t("footer.phonesTitle", "TELEFONES")}
            </h3>
            <div className="text-white/90 font-inter text-base leading-relaxed mb-8 space-y-2">
              <p>
                <a href="tel:+551139316343" className="hover:text-white transition-colors hover:underline">
                  (11) 3931-6343
                </a>
              </p>
              <p>
                <a href="tel:+551138316943" className="hover:text-white transition-colors hover:underline">
                  (11) 3831-6943
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-500">WhatsApp:</span>
                <a 
                  href="https://wa.me/5511940101807" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors hover:underline"
                >
                  (11) 94010-1807
                </a>
              </p>
            </div>

            {/* Company / Email */}
            <h3 className="text-white font-montserrat font-bold text-lg mb-6 tracking-wider">
              {t("footer.companyTitle", "EMPRESA")}
            </h3>
            <div className="text-white/90 font-inter text-base">
              <p>E-mail:</p>
              <a 
                href="mailto:metalurgicabrilho@gmail.com"
                className="hover:text-white transition-colors hover:underline"
              >
                metalurgicabrilho@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-16 mb-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center hover:opacity-80 hover:scale-110 transition-all duration-300"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gradient-to-tr from-[#FCAF45] via-[#E1306C] to-[#833AB4] rounded-full flex items-center justify-center hover:opacity-80 hover:scale-110 transition-all duration-300"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#FF0000] rounded-full flex items-center justify-center hover:opacity-80 hover:scale-110 transition-all duration-300"
            aria-label="YouTube"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#0A66C2] rounded-full flex items-center justify-center hover:opacity-80 hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-white/60 font-inter text-sm">
            2023 © METALÚRGICA BRILHO – {t("footer.allRights", "TODOS DIREITOS RESERVADOS")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;