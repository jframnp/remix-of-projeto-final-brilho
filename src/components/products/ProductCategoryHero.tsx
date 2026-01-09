import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Sparkles } from "lucide-react";

// Import hero burs for diagonal display (like Microdont reference)
import PM718Hero from "@/assets/products/PM718_HERO.png";
import PM718Fino from "@/assets/products/PM718_FINO.png";
import PM07 from "@/assets/products/PM07_AZUL.webp";

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

  // 3 burs for diagonal display (Microdont style)
  const heroBurs = [
    { src: PM07, alt: "Broca PM-07 esférica" },
    { src: PM718Hero, alt: "Broca PM-718 cônica azul" },
    { src: PM718Fino, alt: "Broca PM-718 cônica fina" },
  ];

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

          {/* Right side - 3 burs diagonally arranged like Microdont */}
          <div className="relative hidden lg:flex items-center justify-center h-[500px] overflow-visible">
            {heroBurs.map((bur, index) => (
              <img
                key={index}
                src={bur.src}
                alt={bur.alt}
                className="absolute object-contain transition-all duration-700 hover:scale-105"
                style={{
                  height: index === 1 ? '380px' : '320px',
                  transform: `rotate(45deg) translateX(${(index - 1) * 120}px) translateY(${(index - 1) * 80}px)`,
                  zIndex: 3 - index,
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
                  right: `${index * 60}px`,
                  top: `${index * 50}px`,
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
