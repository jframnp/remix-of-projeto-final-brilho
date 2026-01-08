import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { ChevronLeft, ChevronRight, Sparkles, Gem, Disc, Brush, Wrench } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  diamondBurs: <Gem className="w-10 h-10" />,
  tungstenBurs: <Disc className="w-10 h-10" />,
  ceramicBurs: <Sparkles className="w-10 h-10" />,
  lixas: <Disc className="w-10 h-10" />,
  tubularAdhesive: <Disc className="w-10 h-10" />,
  polishers: <Brush className="w-10 h-10" />,
  brushes: <Brush className="w-10 h-10" />,
  fiberMandril: <Wrench className="w-10 h-10" />,
  supportSharpening: <Wrench className="w-10 h-10" />,
};

interface Category {
  key: string;
  path: string;
  badge?: string | null;
}

interface CategoryCarouselProps {
  categories: Category[];
}

const CategoryCarousel = ({ categories }: CategoryCarouselProps) => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const getLocalizedPath = (path: string) => {
    if (currentLang === "en") return `/en${path}`;
    if (currentLang === "es") return `/es${path}`;
    return path;
  };

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 400);
    }
  };

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 -ml-6"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 -mr-6"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Carousel */}
      <div
        ref={carouselRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-2"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {categories.map((cat, index) => (
          <Link
            key={cat.key}
            to={getLocalizedPath(cat.path)}
            className="group flex-shrink-0 w-72"
            style={{ 
              scrollSnapAlign: "start",
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div 
              className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/30"
              style={{
                transform: "perspective(1000px) rotateY(0deg)",
              }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
              </div>

              {/* Badge */}
              {cat.badge && (
                <span className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold animate-pulse ${
                  cat.badge === "BESTSELLER" ? "bg-yellow-400 text-yellow-900" :
                  cat.badge === "NOVO" ? "bg-green-500 text-white" :
                  "bg-primary text-white"
                }`}>
                  {t(`products.badges.${cat.badge.toLowerCase()}`, cat.badge)}
                </span>
              )}

              {/* Icon Container */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                {categoryIcons[cat.key] || <Gem className="w-10 h-10" />}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h3 className="text-white font-montserrat font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {t(`products.sections.${cat.key}`)}
                </h3>
                <p className="text-white/60 text-sm line-clamp-2">
                  {t(`products.${cat.key}.shortDesc`, t(`products.${cat.key}.description`, "").substring(0, 80))}
                </p>
                
                {/* Arrow Indicator */}
                <div className="mt-4 flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <span>{t("products.discover", "Descubra")}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CategoryCarousel;
