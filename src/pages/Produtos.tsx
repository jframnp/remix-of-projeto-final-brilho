import { useState, useEffect } from "react";
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
  QrCode,
} from "lucide-react";
import ParticleBackground from "@/components/products/ParticleBackground";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Produtos = () => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();
  const [downloadCount, setDownloadCount] = useState(2847);
  const [qrModalOpen, setQrModalOpen] = useState(false);

  const getLocalizedPath = (path: string) => {
    if (currentLang === "en") return `/en${path}`;
    if (currentLang === "es") return `/es${path}`;
    return path;
  };

  // Animate download counter
  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    {
      key: "diamondBurs",
      path: "/produtos/brocas-diamantadas",
      badge: "BESTSELLER",
      icon: <Gem className="w-10 h-10" />,
      color: "from-red-600 to-red-800",
    },
    {
      key: "goldLine",
      path: "/produtos/linha-gold",
      badge: "PREMIUM",
      icon: <Sparkles className="w-10 h-10" />,
      color: "from-yellow-500 to-amber-600",
    },
    {
      key: "tungstenBurs",
      path: "/produtos/fresas-tungstenio",
      badge: null,
      icon: <Disc className="w-10 h-10" />,
      color: "from-gray-600 to-gray-800",
    },
    {
      key: "ceramicBurs",
      path: "/produtos/fresas-ceramica",
      badge: null,
      icon: <Sparkles className="w-10 h-10" />,
      color: "from-blue-600 to-blue-800",
    },
    {
      key: "lixas",
      path: "/produtos/lixas",
      badge: "NOVO",
      icon: <Disc className="w-10 h-10" />,
      color: "from-green-600 to-green-800",
    },
    {
      key: "tubularAdhesive",
      path: "/produtos/lixa-tubular-adesiva",
      badge: null,
      icon: <Disc className="w-10 h-10" />,
      color: "from-purple-600 to-purple-800",
    },
    {
      key: "polishers",
      path: "/produtos/polidoras",
      badge: null,
      icon: <Brush className="w-10 h-10" />,
      color: "from-pink-600 to-pink-800",
    },
    {
      key: "brushes",
      path: "/produtos/escovas-limpeza",
      badge: null,
      icon: <Brush className="w-10 h-10" />,
      color: "from-teal-600 to-teal-800",
    },
    {
      key: "fiberMandril",
      path: "/produtos/fibras-enucleadora-mandril",
      badge: null,
      icon: <Wrench className="w-10 h-10" />,
      color: "from-orange-600 to-orange-800",
    },
    {
      key: "supportSharpening",
      path: "/produtos/apoio-lixas-afiacao",
      badge: null,
      icon: <Wrench className="w-10 h-10" />,
      color: "from-indigo-600 to-indigo-800",
    },
  ];

  return (
    <Layout>
      {/* Hero Section - Red gradient matching other pages */}
      <section
        className="relative hero-products overflow-hidden flex items-center justify-center"
        style={{ minHeight: "600px" }}
      >
        {/* Red gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0a] via-[#3d0f0f] to-[#720000]">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D32F2F]/30 rounded-full blur-[100px] animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#9B0000]/40 rounded-full blur-[120px] animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff4444]/10 rounded-full blur-[150px]" />
        </div>

        <ParticleBackground />

        <div className="container mx-auto px-4 relative z-10 py-20 text-center">
          {/* Animated Title - 48px white central */}
          <h1
            className="font-montserrat font-black mb-4 animate-fade-in text-white"
            style={{ fontSize: "48px", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            CATÁLOGO
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

      {/* Categories Section - Unified Grid Layout */}
      <section className="bg-background section-padding-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-foreground font-montserrat font-bold text-3xl md:text-4xl mb-3">
              {t("products.shopByCategory", "Selecione uma Categoria")}
            </h2>
            <p className="text-muted-foreground font-inter text-lg max-w-2xl mx-auto">
              {t("products.categoryDesc", "Explore nossa linha completa de produtos profissionais")}
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Featured Large Cards - First Row */}
            <Link
              to={getLocalizedPath(categories[0].path)}
              className="group lg:col-span-2 lg:row-span-2 animate-fade-in"
            >
              <div className={`relative h-full min-h-[400px] rounded-3xl bg-gradient-to-br ${categories[0].color} overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/20 rounded-full blur-3xl" />
                </div>
                <span className="absolute top-4 right-4 z-10 px-4 py-1.5 rounded-full text-xs font-bold badge-bestseller animate-pulse">
                  BESTSELLER
                </span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                    {categories[0].icon}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <h3 className="text-white font-montserrat font-bold text-2xl md:text-3xl mb-2 group-hover:text-yellow-300 transition-colors">
                    {t(`products.sections.${categories[0].key}`)}
                  </h3>
                  <p className="text-white/80 text-base mb-4">
                    {t(`products.${categories[0].key}.shortDesc`, "Precisão e durabilidade para profissionais")}
                  </p>
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <span>{t("products.discoverMore", "Ver Produtos")}</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Linha Gold - Premium */}
            <Link
              to={getLocalizedPath(categories[1].path)}
              className="group animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className={`relative h-[190px] rounded-3xl bg-gradient-to-br ${categories[1].color} overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}>
                <span className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-bold bg-primary text-white">
                  PREMIUM
                </span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                    {categories[1].icon}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white font-montserrat font-bold text-lg group-hover:text-yellow-300 transition-colors">
                    {t(`products.sections.${categories[1].key}`)}
                  </h3>
                </div>
              </div>
            </Link>

            {/* Fresas Tungstênio */}
            <Link
              to={getLocalizedPath(categories[2].path)}
              className="group animate-fade-in"
              style={{ animationDelay: "0.15s" }}
            >
              <div className={`relative h-[190px] rounded-3xl bg-gradient-to-br ${categories[2].color} overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                    {categories[2].icon}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white font-montserrat font-bold text-lg group-hover:text-yellow-300 transition-colors">
                    {t(`products.sections.${categories[2].key}`)}
                  </h3>
                </div>
              </div>
            </Link>

            {/* Fresas Cerâmica */}
            <Link
              to={getLocalizedPath(categories[3].path)}
              className="group animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className={`relative h-[190px] rounded-3xl bg-gradient-to-br ${categories[3].color} overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                    {categories[3].icon}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white font-montserrat font-bold text-lg group-hover:text-yellow-300 transition-colors">
                    {t(`products.sections.${categories[3].key}`)}
                  </h3>
                </div>
              </div>
            </Link>

            {/* Lixas */}
            <Link
              to={getLocalizedPath(categories[4].path)}
              className="group animate-fade-in"
              style={{ animationDelay: "0.25s" }}
            >
              <div className={`relative h-[190px] rounded-3xl bg-gradient-to-br ${categories[4].color} overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}>
                <span className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-bold badge-novo">
                  NOVO
                </span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                    {categories[4].icon}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white font-montserrat font-bold text-lg group-hover:text-yellow-300 transition-colors">
                    {t(`products.sections.${categories[4].key}`)}
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          {/* Second Row - Remaining Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
            {categories.slice(5).map((cat, index) => (
              <Link
                key={cat.key}
                to={getLocalizedPath(cat.path)}
                className="group animate-fade-in"
                style={{ animationDelay: `${(index + 6) * 0.1}s` }}
              >
                <div className={`relative h-[160px] rounded-2xl bg-gradient-to-br ${cat.color} overflow-hidden shadow-md hover:shadow-lg transition-all duration-400 hover:-translate-y-1`}>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {cat.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white font-montserrat font-bold text-sm group-hover:text-yellow-300 transition-colors text-center">
                      {t(`products.sections.${cat.key}`)}
                    </h3>
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
            {t(
              "products.ctaDesc",
              "Entre em contato conosco e solicite um orçamento personalizado para suas necessidades.",
            )}
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
