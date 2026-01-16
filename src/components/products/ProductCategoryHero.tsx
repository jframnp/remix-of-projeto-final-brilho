import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Sparkles } from "lucide-react";

// Import all product images for hero sections
import PM07 from "@/assets/products/PM07_AZUL.webp";
import PM42 from "@/assets/products/PM42_AZUL.jpg";
import PM57 from "@/assets/products/PM57_AZUL.webp";
import PM718 from "@/assets/products/PM718_AZUL.webp";
import PM718Hero from "@/assets/products/PM718_HERO.png";
import PM718Fino from "@/assets/products/PM718_FINO.png";
import PM720 from "@/assets/products/PM720_AZUL.webp";
import PM720L from "@/assets/products/PM720L_AZUL.webp";
import PM744 from "@/assets/products/PM744_AZUL.webp";
import PM829 from "@/assets/products/PM829_AZUL.webp";
import PM838 from "@/assets/products/PM838_AZUL.webp";
import PM859 from "@/assets/products/PM859_AZUL.webp";

// Import fresas de tungstênio images
import FresaTungstenio1 from "@/assets/products/fresa-tungstenio-1.png";
import FresaTungstenio2 from "@/assets/products/fresa-tungstenio-2.png";
import FresaTungstenio3 from "@/assets/products/fresa-tungstenio-3.png";
import FresaTungstenio4 from "@/assets/products/fresa-tungstenio-4.png";
import FresaTungstenio5 from "@/assets/products/fresa-tungstenio-5.png";

// Import brocas de cerâmica images
import BrocaCeramica1 from "@/assets/products/broca-ceramica-1.png";
import BrocaCeramica2 from "@/assets/products/broca-ceramica-2.png";
import BrocaCeramica3 from "@/assets/products/broca-ceramica-3.png";
import BrocaCeramica4 from "@/assets/products/broca-ceramica-4.png";

// Import lixas images
import Lixa1 from "@/assets/products/lixa-1.png";
import Lixa2 from "@/assets/products/lixa-2.png";
import Lixa3 from "@/assets/products/lixa-3.png";

// Import escovas de limpeza images
import EscovaLimpeza1 from "@/assets/products/escova-limpeza-1.png";
import EscovaLimpeza2 from "@/assets/products/escova-limpeza-2.png";
import EscovaLimpeza3 from "@/assets/products/escova-limpeza-3.png";
import EscovaLimpeza4 from "@/assets/products/escova-limpeza-4.png";

// Import polidoras images
import PolidoraVerde from "@/assets/products/polidora-verde.png";
import PolidoraCinza from "@/assets/products/polidora-cinza.png";
import PolidoraAzul from "@/assets/products/polidora-azul.png";

// Import fibras e mandril images
import FibraMandril1 from "@/assets/products/fibra-mandril-1.png";
import FibraMandril2 from "@/assets/products/fibra-mandril-2.png";
import FibraMandril3 from "@/assets/products/fibra-mandril-3.png";

// Category-specific hero images configuration - ONLY for categories with bur illustrations
const categoryHeroImages: Record<string, { src: string; alt: string }[]> = {
  "brocas-diamantadas": [
    { src: PM718Hero, alt: "Broca PM-718 cônica" },
    { src: PM718Fino, alt: "Broca PM-718 fina" },
    { src: PM718Hero, alt: "Broca PM-718 cônica" },
  ],
  "linha-gold": [
    { src: PM718Hero, alt: "Broca Gold cônica" },
    { src: PM718Fino, alt: "Broca Gold fina" },
    { src: PM718Hero, alt: "Broca Gold cônica" },
  ],
};

// Map category slugs to translation keys
const categoryTranslationKeys: Record<string, string> = {
  "brocas-diamantadas": "diamondBurs",
  "fresas-tungstenio": "tungstenBurs",
  "fresas-ceramica": "ceramicBurs",
  "lixas": "lixas",
  "lixa-tubular-adesiva": "tubularAdhesive",
  "polidoras": "polishers",
  "escovas-limpeza": "brushes",
  "fibras-enucleadora-mandril": "fiberMandril",
  "apoio-lixas-afiacao": "supportSharpening",
  "linha-gold": "goldLine",
};

interface ProductCategoryHeroProps {
  category: string;
  categoryKey: string;
  featuredImages: (string | undefined)[];
  getLocalizedPath: (path: string) => string;
  isGold?: boolean;
}

const ProductCategoryHero = ({
  category,
  categoryKey,
  featuredImages,
  getLocalizedPath,
  isGold = false,
}: ProductCategoryHeroProps) => {
  const { t } = useTranslation();

  // Get translation key for this category
  const translationKey = categoryTranslationKeys[category] || "diamondBurs";
  
  // Get translated description
  const description = t(`products.${translationKey}.description`);

  // Get category-specific hero images
  const heroBurs = categoryHeroImages[category] || [];
  
  // Only show images for categories that have them configured
  const hasHeroImages = heroBurs.length > 0;

  return (
    <section className="relative min-h-[400px] md:min-h-[500px] overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-20 h-full flex items-center py-12">
        {hasHeroImages ? (
          // Two-column layout with images
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            {/* Left side - Content */}
            <div className="max-w-xl">
              <Link
                to={getLocalizedPath("/produtos")}
                className="inline-flex items-center gap-2 mb-6 text-gray-500 hover:text-gray-700 transition-colors group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                {t("products.backToCategories")}
              </Link>

              {/* Main title */}
              <h1 className={`font-montserrat font-black text-3xl md:text-4xl lg:text-5xl mb-2 leading-tight ${
                isGold ? "text-yellow-500" : "text-primary"
              }`}>
                {isGold && <Sparkles className="inline w-10 h-10 mr-2 animate-pulse" />}
                {t("products.heroTitle")}
              </h1>
              
              {/* English subtitle */}
              <p className="text-gray-500 text-lg font-medium mb-6">
                {t(`products.${translationKey}.titleEn`) || translationKey.toUpperCase()}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {description}
              </p>
            </div>

            {/* Right side - 3 burs horizontally arranged with animations */}
            <div className="relative hidden lg:flex items-center justify-center h-[400px] gap-4">
              {heroBurs.map((bur, index) => (
                <img
                  key={index}
                  src={bur.src}
                  alt={bur.alt}
                  className="object-contain transition-all duration-500 hover:scale-110 hover:-translate-y-4"
                  style={{
                    width: '180px',
                    height: '300px',
                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
                    animation: `float 3s ease-in-out ${index * 0.3}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          // Centered layout - clean and simple, no side info
          <div className="w-full max-w-3xl">
            <Link
              to={getLocalizedPath("/produtos")}
              className="inline-flex items-center gap-2 mb-6 text-gray-500 hover:text-gray-700 transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              {t("products.backToCategories")}
            </Link>
            
            {/* Main title */}
            <h1 className={`font-montserrat font-black text-3xl md:text-4xl lg:text-5xl mb-2 leading-tight ${
              isGold ? "text-yellow-500" : "text-primary"
            }`}>
              {isGold && <Sparkles className="inline w-10 h-10 mr-2 animate-pulse" />}
              {t("products.heroTitle")}
            </h1>
            
            {/* English subtitle */}
            <p className="text-gray-500 text-lg font-medium mb-6">
              {t(`products.${translationKey}.titleEn`) || translationKey.toUpperCase()}
            </p>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">
              {description}
            </p>
          </div>
        )}
      </div>
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
    </section>
  );
};

export default ProductCategoryHero;
