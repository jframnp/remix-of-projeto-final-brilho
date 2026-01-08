import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Download, 
  ArrowLeft, 
  MessageCircle, 
  Play, 
  Sparkles,
  Eye,
  ChevronDown,
  ChevronUp,
  Search,
  SortAsc,
  SortDesc,
  Star,
  Zap
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ParticleBackground from "@/components/products/ParticleBackground";

// Product data based on PDF catalog - exact specs
const productData: Record<string, {
  products: Array<{
    model: string;
    code: string;
    iso?: string;
    diameter?: string;
    grain?: string;
    cut?: string;
    color?: string;
    activeLength?: string;
    image?: string;
  }>;
  features?: string[];
  hasGoldLine?: boolean;
  subtypes?: string[];
  description: {
    pt: string;
    en: string;
  };
}> = {
  "brocas-diamantadas": {
    hasGoldLine: true,
    subtypes: ["Esférica", "Roda", "Cônica", "Chama", "Cilíndrica", "Torpedo"],
    description: {
      pt: "Indicadas para laboratórios de prótese, joalherias, indústrias em geral, hospitais, podólogos, nails designers e manicures – sempre oferecendo excelente qualidade.",
      en: "Recommended for prosthesis laboratories, jewelry stores, general industries, hospitals, podiatrists, nail designers and manicurists – always offering excellent quality."
    },
    features: [
      "Diamantes industriais de primeira linha",
      "Alta durabilidade e resistência",
      "Diversas granulometrias disponíveis",
      "Formatos específicos para cada procedimento",
      "Registro ANVISA",
      "Fabricação 100% nacional"
    ],
    products: [
      { model: "Esférica", code: "BD-ESF-01", iso: "001", diameter: "1.0mm", grain: "Médio", activeLength: "1.0mm" },
      { model: "Esférica", code: "BD-ESF-02", iso: "001", diameter: "1.5mm", grain: "Médio", activeLength: "1.5mm" },
      { model: "Esférica", code: "BD-ESF-03", iso: "001", diameter: "2.0mm", grain: "Fino", activeLength: "2.0mm" },
      { model: "Esférica", code: "BD-ESF-04", iso: "001", diameter: "2.5mm", grain: "Grosso", activeLength: "2.5mm" },
      { model: "Roda", code: "BD-ROD-01", iso: "010", diameter: "3.0mm", grain: "Grosso", activeLength: "1.5mm" },
      { model: "Roda", code: "BD-ROD-02", iso: "010", diameter: "4.0mm", grain: "Médio", activeLength: "2.0mm" },
      { model: "Cônica", code: "BD-CON-01", iso: "012", diameter: "2.5mm", grain: "Fino", activeLength: "6.0mm" },
      { model: "Cônica", code: "BD-CON-02", iso: "012", diameter: "3.5mm", grain: "Extra Fino", activeLength: "8.0mm" },
      { model: "Chama", code: "BD-CHA-01", iso: "014", diameter: "2.0mm", grain: "Médio", activeLength: "5.0mm" },
      { model: "Chama", code: "BD-CHA-02", iso: "014", diameter: "2.5mm", grain: "Grosso", activeLength: "6.0mm" },
      { model: "Cilíndrica", code: "BD-CIL-01", iso: "016", diameter: "3.0mm", grain: "Grosso", activeLength: "7.0mm" },
      { model: "Cilíndrica", code: "BD-CIL-02", iso: "016", diameter: "2.5mm", grain: "Médio", activeLength: "6.0mm" },
      { model: "Torpedo", code: "BD-TOR-01", iso: "018", diameter: "4.0mm", grain: "Médio", activeLength: "10.0mm" },
      { model: "Torpedo", code: "BD-TOR-02", iso: "018", diameter: "3.5mm", grain: "Fino", activeLength: "8.0mm" },
    ]
  },
  "fresas-tungstenio": {
    subtypes: ["Maxi Cut", "Mini Cut"],
    description: {
      pt: "Fresas de tungstênio de alta performance para procedimentos que exigem precisão e durabilidade.",
      en: "High-performance tungsten burs for procedures requiring precision and durability."
    },
    products: [
      { model: "Maxi Cut Cônica", code: "FT-MC-01", iso: "023", diameter: "2.3mm", cut: "Cruzado Médio" },
      { model: "Maxi Cut Esférica", code: "FT-MC-02", iso: "023", diameter: "3.0mm", cut: "Cruzado Grosso" },
      { model: "Mini Cut Cônica", code: "FT-MN-01", iso: "023", diameter: "1.5mm", cut: "Cruzado Fino" },
      { model: "Mini Cut Chama", code: "FT-MN-02", iso: "023", diameter: "2.0mm", cut: "Cruzado Extra Fino" },
      { model: "Maxi Cut Cilíndrica", code: "FT-MC-03", iso: "023", diameter: "2.5mm", cut: "Reto" },
      { model: "Mini Cut Torpedo", code: "FT-MN-03", iso: "023", diameter: "3.5mm", cut: "Cruzado Médio" },
    ]
  },
  "fresas-ceramica": {
    description: {
      pt: "Fresas cerâmicas de alta tecnologia para acabamentos perfeitos e procedimentos delicados.",
      en: "High-tech ceramic burs for perfect finishes and delicate procedures."
    },
    products: [
      { model: "Cônica Média", code: "FC-CON-01", iso: "032", diameter: "2.5mm", cut: "Cruzado Médio" },
      { model: "Cônica Grande", code: "FC-CON-02", iso: "032", diameter: "3.5mm", cut: "Cruzado Fino" },
      { model: "Esférica", code: "FC-ESF-01", iso: "032", diameter: "2.0mm", cut: "Cruzado Extra Fino" },
      { model: "Chama", code: "FC-CHA-01", iso: "032", diameter: "2.5mm", cut: "Cruzado Grosso" },
      { model: "Cilíndrica", code: "FC-CIL-01", iso: "032", diameter: "3.0mm", cut: "Cruzado Médio" },
    ]
  },
  "lixas": {
    subtypes: ["Laminar", "Plantar", "Boomerang", "Nails"],
    description: {
      pt: "Lixas profissionais de alta qualidade para podologia e nail design.",
      en: "High-quality professional files for podiatry and nail design."
    },
    products: [
      { model: "Laminar Premium (Norton)", code: "LX-LP-80", diameter: "15mm", grain: "80" },
      { model: "Laminar Premium (Norton)", code: "LX-LP-100", diameter: "15mm", grain: "100" },
      { model: "Laminar Premium (Norton)", code: "LX-LP-120", diameter: "15mm", grain: "120" },
      { model: "Plantar Premium (Norton)", code: "LX-PP-60", diameter: "25mm", grain: "60" },
      { model: "Plantar Premium (Norton)", code: "LX-PP-80", diameter: "25mm", grain: "80" },
      { model: "Boomerang Nails Verde", code: "LX-BNV-150", diameter: "N/A", grain: "150/180" },
      { model: "Boomerang White 2mm", code: "LX-BW-180", diameter: "N/A", grain: "180" },
      { model: "Nails Descartável Branca", code: "LX-NDB-100", diameter: "N/A", grain: "100/180" },
      { model: "Base Inox Boomerang", code: "LX-BIB-01", diameter: "N/A", grain: "N/A" },
    ]
  },
  "lixa-tubular-adesiva": {
    description: {
      pt: "Lixas tubulares e adesivas para aplicações específicas em podologia.",
      en: "Tubular and adhesive files for specific podiatry applications."
    },
    products: [
      { model: "Tubular Send Grossa", code: "LT-TG-60", diameter: "10mm", grain: "60" },
      { model: "Tubular Send Média", code: "LT-TM-80", diameter: "10mm", grain: "80" },
      { model: "Tubular Send Fina", code: "LT-TF-120", diameter: "10mm", grain: "120" },
      { model: "Adesiva Circular", code: "LA-AC-80", diameter: "20mm", grain: "80" },
      { model: "Adesiva Circular", code: "LA-AC-100", diameter: "20mm", grain: "100" },
      { model: "Adesiva Circular", code: "LA-AC-150", diameter: "15mm", grain: "150" },
    ]
  },
  "polidoras": {
    description: {
      pt: "Polidoras de silicone em diversas cores e granulometrias para acabamento perfeito.",
      en: "Silicone polishers in various colors and grits for perfect finishing."
    },
    products: [
      { model: "Torpedo Ogival", code: "PO-TOG-EG", diameter: "8mm", grain: "Extra Grosso", color: "Preto" },
      { model: "Torpedo Ogival", code: "PO-TOG-G", diameter: "8mm", grain: "Grosso", color: "Azul" },
      { model: "Torpedo Ogival", code: "PO-TOG-M", diameter: "8mm", grain: "Médio", color: "Verde" },
      { model: "Torpedo Grande", code: "PO-TG-F", diameter: "10mm", grain: "Fino", color: "Amarelo" },
      { model: "Torpedo Média", code: "PO-TM-EF", diameter: "6mm", grain: "Extra Fino", color: "Rosa" },
      { model: "Cilíndrica", code: "PO-CIL-UF", diameter: "5mm", grain: "Ultra Fino", color: "Branco" },
      { model: "Chama Pequena", code: "PO-CP-M", diameter: "4mm", grain: "Médio", color: "Verde" },
    ]
  },
  "escovas-limpeza": {
    description: {
      pt: "Escovas de limpeza e acessórios para manutenção de brocas e instrumentos.",
      en: "Cleaning brushes and accessories for maintaining burs and instruments."
    },
    products: [
      { model: "Cerdas Poliamida Rosa", code: "EC-CPR-01", diameter: "20mm" },
      { model: "Cerdas Poliamida Lilás", code: "EC-CPL-01", diameter: "20mm" },
      { model: "Escova Limpeza Brocas", code: "EC-ELB-01", diameter: "15mm" },
      { model: "Esponja Polidora", code: "EC-ESP-01", diameter: "25mm" },
      { model: "Feltro Polidor", code: "EC-FP-01", diameter: "20mm" },
    ]
  },
  "fibras-enucleadora-mandril": {
    description: {
      pt: "Fibras moleculares, enucleadoras e mandris de alta qualidade.",
      en: "High-quality molecular fibers, enucleators and mandrels."
    },
    products: [
      { model: "Fibra Molecular P", code: "FE-FMP-01", diameter: "2.0mm" },
      { model: "Fibra Molecular M", code: "FE-FMM-01", diameter: "3.0mm" },
      { model: "Fibra Molecular G", code: "FE-FMG-01", diameter: "4.0mm" },
      { model: "Enucleadora Calos Inox", code: "FE-ECI-01", diameter: "5mm" },
      { model: "Mandril PM Church", code: "FE-MPC-01", diameter: "2.35mm" },
    ]
  },
  "apoio-lixas-afiacao": {
    description: {
      pt: "Apoios para lixas e materiais de afiação profissional.",
      en: "File supports and professional sharpening materials."
    },
    products: [
      { model: "Apoio Rígido Plantar", code: "AL-ARP-01", diameter: "25mm" },
      { model: "Apoio Rígido Laminar", code: "AL-ARL-01", diameter: "15mm" },
      { model: "Apoio Flexível Plantar", code: "AL-AFP-01", diameter: "25mm" },
      { model: "Apoio Flexível Laminar", code: "AL-AFL-01", diameter: "15mm" },
      { model: "Disco Couro Afiação", code: "AL-DCA-01", diameter: "75mm" },
      { model: "Disco Abrasivo", code: "AL-DAB-01", diameter: "75mm" },
      { model: "Pasta Polimento", code: "AL-PP-01", diameter: "N/A" },
      { model: "Mandril Standard", code: "AL-MS-01", diameter: "2.35mm" },
    ]
  },
};

const categoryKeyMap: Record<string, string> = {
  "brocas-diamantadas": "diamondBurs",
  "fresas-tungstenio": "tungstenBurs",
  "fresas-ceramica": "ceramicBurs",
  "lixas": "lixas",
  "lixa-tubular-adesiva": "tubularAdhesive",
  "polidoras": "polishers",
  "escovas-limpeza": "brushes",
  "fibras-enucleadora-mandril": "fiberMandril",
  "apoio-lixas-afiacao": "supportSharpening",
};

// Grain color map with exact hex values
const grainColorMap: Record<string, { bg: string; text: string }> = {
  "Extra Grosso": { bg: "#1a1a1a", text: "#fff" },
  "Grosso": { bg: "#1976D2", text: "#fff" },
  "Médio": { bg: "#B71C1C", text: "#fff" },
  "Fino": { bg: "#4CAF50", text: "#fff" },
  "Extra Fino": { bg: "#FFEB3B", text: "#212121" },
  "Ultra Fino": { bg: "#FFFFFF", text: "#212121" },
};

const ProductCategory = () => {
  const { t, i18n } = useTranslation();
  const { currentLang } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSubtype, setActiveSubtype] = useState<string>("all");
  const [activeGrain, setActiveGrain] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [hoveredShaftPart, setHoveredShaftPart] = useState<string | null>(null);
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null);
  
  const pathParts = window.location.pathname.split("/");
  const category = pathParts[pathParts.length - 1];

  const getLocalizedPath = (path: string) => {
    if (currentLang === "en") return `/en${path}`;
    if (currentLang === "es") return `/es${path}`;
    return path;
  };

  const categoryKey = category ? categoryKeyMap[category] || category : "";
  const data = category ? productData[category] : null;

  if (!data) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Categoria não encontrada</p>
            <Link to={getLocalizedPath("/produtos")} className="text-primary underline">
              Voltar aos Produtos
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Filter and sort products
  let filteredProducts = data.products;
  
  if (activeSubtype !== "all") {
    filteredProducts = filteredProducts.filter(p => p.model.includes(activeSubtype));
  }
  
  if (activeGrain) {
    filteredProducts = filteredProducts.filter(p => p.grain === activeGrain);
  }
  
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter(p => 
      p.model.toLowerCase().includes(query) ||
      p.code.toLowerCase().includes(query) ||
      (p.grain && p.grain.toLowerCase().includes(query))
    );
  }

  if (sortColumn) {
    filteredProducts = [...filteredProducts].sort((a, b) => {
      const aVal = (a as any)[sortColumn] || "";
      const bVal = (b as any)[sortColumn] || "";
      const comparison = aVal.localeCompare(bVal);
      return sortDirection === "asc" ? comparison : -comparison;
    });
  }

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(prev => prev === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const testimonials = [
    { name: "Maria S.", role: "Nail Designer", text: "Perfeito para manicure precisa! Qualidade excepcional." },
    { name: "Dr. Carlos M.", role: "Podólogo", text: "Uso há 5 anos e nunca me decepcionou. Recomendo!" },
    { name: "Ana Paula R.", role: "Manicure", text: "Os melhores produtos do mercado, sem dúvida." },
  ];

  return (
    <Layout>
      {/* Immersive Hero - 600px with video placeholder */}
      <section className="relative min-h-[600px] md:min-h-[500px] bg-gradient-to-br from-primary via-[#9B0000] to-[#720000] overflow-hidden flex items-center">
        <ParticleBackground />
        
        {/* Video/Image placeholder overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Play Button for Video */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-30 hover:opacity-60 transition-opacity cursor-pointer">
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-12 h-12 text-white ml-2" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-16">
          <Link
            to={getLocalizedPath("/produtos")}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            {t("products.backToCategories", "Voltar às Categorias")}
          </Link>

          <div className="max-w-4xl">
            {/* Bilingual Animated Title - 60px with text shadow */}
            <h1 className="text-white font-montserrat font-black text-4xl md:text-5xl lg:text-6xl mb-2 animate-fade-in text-shadow-lg" style={{ fontSize: '60px' }}>
              {t(`products.sections.${categoryKey}`).toUpperCase()}
            </h1>
            <p className="text-white/60 font-inter text-lg md:text-xl mb-6 animate-fade-in stagger-1">
              {currentLang === "en" ? data.description.en : data.description.pt}
            </p>
            
            {/* Description from PDF - 20px, line-height 1.8 */}
            <p className="text-white/90 font-inter text-lg md:text-xl leading-relaxed mb-8 animate-fade-in stagger-2 max-w-3xl" style={{ fontSize: '20px', lineHeight: '1.8', padding: '0 40px 0 0' }}>
              {currentLang === "en" ? data.description.en : data.description.pt}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in stagger-3">
              <a
                href="/catalogo-brilho.pdf"
                target="_blank"
                className="inline-flex items-center gap-3 bg-white text-primary font-montserrat font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-lg"
              >
                <Download size={20} />
                {t("products.downloadCatalog", "Baixar Catálogo")}
              </a>
              <a
                href="https://wa.me/5511940101807"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 text-white font-montserrat font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-lg"
              >
                <MessageCircle size={20} />
                {t("products.requestQuote", "Solicitar Orçamento")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Line Banner - if applicable */}
      {data.hasGoldLine && (
        <section className="gold-section relative overflow-hidden">
          <div className="absolute inset-0 animate-shimmer opacity-30" />
          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Sparkles className="w-12 h-12 text-yellow-900 animate-pulse" />
                <div>
                  <h3 className="text-yellow-900 font-montserrat font-black text-2xl md:text-3xl flex items-center gap-2">
                    <Star className="w-6 h-6 fill-current" />
                    LINHA GOLD
                    <Star className="w-6 h-6 fill-current" />
                  </h3>
                  <p className="text-yellow-900/80 text-lg">
                    Premium para Nail Designers - Qualidade Superior
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-yellow-900/20 px-6 py-3 rounded-xl">
                <Zap className="w-6 h-6 text-yellow-900" />
                <span className="text-yellow-900 font-bold">Acabamento Dourado Exclusivo</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technology Section - SVG Diagram 600px */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-white font-montserrat font-bold text-2xl md:text-3xl mb-8 text-center">
            {t("products.technologyDetails", "Tecnologia em Detalhes")}
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Interactive Shaft Diagram - 600px width */}
            <div className="bg-gray-800/50 rounded-2xl p-8">
              <h3 className="text-white font-montserrat font-bold text-xl mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                {t("products.shaftDiagram", "Diagrama da Haste")}
              </h3>

              <div className="relative flex flex-col items-center">
                {/* SVG with interactive parts - exact measurements */}
                <svg viewBox="0 0 500 150" className="w-full max-w-[600px]">
                  {/* Definitions */}
                  <defs>
                    <linearGradient id="shaftGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                      <stop offset="50%" stopColor="rgba(255,255,255,0)" />
                      <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
                    </linearGradient>
                    <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D32F2F" />
                      <stop offset="50%" stopColor="#9B0000" />
                      <stop offset="100%" stopColor="#720000" />
                    </linearGradient>
                  </defs>

                  {/* Shaft body - interactive */}
                  <g
                    onMouseEnter={() => setHoveredShaftPart("shaft")}
                    onMouseLeave={() => setHoveredShaftPart(null)}
                    className="cursor-pointer transition-all"
                  >
                    <rect
                      x="60"
                      y="55"
                      width="300"
                      height="40"
                      rx="4"
                      fill={hoveredShaftPart === "shaft" ? "#1976D2" : "#6B7280"}
                      className="transition-colors duration-300"
                    />
                    <rect
                      x="60"
                      y="55"
                      width="300"
                      height="40"
                      rx="4"
                      fill="url(#shaftGradient)"
                    />
                  </g>

                  {/* Bur head (diamond tip) - interactive */}
                  <g
                    onMouseEnter={() => setHoveredShaftPart("head")}
                    onMouseLeave={() => setHoveredShaftPart(null)}
                    className="cursor-pointer"
                  >
                    <ellipse
                      cx="400"
                      cy="75"
                      rx="35"
                      ry="30"
                      fill={hoveredShaftPart === "head" ? "#FFD700" : "url(#headGradient)"}
                      className="transition-colors duration-300"
                    />
                    {/* Diamond sparkle effects */}
                    <circle cx="390" cy="65" r="4" fill="rgba(255,255,255,0.8)" />
                    <circle cx="405" cy="75" r="3" fill="rgba(255,255,255,0.6)" />
                    <circle cx="395" cy="85" r="2" fill="rgba(255,255,255,0.4)" />
                  </g>

                  {/* Dimension lines with exact measurements */}
                  {/* Total length - 44.5mm */}
                  <line x1="60" y1="115" x2="435" y2="115" stroke="#9CA3AF" strokeWidth="1.5" />
                  <line x1="60" y1="108" x2="60" y2="122" stroke="#9CA3AF" strokeWidth="1.5" />
                  <line x1="435" y1="108" x2="435" y2="122" stroke="#9CA3AF" strokeWidth="1.5" />
                  <text x="247" y="135" fill="#FFFFFF" textAnchor="middle" fontSize="14" fontFamily="Inter" fontWeight="600">
                    44.5mm (Total)
                  </text>

                  {/* Shaft diameter - 2.34mm */}
                  <line x1="35" y1="55" x2="35" y2="95" stroke="#9CA3AF" strokeWidth="1.5" />
                  <line x1="28" y1="55" x2="42" y2="55" stroke="#9CA3AF" strokeWidth="1.5" />
                  <line x1="28" y1="95" x2="42" y2="95" stroke="#9CA3AF" strokeWidth="1.5" />
                  <text x="15" y="80" fill="#1976D2" textAnchor="middle" fontSize="12" fontFamily="Inter" fontWeight="600" transform="rotate(-90, 15, 80)">
                    Ø 2.34mm
                  </text>

                  {/* Tooltips */}
                  {hoveredShaftPart === "shaft" && (
                    <g>
                      <rect x="150" y="15" width="140" height="30" rx="6" fill="#1976D2" />
                      <text x="220" y="35" fill="#FFFFFF" textAnchor="middle" fontSize="12" fontFamily="Inter">
                        Haste: Ø 2.34mm
                      </text>
                    </g>
                  )}
                  {hoveredShaftPart === "head" && (
                    <g>
                      <rect x="340" y="15" width="120" height="30" rx="6" fill="#D32F2F" />
                      <text x="400" y="35" fill="#FFFFFF" textAnchor="middle" fontSize="12" fontFamily="Inter">
                        Ponta Diamantada
                      </text>
                    </g>
                  )}
                </svg>

                {/* Legend buttons */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <button 
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 ${hoveredShaftPart === "shaft" ? "bg-blue-600 scale-105" : "bg-gray-700"}`}
                    onMouseEnter={() => setHoveredShaftPart("shaft")}
                    onMouseLeave={() => setHoveredShaftPart(null)}
                  >
                    <div className="w-5 h-5 rounded bg-gray-500" />
                    <span className="text-white text-sm font-medium">Haste (Ø 2.34mm)</span>
                  </button>
                  <button 
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 ${hoveredShaftPart === "head" ? "bg-yellow-500 scale-105" : "bg-gray-700"}`}
                    onMouseEnter={() => setHoveredShaftPart("head")}
                    onMouseLeave={() => setHoveredShaftPart(null)}
                  >
                    <div className="w-5 h-5 rounded bg-primary" />
                    <span className="text-white text-sm font-medium">Ponta Ativa</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Grain Legend with clickable filters - exact colors */}
            {data.products.some(p => p.grain) && (
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-montserrat font-bold text-xl text-foreground mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-800 via-red-600 to-yellow-400" />
                  {t("products.grainLegend", "Legenda de Grãos")}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {t("products.clickToFilter", "Clique para filtrar os produtos por granulometria")}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {Object.entries(grainColorMap).map(([grain, colors]) => (
                    <button
                      key={grain}
                      onClick={() => setActiveGrain(activeGrain === grain ? null : grain)}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 border-2
                        ${activeGrain === grain 
                          ? "ring-2 ring-primary ring-offset-2 scale-105 shadow-lg border-primary" 
                          : "border-gray-200 hover:border-gray-300 hover:scale-102"
                        }
                      `}
                    >
                      <div 
                        className="w-6 h-6 rounded-full shadow-sm flex-shrink-0"
                        style={{ 
                          backgroundColor: colors.bg,
                          border: colors.bg === "#FFFFFF" ? "2px solid #DDD" : "none"
                        }} 
                      />
                      <span className="text-sm font-medium text-foreground">
                        {grain}
                      </span>
                    </button>
                  ))}
                </div>

                {activeGrain && (
                  <button
                    onClick={() => setActiveGrain(null)}
                    className="mt-4 text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {t("products.clearFilter", "Limpar filtro")}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid Section - 3 columns, 350x500px cards */}
      <section className="bg-muted/30 section-padding-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
            <h2 className="text-foreground font-montserrat font-bold text-2xl md:text-3xl">
              {t("products.ourProducts", "Nossos Produtos")} 
              <span className="text-muted-foreground text-lg ml-2">
                ({filteredProducts.length} {t("products.items", "itens")})
              </span>
            </h2>
            
            {/* Search Box */}
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={t("products.searchProducts", "Buscar produtos...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </div>
          
          {/* Subtype Tabs - accordion style */}
          {data.subtypes && data.subtypes.length > 0 && (
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveSubtype("all")}
                  className={`filter-chip ${activeSubtype === "all" ? "active" : ""}`}
                >
                  {t("products.all", "Todos")}
                </button>
                {data.subtypes.map(subtype => (
                  <button
                    key={subtype}
                    onClick={() => setActiveSubtype(subtype)}
                    className={`filter-chip ${activeSubtype === subtype ? "active" : ""}`}
                  >
                    {subtype}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 3D Product Cards Grid - 3 columns, 40px gap, 80px padding */}
          <div className="grid-products-3 mb-16">
            {filteredProducts.map((product, idx) => (
              <div
                key={idx}
                className="perspective-1000 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div
                  className={`
                    relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer
                    bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg hover:shadow-2xl hover-lift
                  `}
                  style={{ height: '500px' }}
                  onClick={() => handleViewDetails(product)}
                >
                  {/* Product Visual - 350x250px with hover zoom */}
                  <div className="relative h-[250px] flex items-center justify-center bg-gradient-to-b from-gray-100 to-white overflow-hidden group">
                    {/* 3D Product Representation with spin on hover */}
                    <div className="relative w-28 h-28 rounded-full flex items-center justify-center group-hover:animate-spin-slow transition-all"
                      style={{
                        background: "linear-gradient(135deg, #9B0000, #720000, #9B0000)",
                        boxShadow: "0 0 30px rgba(155, 0, 0, 0.3)",
                      }}
                    >
                      <div className="absolute inset-2 rounded-full bg-white/20 backdrop-blur-sm" />
                      <Sparkles className="w-12 h-12 text-white" />
                    </div>

                    {/* Code Badge */}
                    <span className="absolute top-4 left-4 px-4 py-2 rounded-lg text-sm font-bold bg-primary text-white">
                      {product.code}
                    </span>

                    {/* Grain Color Indicator - 20px diameter */}
                    {product.grain && grainColorMap[product.grain] && (
                      <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
                        <div 
                          className="w-5 h-5 rounded-full shadow-sm"
                          style={{ 
                            backgroundColor: grainColorMap[product.grain].bg,
                            border: grainColorMap[product.grain].bg === "#FFFFFF" ? "2px solid #DDD" : "none"
                          }} 
                        />
                        <span className="text-sm font-medium text-gray-700">{product.grain}</span>
                      </div>
                    )}
                  </div>

                  {/* Product Info - 24px title */}
                  <div className="p-6 bg-white">
                    <h3 className="font-montserrat font-bold text-xl mb-3 text-foreground" style={{ fontSize: '24px', color: '#212121' }}>
                      {product.model}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4" style={{ fontSize: '14px', color: '#757575' }}>
                      {t("products.productDesc", "Para procedimentos de precisão e acabamento profissional.")}
                    </p>
                    
                    {/* Specs Badges - diameter blue #2196F3, ISO green #4CAF50 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.diameter && product.diameter !== "N/A" && (
                        <span className="badge-diameter">Ø {product.diameter}</span>
                      )}
                      {product.iso && (
                        <span className="badge-iso">ISO {product.iso}</span>
                      )}
                      {product.activeLength && (
                        <span className="px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-semibold">
                          Ativo: {product.activeLength}
                        </span>
                      )}
                      {product.cut && (
                        <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-semibold">
                          {product.cut}
                        </span>
                      )}
                    </div>

                    {/* Action Button - 180x45px, hover shadow lift */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewDetails(product);
                      }}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:shadow-button-hover"
                      style={{ height: '45px' }}
                    >
                      <Eye className="w-5 h-5" />
                      {t("products.viewDetails", "Ver Detalhes")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Table with Sorting/Search */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-foreground font-montserrat font-bold text-2xl">
                {t("products.technicalSpecs", "Especificações Técnicas")}
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    {["model", "code", "diameter", "grain", "iso", "activeLength"].map((col) => (
                      <th 
                        key={col}
                        className="px-6 py-4 text-left text-sm font-semibold text-gray-600 cursor-pointer hover:bg-gray-100 transition-colors"
                        onClick={() => handleSort(col)}
                      >
                        <div className="flex items-center gap-2">
                          {t(`products.table.${col}`, col)}
                          {sortColumn === col && (
                            sortDirection === "asc" ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />
                          )}
                        </div>
                      </th>
                    ))}
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                      {t("products.table.actions", "Ações")}
                    </th>
                  </tr>
                </thead>
                <tbody className="table-striped">
                  {filteredProducts.map((product, idx) => (
                    <tr 
                      key={idx} 
                      className="border-b border-gray-100 hover:bg-primary/5 cursor-pointer transition-colors animate-slide-in-right"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                      onClick={() => handleViewDetails(product)}
                    >
                      <td className="px-6 py-4 font-medium text-foreground">{product.model}</td>
                      <td className="px-6 py-4 text-primary font-semibold">{product.code}</td>
                      <td className="px-6 py-4 text-muted-foreground">{product.diameter || "-"}</td>
                      <td className="px-6 py-4">
                        {product.grain && grainColorMap[product.grain] ? (
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-4 h-4 rounded-full"
                              style={{ 
                                backgroundColor: grainColorMap[product.grain].bg,
                                border: grainColorMap[product.grain].bg === "#FFFFFF" ? "2px solid #DDD" : "none"
                              }} 
                            />
                            <span>{product.grain}</span>
                          </div>
                        ) : (
                          product.grain || product.cut || "-"
                        )}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{product.iso || "-"}</td>
                      <td className="px-6 py-4 text-muted-foreground">{product.activeLength || "-"}</td>
                      <td className="px-6 py-4">
                        <button 
                          className="text-primary hover:underline font-semibold text-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewDetails(product);
                          }}
                        >
                          {t("products.viewDetails", "Ver Detalhes")}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Testimonials Carousel - 3 slides fade */}
          <div className="mb-16">
            <h2 className="text-foreground font-montserrat font-bold text-2xl md:text-3xl mb-8 text-center">
              {t("products.testimonials", "O que dizem nossos clientes")}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-lg hover-lift transition-all animate-fade-in"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section - 560x315px placeholder */}
          <div className="mb-16">
            <h2 className="text-foreground font-montserrat font-bold text-2xl md:text-3xl mb-8 text-center">
              {t("products.inAction", "Em Ação")}
            </h2>
            
            <div className="flex justify-center">
              <div className="video-container relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                <p className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm">
                  {t("products.watchDemo", "Assista à demonstração")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 section-padding-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white font-montserrat font-bold text-2xl md:text-3xl mb-4">
            {t("products.requestQuoteTitle", "Solicite seu Orçamento")}
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            {t("products.ctaCategoryDesc", "Entre em contato para preços especiais e condições exclusivas para esta linha.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511940101807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-green-700 transition-all hover:scale-105"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a
              href="/catalogo-brilho.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-10 py-4 rounded-xl hover:bg-gray-100 transition-all hover:scale-105"
            >
              <Download size={20} />
              {t("products.downloadThisLine", "Baixar Esta Linha em PDF")}
            </a>
          </div>
        </div>
      </section>

      {/* Product Detail Modal - Fullscreen overlay fade 0.5s */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-montserrat text-2xl">
              {selectedProduct?.model} - {selectedProduct?.code}
            </DialogTitle>
          </DialogHeader>
          
          {selectedProduct && (
            <div className="grid md:grid-cols-2 gap-8 py-4">
              {/* Product Image */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 flex items-center justify-center">
                <div 
                  className="w-40 h-40 rounded-full flex items-center justify-center animate-spin-slow"
                  style={{
                    background: "linear-gradient(135deg, #9B0000, #720000, #9B0000)",
                    boxShadow: "0 0 40px rgba(155, 0, 0, 0.4)",
                  }}
                >
                  <Sparkles className="w-20 h-20 text-white" />
                </div>
              </div>
              
              {/* Product Details */}
              <div>
                <h3 className="font-montserrat font-bold text-xl mb-4 text-foreground">
                  {t("products.specifications", "Especificações")}
                </h3>
                
                <div className="space-y-3">
                  {selectedProduct.model && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-muted-foreground">{t("products.table.model", "Modelo")}</span>
                      <span className="font-semibold">{selectedProduct.model}</span>
                    </div>
                  )}
                  {selectedProduct.code && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-muted-foreground">{t("products.table.code", "Código")}</span>
                      <span className="font-semibold text-primary">{selectedProduct.code}</span>
                    </div>
                  )}
                  {selectedProduct.diameter && selectedProduct.diameter !== "N/A" && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-muted-foreground">{t("products.table.diameter", "Diâmetro")}</span>
                      <span className="badge-diameter">{selectedProduct.diameter}</span>
                    </div>
                  )}
                  {selectedProduct.grain && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-muted-foreground">{t("products.table.grain", "Grão")}</span>
                      <div className="flex items-center gap-2">
                        {grainColorMap[selectedProduct.grain] && (
                          <div 
                            className="w-5 h-5 rounded-full"
                            style={{ 
                              backgroundColor: grainColorMap[selectedProduct.grain].bg,
                              border: grainColorMap[selectedProduct.grain].bg === "#FFFFFF" ? "2px solid #DDD" : "none"
                            }} 
                          />
                        )}
                        <span className="font-semibold">{selectedProduct.grain}</span>
                      </div>
                    </div>
                  )}
                  {selectedProduct.iso && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-muted-foreground">ISO</span>
                      <span className="badge-iso">ISO {selectedProduct.iso}</span>
                    </div>
                  )}
                  {selectedProduct.activeLength && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-muted-foreground">{t("products.table.activeLength", "Área Ativa")}</span>
                      <span className="font-semibold">{selectedProduct.activeLength}</span>
                    </div>
                  )}
                  {selectedProduct.cut && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-muted-foreground">{t("products.table.cut", "Corte")}</span>
                      <span className="font-semibold">{selectedProduct.cut}</span>
                    </div>
                  )}
                  {selectedProduct.color && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-muted-foreground">{t("products.table.color", "Cor")}</span>
                      <span className="font-semibold">{selectedProduct.color}</span>
                    </div>
                  )}
                </div>
                
                {/* CTA Buttons */}
                <div className="flex gap-4 mt-8">
                  <a
                    href={`https://wa.me/5511940101807?text=Olá! Gostaria de um orçamento para o produto ${selectedProduct.code} - ${selectedProduct.model}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 transition-all"
                  >
                    <MessageCircle size={18} />
                    {t("products.requestQuote", "Orçamento")}
                  </a>
                  <a
                    href="/catalogo-brilho.pdf"
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 transition-all"
                  >
                    <Download size={18} />
                    {t("products.downloadPDF", "PDF")}
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default ProductCategory;
