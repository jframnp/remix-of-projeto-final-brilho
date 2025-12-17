import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";
import { Download, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </div>
  );
};

const OdontoDentaria = () => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();

  const getLocalizedPath = (path: string) => {
    if (currentLang === "en") return `/en${path === "/" ? "" : path}`;
    if (currentLang === "zh") return `/zh${path === "/" ? "" : path}`;
    return path;
  };

  const diamondBursData = [
    { model: "Esférica", code: "BD-001", iso: "ISO 001", grain: "Médio", diameter: "1.0mm" },
    { model: "Esférica", code: "BD-002", iso: "ISO 002", grain: "Fino", diameter: "1.2mm" },
    { model: "Cônica", code: "BD-010", iso: "ISO 010", grain: "Grosso", diameter: "1.4mm" },
    { model: "Cônica", code: "BD-011", iso: "ISO 011", grain: "Médio", diameter: "1.6mm" },
    { model: "Cilíndrica", code: "BD-020", iso: "ISO 020", grain: "Extra Fino", diameter: "1.8mm" },
    { model: "Chama", code: "BD-030", iso: "ISO 030", grain: "Fino", diameter: "2.0mm" },
  ];

  const tungstenBursData = [
    { model: "Esférica MC", code: "FT-001", iso: "ISO 001", cut: "Cruzado Médio", diameter: "1.0mm" },
    { model: "Cônica MC", code: "FT-010", iso: "ISO 010", cut: "Cruzado Fino", diameter: "1.4mm" },
    { model: "Cilíndrica MC", code: "FT-020", iso: "ISO 020", cut: "Cruzado Extra Fino", diameter: "1.8mm" },
    { model: "Torpedo MC", code: "FT-030", iso: "ISO 030", cut: "Reto", diameter: "2.0mm" },
    { model: "Roda MC", code: "FT-040", iso: "ISO 040", cut: "Cruzado Grosso", diameter: "2.2mm" },
  ];

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#8B0000] via-[#B22222] to-[#DC143C] transform scale-110"
          style={{ transform: "translateY(var(--scroll-y, 0))" }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-4 drop-shadow-lg">
            {t("odontoDentaria.title", "ODONTO DENTÁRIA")}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-inter max-w-3xl mx-auto">
            {t("odontoDentaria.subtitle", "Ferramentas de alta precisão para profissionais da odontologia")}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Download Catalog Button */}
      <div className="container mx-auto px-4 py-8 text-center">
        <Button 
          className="bg-[#E02020] hover:bg-[#B01010] text-white font-montserrat font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-subtle"
          asChild
        >
          <a href="/catalogo-brilho.pdf" download>
            <Download className="w-5 h-5 mr-2" />
            {t("products.downloadCatalog", "BAIXE O CATÁLOGO COMPLETO")}
          </a>
        </Button>
      </div>

      {/* Diamond Burs Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#8B0000] mb-2">
              {t("products.diamondBurs.title", "BROCAS DIAMANTADAS")}
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              {t("products.diamondBurs.subtitle", "Diamond Burs")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-gray-700 font-inter leading-relaxed mb-6">
                {t("odontoDentaria.diamondDesc", "Nossas brocas diamantadas para odontologia são fabricadas com diamantes industriais de alta qualidade, ideais para procedimentos em laboratórios de prótese dentária. Proporcionam corte preciso e acabamento perfeito em cerâmicas, metais e compósitos.")}
              </p>
              <ul className="space-y-3">
                {[
                  "Diamantes industriais de primeira linha",
                  "Ideal para laboratórios de prótese",
                  "Corte preciso em cerâmicas e metais",
                  "Registro ANVISA",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 font-inter">
                    <ChevronRight className="w-5 h-5 text-[#E02020]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i} 
                  className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-gray-400 text-xs font-inter group-hover:text-[#E02020] transition-colors">
                    Broca {i}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#8B0000] text-white">
                  <th className="p-4 text-left font-montserrat">{t("products.diamondBurs.tableHeaders.model", "Modelo")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.diamondBurs.tableHeaders.code", "Código")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.diamondBurs.tableHeaders.iso", "ISO")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.diamondBurs.tableHeaders.grain", "Grão")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.diamondBurs.tableHeaders.diameter", "Diâmetro")}</th>
                </tr>
              </thead>
              <tbody>
                {diamondBursData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-red-50 transition-colors`}
                  >
                    <td className="p-4 font-inter">{row.model}</td>
                    <td className="p-4 font-inter font-medium text-[#8B0000]">{row.code}</td>
                    <td className="p-4 font-inter">{row.iso}</td>
                    <td className="p-4 font-inter">{row.grain}</td>
                    <td className="p-4 font-inter">{row.diameter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* Tungsten Burs Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#8B0000] mb-2">
              {t("products.tungstenBurs.title", "FRESAS DE TUNGSTÊNIO")}
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              {t("products.tungstenBurs.subtitle", "Tungsten Carbide Burs")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="order-2 md:order-1 grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i} 
                  className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-gray-400 text-xs font-inter group-hover:text-[#E02020] transition-colors">
                    Fresa {i}
                  </span>
                </div>
              ))}
            </div>
            <div className="order-1 md:order-2">
              <p className="text-gray-700 font-inter leading-relaxed mb-6">
                {t("odontoDentaria.tungstenDesc", "Fresas de tungstênio de alta performance para desbaste e acabamento em laboratórios dentários. Disponíveis nas versões Maxi Cut e Mini Cut, ideais para trabalho em gesso, acrílico e ligas metálicas.")}
              </p>
              <div className="flex gap-4 mb-6">
                <span className="px-4 py-2 bg-[#E02020] text-white rounded-full font-montserrat font-bold text-sm">
                  Maxi Cut
                </span>
                <span className="px-4 py-2 bg-[#8B0000] text-white rounded-full font-montserrat font-bold text-sm">
                  Mini Cut
                </span>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#8B0000] text-white">
                  <th className="p-4 text-left font-montserrat">{t("products.tungstenBurs.tableHeaders.model", "Modelo")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.tungstenBurs.tableHeaders.code", "Código")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.tungstenBurs.tableHeaders.iso", "ISO")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.tungstenBurs.tableHeaders.cut", "Corte")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.tungstenBurs.tableHeaders.diameter", "Diâmetro")}</th>
                </tr>
              </thead>
              <tbody>
                {tungstenBursData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-red-50 transition-colors`}
                  >
                    <td className="p-4 font-inter">{row.model}</td>
                    <td className="p-4 font-inter font-medium text-[#8B0000]">{row.code}</td>
                    <td className="p-4 font-inter">{row.iso}</td>
                    <td className="p-4 font-inter">{row.cut}</td>
                    <td className="p-4 font-inter">{row.diameter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* QR Code Section */}
      <AnimatedSection className="py-16 bg-[#8B0000]">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <div className="w-48 h-48 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-6 border-4 border-[#E02020]">
              <div className="grid grid-cols-5 gap-1 p-4">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-3 h-3 ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}
                  />
                ))}
              </div>
            </div>
            <p className="text-2xl font-montserrat font-bold text-[#E02020]">
              #BORA BRILHAR
            </p>
            <p className="text-gray-600 font-inter mt-2">
              {t("odontoDentaria.scanQR", "Escaneie para acessar nosso catálogo digital")}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-[#8B0000] mb-6">
            {t("odontoDentaria.ctaTitle", "Interessado em nossos produtos odontológicos?")}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-[#E02020] hover:bg-[#B01010] text-white font-montserrat font-bold px-8 py-6 rounded-lg hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to={getLocalizedPath("/contato")}>
                {t("contact.title", "CONTATO")}
              </Link>
            </Button>
            <Button 
              variant="outline"
              className="border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white font-montserrat font-bold px-8 py-6 rounded-lg hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to={getLocalizedPath("/produtos")}>
                {t("nav.products", "PRODUTOS")}
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default OdontoDentaria;