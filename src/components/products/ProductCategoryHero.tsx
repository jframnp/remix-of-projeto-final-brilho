import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Download, MessageCircle, Sparkles } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

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

          {/* Right side - Featured products (3 burs diagonally) */}
          <div className="relative hidden lg:flex items-center justify-center h-[450px]">
            {/* Product images arranged diagonally like reference */}
            {featuredImages.slice(0, 3).map((image, index) => (
              image && (
                <div
                  key={index}
                  className="absolute transform transition-all duration-500 hover:scale-110"
                  style={{
                    transform: `rotate(-25deg) translateY(${(index - 1) * 100}px) translateX(${(index - 1) * 60}px)`,
                    zIndex: 3 - index,
                  }}
                >
                  <img
                    src={image}
                    alt={`Featured product ${index + 1}`}
                    className="w-auto h-48 md:h-56 object-contain drop-shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
                    }}
                  />
                </div>
              )
            ))}
            
            {/* Fallback if no images - show placeholder burs */}
            {featuredImages.filter(Boolean).length === 0 && (
              <div className="flex items-center justify-center">
                <div className="w-32 h-64 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full opacity-50 transform rotate-45" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategoryHero;
