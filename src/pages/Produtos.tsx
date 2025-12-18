import Layout from "@/components/Layout";
import { Download, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

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

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brilho-red via-brilho-red-dark to-[#5a0a0a]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-20 h-20 mb-4">
              <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-lg">
                <polygon points="40,4 72,22 72,58 40,76 8,58 8,22" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                <polygon points="40,12 64,26 64,54 40,68 16,54 16,26" fill="#FFFFFF" />
                <text x="40" y="48" textAnchor="middle" fill="#C41E3A" fontSize="28" fontWeight="bold" fontFamily="serif">B</text>
              </svg>
            </div>
            <span className="text-white font-montserrat font-bold text-lg tracking-wider">METALÚRGICA BRILHO<sup className="text-xs">®</sup></span>
          </div>

          <h1 className="text-white font-montserrat font-black text-4xl md:text-6xl lg:text-7xl mb-4" style={{ textShadow: '3px 3px 0 rgba(0,0,0,0.3)' }}>
            {t("products.pageTitle", "PRODUTOS")}
          </h1>
          <p className="text-white/90 font-inter text-lg md:text-xl max-w-2xl mx-auto mb-8">
            {t("products.pageSubtitle", "Conheça nossa linha completa de produtos para podologia, manicure e odontologia")}
          </p>

          <a
            href="/catalogo-brilho.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-brilho-red font-montserrat font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Download size={24} />
            {t("products.downloadCatalog", "BAIXE O CATÁLOGO COMPLETO")}
          </a>

          <div className="mt-8">
            <span className="inline-block text-2xl md:text-4xl font-montserrat font-black" style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              #BORA BRILHAR
            </span>
          </div>
        </div>
      </section>

      {/* Navigation & Content */}
      <section className="bg-brilho-bg-light py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Section Navigation - Horizontal scrollable on mobile */}
          <div className="mb-8 overflow-x-auto pb-4">
            <div className="flex gap-2 min-w-max md:flex-wrap md:justify-center">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 rounded-lg font-montserrat font-semibold text-sm whitespace-nowrap transition-all ${
                    activeSection === section.id
                      ? "bg-brilho-red text-white"
                      : "bg-white text-foreground hover:bg-brilho-red/10"
                  }`}
                >
                  {t(`products.sections.${section.key}`, section.key)}
                </button>
              ))}
            </div>
          </div>

          {/* SECTION 1: Brocas Diamantadas */}
          <div id="diamondBurs" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h2 className="text-brilho-red font-montserrat font-bold text-2xl md:text-3xl">
                    {t("products.diamondBurs.title", "BROCAS DIAMANTADAS")}
                  </h2>
                  <p className="text-foreground/60 font-inter text-lg">{t("products.diamondBurs.subtitle", "Diamond Burs")}</p>
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mt-4 md:mt-0">
                  <span className="text-4xl">💎</span>
                </div>
              </div>
              
              <p className="text-foreground/80 font-inter leading-relaxed mb-6">
                {t("products.diamondBurs.description", "Nossas brocas diamantadas são fabricadas com diamantes industriais de alta qualidade, proporcionando durabilidade excepcional e precisão no corte. Ideais para procedimentos de podologia, oferecendo acabamento perfeito e segurança ao profissional.")}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-montserrat font-bold text-foreground mb-3">{t("products.features", "Características")}:</h4>
                  <ul className="space-y-2">
                    {(t("products.diamondBurs.features", { returnObjects: true }) as string[]).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground/80 font-inter text-sm">
                        <ChevronRight className="w-4 h-4 text-brilho-red flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl p-4 border border-amber-200">
                  <h4 className="font-montserrat font-bold text-amber-800 mb-2">{t("products.diamondBurs.goldLineTitle", "LINHA GOLD")}</h4>
                  <p className="text-amber-700 font-inter text-sm">{t("products.diamondBurs.goldLineDesc", "Tecnologia avançada com revestimento especial dourado para maior durabilidade e performance superior.")}</p>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-brilho-red text-white">
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.diamondBurs.tableHeaders.model", "Modelo")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.diamondBurs.tableHeaders.code", "Código")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.diamondBurs.tableHeaders.iso", "ISO")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.diamondBurs.tableHeaders.grain", "Grão")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.diamondBurs.tableHeaders.diameter", "Diâmetro")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">{t("products.diamondBurs.models.spherical", "Esférica")}</td><td className="px-4 py-3">BD-001</td><td className="px-4 py-3">001</td><td className="px-4 py-3">{t("products.diamondBurs.grains.medium", "Médio")}</td><td className="px-4 py-3">1.6mm</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">{t("products.diamondBurs.models.wheel", "Roda")}</td><td className="px-4 py-3">BD-002</td><td className="px-4 py-3">002</td><td className="px-4 py-3">{t("products.diamondBurs.grains.fine", "Fino")}</td><td className="px-4 py-3">2.3mm</td></tr>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">{t("products.diamondBurs.models.conical", "Cônica")}</td><td className="px-4 py-3">BD-003</td><td className="px-4 py-3">003</td><td className="px-4 py-3">{t("products.diamondBurs.grains.coarse", "Grosso")}</td><td className="px-4 py-3">1.8mm</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">{t("products.diamondBurs.models.flame", "Chama")}</td><td className="px-4 py-3">BD-004</td><td className="px-4 py-3">004</td><td className="px-4 py-3">{t("products.diamondBurs.grains.extraFine", "Extra Fino")}</td><td className="px-4 py-3">1.4mm</td></tr>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">{t("products.diamondBurs.models.cylindrical", "Cilíndrica")}</td><td className="px-4 py-3">BD-005</td><td className="px-4 py-3">005</td><td className="px-4 py-3">{t("products.diamondBurs.grains.medium", "Médio")}</td><td className="px-4 py-3">2.1mm</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">{t("products.diamondBurs.models.torpedo", "Torpedo")}</td><td className="px-4 py-3">BD-006</td><td className="px-4 py-3">006</td><td className="px-4 py-3">{t("products.diamondBurs.grains.extraCoarse", "Extra Grosso")}</td><td className="px-4 py-3">2.5mm</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Product Images Grid */}
              <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-4">
                {["Esférica", "Roda", "Cônica", "Chama", "Cilíndrica", "Torpedo"].map((name, i) => (
                  <div key={i} className="bg-gray-100 rounded-lg aspect-square flex flex-col items-center justify-center p-2">
                    <div className="w-8 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-sm mb-2" />
                    <span className="text-xs text-foreground/60 text-center">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 2: Fresas de Tungstênio */}
          <div id="tungstenBurs" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h2 className="text-brilho-red font-montserrat font-bold text-2xl md:text-3xl">
                    {t("products.tungstenBurs.title", "FRESAS DE TUNGSTÊNIO")}
                  </h2>
                  <p className="text-foreground/60 font-inter text-lg">{t("products.tungstenBurs.subtitle", "Tungsten Carbide Burs")}</p>
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mt-4 md:mt-0">
                  <span className="text-4xl">⚙️</span>
                </div>
              </div>
              
              <p className="text-foreground/80 font-inter leading-relaxed mb-6">
                {t("products.tungstenBurs.description", "Fresas de tungstênio de alta performance para desbaste e acabamento. Disponíveis nas versões Maxi Cut e Mini Cut, com diversos tipos de corte para atender às necessidades específicas de cada procedimento.")}
              </p>

              <div className="flex gap-4 mb-6">
                <span className="bg-brilho-red/10 text-brilho-red px-4 py-2 rounded-lg font-montserrat font-semibold text-sm">{t("products.tungstenBurs.maxiCut", "Maxi Cut")}</span>
                <span className="bg-brilho-red/10 text-brilho-red px-4 py-2 rounded-lg font-montserrat font-semibold text-sm">{t("products.tungstenBurs.miniCut", "Mini Cut")}</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-brilho-red text-white">
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.tungstenBurs.tableHeaders.model", "Modelo")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.tungstenBurs.tableHeaders.code", "Código")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.tungstenBurs.tableHeaders.iso", "ISO")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.tungstenBurs.tableHeaders.cut", "Corte")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.tungstenBurs.tableHeaders.diameter", "Diâmetro")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">Maxi Cut Cônica</td><td className="px-4 py-3">FT-001</td><td className="px-4 py-3">010</td><td className="px-4 py-3">{t("products.tungstenBurs.cuts.crossMedium", "Cruzado Médio")}</td><td className="px-4 py-3">2.3mm</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">Maxi Cut Cilíndrica</td><td className="px-4 py-3">FT-002</td><td className="px-4 py-3">011</td><td className="px-4 py-3">{t("products.tungstenBurs.cuts.crossFine", "Cruzado Fino")}</td><td className="px-4 py-3">2.5mm</td></tr>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">Mini Cut Esférica</td><td className="px-4 py-3">FT-003</td><td className="px-4 py-3">012</td><td className="px-4 py-3">{t("products.tungstenBurs.cuts.crossExtraFine", "Cruzado Extra Fino")}</td><td className="px-4 py-3">1.6mm</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">Mini Cut Chama</td><td className="px-4 py-3">FT-004</td><td className="px-4 py-3">013</td><td className="px-4 py-3">{t("products.tungstenBurs.cuts.crossCoarse", "Cruzado Grosso")}</td><td className="px-4 py-3">1.8mm</td></tr>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">Maxi Cut Torpedo</td><td className="px-4 py-3">FT-005</td><td className="px-4 py-3">014</td><td className="px-4 py-3">{t("products.tungstenBurs.cuts.straight", "Reto")}</td><td className="px-4 py-3">2.1mm</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SECTION 3: Fresas de Cerâmica */}
          <div id="ceramicBurs" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h2 className="text-brilho-red font-montserrat font-bold text-2xl md:text-3xl">
                    {t("products.ceramicBurs.title", "FRESAS DE CERÂMICA")}
                  </h2>
                  <p className="text-foreground/60 font-inter text-lg">{t("products.ceramicBurs.subtitle", "Ceramic Burs")}</p>
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl flex items-center justify-center mt-4 md:mt-0">
                  <span className="text-4xl">🌸</span>
                </div>
              </div>
              
              <p className="text-foreground/80 font-inter leading-relaxed mb-6">
                {t("products.ceramicBurs.description", "Fresas de cerâmica de alta resistência e durabilidade. Ideais para trabalhos que exigem precisão e acabamento delicado. Disponíveis em diversos formatos e granulometrias.")}
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-brilho-red text-white">
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.ceramicBurs.tableHeaders.model", "Modelo")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.ceramicBurs.tableHeaders.code", "Código")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.ceramicBurs.tableHeaders.iso", "ISO")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.ceramicBurs.tableHeaders.cut", "Corte")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.ceramicBurs.tableHeaders.diameter", "Diâmetro")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">Cerâmica Cônica Rosa</td><td className="px-4 py-3">FC-001</td><td className="px-4 py-3">020</td><td className="px-4 py-3">Cruzado Médio</td><td className="px-4 py-3">2.3mm</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">Cerâmica Cilíndrica Azul</td><td className="px-4 py-3">FC-002</td><td className="px-4 py-3">021</td><td className="px-4 py-3">Cruzado Fino</td><td className="px-4 py-3">2.5mm</td></tr>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">Cerâmica Esférica Verde</td><td className="px-4 py-3">FC-003</td><td className="px-4 py-3">022</td><td className="px-4 py-3">Cruzado Extra Fino</td><td className="px-4 py-3">1.8mm</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">Cerâmica Chama Branca</td><td className="px-4 py-3">FC-004</td><td className="px-4 py-3">023</td><td className="px-4 py-3">Cruzado Grosso</td><td className="px-4 py-3">2.1mm</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SECTION 4: Lixas Sandpaper */}
          <div id="sandpaper" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h2 className="text-brilho-red font-montserrat font-bold text-2xl md:text-3xl">
                    {t("products.sandpaper.title", "LIXAS SANDPAPER")}
                  </h2>
                  <p className="text-foreground/60 font-inter text-lg">{t("products.sandpaper.subtitle", "Abrasive Files")}</p>
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl flex items-center justify-center mt-4 md:mt-0">
                  <span className="text-4xl">📄</span>
                </div>
              </div>
              
              <p className="text-foreground/80 font-inter leading-relaxed mb-6">
                {t("products.sandpaper.description", "Linha completa de lixas descartáveis para podologia. Disponíveis em versões Laminar e Plantar, com diferentes granulações e marcas premium como Norton e Alcar.")}
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-brilho-red text-white">
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.sandpaper.tableHeaders.type", "Tipo")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.sandpaper.tableHeaders.code", "Código")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.sandpaper.tableHeaders.diameter", "Diâmetro")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.sandpaper.tableHeaders.grain", "Granulação")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.sandpaper.tableHeaders.package", "Embalagem")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">{t("products.sandpaper.types.laminarPremium", "Lixa Laminar Premium (Norton)")}</td><td className="px-4 py-3">LS-001</td><td className="px-4 py-3">15mm</td><td className="px-4 py-3">80</td><td className="px-4 py-3">50 un</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">{t("products.sandpaper.types.plantarPremium", "Lixa Plantar Premium (Norton)")}</td><td className="px-4 py-3">LS-002</td><td className="px-4 py-3">20mm</td><td className="px-4 py-3">100</td><td className="px-4 py-3">50 un</td></tr>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">{t("products.sandpaper.types.extraLarge", "Lixa Extra Grande")}</td><td className="px-4 py-3">LS-003</td><td className="px-4 py-3">25mm</td><td className="px-4 py-3">120</td><td className="px-4 py-3">30 un</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">{t("products.sandpaper.types.laminarAlcar", "Lixa Laminar (Alcar)")}</td><td className="px-4 py-3">LS-004</td><td className="px-4 py-3">15mm</td><td className="px-4 py-3">150</td><td className="px-4 py-3">100 un</td></tr>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">{t("products.sandpaper.types.plantarAlcar", "Lixa Plantar (Alcar)")}</td><td className="px-4 py-3">LS-005</td><td className="px-4 py-3">20mm</td><td className="px-4 py-3">180</td><td className="px-4 py-3">100 un</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SECTION 5: Lixas Boomerang */}
          <div id="boomerang" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h2 className="text-brilho-red font-montserrat font-bold text-2xl md:text-3xl">
                    {t("products.boomerang.title", "LIXAS BOOMERANG")}
                  </h2>
                  <p className="text-foreground/60 font-inter text-lg">{t("products.boomerang.subtitle", "Boomerang Sandpaper")}</p>
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl flex items-center justify-center mt-4 md:mt-0">
                  <span className="text-4xl">🪃</span>
                </div>
              </div>
              
              <p className="text-foreground/80 font-inter leading-relaxed mb-6">
                {t("products.boomerang.description", "Lixas especiais em formato boomerang e outros shapes exclusivos para manicure e nail design. Alta qualidade e durabilidade para resultados profissionais.")}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">{t("products.boomerang.shapes.boomerang", "Boomerang")}</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">{t("products.boomerang.shapes.square", "Quadrada")}</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">{t("products.boomerang.shapes.coffin", "Caixão")}</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">{t("products.boomerang.shapes.drop", "Gota")}</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-brilho-red text-white">
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.boomerang.tableHeaders.type", "Tipo")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.boomerang.tableHeaders.code", "Código")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.boomerang.tableHeaders.shape", "Formato")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.boomerang.tableHeaders.grain", "Granulação")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.boomerang.tableHeaders.material", "Material")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">{t("products.boomerang.types.nailsGreen", "Lixa Nails Verde")}</td><td className="px-4 py-3">LB-001</td><td className="px-4 py-3">Boomerang</td><td className="px-4 py-3">100/180</td><td className="px-4 py-3">EVA</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">{t("products.boomerang.types.highPerformance", "Lixa Alta Performance")}</td><td className="px-4 py-3">LB-002</td><td className="px-4 py-3">Quadrada</td><td className="px-4 py-3">150/220</td><td className="px-4 py-3">Espuma</td></tr>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">{t("products.boomerang.types.whiteFine", "Boomerang White Fina 2mm")}</td><td className="px-4 py-3">LB-003</td><td className="px-4 py-3">Boomerang</td><td className="px-4 py-3">180/240</td><td className="px-4 py-3">EVA</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">{t("products.boomerang.types.disposableWhite", "Nails Descartável Branca")}</td><td className="px-4 py-3">LB-004</td><td className="px-4 py-3">Caixão</td><td className="px-4 py-3">100/150</td><td className="px-4 py-3">Madeira</td></tr>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">{t("products.boomerang.types.stainlessBase", "Base Inox")}</td><td className="px-4 py-3">LB-005</td><td className="px-4 py-3">Universal</td><td className="px-4 py-3">-</td><td className="px-4 py-3">Aço Inox</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SECTION 6: Lixa Tubular / Adesiva */}
          <div id="tubularAdhesive" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h2 className="text-brilho-red font-montserrat font-bold text-2xl md:text-3xl">
                    {t("products.tubularAdhesive.title", "LIXA TUBULAR SEND / LIXA ADESIVA CIRCULAR")}
                  </h2>
                  <p className="text-foreground/60 font-inter text-lg">{t("products.tubularAdhesive.subtitle", "Tubular Sand / Adhesive Circular File")}</p>
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center mt-4 md:mt-0">
                  <span className="text-4xl">⭕</span>
                </div>
              </div>
              
              <p className="text-foreground/80 font-inter leading-relaxed mb-6">
                {t("products.tubularAdhesive.description", "Lixas tubulares e adesivas circulares para diferentes aplicações. Alta aderência e durabilidade para uso profissional.")}
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-brilho-red text-white">
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.tubularAdhesive.tableHeaders.type", "Tipo")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.tubularAdhesive.tableHeaders.code", "Código")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.tubularAdhesive.tableHeaders.grain", "Grão")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.tubularAdhesive.tableHeaders.diameter", "Diâmetro")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.tubularAdhesive.tableHeaders.package", "Embalagem")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">Lixa Tubular Send 80</td><td className="px-4 py-3">LT-001</td><td className="px-4 py-3">80</td><td className="px-4 py-3">10mm</td><td className="px-4 py-3">100 un</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">Lixa Tubular Send 120</td><td className="px-4 py-3">LT-002</td><td className="px-4 py-3">120</td><td className="px-4 py-3">10mm</td><td className="px-4 py-3">100 un</td></tr>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">Lixa Adesiva Circular 80</td><td className="px-4 py-3">LA-001</td><td className="px-4 py-3">80</td><td className="px-4 py-3">25mm</td><td className="px-4 py-3">50 un</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">Lixa Adesiva Circular 150</td><td className="px-4 py-3">LA-002</td><td className="px-4 py-3">150</td><td className="px-4 py-3">25mm</td><td className="px-4 py-3">50 un</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SECTION 7: Polidoras */}
          <div id="polishers" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h2 className="text-brilho-red font-montserrat font-bold text-2xl md:text-3xl">
                    {t("products.polishers.title", "POLIDORAS")}
                  </h2>
                  <p className="text-foreground/60 font-inter text-lg">{t("products.polishers.subtitle", "Polishers")}</p>
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center mt-4 md:mt-0">
                  <span className="text-4xl">✨</span>
                </div>
              </div>
              
              <p className="text-foreground/80 font-inter leading-relaxed mb-6">
                {t("products.polishers.description", "Linha completa de polidoras para acabamento perfeito. Disponíveis em diversos formatos (Torpedo, Ogival, Cilíndrica, Chama) e níveis de desbaste (Extra Grosso a Ultra Fino).")}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">{t("products.polishers.grindLevels.extraCoarse", "Extra Grosso")}</span>
                <span className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">{t("products.polishers.grindLevels.coarse", "Grosso")}</span>
                <span className="bg-purple-300 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">{t("products.polishers.grindLevels.medium", "Médio")}</span>
                <span className="bg-purple-400 text-white px-3 py-1 rounded-full text-sm font-medium">{t("products.polishers.grindLevels.fine", "Fino")}</span>
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">{t("products.polishers.grindLevels.extraFine", "Extra Fino")}</span>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">{t("products.polishers.grindLevels.ultraFine", "Ultra Fino")}</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-brilho-red text-white">
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.polishers.tableHeaders.model", "Modelo")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.polishers.tableHeaders.code", "Código")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.polishers.tableHeaders.diameter", "Diâmetro")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.polishers.tableHeaders.grind", "Desbaste")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.polishers.tableHeaders.color", "Cor")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">{t("products.polishers.types.torpedoOgival", "Polidora Torpedo Ogival")}</td><td className="px-4 py-3">PO-001</td><td className="px-4 py-3">6mm</td><td className="px-4 py-3">Extra Grosso</td><td className="px-4 py-3 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-black" /> Preto</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">{t("products.polishers.types.torpedoLarge", "Polidora Torpedo Grande")}</td><td className="px-4 py-3">PO-002</td><td className="px-4 py-3">8mm</td><td className="px-4 py-3">Grosso</td><td className="px-4 py-3 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-green-500" /> Verde</td></tr>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">{t("products.polishers.types.torpedoMedium", "Polidora Torpedo Média")}</td><td className="px-4 py-3">PO-003</td><td className="px-4 py-3">5mm</td><td className="px-4 py-3">Médio</td><td className="px-4 py-3 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-blue-500" /> Azul</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">{t("products.polishers.types.cylindrical", "Polidora Cilíndrica")}</td><td className="px-4 py-3">PO-004</td><td className="px-4 py-3">6mm</td><td className="px-4 py-3">Fino</td><td className="px-4 py-3 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-yellow-400" /> Amarelo</td></tr>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">{t("products.polishers.types.flameSmall", "Polidora Chama Pequena")}</td><td className="px-4 py-3">PO-005</td><td className="px-4 py-3">4mm</td><td className="px-4 py-3">Ultra Fino</td><td className="px-4 py-3 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-pink-400" /> Rosa</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SECTION 8: Escovas de Limpeza */}
          <div id="brushes" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h2 className="text-brilho-red font-montserrat font-bold text-2xl md:text-3xl">
                    {t("products.brushes.title", "ESCOVAS DE LIMPEZA")}
                  </h2>
                  <p className="text-foreground/60 font-inter text-lg">{t("products.brushes.subtitle", "Cleaning Brushes")}</p>
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mt-4 md:mt-0">
                  <span className="text-4xl">🧹</span>
                </div>
              </div>
              
              <p className="text-foreground/80 font-inter leading-relaxed mb-6">
                {t("products.brushes.description", "Escovas de limpeza profissional com cerdas de poliamida. Disponíveis em diferentes cores e tamanhos para limpeza de instrumentos e brocas.")}
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-brilho-red text-white">
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.brushes.tableHeaders.type", "Tipo")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.brushes.tableHeaders.code", "Código")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.brushes.tableHeaders.diameter", "Diâmetro")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.brushes.tableHeaders.bristles", "Cerdas")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">{t("products.brushes.types.polyamidePink", "Cerdas Poliamida Rosa")}</td><td className="px-4 py-3">EL-001</td><td className="px-4 py-3">10mm</td><td className="px-4 py-3">Poliamida Rosa</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">{t("products.brushes.types.polyamideLilac", "Cerdas Poliamida Lilás")}</td><td className="px-4 py-3">EL-002</td><td className="px-4 py-3">10mm</td><td className="px-4 py-3">Poliamida Lilás</td></tr>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">{t("products.brushes.types.polisherCleaning", "Brocas Polidoras Limpeza")}</td><td className="px-4 py-3">EL-003</td><td className="px-4 py-3">8mm</td><td className="px-4 py-3">Nylon</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">{t("products.brushes.types.sponge", "Esponja")}</td><td className="px-4 py-3">EL-004</td><td className="px-4 py-3">12mm</td><td className="px-4 py-3">Espuma</td></tr>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">{t("products.brushes.types.felt", "Feltro")}</td><td className="px-4 py-3">EL-005</td><td className="px-4 py-3">10mm</td><td className="px-4 py-3">Feltro Natural</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SECTION 9: Fibras / Enucleadora / Mandril */}
          <div id="fiberMandril" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h2 className="text-brilho-red font-montserrat font-bold text-2xl md:text-3xl">
                    {t("products.fiberMandril.title", "FIBRAS / ENUCLEADORA / MANDRIL")}
                  </h2>
                  <p className="text-foreground/60 font-inter text-lg">{t("products.fiberMandril.subtitle", "Fiber / Shell Enucleator / Mandril")}</p>
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-slate-50 to-slate-200 rounded-xl flex items-center justify-center mt-4 md:mt-0">
                  <span className="text-4xl">🔧</span>
                </div>
              </div>
              
              <p className="text-foreground/80 font-inter leading-relaxed mb-6">
                {t("products.fiberMandril.description", "Linha especializada incluindo Fibra Molecular para tratamentos específicos, Enucleadora de Calos em Aço Inoxidável e Mandril PM Church para fixação de lixas.")}
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-brilho-red text-white">
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.fiberMandril.tableHeaders.type", "Tipo")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.fiberMandril.tableHeaders.code", "Código")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.fiberMandril.tableHeaders.model", "Modelo")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.fiberMandril.tableHeaders.diameter", "Diâmetro")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.fiberMandril.tableHeaders.material", "Material")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">{t("products.fiberMandril.types.molecularFiber", "Fibra Molecular")}</td><td className="px-4 py-3">FM-001</td><td className="px-4 py-3">Standard</td><td className="px-4 py-3">2.35mm</td><td className="px-4 py-3">Fibra Especial</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">{t("products.fiberMandril.types.callusEnucleator", "Enucleadora de Calos Aço Inoxidável")}</td><td className="px-4 py-3">EN-001</td><td className="px-4 py-3">Curva</td><td className="px-4 py-3">3mm</td><td className="px-4 py-3">Aço Inoxidável</td></tr>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">{t("products.fiberMandril.types.mandrilPMChurch", "Mandril PM Church")}</td><td className="px-4 py-3">MD-001</td><td className="px-4 py-3">PM Church</td><td className="px-4 py-3">2.35mm</td><td className="px-4 py-3">Aço Cromado</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SECTION 10: Apoio / Afiação */}
          <div id="supportSharpening" className="mb-16 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h2 className="text-brilho-red font-montserrat font-bold text-2xl md:text-3xl">
                    {t("products.supportSharpening.title", "APOIO PARA LIXAS / AFIAÇÃO DE INSTRUMENTOS")}
                  </h2>
                  <p className="text-foreground/60 font-inter text-lg">{t("products.supportSharpening.subtitle", "Support for Files / Instrument Sharpening")}</p>
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center mt-4 md:mt-0">
                  <span className="text-4xl">🛠️</span>
                </div>
              </div>
              
              <p className="text-foreground/80 font-inter leading-relaxed mb-6">
                {t("products.supportSharpening.description", "Acessórios essenciais para o profissional: apoios rígidos e flexíveis para lixas, discos de couro e abrasivo para afiação, pasta de polimento e mandril standard.")}
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-brilho-red text-white">
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.supportSharpening.tableHeaders.type", "Tipo")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.supportSharpening.tableHeaders.code", "Código")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.supportSharpening.tableHeaders.diameter", "Diâmetro")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.supportSharpening.tableHeaders.thickness", "Espessura")}</th>
                      <th className="px-4 py-3 text-left font-montserrat">{t("products.supportSharpening.tableHeaders.package", "Embalagem")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">{t("products.supportSharpening.types.rigidSupport", "Apoio Rígido (Plantar/Laminar)")}</td><td className="px-4 py-3">AP-001</td><td className="px-4 py-3">25mm</td><td className="px-4 py-3">3mm</td><td className="px-4 py-3">1 un</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">{t("products.supportSharpening.types.flexSupport", "Apoio Flexível (Plantar/Laminar)")}</td><td className="px-4 py-3">AP-002</td><td className="px-4 py-3">25mm</td><td className="px-4 py-3">2mm</td><td className="px-4 py-3">1 un</td></tr>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">{t("products.supportSharpening.types.leatherDisc", "Disco Couro")}</td><td className="px-4 py-3">DC-001</td><td className="px-4 py-3">75mm</td><td className="px-4 py-3">5mm</td><td className="px-4 py-3">1 un</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">{t("products.supportSharpening.types.abrasiveDisc", "Disco Abrasivo")}</td><td className="px-4 py-3">DA-001</td><td className="px-4 py-3">75mm</td><td className="px-4 py-3">3mm</td><td className="px-4 py-3">1 un</td></tr>
                    <tr className="border-b hover:bg-gray-50"><td className="px-4 py-3">{t("products.supportSharpening.types.polishingPaste", "Pasta Polimento")}</td><td className="px-4 py-3">PP-001</td><td className="px-4 py-3">-</td><td className="px-4 py-3">-</td><td className="px-4 py-3">100g</td></tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-50"><td className="px-4 py-3">{t("products.supportSharpening.types.mandrilStandard", "Mandril Standard")}</td><td className="px-4 py-3">MS-001</td><td className="px-4 py-3">2.35mm</td><td className="px-4 py-3">-</td><td className="px-4 py-3">1 un</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Download CTA */}
          <div className="text-center mb-16">
            <a
              href="/catalogo-brilho.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-brilho-red hover:bg-brilho-red-dark text-white font-montserrat font-bold text-lg md:text-xl px-8 md:px-12 py-5 md:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Download size={28} />
              <span>{t("products.downloadCatalog", "BAIXE O CATÁLOGO COMPLETO")}</span>
            </a>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="bg-gray-100 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-6xl font-montserrat font-black mb-12" style={{ color: '#666666' }}>
            #BORA BRILHAR
          </h3>

          <div className="inline-block bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-800 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full p-4">
                <rect x="10" y="10" width="25" height="25" fill="white"/>
                <rect x="65" y="10" width="25" height="25" fill="white"/>
                <rect x="10" y="65" width="25" height="25" fill="white"/>
                <rect x="15" y="15" width="15" height="15" fill="black"/>
                <rect x="70" y="15" width="15" height="15" fill="black"/>
                <rect x="15" y="70" width="15" height="15" fill="black"/>
                <rect x="18" y="18" width="9" height="9" fill="white"/>
                <rect x="73" y="18" width="9" height="9" fill="white"/>
                <rect x="18" y="73" width="9" height="9" fill="white"/>
                <rect x="40" y="10" width="5" height="5" fill="white"/>
                <rect x="50" y="10" width="5" height="5" fill="white"/>
                <rect x="40" y="20" width="5" height="5" fill="white"/>
                <rect x="55" y="20" width="5" height="5" fill="white"/>
                <rect x="40" y="40" width="20" height="20" fill="white"/>
                <rect x="45" y="45" width="10" height="10" fill="black"/>
                <rect x="10" y="45" width="5" height="5" fill="white"/>
                <rect x="20" y="40" width="5" height="5" fill="white"/>
                <rect x="85" y="40" width="5" height="5" fill="white"/>
                <rect x="70" y="50" width="5" height="5" fill="white"/>
                <rect x="40" y="85" width="5" height="5" fill="white"/>
                <rect x="55" y="75" width="5" height="5" fill="white"/>
                <rect x="70" y="70" width="20" height="20" fill="white"/>
                <rect x="75" y="75" width="10" height="10" fill="black"/>
              </svg>
            </div>
          </div>

          <p className="text-gray-500 font-inter text-sm mt-6">
            {t("products.scanQR", "Escaneie para baixar o catálogo")}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Produtos;
