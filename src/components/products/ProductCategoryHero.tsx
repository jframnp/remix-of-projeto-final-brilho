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

// Category-specific hero images configuration
const categoryHeroImages: Record<string, { src: string; alt: string }[]> = {
  "brocas-diamantadas": [
    { src: PM718Hero, alt: "Broca PM-718 cônica" },
    { src: PM718Fino, alt: "Broca PM-718 fina" },
    { src: PM718Hero, alt: "Broca PM-718 cônica" },
  ],
  "fresas-tungstenio": [
    { src: FresaTungstenio5, alt: "Fresa de Tungstênio cônica grande" },
    { src: FresaTungstenio1, alt: "Fresa de Tungstênio ogiva" },
    { src: FresaTungstenio3, alt: "Fresa de Tungstênio cônica" },
  ],
  "fresas-ceramica": [
    { src: PM744, alt: "Fresa cerâmica chama" },
    { src: PM838, alt: "Fresa cerâmica chama grande" },
    { src: PM720L, alt: "Fresa cerâmica cônica longa" },
  ],
  "lixas": [
    { src: PM07, alt: "Lixa esférica" },
    { src: PM42, alt: "Lixa roda" },
    { src: PM57, alt: "Lixa cilíndrica" },
  ],
  "lixa-tubular-adesiva": [
    { src: PM829, alt: "Lixa tubular ogiva" },
    { src: PM57, alt: "Lixa tubular cilíndrica" },
    { src: PM744, alt: "Lixa adesiva chama" },
  ],
  "polidoras": [
    { src: PM829, alt: "Polidora torpedo" },
    { src: PM720, alt: "Polidora cônica" },
    { src: PM57, alt: "Polidora cilíndrica" },
  ],
  "escovas-limpeza": [
    { src: PM07, alt: "Escova esférica" },
    { src: PM42, alt: "Escova roda" },
    { src: PM07, alt: "Escova esférica" },
  ],
  "fibras-enucleadora-mandril": [
    { src: PM859, alt: "Fibra agulha" },
    { src: PM718, alt: "Mandril cônico" },
    { src: PM859, alt: "Enucleadora agulha" },
  ],
  "apoio-lixas-afiacao": [
    { src: PM42, alt: "Apoio roda" },
    { src: PM57, alt: "Apoio cilíndrico" },
    { src: PM42, alt: "Disco afiação" },
  ],
  "linha-gold": [
    { src: PM718Hero, alt: "Broca Gold cônica" },
    { src: PM718Fino, alt: "Broca Gold fina" },
    { src: PM718Hero, alt: "Broca Gold cônica" },
  ],
};

interface ProductCategoryHeroProps {
  category: string;
  categoryKey: string;
  description: string;
  featuredImages: (string | undefined)[];
  getLocalizedPath: (path: string) => string;
  isGold?: boolean;
}

const ProductCategoryHero = ({
  category,
  categoryKey,
  description,
  featuredImages,
  getLocalizedPath,
  isGold = false,
}: ProductCategoryHeroProps) => {
  const { t } = useTranslation();

  // Get category-specific hero images or fallback to default
  const heroBurs = categoryHeroImages[category] || categoryHeroImages["brocas-diamantadas"];

  return (
    <section className="relative min-h-[500px] md:min-h-[600px] overflow-hidden bg-[#1a1a1a]">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/95 to-transparent z-10" />
      
      {/* Gold shimmer effect for gold line */}
      {isGold && (
        <div className="absolute inset-0 animate-shimmer opacity-20" style={{
          background: 'linear-gradient(45deg, transparent 25%, rgba(255,215,0,0.3) 50%, transparent 75%)',
          backgroundSize: '400% 100%',
        }} />
      )}

      <div className="container mx-auto px-4 relative z-20 h-full flex items-center py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left side - Content */}
          <div className="max-w-xl">
            <Link
              to={getLocalizedPath("/produtos")}
              className="inline-flex items-center gap-2 mb-6 text-white/70 hover:text-white transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              {t("products.backToCategories", "Voltar às Categorias")}
            </Link>

            {/* "Alta Performance" label */}
            <p className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
              isGold ? "text-yellow-400" : "text-primary"
            }`}>
              {t("products.highPerformance", "Alta Performance")}
            </p>

            {/* Main title */}
            <h1 className={`font-montserrat font-black text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight ${
              isGold ? "text-yellow-400" : "text-white"
            }`}>
              {isGold && <Sparkles className="inline w-10 h-10 mr-2 animate-pulse" />}
              {t("products.heroTitle", "Combinação que proporciona resistência e durabilidade")}
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right side - 3 burs horizontally arranged with animations */}
          <div className="relative hidden lg:flex items-center justify-center h-[500px] gap-4">
            {heroBurs.map((bur, index) => (
              <img
                key={index}
                src={bur.src}
                alt={bur.alt}
                className="object-contain transition-all duration-500 hover:scale-110 hover:-translate-y-4"
                style={{
                  height: index === 1 ? '400px' : '350px',
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
                  animation: `float 3s ease-in-out ${index * 0.3}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategoryHero;
