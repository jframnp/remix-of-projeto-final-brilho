import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { Download, ShieldCheck, Truck, Award } from "lucide-react";

const Produtos = () => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();

  const getLocalizedPath = (path: string) => {
    if (currentLang === "en") return `/en${path}`;
    if (currentLang === "es") return `/es${path}`;
    return path;
  };

  const categories = [
    { 
      key: "diamondBurs", 
      path: "/produtos/brocas-diamantadas", 
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80",
      badge: "BESTSELLER"
    },
    { 
      key: "tungstenBurs", 
      path: "/produtos/fresas-tungstenio", 
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=600&q=80",
      badge: null
    },
    { 
      key: "ceramicBurs", 
      path: "/produtos/fresas-ceramica", 
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80",
      badge: null
    },
    { 
      key: "lixas", 
      path: "/produtos/lixas", 
      image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80",
      badge: "NOVO"
    },
    { 
      key: "tubularAdhesive", 
      path: "/produtos/lixa-tubular-adesiva", 
      image: "https://images.unsplash.com/photo-1616627561839-074385245ff6?auto=format&fit=crop&w=600&q=80",
      badge: null
    },
    { 
      key: "polishers", 
      path: "/produtos/polidoras", 
      image: "https://images.unsplash.com/photo-1559757175-7cb036c4b4c0?auto=format&fit=crop&w=600&q=80",
      badge: null
    },
    { 
      key: "brushes", 
      path: "/produtos/escovas-limpeza", 
      image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80",
      badge: null
    },
    { 
      key: "fiberMandril", 
      path: "/produtos/fibras-enucleadora-mandril", 
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
      badge: null
    },
    { 
      key: "supportSharpening", 
      path: "/produtos/apoio-lixas-afiacao", 
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
      badge: null
    },
  ];

  return (
    <Layout>
      {/* Hero Promocional */}
      <section className="relative bg-gradient-to-br from-[#9B0000] via-[#720000] to-[#5a0a0a] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h1 className="text-white font-montserrat font-black text-4xl md:text-6xl mb-4">
                {t("products.pageTitle")}
              </h1>
              <p className="text-white/90 font-inter text-lg md:text-xl max-w-xl mb-6">
                {t("products.pageSubtitle")}
              </p>
              <a
                href="/catalogo-brilho.pdf"
                target="_blank"
                className="inline-flex items-center gap-3 bg-white text-[#9B0000] font-montserrat font-bold px-8 py-4 rounded-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <Download size={24} />
                {t("products.downloadCatalog")}
              </a>
            </div>
            
            {/* Badges promocionais */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 border border-white/20">
                <ShieldCheck className="w-8 h-8 text-green-400" />
                <div className="text-white">
                  <p className="font-montserrat font-bold text-sm">{t("products.badge.anvisa", "ANVISA")}</p>
                  <p className="font-inter text-xs opacity-80">{t("products.badge.certified", "Certificado")}</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 border border-white/20">
                <Truck className="w-8 h-8 text-blue-400" />
                <div className="text-white">
                  <p className="font-montserrat font-bold text-sm">{t("products.badge.shipping", "Envio")}</p>
                  <p className="font-inter text-xs opacity-80">{t("products.badge.nationwide", "Todo Brasil")}</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 border border-white/20">
                <Award className="w-8 h-8 text-yellow-400" />
                <div className="text-white">
                  <p className="font-montserrat font-bold text-sm">{t("products.badge.quality", "Qualidade")}</p>
                  <p className="font-inter text-xs opacity-80">{t("products.badge.premium", "Premium")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid - Style inspired by competitors */}
      <section className="bg-[#FAFAFA] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#9B0000] font-montserrat font-bold text-2xl md:text-4xl mb-4">
              {t("products.shopByCategory", "Compre por Categoria")}
            </h2>
            <p className="text-gray-600 font-inter text-lg max-w-2xl mx-auto">
              {t("products.categoryDesc", "Selecione uma categoria para ver todos os produtos disponíveis")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <Link
                key={cat.key}
                to={getLocalizedPath(cat.path)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#9B0000]/20 transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img 
                    src={cat.image} 
                    alt={t(`products.sections.${cat.key}`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  {cat.badge && (
                    <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                      cat.badge === "BESTSELLER" ? "bg-yellow-400 text-yellow-900" :
                      cat.badge === "NOVO" ? "bg-green-500 text-white" :
                      "bg-[#9B0000] text-white"
                    }`}>
                      {cat.badge}
                    </span>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-[#212121] font-montserrat font-bold text-xl mb-2 group-hover:text-[#9B0000] transition-colors">
                    {t(`products.sections.${cat.key}`)}
                  </h3>
                  <p className="text-gray-500 font-inter text-sm mb-4 line-clamp-2">
                    {t(`products.${cat.key}.shortDesc`, t(`products.${cat.key}.description`, "").substring(0, 100) + "...")}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#9B0000] font-inter font-semibold text-sm group-hover:underline">
                      {t("products.viewProducts", "Ver Produtos")} →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#212121] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white font-montserrat font-bold text-2xl md:text-3xl mb-4">
            {t("products.ctaTitle", "Não encontrou o que procura?")}
          </h2>
          <p className="text-white/80 font-inter text-lg mb-8 max-w-xl mx-auto">
            {t("products.ctaDesc", "Entre em contato conosco e solicite um orçamento personalizado para suas necessidades.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={getLocalizedPath("/contato")}
              className="inline-flex items-center justify-center gap-2 bg-[#D32F2F] text-white font-montserrat font-bold px-8 py-4 rounded-xl hover:bg-[#B71C1C] hover:scale-105 transition-all"
            >
              {t("products.ctaContact", "Fale Conosco")}
            </Link>
            <a
              href="https://wa.me/5511940101807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-montserrat font-bold px-8 py-4 rounded-xl hover:bg-green-700 hover:scale-105 transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Produtos;
