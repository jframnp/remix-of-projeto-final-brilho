import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { Download, ArrowLeft, ChevronRight } from "lucide-react";

const categoryMap: Record<string, string> = {
  "brocas-diamantadas": "diamondBurs",
  "linha-gold": "diamondBurs",
  "fresas-tungstenio": "tungstenBurs",
  "fresas-ceramica": "ceramicBurs",
  "lixas-sandpaper": "sandpaper",
  "lixas-boomerang": "boomerang",
  "lixa-tubular-adesiva": "tubularAdhesive",
  "polidoras": "polishers",
  "escovas-limpeza": "brushes",
  "fibras-enucleadora-mandril": "fiberMandril",
  "apoio-lixas-afiacao": "supportSharpening",
};

const ProductCategory = () => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();
  const params = useParams();
  
  const pathParts = window.location.pathname.split("/");
  const categorySlug = pathParts[pathParts.length - 1];
  const categoryKey = categoryMap[categorySlug] || "diamondBurs";

  const getLocalizedPath = (path: string) => {
    if (currentLang === "en") return `/en${path}`;
    if (currentLang === "es") return `/es${path}`;
    return path;
  };

  const title = t(`products.${categoryKey}.title`, categoryKey);
  const subtitle = t(`products.${categoryKey}.subtitle`, "");
  const description = t(`products.${categoryKey}.description`, "");
  const features = t(`products.${categoryKey}.features`, { returnObjects: true }) as string[];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#9B0000] via-[#720000] to-[#5a0a0a] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link
            to={getLocalizedPath("/produtos")}
            className="inline-flex items-center gap-2 text-[#EEEEEE]/80 hover:text-[#EEEEEE] mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            {t("products.backToCategories", "Voltar")}
          </Link>
          <h1 className="text-[#EEEEEE] font-montserrat font-black text-3xl md:text-5xl mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[#EEEEEE]/70 font-inter text-lg">{subtitle}</p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#FAFAFA] py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 mb-8">
            <p className="text-foreground/80 font-inter text-lg leading-relaxed mb-8">
              {description}
            </p>

            {Array.isArray(features) && features.length > 0 && (
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="font-montserrat font-bold text-[#9B0000] mb-4">
                  {t("products.features", "Características")}:
                </h3>
                <ul className="space-y-2">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground/80 font-inter">
                      <ChevronRight className="w-4 h-4 text-[#9B0000] flex-shrink-0 mt-1" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sample Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#9B0000] text-white">
                    <th className="px-4 py-3 text-left font-montserrat">{t(`products.${categoryKey}.tableHeaders.model`, "Modelo")}</th>
                    <th className="px-4 py-3 text-left font-montserrat">{t(`products.${categoryKey}.tableHeaders.code`, "Código")}</th>
                    <th className="px-4 py-3 text-left font-montserrat">{t(`products.${categoryKey}.tableHeaders.diameter`, "Diâmetro")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">Modelo 001</td><td className="px-4 py-3">MB-001</td><td className="px-4 py-3">1.6mm</td></tr>
                  <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">Modelo 002</td><td className="px-4 py-3">MB-002</td><td className="px-4 py-3">2.3mm</td></tr>
                  <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">Modelo 003</td><td className="px-4 py-3">MB-003</td><td className="px-4 py-3">1.8mm</td></tr>
                </tbody>
              </table>
            </div>

            {/* Download Button */}
            <div className="text-center">
              <a
                href="/catalogo-brilho.pdf"
                target="_blank"
                className="inline-flex items-center gap-3 bg-[#D32F2F] text-white font-montserrat font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all"
              >
                <Download size={24} />
                {t("products.downloadCatalog")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductCategory;