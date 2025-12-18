import Layout from "@/components/Layout";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

const Produtos = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero Section - Catalog Cover Style */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brilho-red via-brilho-red-dark to-[#5a0a0a]" />
        
        {/* Overlay Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-24 h-24 mb-4">
              <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-lg">
                <polygon
                  points="40,4 72,22 72,58 40,76 8,58 8,22"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
                <polygon
                  points="40,12 64,26 64,54 40,68 16,54 16,26"
                  fill="#FFFFFF"
                />
                <text
                  x="40"
                  y="48"
                  textAnchor="middle"
                  fill="#C41E3A"
                  fontSize="28"
                  fontWeight="bold"
                  fontFamily="serif"
                >
                  B
                </text>
              </svg>
            </div>
            <span className="text-white font-montserrat font-bold text-xl md:text-2xl tracking-wider drop-shadow-lg">
              METALÚRGICA BRILHO<sup className="text-sm">®</sup>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-white font-montserrat font-black text-5xl md:text-7xl lg:text-8xl mb-4 tracking-tight">
            <span className="block" style={{ textShadow: '3px 3px 0 rgba(0,0,0,0.3)' }}>
              CATÁLOGO
            </span>
            <span className="block text-white/90" style={{ textShadow: '3px 3px 0 rgba(0,0,0,0.3)' }}>
              CATALOG
            </span>
          </h1>

          {/* Hashtag */}
          <div className="mt-12">
            <span 
              className="inline-block text-3xl md:text-5xl font-montserrat font-black tracking-wider"
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(255,165,0,0.5)',
                filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
              }}
            >
              #BORA BRILHAR
            </span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
      </section>

      {/* Main Content Section */}
      <section className="bg-brilho-bg-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Title */}
            <h2 className="text-brilho-red font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              {t("products.diamondBurs.title", "BROCAS DIAMANTADAS")}
            </h2>

            {/* Description */}
            <p className="text-foreground/80 font-inter text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
              {t("products.introText", "Conheça nossa linha completa de brocas diamantadas, fresas de tungstênio, cerâmica, lixas e acessórios para podologia, odontologia e nails. Qualidade premium com certificação ANVISA.")}
            </p>

            {/* Product Image Placeholder */}
            <div className="mb-12">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-video max-w-2xl mx-auto flex items-center justify-center shadow-lg overflow-hidden">
                <div className="text-center p-8">
                  <svg
                    className="w-24 h-24 mx-auto text-brilho-red/50 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  <p className="text-gray-500 font-inter text-sm">
                    {t("products.productImage", "Imagem dos Produtos")}
                  </p>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <a
              href="/catalogo-brilho.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-brilho-red hover:bg-brilho-red-dark text-white font-montserrat font-bold text-lg md:text-xl px-8 md:px-12 py-5 md:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Download size={28} />
              <span className="text-center leading-tight">
                {t("products.downloadButtonLong", "BAIXE AQUI O CATÁLOGO COMPLETO DAS NOSSAS BROCAS DIAMANTADAS")}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          {/* Hashtag */}
          <h3 
            className="text-4xl md:text-6xl font-montserrat font-black mb-12"
            style={{ color: '#666666' }}
          >
            #BORA BRILHAR
          </h3>

          {/* QR Code */}
          <div className="inline-block bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-800 rounded-lg flex items-center justify-center">
              {/* QR Code Placeholder - Replace with actual QR code image */}
              <svg viewBox="0 0 100 100" className="w-full h-full p-4">
                <rect x="10" y="10" width="25" height="25" fill="white"/>
                <rect x="65" y="10" width="25" height="25" fill="white"/>
                <rect x="10" y="65" width="25" height="25" fill="white"/>
                <rect x="15" y="15" width="15" height="15" fill="black"/>
                <rect x="70" y="15" width="15" height="15" fill="black"/>
                <rect x="15" y="70" width="15" height="15" fill="black"/>
                <rect x="18" y="18" width="9" height="9" fill="white"/>
                <rect x="73" y="18" width="9" height="9" fill="white"/>
                <rect x="18" y="73" width="9" height="9" fill="white"/>
                <rect x="40" y="10" width="5" height="5" fill="white"/>
                <rect x="50" y="10" width="5" height="5" fill="white"/>
                <rect x="40" y="20" width="5" height="5" fill="white"/>
                <rect x="55" y="20" width="5" height="5" fill="white"/>
                <rect x="40" y="40" width="20" height="20" fill="white"/>
                <rect x="45" y="45" width="10" height="10" fill="black"/>
                <rect x="10" y="45" width="5" height="5" fill="white"/>
                <rect x="20" y="40" width="5" height="5" fill="white"/>
                <rect x="85" y="40" width="5" height="5" fill="white"/>
                <rect x="70" y="50" width="5" height="5" fill="white"/>
                <rect x="40" y="85" width="5" height="5" fill="white"/>
                <rect x="55" y="75" width="5" height="5" fill="white"/>
                <rect x="70" y="70" width="20" height="20" fill="white"/>
                <rect x="75" y="75" width="10" height="10" fill="black"/>
              </svg>
            </div>
          </div>

          {/* Caption */}
          <p className="text-gray-500 font-inter text-sm mt-6">
            {t("products.scanQR", "Escaneie para baixar o catálogo")}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Produtos;
