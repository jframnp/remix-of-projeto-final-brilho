import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";
import { Download, ChevronRight, Wrench } from "lucide-react";
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

const Diversos = () => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();

  const getLocalizedPath = (path: string) => {
    if (currentLang === "en") return `/en${path === "/" ? "" : path}`;
    if (currentLang === "zh") return `/zh${path === "/" ? "" : path}`;
    return path;
  };

  const mandrilData = [
    { type: "Fibra Molecular", code: "FM-001", model: "Standard", diameter: "2.35mm", material: "Fibra Sintética" },
    { type: "Fibra Molecular", code: "FM-002", model: "Premium", diameter: "3.0mm", material: "Fibra Sintética" },
    { type: "Enucleadora de Calos", code: "EC-001", model: "Pequena", diameter: "10mm", material: "Aço Inoxidável" },
    { type: "Enucleadora de Calos", code: "EC-002", model: "Grande", diameter: "15mm", material: "Aço Inoxidável" },
    { type: "Mandril PM Church", code: "MPC-001", model: "Standard", diameter: "2.35mm", material: "Aço Carbono" },
  ];

  const supportData = [
    { type: "Apoio Rígido Plantar", code: "AR-001", diameter: "25mm", thickness: "3mm", package: "1 un" },
    { type: "Apoio Rígido Laminar", code: "AR-002", diameter: "20mm", thickness: "2mm", package: "1 un" },
    { type: "Apoio Flexível Plantar", code: "AF-001", diameter: "25mm", thickness: "5mm", package: "1 un" },
    { type: "Apoio Flexível Laminar", code: "AF-002", diameter: "20mm", thickness: "4mm", package: "1 un" },
  ];

  const sharpeningData = [
    { type: "Disco Couro", code: "DC-001", diameter: "50mm", thickness: "10mm", package: "1 un" },
    { type: "Disco Abrasivo", code: "DA-001", diameter: "50mm", thickness: "5mm", package: "5 un" },
    { type: "Pasta Polimento", code: "PP-001", diameter: "-", thickness: "-", package: "50g" },
    { type: "Mandril Standard", code: "MS-001", diameter: "2.35mm", thickness: "-", package: "1 un" },
  ];

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#37474F] via-[#546E7A] to-[#78909C] transform scale-110"
        />
        <div className="absolute inset-0 bg-black/30" />
        {/* Tools decoration */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <Wrench 
              key={i}
              className="absolute text-white/10 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `scale(${1 + Math.random() * 2}) rotate(${Math.random() * 360}deg)`
              }}
              size={40}
            />
          ))}
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-4 drop-shadow-lg">
            {t("diversos.title", "DIVERSOS")}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-inter max-w-3xl mx-auto">
            {t("diversos.subtitle", "Acessórios e ferramentas complementares")}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Download Catalog Button */}
      <div className="container mx-auto px-4 py-8 text-center">
        <Button 
          className="bg-[#546E7A] hover:bg-[#37474F] text-white font-montserrat font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          asChild
        >
          <a href="/catalogo-brilho.pdf" download>
            <Download className="w-5 h-5 mr-2" />
            {t("products.downloadCatalog", "BAIXE O CATÁLOGO COMPLETO")}
          </a>
        </Button>
      </div>

      {/* Fiber / Mandril Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#37474F] mb-2">
              {t("products.fiberMandril.title", "FIBRAS / ENUCLEADORA / MANDRIL")}
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              {t("products.fiberMandril.subtitle", "Fiber / Shell Enucleator / Mandril")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-gray-700 font-inter leading-relaxed mb-6">
                {t("diversos.fiberDesc", "Linha especializada incluindo Fibra Molecular para tratamentos específicos, Enucleadora de Calos em Aço Inoxidável para remoção segura de calosidades, e Mandril PM Church para fixação de lixas e acessórios.")}
              </p>
              <ul className="space-y-3">
                {[
                  "Fibra Molecular para tratamentos",
                  "Enucleadora em Aço Inoxidável",
                  "Mandril PM Church universal",
                  "Qualidade certificada ANVISA",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 font-inter">
                    <ChevronRight className="w-5 h-5 text-[#546E7A]" />
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
                  <span className="text-gray-400 text-xs font-inter group-hover:text-[#546E7A] transition-colors">
                    Item {i}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#37474F] text-white">
                  <th className="p-4 text-left font-montserrat">{t("products.fiberMandril.tableHeaders.type", "Tipo")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.fiberMandril.tableHeaders.code", "Código")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.fiberMandril.tableHeaders.model", "Modelo")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.fiberMandril.tableHeaders.diameter", "Diâmetro")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.fiberMandril.tableHeaders.material", "Material")}</th>
                </tr>
              </thead>
              <tbody>
                {mandrilData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-gray-50 transition-colors`}
                  >
                    <td className="p-4 font-inter">{row.type}</td>
                    <td className="p-4 font-inter font-medium text-[#37474F]">{row.code}</td>
                    <td className="p-4 font-inter">{row.model}</td>
                    <td className="p-4 font-inter">{row.diameter}</td>
                    <td className="p-4 font-inter">{row.material}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* Support for Files Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#37474F] mb-2">
              {t("diversos.supportTitle", "APOIO PARA LIXAS")}
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              Support for Files
            </p>
          </div>

          <p className="text-gray-700 font-inter leading-relaxed mb-8 max-w-3xl">
            {t("diversos.supportDesc", "Apoios rígidos e flexíveis para lixas plantares e laminares. Essenciais para garantir pressão uniforme e conforto durante os procedimentos de podologia.")}
          </p>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#37474F] text-white">
                  <th className="p-4 text-left font-montserrat">{t("products.supportSharpening.tableHeaders.type", "Tipo")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.supportSharpening.tableHeaders.code", "Código")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.supportSharpening.tableHeaders.diameter", "Diâmetro")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.supportSharpening.tableHeaders.thickness", "Espessura")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.supportSharpening.tableHeaders.package", "Embalagem")}</th>
                </tr>
              </thead>
              <tbody>
                {supportData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-gray-50 transition-colors`}
                  >
                    <td className="p-4 font-inter">{row.type}</td>
                    <td className="p-4 font-inter font-medium text-[#37474F]">{row.code}</td>
                    <td className="p-4 font-inter">{row.diameter}</td>
                    <td className="p-4 font-inter">{row.thickness}</td>
                    <td className="p-4 font-inter">{row.package}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* Sharpening Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#37474F] mb-2">
              {t("diversos.sharpeningTitle", "AFIAÇÃO DE INSTRUMENTOS")}
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              Instrument Sharpening
            </p>
          </div>

          <p className="text-gray-700 font-inter leading-relaxed mb-8 max-w-3xl">
            {t("diversos.sharpeningDesc", "Discos de couro e abrasivos para afiação de instrumentos, pasta de polimento para acabamento perfeito, e mandril standard para fixação. Mantenha seus instrumentos sempre afiados e prontos para uso.")}
          </p>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#37474F] text-white">
                  <th className="p-4 text-left font-montserrat">{t("products.supportSharpening.tableHeaders.type", "Tipo")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.supportSharpening.tableHeaders.code", "Código")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.supportSharpening.tableHeaders.diameter", "Diâmetro")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.supportSharpening.tableHeaders.thickness", "Espessura")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.supportSharpening.tableHeaders.package", "Embalagem")}</th>
                </tr>
              </thead>
              <tbody>
                {sharpeningData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-gray-50 transition-colors`}
                  >
                    <td className="p-4 font-inter">{row.type}</td>
                    <td className="p-4 font-inter font-medium text-[#37474F]">{row.code}</td>
                    <td className="p-4 font-inter">{row.diameter}</td>
                    <td className="p-4 font-inter">{row.thickness}</td>
                    <td className="p-4 font-inter">{row.package}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* QR Code Section */}
      <AnimatedSection className="py-16 bg-[#37474F]">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <div className="w-48 h-48 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-6 border-4 border-[#546E7A]">
              <div className="grid grid-cols-5 gap-1 p-4">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-3 h-3 ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}
                  />
                ))}
              </div>
            </div>
            <p className="text-2xl font-montserrat font-bold text-[#37474F]">
              #BORA BRILHAR
            </p>
            <p className="text-gray-600 font-inter mt-2">
              {t("diversos.scanQR", "Escaneie para acessar nosso catálogo digital")}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-[#37474F] mb-6">
            {t("diversos.ctaTitle", "Interessado em nossos acessórios?")}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-[#546E7A] hover:bg-[#37474F] text-white font-montserrat font-bold px-8 py-6 rounded-lg hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to={getLocalizedPath("/contato")}>
                {t("contact.title", "CONTATO")}
              </Link>
            </Button>
            <Button 
              variant="outline"
              className="border-[#37474F] text-[#37474F] hover:bg-[#37474F] hover:text-white font-montserrat font-bold px-8 py-6 rounded-lg hover:scale-105 transition-all duration-300"
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

export default Diversos;