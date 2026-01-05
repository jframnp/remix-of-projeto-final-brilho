import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { Download } from "lucide-react";

const Produtos = () => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();

  const getLocalizedPath = (path: string) => {
    if (currentLang === "en") return `/en${path}`;
    if (currentLang === "es") return `/es${path}`;
    return path;
  };

  const categories = [
    { key: "diamondBurs", path: "/produtos/brocas-diamantadas", icon: "💎" },
    { key: "goldLine", path: "/produtos/linha-gold", icon: "🏆" },
    { key: "tungstenBurs", path: "/produtos/fresas-tungstenio", icon: "⚙️" },
    { key: "ceramicBurs", path: "/produtos/fresas-ceramica", icon: "🌸" },
    { key: "sandpaper", path: "/produtos/lixas-sandpaper", icon: "📄" },
    { key: "boomerang", path: "/produtos/lixas-boomerang", icon: "🪃" },
    { key: "tubularAdhesive", path: "/produtos/lixa-tubular-adesiva", icon: "🔘" },
    { key: "polishers", path: "/produtos/polidoras", icon: "✨" },
    { key: "brushes", path: "/produtos/escovas-limpeza", icon: "🧹" },
    { key: "fiberMandril", path: "/produtos/fibras-enucleadora-mandril", icon: "🔧" },
    { key: "supportSharpening", path: "/produtos/apoio-lixas-afiacao", icon: "🛠️" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#9B0000] via-[#720000] to-[#5a0a0a] py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-[#EEEEEE] font-montserrat font-black text-4xl md:text-6xl mb-4">
            {t("products.pageTitle")}
          </h1>
          <p className="text-[#EEEEEE]/90 font-inter text-lg md:text-xl max-w-2xl mx-auto mb-8">
            {t("products.pageSubtitle")}
          </p>
          <a
            href="/catalogo-brilho.pdf"
            target="_blank"
            className="inline-flex items-center gap-3 bg-white text-[#9B0000] font-montserrat font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all"
          >
            <Download size={24} />
            {t("products.downloadCatalog")}
          </a>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-[#FAFAFA] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-[#9B0000] font-montserrat font-bold text-2xl md:text-3xl text-center mb-12">
            {t("products.selectCategory", "Selecione uma categoria")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.key}
                to={getLocalizedPath(cat.path)}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 hover:shadow-[#9B0000]/20 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="text-[#9B0000] font-montserrat font-bold text-lg group-hover:text-[#D32F2F] transition-colors">
                  {t(`products.sections.${cat.key}`)}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Produtos;