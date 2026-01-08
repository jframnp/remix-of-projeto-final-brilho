import { useState, useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Download, 
  ShieldCheck, 
  Truck, 
  Award, 
  Sparkles, 
  Gem, 
  Disc, 
  Brush, 
  Wrench,
  ChevronRight,
  ChevronLeft,
  Filter,
  X,
  QrCode
} from "lucide-react";
import ParticleBackground from "@/components/products/ParticleBackground";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Produtos = () => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();
  const [downloadCount, setDownloadCount] = useState(2847);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const getLocalizedPath = (path: string) => {
    if (currentLang === "en") return `/en${path}`;
    if (currentLang === "es") return `/es${path}`;
    return path;
  };

  // Animate download counter
  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadCount(prev => prev + Math.floor(Math.random() * 3));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { 
      key: "diamondBurs", 
      path: "/produtos/brocas-diamantadas", 
      badge: "BESTSELLER",
      icon: <Gem className="w-10 h-10" />,
      color: "from-red-600 to-red-800"
    },
    { 
      key: "goldLine", 
      path: "/produtos/linha-gold", 
      badge: "PREMIUM",
      icon: <Sparkles className="w-10 h-10" />,
      color: "from-yellow-500 to-amber-600"
    },
    { 
      key: "tungstenBurs", 
      path: "/produtos/fresas-tungstenio", 
      badge: null,
      icon: <Disc className="w-10 h-10" />,
      color: "from-gray-600 to-gray-800"
    },
    { 
      key: "ceramicBurs", 
      path: "/produtos/fresas-ceramica", 
      badge: null,
      icon: <Sparkles className="w-10 h-10" />,
      color: "from-blue-600 to-blue-800"
    },
    { 
      key: "lixas", 
      path: "/produtos/lixas", 
      badge: "NOVO",
      icon: <Disc className="w-10 h-10" />,
      color: "from-green-600 to-green-800"
    },
    { 
      key: "tubularAdhesive", 
      path: "/produtos/lixa-tubular-adesiva", 
      badge: null,
      icon: <Disc className="w-10 h-10" />,
      color: "from-purple-600 to-purple-800"
    },
    { 
      key: "polishers", 
      path: "/produtos/polidoras", 
      badge: null,
      icon: <Brush className="w-10 h-10" />,
      color: "from-pink-600 to-pink-800"
    },
    { 
      key: "brushes", 
      path: "/produtos/escovas-limpeza", 
      badge: null,
      icon: <Brush className="w-10 h-10" />,
      color: "from-teal-600 to-teal-800"
    },
    { 
      key: "fiberMandril", 
      path: "/produtos/fibras-enucleadora-mandril", 
      badge: null,
      icon: <Wrench className="w-10 h-10" />,
      color: "from-orange-600 to-orange-800"
    },
    { 
      key: "supportSharpening", 
      path: "/produtos/apoio-lixas-afiacao", 
      badge: null,
      icon: <Wrench className="w-10 h-10" />,
      color: "from-indigo-600 to-indigo-800"
    },
  ];

  const filterOptions = {
    usage: [
      { value: "podologia", label: t("products.usage.podologia", "Podologia") },
      { value: "nails", label: t("products.usage.nails", "Nails Design") },
      { value: "odontologia", label: t("products.usage.odontologia", "Odontologia") },
    ],
    material: [
      { value: "diamante", label: t("products.material.diamante", "Diamante") },
      { value: "tungstenio", label: t("products.material.tungstenio", "Tungstênio") },
      { value: "ceramica", label: t("products.material.ceramica", "Cerâmica") },
    ],
    grain: [
      { value: "grosso", label: t("products.grains.grosso", "Grosso") },
      { value: "medio", label: t("products.grains.medio", "Médio") },
      { value: "fino", label: t("products.grains.fino", "Fino") },
    ],
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
      const scrollAmount = 350;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 400);
    }
  };

  return (
    <Layout>
      {/* Hero Section - Red gradient matching other pages */}
      <section className="relative hero-products overflow-hidden flex items-center justify-center" style={{ minHeight: '600px' }}>
        {/* Red gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0a] via-[#3d0f0f] to-[#720000]">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D32F2F]/30 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#9B0000]/40 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff4444]/10 rounded-full blur-[150px]" />
        </div>
        
        <ParticleBackground />
        
        <div className="container mx-auto px-4 relative z-10 py-20 text-center">
          {/* Animated Title - 48px white central */}
          <h1 
            className="font-montserrat font-black mb-4 animate-fade-in text-white"
            style={{ fontSize: '48px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            CATÁLOGO / CATALOG
          </h1>
          
          {/* Subtitle - 24px with fade-in 1s delay 0.5s */}
          <p className="hero-subtitle max-w-3xl mx-auto mb-8 animate-fade-in-slow delay-500 text-white/90">
            {t("products.heroSubtitle", "Explore nossa linha completa para podologia, odontologia e nails")}
          </p>

          {/* Trust Badges - Glass effect */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in stagger-3">
            <div className="glass rounded-xl px-6 py-4 flex items-center gap-3 hover:bg-white/20 transition-all duration-300">
              <ShieldCheck className="w-8 h-8 text-green-400" />
              <div className="text-left">
                <p className="text-white font-bold text-sm">ANVISA</p>
                <p className="text-white/70 text-xs">{t("products.badge.certified", "Certificado")}</p>
              </div>
            </div>
            <div className="glass rounded-xl px-6 py-4 flex items-center gap-3 hover:bg-white/20 transition-all duration-300">
              <Truck className="w-8 h-8 text-blue-400" />
              <div className="text-left">
                <p className="text-white font-bold text-sm">{t("products.badge.shipping", "Envio")}</p>
                <p className="text-white/70 text-xs">{t("products.badge.nationwide", "Todo Brasil")}</p>
              </div>
            </div>
            <div className="glass rounded-xl px-6 py-4 flex items-center gap-3 hover:bg-white/20 transition-all duration-300">
              <Award className="w-8 h-8 text-yellow-400" />
              <div className="text-left">
                <p className="text-white font-bold text-sm">{t("products.badge.quality", "Qualidade")}</p>
                <p className="text-white/70 text-xs">{t("products.badge.premium", "Premium")}</p>
              </div>
            </div>
          </div>

          {/* CTA Download Button */}
          <a
            href="/catalogo-brilho.pdf"
            target="_blank"
            className="inline-flex items-center justify-center gap-3 btn-primary-lg animate-fade-in stagger-5"
          >
            <Download size={24} />
            {t("products.downloadCatalog", "Baixar Catálogo Completo")}
          </a>

          {/* QR Code Button */}
          <button 
            onClick={() => setQrModalOpen(true)}
            className="block mx-auto mt-4 text-white/70 hover:text-white text-sm underline animate-fade-in stagger-6"
          >
            <QrCode className="inline w-4 h-4 mr-1" />
            {t("products.scanToShine", "Escaneie para Brilhar")}
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Interactive Category Carousel - 400px slides */}
      <section className="bg-background section-padding-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-foreground font-montserrat font-bold text-3xl md:text-4xl mb-2">
                {t("products.shopByCategory", "Compre por Categoria")}
              </h2>
              <p className="text-muted-foreground font-inter text-lg">
                {t("products.categoryDesc", "Selecione uma categoria para ver todos os produtos disponíveis")}
              </p>
            </div>
            
            {/* Filters - Material-UI style dropdown */}
            <div className="flex flex-wrap gap-3">
              {Object.entries(filterOptions).map(([category, options]) => (
                <div key={category} className="relative">
                  <select 
                    className="filter-chip appearance-none pr-8 cursor-pointer"
                    onChange={(e) => setActiveFilter(e.target.value || null)}
                  >
                    <option value="">{t(`products.filter.${category}`, category)}</option>
                    {options.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              ))}
              {activeFilter && (
                <button 
                  onClick={() => setActiveFilter(null)}
                  className="filter-chip flex items-center gap-2 text-primary"
                >
                  <X className="w-4 h-4" />
                  {t("products.clearFilter", "Limpar")}
                </button>
              )}
            </div>
          </div>
          
          {/* Carousel with 400px slides */}
          <div className="relative">
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 -ml-7"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
            )}
            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 -mr-7"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            )}

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
                  className="group flex-shrink-0"
                  style={{ 
                    scrollSnapAlign: "start",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div 
                    className={`relative carousel-slide h-[350px] bg-gradient-to-br ${cat.color} transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden`}
                  >
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
                    </div>

                    {/* Badge */}
                    {cat.badge && (
                      <span className={`absolute top-4 right-4 z-10 px-4 py-1.5 rounded-full text-xs font-bold animate-pulse ${
                        cat.badge === "BESTSELLER" ? "badge-bestseller" :
                        cat.badge === "NOVO" ? "badge-novo" :
                        "bg-primary text-white"
                      }`}>
                        {t(`products.badges.${cat.badge.toLowerCase()}`, cat.badge)}
                      </span>
                    )}

                    {/* 3D Rotating Icon Container */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div 
                        className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shadow-xl group-hover:animate-spin-slow transition-all duration-500"
                      >
                        {cat.icon}
                      </div>
                    </div>

                    {/* Content - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                      <h3 className="text-white font-montserrat font-bold text-xl mb-2 group-hover:text-yellow-300 transition-colors">
                        {t(`products.sections.${cat.key}`)}
                      </h3>
                      <p className="text-white/70 text-sm line-clamp-2 mb-4">
                        {t(`products.${cat.key}.shortDesc`, "")}
                      </p>
                      
                      {/* Discover Button */}
                      <div className="flex items-center gap-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <span>{t("products.discoverMore", "Descubra Mais")}</span>
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid - 4 columns desktop, 300x400px cards */}
      <section className="bg-muted/30 section-padding-lg">
        <div className="container mx-auto">
          <h2 className="text-foreground font-montserrat font-bold text-3xl md:text-4xl mb-10 text-center">
            {t("products.allCategories", "Todas as Categorias")}
          </h2>
          
          <div className="grid-products-4">
            {categories.map((cat, index) => (
              <Link
                key={cat.key}
                to={getLocalizedPath(cat.path)}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg transition-all duration-300 hover-lift">
                  {/* Image Container - 300x200px with zoom on hover */}
                  <div className="relative h-[200px] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-400">
                        {cat.icon}
                      </div>
                    </div>
                    {cat.badge && (
                      <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${
                        cat.badge === "BESTSELLER" ? "badge-bestseller" : "badge-novo"
                      }`}>
                        {cat.badge}
                      </span>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-montserrat font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors" style={{ fontSize: '28px' }}>
                      {t(`products.sections.${cat.key}`)}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed mb-4 line-clamp-2" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                      {t(`products.${cat.key}.teaser`, t(`products.${cat.key}.description`, "").substring(0, 100))}
                    </p>
                    <button className="btn-cta w-full bg-primary text-white hover:bg-primary/90">
                      {t("products.discoverMore", "Descubra Mais")}
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0a] via-[#3d0f0f] to-[#720000]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D32F2F]/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#9B0000]/30 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-white font-montserrat font-bold text-3xl md:text-4xl mb-4">
            {t("products.ctaTitle", "Não encontrou o que procura?")}
          </h2>
          <p className="text-white/70 font-inter text-lg mb-10 max-w-xl mx-auto">
            {t("products.ctaDesc", "Entre em contato conosco e solicite um orçamento personalizado para suas necessidades.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={getLocalizedPath("/contato")}
              className="inline-flex items-center justify-center gap-3 bg-white text-[#9B0000] font-montserrat font-bold text-lg px-10 py-5 rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              {t("products.ctaContact", "Fale Conosco")}
            </Link>
            <a
              href="https://wa.me/5511940101807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-montserrat font-bold px-10 py-5 rounded-full hover:bg-green-700 hover:scale-105 transition-all shadow-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>


      {/* QR Code Modal */}
      <Dialog open={qrModalOpen} onOpenChange={setQrModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center font-montserrat">
              {t("products.scanQR", "Escaneie para Brilhar")}
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center py-6">
            <div className="qr-code-container mb-4">
              {/* QR Code Placeholder - would need actual QR code library */}
              <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <QrCode className="w-20 h-20 text-gray-600" />
              </div>
            </div>
            <p className="text-muted-foreground text-center text-sm">
              {t("products.qrDesc", "Escaneie o QR code para acessar nosso catálogo digital")}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Produtos;
