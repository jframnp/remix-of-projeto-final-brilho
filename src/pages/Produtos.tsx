import Layout from "@/components/Layout";
import { Download, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Produtos = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("diamondBurs");

  const sections = [
    { id: "diamondBurs", key: "diamondBurs" },
    { id: "tungstenBurs", key: "tungstenBurs" },
    { id: "ceramicBurs", key: "ceramicBurs" },
    { id: "sandpaper", key: "sandpaper" },
    { id: "boomerang", key: "boomerang" },
    { id: "tubularAdhesive", key: "tubularAdhesive" },
    { id: "polishers", key: "polishers" },
    { id: "brushes", key: "brushes" },
    { id: "fiberMandril", key: "fiberMandril" },
    { id: "supportSharpening", key: "supportSharpening" },
  ];

  // Sample product data for tables
  const diamondBursData = [
    { model: "BD-01", code: "1001", iso: "806 314", grain: "Médio", diameter: "1.4mm" },
    { model: "BD-02", code: "1002", iso: "806 314", grain: "Fino", diameter: "1.6mm" },
    { model: "BD-03", code: "1003", iso: "806 314", grain: "Grosso", diameter: "1.8mm" },
    { model: "BD-04", code: "1004", iso: "806 314", grain: "Extra Fino", diameter: "2.1mm" },
    { model: "BD-05", code: "1005", iso: "806 314", grain: "Médio", diameter: "2.3mm" },
    { model: "BD-06", code: "1006", iso: "806 314", grain: "Extra Grosso", diameter: "2.5mm" },
  ];

  const goldLineData = [
    { model: "BDG-01", code: "2001", iso: "806 314", grain: "Médio", diameter: "1.4mm" },
    { model: "BDG-02", code: "2002", iso: "806 314", grain: "Fino", diameter: "1.6mm" },
    { model: "BDG-03", code: "2003", iso: "806 314", grain: "Grosso", diameter: "2.1mm" },
  ];

  const tungstenData = [
    { model: "TG-MC-01", code: "3001", iso: "500 104", cut: "Cruzado Médio", diameter: "2.3mm" },
    { model: "TG-MC-02", code: "3002", iso: "500 104", cut: "Cruzado Fino", diameter: "2.3mm" },
    { model: "TG-MC-03", code: "3003", iso: "500 104", cut: "Cruzado Extra Fino", diameter: "2.3mm" },
    { model: "TG-MC-04", code: "3004", iso: "500 104", cut: "Cruzado Grosso", diameter: "2.5mm" },
    { model: "TG-MN-01", code: "3101", iso: "500 104", cut: "Reto", diameter: "1.6mm" },
  ];

  const ceramicData = [
    { model: "CR-01", code: "4001", iso: "645 104", cut: "Cruzado Médio", diameter: "2.3mm" },
    { model: "CR-02", code: "4002", iso: "645 104", cut: "Cruzado Fino", diameter: "2.3mm" },
    { model: "CR-03", code: "4003", iso: "645 104", cut: "Cruzado Extra Fino", diameter: "2.5mm" },
  ];

  const sandpaperData = [
    { type: "Laminar Premium (Norton)", code: "5001", diameter: "15mm", grain: "80", package: "50 un" },
    { type: "Laminar Premium (Norton)", code: "5002", diameter: "15mm", grain: "120", package: "50 un" },
    { type: "Plantar Premium (Norton)", code: "5101", diameter: "25mm", grain: "80", package: "50 un" },
    { type: "Extra Grande", code: "5201", diameter: "35mm", grain: "80", package: "25 un" },
    { type: "Laminar (Alcar)", code: "5301", diameter: "15mm", grain: "100", package: "50 un" },
  ];

  const boomerangData = [
    { type: "Nails Verde", code: "6001", shape: "Boomerang", grain: "100/180", material: "Esponja" },
    { type: "Alta Performance", code: "6002", shape: "Quadrada", grain: "150/150", material: "EVA" },
    { type: "White Fina 2mm", code: "6003", shape: "Boomerang", grain: "180/240", material: "EVA" },
    { type: "Descartável Branca", code: "6004", shape: "Caixão", grain: "100/180", material: "Madeira" },
    { type: "Base Inox", code: "6005", shape: "Gota", grain: "-", material: "Inox" },
  ];

  const tubularData = [
    { type: "Lixa Tubular Send", code: "7001", grain: "80", diameter: "6mm", package: "100 un", abrasive: "Óxido Alumínio" },
    { type: "Lixa Tubular Send", code: "7002", grain: "120", diameter: "6mm", package: "100 un", abrasive: "Óxido Alumínio" },
    { type: "Adesiva Circular", code: "7101", grain: "80", diameter: "25mm", package: "50 un", abrasive: "Carbureto Silício" },
    { type: "Adesiva Circular", code: "7102", grain: "120", diameter: "25mm", package: "50 un", abrasive: "Carbureto Silício" },
  ];

  const polishersData = [
    { model: "Torpedo Ogival", code: "8001", diameter: "5mm", grind: "Extra Grosso", color: "Preto" },
    { model: "Torpedo Ogival", code: "8002", diameter: "5mm", grind: "Grosso", color: "Verde" },
    { model: "Torpedo Grande", code: "8101", diameter: "8mm", grind: "Médio", color: "Azul" },
    { model: "Torpedo Média", code: "8201", diameter: "6mm", grind: "Fino", color: "Rosa" },
    { model: "Cilíndrica", code: "8301", diameter: "4mm", grind: "Extra Fino", color: "Amarelo" },
    { model: "Chama Pequena", code: "8401", diameter: "3mm", grind: "Ultra Fino", color: "Branco" },
  ];

  const brushesData = [
    { type: "Cerdas Poliamida Rosa", code: "9001", diameter: "8mm", bristles: "Poliamida" },
    { type: "Cerdas Poliamida Lilás", code: "9002", diameter: "8mm", bristles: "Poliamida" },
    { type: "Brocas Polidoras Limpeza", code: "9101", diameter: "6mm", bristles: "Nylon" },
    { type: "Esponja", code: "9201", diameter: "10mm", bristles: "-" },
    { type: "Feltro", code: "9301", diameter: "10mm", bristles: "-" },
  ];

  const fiberData = [
    { type: "Fibra Molecular", code: "10001", model: "FM-01", diameter: "1.2mm", material: "Fibra Carbono" },
    { type: "Enucleadora de Calos", code: "10101", model: "EC-01", diameter: "2.0mm", material: "Aço Inox" },
    { type: "Mandril PM Church", code: "10201", model: "MP-01", diameter: "2.35mm", material: "Aço" },
  ];

  const supportData = [
    { type: "Apoio Rígido Plantar", code: "11001", diameter: "25mm", thickness: "3mm", package: "1 un" },
    { type: "Apoio Rígido Laminar", code: "11002", diameter: "15mm", thickness: "2mm", package: "1 un" },
    { type: "Apoio Flexível Plantar", code: "11101", diameter: "25mm", thickness: "5mm", package: "1 un" },
    { type: "Disco Couro", code: "11201", diameter: "50mm", thickness: "8mm", package: "1 un" },
    { type: "Disco Abrasivo", code: "11301", diameter: "50mm", thickness: "10mm", package: "1 un" },
    { type: "Pasta Polimento", code: "11401", diameter: "-", thickness: "-", package: "50g" },
    { type: "Mandril Standard", code: "11501", diameter: "2.35mm", thickness: "-", package: "1 un" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const ProductPlaceholder = ({ label }: { label: string }) => (
    <div className="bg-muted rounded-lg aspect-square flex items-center justify-center group-hover:bg-brilho-red/5 transition-colors">
      <div className="text-center p-4">
        <svg
          className="w-12 h-12 mx-auto text-muted-foreground group-hover:text-brilho-red transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
        <p className="text-xs text-muted-foreground mt-2">{label}</p>
      </div>
    </div>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brilho-red-dark py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-brilho-text-light font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            {t("products.pageTitle")}
          </h1>
          <p className="text-brilho-text-light/80 font-inter text-lg max-w-2xl mx-auto mb-8">
            {t("products.pageSubtitle")}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-brilho-text-light text-brilho-red font-montserrat font-bold px-8 py-4 rounded-lg hover:bg-brilho-text-light/90 transition-colors"
          >
            <Download size={24} />
            {t("products.downloadCatalog")}
          </a>
        </div>
      </section>

      {/* Navigation Sidebar + Content */}
      <section className="bg-brilho-bg-light py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation - Desktop */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-[160px] bg-card rounded-lg border border-border shadow-card p-4">
                <h3 className="font-montserrat font-bold text-lg text-brilho-red mb-4">
                  {t("products.pageTitle")}
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-md font-inter text-sm transition-colors ${
                        activeSection === section.id
                          ? "bg-brilho-red text-brilho-text-light"
                          : "text-foreground/80 hover:bg-muted"
                      }`}
                    >
                      {t(`products.sections.${section.key}`)}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Mobile Navigation - Accordion */}
            <div className="lg:hidden">
              <Accordion type="single" collapsible className="bg-card rounded-lg border border-border shadow-card">
                <AccordionItem value="nav" className="border-0">
                  <AccordionTrigger className="px-4 py-3 font-montserrat font-bold text-brilho-red">
                    {t("products.sections." + activeSection)}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <nav className="space-y-2">
                      {sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full text-left px-3 py-2 rounded-md font-inter text-sm transition-colors ${
                            activeSection === section.id
                              ? "bg-brilho-red text-brilho-text-light"
                              : "text-foreground/80 hover:bg-muted"
                          }`}
                        >
                          {t(`products.sections.${section.key}`)}
                        </button>
                      ))}
                    </nav>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Main Content */}
            <main className="flex-1 space-y-16">
              {/* Section 1: Diamond Burs */}
              <section id="diamondBurs" className="scroll-mt-40">
                <div className="bg-card rounded-lg border border-border shadow-card p-6 md:p-8">
                  <h2 className="text-brilho-red font-montserrat font-bold text-2xl md:text-3xl mb-2">
                    {t("products.diamondBurs.title")}
                  </h2>
                  <p className="text-muted-foreground font-inter text-sm mb-6">
                    {t("products.diamondBurs.subtitle")}
                  </p>
                  <p className="text-foreground/80 font-inter text-base leading-relaxed mb-6">
                    {t("products.diamondBurs.description")}
                  </p>

                  {/* Features */}
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {(t("products.diamondBurs.features", { returnObjects: true }) as string[]).map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-foreground/80 font-inter text-sm">
                        <span className="w-5 h-5 bg-brilho-red rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-brilho-text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Product Images Grid */}
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
                    <ProductPlaceholder label={t("products.diamondBurs.models.spherical")} />
                    <ProductPlaceholder label={t("products.diamondBurs.models.wheel")} />
                    <ProductPlaceholder label={t("products.diamondBurs.models.conical")} />
                    <ProductPlaceholder label={t("products.diamondBurs.models.flame")} />
                    <ProductPlaceholder label={t("products.diamondBurs.models.cylindrical")} />
                    <ProductPlaceholder label={t("products.diamondBurs.models.torpedo")} />
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-brilho-red text-brilho-text-light">
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.diamondBurs.tableHeaders.model")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.diamondBurs.tableHeaders.code")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.diamondBurs.tableHeaders.iso")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.diamondBurs.tableHeaders.grain")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.diamondBurs.tableHeaders.diameter")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {diamondBursData.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : "bg-card"}>
                            <td className="px-4 py-3 font-inter text-sm">{item.model}</td>
                            <td className="px-4 py-3 font-inter text-sm font-mono">{item.code}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.iso}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.grain}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.diameter}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Gold Line Subsection */}
                  <div className="mt-10 pt-8 border-t border-border">
                    <h3 className="text-brilho-red font-montserrat font-bold text-xl md:text-2xl mb-2">
                      {t("products.diamondBurs.goldLineTitle")}
                    </h3>
                    <p className="text-foreground/80 font-inter text-base leading-relaxed mb-6">
                      {t("products.diamondBurs.goldLineDesc")}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-lg aspect-square flex items-center justify-center">
                        <span className="text-yellow-800 font-montserrat font-bold text-sm">GOLD</span>
                      </div>
                      <div className="bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-lg aspect-square flex items-center justify-center">
                        <span className="text-yellow-800 font-montserrat font-bold text-sm">GOLD</span>
                      </div>
                      <div className="bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-lg aspect-square flex items-center justify-center">
                        <span className="text-yellow-800 font-montserrat font-bold text-sm">GOLD</span>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-yellow-500 text-yellow-900">
                            <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.diamondBurs.tableHeaders.model")}</th>
                            <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.diamondBurs.tableHeaders.code")}</th>
                            <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.diamondBurs.tableHeaders.iso")}</th>
                            <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.diamondBurs.tableHeaders.grain")}</th>
                            <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.diamondBurs.tableHeaders.diameter")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {goldLineData.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-yellow-50" : "bg-card"}>
                              <td className="px-4 py-3 font-inter text-sm">{item.model}</td>
                              <td className="px-4 py-3 font-inter text-sm font-mono">{item.code}</td>
                              <td className="px-4 py-3 font-inter text-sm">{item.iso}</td>
                              <td className="px-4 py-3 font-inter text-sm">{item.grain}</td>
                              <td className="px-4 py-3 font-inter text-sm">{item.diameter}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Tungsten Carbide Burs */}
              <section id="tungstenBurs" className="scroll-mt-40">
                <div className="bg-card rounded-lg border border-border shadow-card p-6 md:p-8">
                  <h2 className="text-brilho-red font-montserrat font-bold text-2xl md:text-3xl mb-2">
                    {t("products.tungstenBurs.title")}
                  </h2>
                  <p className="text-muted-foreground font-inter text-sm mb-6">
                    {t("products.tungstenBurs.subtitle")}
                  </p>
                  <p className="text-foreground/80 font-inter text-base leading-relaxed mb-6">
                    {t("products.tungstenBurs.description")}
                  </p>

                  <div className="flex gap-4 mb-6">
                    <span className="px-4 py-2 bg-brilho-red text-brilho-text-light font-montserrat font-bold text-sm rounded-full">
                      {t("products.tungstenBurs.maxiCut")}
                    </span>
                    <span className="px-4 py-2 bg-brilho-gray-dark text-brilho-text-light font-montserrat font-bold text-sm rounded-full">
                      {t("products.tungstenBurs.miniCut")}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-8">
                    <ProductPlaceholder label={t("products.tungstenBurs.cuts.crossMedium")} />
                    <ProductPlaceholder label={t("products.tungstenBurs.cuts.crossFine")} />
                    <ProductPlaceholder label={t("products.tungstenBurs.cuts.crossExtraFine")} />
                    <ProductPlaceholder label={t("products.tungstenBurs.cuts.crossCoarse")} />
                    <ProductPlaceholder label={t("products.tungstenBurs.cuts.straight")} />
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-brilho-red text-brilho-text-light">
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.tungstenBurs.tableHeaders.model")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.tungstenBurs.tableHeaders.code")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.tungstenBurs.tableHeaders.iso")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.tungstenBurs.tableHeaders.cut")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.tungstenBurs.tableHeaders.diameter")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tungstenData.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : "bg-card"}>
                            <td className="px-4 py-3 font-inter text-sm">{item.model}</td>
                            <td className="px-4 py-3 font-inter text-sm font-mono">{item.code}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.iso}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.cut}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.diameter}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 3: Ceramic Burs */}
              <section id="ceramicBurs" className="scroll-mt-40">
                <div className="bg-card rounded-lg border border-border shadow-card p-6 md:p-8">
                  <h2 className="text-brilho-red font-montserrat font-bold text-2xl md:text-3xl mb-2">
                    {t("products.ceramicBurs.title")}
                  </h2>
                  <p className="text-muted-foreground font-inter text-sm mb-6">
                    {t("products.ceramicBurs.subtitle")}
                  </p>
                  <p className="text-foreground/80 font-inter text-base leading-relaxed mb-6">
                    {t("products.ceramicBurs.description")}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-pink-100 to-pink-300 rounded-lg aspect-square flex items-center justify-center">
                      <span className="text-pink-800 font-montserrat font-bold text-xs text-center">Cerâmica Rosa</span>
                    </div>
                    <div className="bg-gradient-to-br from-blue-100 to-blue-300 rounded-lg aspect-square flex items-center justify-center">
                      <span className="text-blue-800 font-montserrat font-bold text-xs text-center">Cerâmica Azul</span>
                    </div>
                    <div className="bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg aspect-square flex items-center justify-center">
                      <span className="text-gray-800 font-montserrat font-bold text-xs text-center">Cerâmica Branca</span>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-brilho-red text-brilho-text-light">
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.ceramicBurs.tableHeaders.model")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.ceramicBurs.tableHeaders.code")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.ceramicBurs.tableHeaders.iso")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.ceramicBurs.tableHeaders.cut")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.ceramicBurs.tableHeaders.diameter")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ceramicData.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : "bg-card"}>
                            <td className="px-4 py-3 font-inter text-sm">{item.model}</td>
                            <td className="px-4 py-3 font-inter text-sm font-mono">{item.code}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.iso}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.cut}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.diameter}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 4: Sandpaper */}
              <section id="sandpaper" className="scroll-mt-40">
                <div className="bg-card rounded-lg border border-border shadow-card p-6 md:p-8">
                  <h2 className="text-brilho-red font-montserrat font-bold text-2xl md:text-3xl mb-2">
                    {t("products.sandpaper.title")}
                  </h2>
                  <p className="text-muted-foreground font-inter text-sm mb-6">
                    {t("products.sandpaper.subtitle")}
                  </p>
                  <p className="text-foreground/80 font-inter text-base leading-relaxed mb-6">
                    {t("products.sandpaper.description")}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                    <ProductPlaceholder label="Laminar Premium" />
                    <ProductPlaceholder label="Plantar Premium" />
                    <ProductPlaceholder label="Extra Grande" />
                    <ProductPlaceholder label="Laminar Alcar" />
                    <ProductPlaceholder label="Plantar Alcar" />
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-brilho-red text-brilho-text-light">
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.sandpaper.tableHeaders.type")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.sandpaper.tableHeaders.code")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.sandpaper.tableHeaders.diameter")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.sandpaper.tableHeaders.grain")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.sandpaper.tableHeaders.package")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sandpaperData.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : "bg-card"}>
                            <td className="px-4 py-3 font-inter text-sm">{item.type}</td>
                            <td className="px-4 py-3 font-inter text-sm font-mono">{item.code}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.diameter}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.grain}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.package}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 5: Boomerang */}
              <section id="boomerang" className="scroll-mt-40">
                <div className="bg-card rounded-lg border border-border shadow-card p-6 md:p-8">
                  <h2 className="text-brilho-red font-montserrat font-bold text-2xl md:text-3xl mb-2">
                    {t("products.boomerang.title")}
                  </h2>
                  <p className="text-muted-foreground font-inter text-sm mb-6">
                    {t("products.boomerang.subtitle")}
                  </p>
                  <p className="text-foreground/80 font-inter text-base leading-relaxed mb-6">
                    {t("products.boomerang.description")}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-green-100 rounded-lg p-4 text-center">
                      <div className="w-16 h-8 bg-green-500 mx-auto mb-2 rounded-full transform -skew-x-12"></div>
                      <span className="text-green-800 font-inter text-xs">{t("products.boomerang.shapes.boomerang")}</span>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-gray-400 mx-auto mb-2"></div>
                      <span className="text-gray-800 font-inter text-xs">{t("products.boomerang.shapes.square")}</span>
                    </div>
                    <div className="bg-pink-100 rounded-lg p-4 text-center">
                      <div className="w-10 h-14 bg-pink-400 mx-auto mb-2" style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}></div>
                      <span className="text-pink-800 font-inter text-xs">{t("products.boomerang.shapes.coffin")}</span>
                    </div>
                    <div className="bg-blue-100 rounded-lg p-4 text-center">
                      <div className="w-10 h-14 bg-blue-400 mx-auto mb-2 rounded-b-full"></div>
                      <span className="text-blue-800 font-inter text-xs">{t("products.boomerang.shapes.drop")}</span>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-brilho-red text-brilho-text-light">
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.boomerang.tableHeaders.type")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.boomerang.tableHeaders.code")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.boomerang.tableHeaders.shape")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.boomerang.tableHeaders.grain")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.boomerang.tableHeaders.material")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {boomerangData.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : "bg-card"}>
                            <td className="px-4 py-3 font-inter text-sm">{item.type}</td>
                            <td className="px-4 py-3 font-inter text-sm font-mono">{item.code}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.shape}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.grain}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.material}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 6: Tubular / Adhesive */}
              <section id="tubularAdhesive" className="scroll-mt-40">
                <div className="bg-card rounded-lg border border-border shadow-card p-6 md:p-8">
                  <h2 className="text-brilho-red font-montserrat font-bold text-2xl md:text-3xl mb-2">
                    {t("products.tubularAdhesive.title")}
                  </h2>
                  <p className="text-muted-foreground font-inter text-sm mb-6">
                    {t("products.tubularAdhesive.subtitle")}
                  </p>
                  <p className="text-foreground/80 font-inter text-base leading-relaxed mb-6">
                    {t("products.tubularAdhesive.description")}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <ProductPlaceholder label="Tubular 80" />
                    <ProductPlaceholder label="Tubular 120" />
                    <ProductPlaceholder label="Adesiva 80" />
                    <ProductPlaceholder label="Adesiva 120" />
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-brilho-red text-brilho-text-light">
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.tubularAdhesive.tableHeaders.type")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.tubularAdhesive.tableHeaders.code")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.tubularAdhesive.tableHeaders.grain")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.tubularAdhesive.tableHeaders.diameter")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.tubularAdhesive.tableHeaders.package")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.tubularAdhesive.tableHeaders.abrasive")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tubularData.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : "bg-card"}>
                            <td className="px-4 py-3 font-inter text-sm">{item.type}</td>
                            <td className="px-4 py-3 font-inter text-sm font-mono">{item.code}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.grain}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.diameter}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.package}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.abrasive}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 7: Polishers */}
              <section id="polishers" className="scroll-mt-40">
                <div className="bg-card rounded-lg border border-border shadow-card p-6 md:p-8">
                  <h2 className="text-brilho-red font-montserrat font-bold text-2xl md:text-3xl mb-2">
                    {t("products.polishers.title")}
                  </h2>
                  <p className="text-muted-foreground font-inter text-sm mb-6">
                    {t("products.polishers.subtitle")}
                  </p>
                  <p className="text-foreground/80 font-inter text-base leading-relaxed mb-6">
                    {t("products.polishers.description")}
                  </p>

                  <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
                    <div className="bg-black rounded-lg aspect-square flex items-center justify-center">
                      <span className="text-white font-inter text-xs text-center">Extra Grosso</span>
                    </div>
                    <div className="bg-green-600 rounded-lg aspect-square flex items-center justify-center">
                      <span className="text-white font-inter text-xs text-center">Grosso</span>
                    </div>
                    <div className="bg-blue-500 rounded-lg aspect-square flex items-center justify-center">
                      <span className="text-white font-inter text-xs text-center">Médio</span>
                    </div>
                    <div className="bg-pink-400 rounded-lg aspect-square flex items-center justify-center">
                      <span className="text-white font-inter text-xs text-center">Fino</span>
                    </div>
                    <div className="bg-yellow-400 rounded-lg aspect-square flex items-center justify-center">
                      <span className="text-yellow-900 font-inter text-xs text-center">Extra Fino</span>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-lg aspect-square flex items-center justify-center">
                      <span className="text-gray-600 font-inter text-xs text-center">Ultra Fino</span>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-brilho-red text-brilho-text-light">
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.polishers.tableHeaders.model")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.polishers.tableHeaders.code")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.polishers.tableHeaders.diameter")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.polishers.tableHeaders.grind")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.polishers.tableHeaders.color")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {polishersData.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : "bg-card"}>
                            <td className="px-4 py-3 font-inter text-sm">{item.model}</td>
                            <td className="px-4 py-3 font-inter text-sm font-mono">{item.code}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.diameter}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.grind}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.color}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 8: Cleaning Brushes */}
              <section id="brushes" className="scroll-mt-40">
                <div className="bg-card rounded-lg border border-border shadow-card p-6 md:p-8">
                  <h2 className="text-brilho-red font-montserrat font-bold text-2xl md:text-3xl mb-2">
                    {t("products.brushes.title")}
                  </h2>
                  <p className="text-muted-foreground font-inter text-sm mb-6">
                    {t("products.brushes.subtitle")}
                  </p>
                  <p className="text-foreground/80 font-inter text-base leading-relaxed mb-6">
                    {t("products.brushes.description")}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                    <div className="bg-pink-200 rounded-lg aspect-square flex items-center justify-center">
                      <span className="text-pink-800 font-inter text-xs text-center">Rosa</span>
                    </div>
                    <div className="bg-purple-200 rounded-lg aspect-square flex items-center justify-center">
                      <span className="text-purple-800 font-inter text-xs text-center">Lilás</span>
                    </div>
                    <ProductPlaceholder label="Limpeza" />
                    <ProductPlaceholder label="Esponja" />
                    <ProductPlaceholder label="Feltro" />
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-brilho-red text-brilho-text-light">
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.brushes.tableHeaders.type")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.brushes.tableHeaders.code")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.brushes.tableHeaders.diameter")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.brushes.tableHeaders.bristles")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {brushesData.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : "bg-card"}>
                            <td className="px-4 py-3 font-inter text-sm">{item.type}</td>
                            <td className="px-4 py-3 font-inter text-sm font-mono">{item.code}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.diameter}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.bristles}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 9: Fiber / Enucleator / Mandril */}
              <section id="fiberMandril" className="scroll-mt-40">
                <div className="bg-card rounded-lg border border-border shadow-card p-6 md:p-8">
                  <h2 className="text-brilho-red font-montserrat font-bold text-2xl md:text-3xl mb-2">
                    {t("products.fiberMandril.title")}
                  </h2>
                  <p className="text-muted-foreground font-inter text-sm mb-6">
                    {t("products.fiberMandril.subtitle")}
                  </p>
                  <p className="text-foreground/80 font-inter text-base leading-relaxed mb-6">
                    {t("products.fiberMandril.description")}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <ProductPlaceholder label="Fibra Molecular" />
                    <ProductPlaceholder label="Enucleadora" />
                    <ProductPlaceholder label="Mandril PM" />
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-brilho-red text-brilho-text-light">
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.fiberMandril.tableHeaders.type")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.fiberMandril.tableHeaders.code")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.fiberMandril.tableHeaders.model")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.fiberMandril.tableHeaders.diameter")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.fiberMandril.tableHeaders.material")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {fiberData.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : "bg-card"}>
                            <td className="px-4 py-3 font-inter text-sm">{item.type}</td>
                            <td className="px-4 py-3 font-inter text-sm font-mono">{item.code}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.model}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.diameter}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.material}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 10: Support / Sharpening */}
              <section id="supportSharpening" className="scroll-mt-40">
                <div className="bg-card rounded-lg border border-border shadow-card p-6 md:p-8">
                  <h2 className="text-brilho-red font-montserrat font-bold text-2xl md:text-3xl mb-2">
                    {t("products.supportSharpening.title")}
                  </h2>
                  <p className="text-muted-foreground font-inter text-sm mb-6">
                    {t("products.supportSharpening.subtitle")}
                  </p>
                  <p className="text-foreground/80 font-inter text-base leading-relaxed mb-6">
                    {t("products.supportSharpening.description")}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <ProductPlaceholder label="Apoio Rígido" />
                    <ProductPlaceholder label="Apoio Flexível" />
                    <ProductPlaceholder label="Disco Couro" />
                    <ProductPlaceholder label="Disco Abrasivo" />
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-brilho-red text-brilho-text-light">
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.supportSharpening.tableHeaders.type")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.supportSharpening.tableHeaders.code")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.supportSharpening.tableHeaders.diameter")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.supportSharpening.tableHeaders.thickness")}</th>
                          <th className="px-4 py-3 text-left font-montserrat font-bold text-sm">{t("products.supportSharpening.tableHeaders.package")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {supportData.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : "bg-card"}>
                            <td className="px-4 py-3 font-inter text-sm">{item.type}</td>
                            <td className="px-4 py-3 font-inter text-sm font-mono">{item.code}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.diameter}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.thickness}</td>
                            <td className="px-4 py-3 font-inter text-sm">{item.package}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </section>

      {/* Download Catálogo CTA */}
      <section className="bg-brilho-red-vivid py-8">
        <div className="container mx-auto px-4">
          <a
            href="#"
            className="flex items-center justify-center gap-4 text-brilho-text-light font-montserrat font-bold text-lg md:text-xl py-4 hover:scale-105 transition-transform"
          >
            <Download size={28} />
            <span className="text-center">
              {t("products.downloadCatalog")}
            </span>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Produtos;