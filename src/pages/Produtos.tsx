import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { Download, ShieldCheck, Truck, Award, Sparkles } from "lucide-react";
import ParticleBackground from "@/components/products/ParticleBackground";
import CategoryCarousel from "@/components/products/CategoryCarousel";
import GlobalFilters from "@/components/products/GlobalFilters";
import DownloadCounter from "@/components/products/DownloadCounter";

const Produtos = () => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();

  const getLocalizedPath = (path: string) => {
    if (currentLang === "en") return `/en${path}`;
    if (currentLang === "es") return `/es${path}`;
    return path;
  };

  const categories = [
    { key: "diamondBurs", path: "/produtos/brocas-diamantadas", badge: "BESTSELLER" },
    { key: "tungstenBurs", path: "/produtos/fresas-tungstenio", badge: null },
    { key: "ceramicBurs", path: "/produtos/fresas-ceramica", badge: null },
    { key: "lixas", path: "/produtos/lixas", badge: "NOVO" },
    { key: "tubularAdhesive", path: "/produtos/lixa-tubular-adesiva", badge: null },
    { key: "polishers", path: "/produtos/polidoras", badge: null },
    { key: "brushes", path: "/produtos/escovas-limpeza", badge: null },
    { key: "fiberMandril", path: "/produtos/fibras-enucleadora-mandril", badge: null },
    { key: "supportSharpening", path: "/produtos/apoio-lixas-afiacao", badge: null },
  ];

  return (
    <Layout>
      {/* Hero Section with Parallax & Particles */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-primary via-[#720000] to-[#5a0a0a] overflow-hidden flex items-center">
        <ParticleBackground />
        
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated Title */}
            <div className="mb-6 animate-fade-in">
              <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4 animate-float" />
              <h1 className="text-white font-montserrat font-black text-4xl md:text-6xl lg:text-7xl mb-4 leading-tight">
                <span className="inline-block animate-shimmer bg-clip-text">
                  {t("products.heroTitle", "Explore Nossa Linha de Produtos Premium")}
                </span>
              </h1>
            </div>
            
            <p className="text-white/80 font-inter text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in stagger-2">
              {t("products.heroSubtitle", "De brocas diamantadas a lixas inovadoras – tudo para podologia, odontologia e nails design")}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in stagger-3">
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 flex items-center gap-3 border border-white/20 hover:bg-white/20 transition-all">
                <ShieldCheck className="w-7 h-7 text-green-400" />
                <div className="text-left">
                  <p className="text-white font-bold text-sm">{t("products.badge.anvisa", "ANVISA")}</p>
                  <p className="text-white/70 text-xs">{t("products.badge.certified", "Certificado")}</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 flex items-center gap-3 border border-white/20 hover:bg-white/20 transition-all">
                <Truck className="w-7 h-7 text-blue-400" />
                <div className="text-left">
                  <p className="text-white font-bold text-sm">{t("products.badge.shipping", "Envio")}</p>
                  <p className="text-white/70 text-xs">{t("products.badge.nationwide", "Todo Brasil")}</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 flex items-center gap-3 border border-white/20 hover:bg-white/20 transition-all">
                <Award className="w-7 h-7 text-yellow-400" />
                <div className="text-left">
                  <p className="text-white font-bold text-sm">{t("products.badge.quality", "Qualidade")}</p>
                  <p className="text-white/70 text-xs">{t("products.badge.premium", "Premium")}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in stagger-4">
              <a
                href="/catalogo-brilho.pdf"
                target="_blank"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary font-montserrat font-bold px-8 py-4 rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300"
              >
                <Download size={24} />
                {t("products.downloadCatalog")}
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Interactive Category Carousel */}
      <section className="bg-background py-16 md:py-24">
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
            <GlobalFilters onFilterChange={(filters) => console.log(filters)} />
          </div>
          
          <CategoryCarousel categories={categories} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white font-montserrat font-bold text-3xl md:text-4xl mb-4">
            {t("products.ctaTitle", "Não encontrou o que procura?")}
          </h2>
          <p className="text-white/70 font-inter text-lg mb-10 max-w-xl mx-auto">
            {t("products.ctaDesc", "Entre em contato conosco e solicite um orçamento personalizado para suas necessidades.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={getLocalizedPath("/contato")}
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-montserrat font-bold px-10 py-4 rounded-2xl hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/30"
            >
              {t("products.ctaContact", "Fale Conosco")}
            </Link>
            <a
              href="https://wa.me/5511940101807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-montserrat font-bold px-10 py-4 rounded-2xl hover:bg-green-700 hover:scale-105 transition-all shadow-lg shadow-green-600/30"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <DownloadCounter />
    </Layout>
  );
};

export default Produtos;
