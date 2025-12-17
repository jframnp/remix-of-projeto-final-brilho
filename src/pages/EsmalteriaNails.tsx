import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";
import { Download, ChevronRight, Sparkles } from "lucide-react";
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

const EsmalteriaNails = () => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();

  const getLocalizedPath = (path: string) => {
    if (currentLang === "en") return `/en${path === "/" ? "" : path}`;
    if (currentLang === "zh") return `/zh${path === "/" ? "" : path}`;
    return path;
  };

  const boomerangData = [
    { type: "Lixa Nails Verde", code: "BN-001", shape: "Boomerang", grain: "100/180", material: "Espuma" },
    { type: "Lixa Alta Performance", code: "BN-002", shape: "Quadrada", grain: "150/150", material: "EVA" },
    { type: "Boomerang White Fina 2mm", code: "BN-003", shape: "Boomerang", grain: "180/240", material: "Espuma" },
    { type: "Nails Descartável Branca", code: "BN-004", shape: "Quadrada", grain: "100/180", material: "Descartável" },
    { type: "Base Inox", code: "BN-005", shape: "Boomerang", grain: "-", material: "Aço Inox" },
  ];

  const ceramicBursData = [
    { model: "Cônica Cerâmica", code: "FC-001", iso: "ISO 001", cut: "Cruzado Médio", diameter: "2.3mm" },
    { model: "Cilíndrica Cerâmica", code: "FC-002", iso: "ISO 002", cut: "Cruzado Fino", diameter: "2.5mm" },
    { model: "Barril Cerâmica", code: "FC-003", iso: "ISO 003", cut: "Cruzado Extra Fino", diameter: "4.0mm" },
    { model: "Bola Cerâmica", code: "FC-004", iso: "ISO 004", cut: "Médio", diameter: "3.0mm" },
    { model: "Chama Cerâmica", code: "FC-005", iso: "ISO 005", cut: "Fino", diameter: "2.0mm" },
  ];

  const tubularData = [
    { type: "Lixa Tubular Send 80", code: "LT-080", grain: "80", diameter: "6mm", package: "10 un", abrasive: "Óxido Alumínio" },
    { type: "Lixa Tubular Send 120", code: "LT-120", grain: "120", diameter: "6mm", package: "10 un", abrasive: "Óxido Alumínio" },
    { type: "Lixa Adesiva Circular 100", code: "LAC-100", grain: "100", diameter: "25mm", package: "50 un", abrasive: "Carbeto Silício" },
    { type: "Lixa Adesiva Circular 150", code: "LAC-150", grain: "150", diameter: "25mm", package: "50 un", abrasive: "Carbeto Silício" },
  ];

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#E91E63] via-[#9C27B0] to-[#673AB7] transform scale-110"
        />
        <div className="absolute inset-0 bg-black/20" />
        {/* Sparkles decoration */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <Sparkles 
              key={i}
              className="absolute text-white/30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `scale(${0.5 + Math.random()})`
              }}
            />
          ))}
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-4 drop-shadow-lg">
            {t("esmalteriaNails.title", "ESMALTERIA E NAILS DESIGNER")}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-inter max-w-3xl mx-auto">
            {t("esmalteriaNails.subtitle", "Produtos premium para profissionais de unhas")}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Download Catalog Button */}
      <div className="container mx-auto px-4 py-8 text-center">
        <Button 
          className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] hover:from-[#C2185B] hover:to-[#7B1FA2] text-white font-montserrat font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          asChild
        >
          <a href="/catalogo-brilho.pdf" download>
            <Download className="w-5 h-5 mr-2" />
            {t("products.downloadCatalog", "BAIXE O CATÁLOGO COMPLETO")}
          </a>
        </Button>
      </div>

      {/* Boomerang Files Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#E91E63] mb-2">
              {t("products.boomerang.title", "LIXAS BOOMERANG")}
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              {t("products.boomerang.subtitle", "Boomerang Sandpaper")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-gray-700 font-inter leading-relaxed mb-6">
                {t("esmalteriaNails.boomerangDesc", "Lixas especiais em formato boomerang e outros shapes exclusivos para manicure e nail design. Alta qualidade e durabilidade para resultados profissionais. Ideais para modelagem de unhas naturais e alongamentos.")}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["Boomerang", "Quadrada", "Caixão", "Gota"].map((shape) => (
                  <span 
                    key={shape}
                    className="px-4 py-2 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white rounded-full font-montserrat font-bold text-sm"
                  >
                    {shape}
                  </span>
                ))}
              </div>
              <ul className="space-y-3">
                {[
                  "Diversos formatos exclusivos",
                  "Granulações variadas",
                  "Longa durabilidade",
                  "Acabamento profissional",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 font-inter">
                    <ChevronRight className="w-5 h-5 text-[#E91E63]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i} 
                  className="aspect-square bg-gradient-to-br from-pink-50 to-purple-100 rounded-lg flex items-center justify-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-pink-300 text-xs font-inter group-hover:text-[#E91E63] transition-colors">
                    Lixa {i}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white">
                  <th className="p-4 text-left font-montserrat">{t("products.boomerang.tableHeaders.type", "Tipo")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.boomerang.tableHeaders.code", "Código")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.boomerang.tableHeaders.shape", "Formato")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.boomerang.tableHeaders.grain", "Granulação")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.boomerang.tableHeaders.material", "Material")}</th>
                </tr>
              </thead>
              <tbody>
                {boomerangData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-pink-50'} hover:bg-pink-100 transition-colors`}
                  >
                    <td className="p-4 font-inter">{row.type}</td>
                    <td className="p-4 font-inter font-medium text-[#9C27B0]">{row.code}</td>
                    <td className="p-4 font-inter">{row.shape}</td>
                    <td className="p-4 font-inter">{row.grain}</td>
                    <td className="p-4 font-inter">{row.material}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* Ceramic Burs Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#E91E63] mb-2">
              {t("products.ceramicBurs.title", "FRESAS DE CERÂMICA")}
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              {t("products.ceramicBurs.subtitle", "Ceramic Burs")}
            </p>
          </div>

          <p className="text-gray-700 font-inter leading-relaxed mb-8 max-w-3xl">
            {t("esmalteriaNails.ceramicDesc", "Fresas de cerâmica de alta resistência especialmente desenvolvidas para nail designers. Ideais para remoção de cutículas, limpeza de pterígio e preparação de unhas para alongamentos. Menor aquecimento e maior durabilidade.")}
          </p>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white">
                  <th className="p-4 text-left font-montserrat">{t("products.ceramicBurs.tableHeaders.model", "Modelo")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.ceramicBurs.tableHeaders.code", "Código")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.ceramicBurs.tableHeaders.iso", "ISO")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.ceramicBurs.tableHeaders.cut", "Corte")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.ceramicBurs.tableHeaders.diameter", "Diâmetro")}</th>
                </tr>
              </thead>
              <tbody>
                {ceramicBursData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-pink-50'} hover:bg-pink-100 transition-colors`}
                  >
                    <td className="p-4 font-inter">{row.model}</td>
                    <td className="p-4 font-inter font-medium text-[#9C27B0]">{row.code}</td>
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

      {/* Tubular Files Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#E91E63] mb-2">
              {t("products.tubularAdhesive.title", "LIXA TUBULAR / ADESIVA CIRCULAR")}
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              {t("products.tubularAdhesive.subtitle", "Tubular Sand / Adhesive Circular File")}
            </p>
          </div>

          <p className="text-gray-700 font-inter leading-relaxed mb-8 max-w-3xl">
            {t("esmalteriaNails.tubularDesc", "Lixas tubulares e adesivas circulares para diferentes aplicações em nail design. Alta aderência e durabilidade para uso profissional em máquinas de unhas.")}
          </p>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white">
                  <th className="p-4 text-left font-montserrat">{t("products.tubularAdhesive.tableHeaders.type", "Tipo")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.tubularAdhesive.tableHeaders.code", "Código")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.tubularAdhesive.tableHeaders.grain", "Grão")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.tubularAdhesive.tableHeaders.diameter", "Diâmetro")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.tubularAdhesive.tableHeaders.package", "Embalagem")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.tubularAdhesive.tableHeaders.abrasive", "Tipo Abrasivo")}</th>
                </tr>
              </thead>
              <tbody>
                {tubularData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-pink-50'} hover:bg-pink-100 transition-colors`}
                  >
                    <td className="p-4 font-inter">{row.type}</td>
                    <td className="p-4 font-inter font-medium text-[#9C27B0]">{row.code}</td>
                    <td className="p-4 font-inter">{row.grain}</td>
                    <td className="p-4 font-inter">{row.diameter}</td>
                    <td className="p-4 font-inter">{row.package}</td>
                    <td className="p-4 font-inter">{row.abrasive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* QR Code Section */}
      <AnimatedSection className="py-16 bg-gradient-to-r from-[#E91E63] to-[#9C27B0]">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <div className="w-48 h-48 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-6 border-4 border-[#E91E63]">
              <div className="grid grid-cols-5 gap-1 p-4">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-3 h-3 ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}
                  />
                ))}
              </div>
            </div>
            <p className="text-2xl font-montserrat font-bold bg-gradient-to-r from-[#E91E63] to-[#9C27B0] bg-clip-text text-transparent">
              #BORA BRILHAR
            </p>
            <p className="text-gray-600 font-inter mt-2">
              {t("esmalteriaNails.scanQR", "Escaneie para acessar nosso catálogo digital")}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-[#E91E63] mb-6">
            {t("esmalteriaNails.ctaTitle", "Interessado em nossos produtos para nail design?")}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] hover:from-[#C2185B] hover:to-[#7B1FA2] text-white font-montserrat font-bold px-8 py-6 rounded-lg hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to={getLocalizedPath("/contato")}>
                {t("contact.title", "CONTATO")}
              </Link>
            </Button>
            <Button 
              variant="outline"
              className="border-[#E91E63] text-[#E91E63] hover:bg-[#E91E63] hover:text-white font-montserrat font-bold px-8 py-6 rounded-lg hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to={getLocalizedPath("/brilho-nails")}>
                {t("nav.brilhoNails", "BRILHO-NAILS")}
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default EsmalteriaNails;