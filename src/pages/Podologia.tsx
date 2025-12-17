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

const Podologia = () => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();

  const getLocalizedPath = (path: string) => {
    if (currentLang === "en") return `/en${path === "/" ? "" : path}`;
    if (currentLang === "zh") return `/zh${path === "/" ? "" : path}`;
    return path;
  };

  const sandpaperData = [
    { type: "Lixa Laminar Premium (Norton)", code: "LP-080", diameter: "20mm", grain: "80", package: "100 un" },
    { type: "Lixa Laminar Premium (Norton)", code: "LP-120", diameter: "20mm", grain: "120", package: "100 un" },
    { type: "Lixa Plantar Premium (Norton)", code: "LPL-080", diameter: "25mm", grain: "80", package: "100 un" },
    { type: "Lixa Extra Grande", code: "LEG-100", diameter: "30mm", grain: "100", package: "50 un" },
    { type: "Lixa Laminar (Alcar)", code: "LA-120", diameter: "20mm", grain: "120", package: "100 un" },
  ];

  const polishersData = [
    { model: "Torpedo Ogival", code: "PT-001", diameter: "8mm", grind: "Extra Grosso", color: "Preto" },
    { model: "Torpedo Grande", code: "PT-002", diameter: "10mm", grind: "Grosso", color: "Azul" },
    { model: "Torpedo Média", code: "PT-003", diameter: "8mm", grind: "Médio", color: "Verde" },
    { model: "Cilíndrica", code: "PC-001", diameter: "6mm", grind: "Fino", color: "Amarelo" },
    { model: "Chama Pequena", code: "PCH-001", diameter: "4mm", grind: "Extra Fino", color: "Laranja" },
  ];

  const brushesData = [
    { type: "Cerdas Poliamida Rosa", code: "EP-001", diameter: "15mm", bristles: "Macia" },
    { type: "Cerdas Poliamida Lilás", code: "EP-002", diameter: "15mm", bristles: "Média" },
    { type: "Brocas Polidoras Limpeza", code: "BPL-001", diameter: "10mm", bristles: "Firme" },
    { type: "Esponja", code: "ES-001", diameter: "12mm", bristles: "Ultra Macia" },
    { type: "Feltro", code: "EF-001", diameter: "10mm", bristles: "Média" },
  ];

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#8B0000] via-[#B22222] to-[#DC143C] transform scale-110"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-4 drop-shadow-lg">
            {t("podologia.title", "PODOLOGIA")}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-inter max-w-3xl mx-auto">
            {t("podologia.subtitle", "Instrumentos profissionais para podólogos")}
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

      {/* Sandpaper Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#8B0000] mb-2">
              {t("products.sandpaper.title", "LIXAS SANDPAPER")}
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              {t("products.sandpaper.subtitle", "Abrasive Files")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-gray-700 font-inter leading-relaxed mb-6">
                {t("podologia.sandpaperDesc", "Linha completa de lixas descartáveis para podologia. Ideais para remoção de calosidades e tratamento dos pés. Disponíveis em versões Laminar e Plantar, com diferentes granulações e marcas premium como Norton e Alcar.")}
              </p>
              <ul className="space-y-3">
                {[
                  "Lixas descartáveis higiênicas",
                  "Diversas granulações disponíveis",
                  "Marcas premium Norton e Alcar",
                  "Ideal para remoção de calosidades",
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
                  className="aspect-square bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg flex items-center justify-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-amber-400 text-xs font-inter group-hover:text-[#E02020] transition-colors">
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
                <tr className="bg-[#8B0000] text-white">
                  <th className="p-4 text-left font-montserrat">{t("products.sandpaper.tableHeaders.type", "Tipo")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.sandpaper.tableHeaders.code", "Código")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.sandpaper.tableHeaders.diameter", "Diâmetro")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.sandpaper.tableHeaders.grain", "Granulação")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.sandpaper.tableHeaders.package", "Embalagem")}</th>
                </tr>
              </thead>
              <tbody>
                {sandpaperData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-red-50 transition-colors`}
                  >
                    <td className="p-4 font-inter">{row.type}</td>
                    <td className="p-4 font-inter font-medium text-[#8B0000]">{row.code}</td>
                    <td className="p-4 font-inter">{row.diameter}</td>
                    <td className="p-4 font-inter">{row.grain}</td>
                    <td className="p-4 font-inter">{row.package}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* Polishers Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#8B0000] mb-2">
              {t("products.polishers.title", "POLIDORAS")}
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              {t("products.polishers.subtitle", "Polishers")}
            </p>
          </div>

          <p className="text-gray-700 font-inter leading-relaxed mb-8 max-w-3xl">
            {t("podologia.polishersDesc", "Linha completa de polidoras para acabamento perfeito nos pés. Disponíveis em diversos formatos (Torpedo, Ogival, Cilíndrica, Chama) e níveis de desbaste (Extra Grosso a Ultra Fino). Cada cor indica um nível diferente de abrasividade.")}
          </p>

          {/* Color Legend */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { color: "bg-black", label: "Extra Grosso" },
              { color: "bg-blue-600", label: "Grosso" },
              { color: "bg-green-600", label: "Médio" },
              { color: "bg-yellow-500", label: "Fino" },
              { color: "bg-orange-500", label: "Extra Fino" },
              { color: "bg-pink-400", label: "Ultra Fino" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                <span className="text-sm font-inter text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#8B0000] text-white">
                  <th className="p-4 text-left font-montserrat">{t("products.polishers.tableHeaders.model", "Modelo")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.polishers.tableHeaders.code", "Código")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.polishers.tableHeaders.diameter", "Diâmetro")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.polishers.tableHeaders.grind", "Desbaste")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.polishers.tableHeaders.color", "Cor")}</th>
                </tr>
              </thead>
              <tbody>
                {polishersData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-red-50 transition-colors`}
                  >
                    <td className="p-4 font-inter">{row.model}</td>
                    <td className="p-4 font-inter font-medium text-[#8B0000]">{row.code}</td>
                    <td className="p-4 font-inter">{row.diameter}</td>
                    <td className="p-4 font-inter">{row.grind}</td>
                    <td className="p-4 font-inter">{row.color}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* Brushes Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#8B0000] mb-2">
              {t("products.brushes.title", "ESCOVAS DE LIMPEZA")}
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              {t("products.brushes.subtitle", "Cleaning Brushes")}
            </p>
          </div>

          <p className="text-gray-700 font-inter leading-relaxed mb-8 max-w-3xl">
            {t("podologia.brushesDesc", "Escovas de limpeza profissional com cerdas de poliamida. Essenciais para a higienização correta dos instrumentos e brocas após cada procedimento. Disponíveis em diferentes cores e tamanhos.")}
          </p>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#8B0000] text-white">
                  <th className="p-4 text-left font-montserrat">{t("products.brushes.tableHeaders.type", "Tipo")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.brushes.tableHeaders.code", "Código")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.brushes.tableHeaders.diameter", "Diâmetro")}</th>
                  <th className="p-4 text-left font-montserrat">{t("products.brushes.tableHeaders.bristles", "Cerdas")}</th>
                </tr>
              </thead>
              <tbody>
                {brushesData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-red-50 transition-colors`}
                  >
                    <td className="p-4 font-inter">{row.type}</td>
                    <td className="p-4 font-inter font-medium text-[#8B0000]">{row.code}</td>
                    <td className="p-4 font-inter">{row.diameter}</td>
                    <td className="p-4 font-inter">{row.bristles}</td>
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
              {t("podologia.scanQR", "Escaneie para acessar nosso catálogo digital")}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-[#8B0000] mb-6">
            {t("podologia.ctaTitle", "Interessado em nossos produtos para podologia?")}
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

export default Podologia;