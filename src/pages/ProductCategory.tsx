import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Download, 
  ArrowLeft, 
  MessageCircle, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Search,
  SortAsc,
  SortDesc,
  Star,
  Zap
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ParticleBackground from "@/components/products/ParticleBackground";

// Import product images
import PM07 from "@/assets/products/PM07_AZUL.webp";
import PM42 from "@/assets/products/PM42_AZUL.jpg";
import PM57 from "@/assets/products/PM57_AZUL.webp";
import PM718 from "@/assets/products/PM718_AZUL.webp";
import PM720 from "@/assets/products/PM720_AZUL.webp";
import PM720L from "@/assets/products/PM720L_AZUL.webp";
import PM744 from "@/assets/products/PM744_AZUL.webp";
import PM829 from "@/assets/products/PM829_AZUL.webp";
import PM838 from "@/assets/products/PM838_AZUL.webp";
import PM859 from "@/assets/products/PM859_AZUL.webp";

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
    hasGoldLine: false, // Gold Line moved to separate page /produtos/linha-gold
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
      { model: "Esférica", code: "PM-07", iso: "001", diameter: "1.0mm", grain: "Médio", activeLength: "1.0mm", image: PM07 },
      { model: "Roda Invertida", code: "PM-42", iso: "010", diameter: "3.0mm", grain: "Médio", activeLength: "1.5mm", image: PM42 },
      { model: "Cilíndrica", code: "PM-57", iso: "016", diameter: "2.0mm", grain: "Médio", activeLength: "4.0mm", image: PM57 },
      { model: "Cônica", code: "PM-718", iso: "012", diameter: "1.4mm", grain: "Médio", activeLength: "8.0mm", image: PM718 },
      { model: "Cônica", code: "PM-720", iso: "012", diameter: "2.5mm", grain: "Médio", activeLength: "6.0mm", image: PM720 },
      { model: "Cônica Longa", code: "PM-720L", iso: "012", diameter: "2.5mm", grain: "Médio", activeLength: "10.0mm", image: PM720L },
      { model: "Chama", code: "PM-744", iso: "014", diameter: "2.0mm", grain: "Médio", activeLength: "5.0mm", image: PM744 },
      { model: "Ogiva", code: "PM-829", iso: "018", diameter: "1.8mm", grain: "Médio", activeLength: "3.0mm", image: PM829 },
      { model: "Chama", code: "PM-838", iso: "014", diameter: "2.5mm", grain: "Médio", activeLength: "6.0mm", image: PM838 },
      { model: "Agulha", code: "PM-859", iso: "019", diameter: "1.6mm", grain: "Médio", activeLength: "8.0mm", image: PM859 },
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
  "linha-gold": {
    hasGoldLine: true,
    subtypes: ["Esférica Gold", "Cônica Gold", "Chama Gold", "Cilíndrica Gold"],
    description: {
      pt: "Linha Gold Premium - Acabamento dourado exclusivo para Nail Designers. Qualidade superior com diamantes industriais de primeira linha.",
      en: "Gold Line Premium - Exclusive golden finish for Nail Designers. Superior quality with first-class industrial diamonds."
    },
    features: [
      "Acabamento dourado exclusivo",
      "Especial para Nail Designers",
      "Diamantes industriais premium",
      "Alta durabilidade",
      "Qualidade superior"
    ],
    products: [
      { model: "Esférica Gold", code: "BD-GOLD-ESF-01", iso: "001", diameter: "1.5mm", grain: "Médio", activeLength: "1.5mm" },
      { model: "Esférica Gold", code: "BD-GOLD-ESF-02", iso: "001", diameter: "2.0mm", grain: "Fino", activeLength: "2.0mm" },
      { model: "Cônica Gold", code: "BD-GOLD-CON-01", iso: "012", diameter: "2.5mm", grain: "Médio", activeLength: "6.0mm" },
      { model: "Cônica Gold", code: "BD-GOLD-CON-02", iso: "012", diameter: "3.0mm", grain: "Extra Fino", activeLength: "7.0mm" },
      { model: "Chama Gold", code: "BD-GOLD-CHA-01", iso: "014", diameter: "2.0mm", grain: "Fino", activeLength: "5.0mm" },
      { model: "Chama Gold", code: "BD-GOLD-CHA-02", iso: "014", diameter: "2.5mm", grain: "Médio", activeLength: "6.0mm" },
      { model: "Cilíndrica Gold", code: "BD-GOLD-CIL-01", iso: "016", diameter: "2.5mm", grain: "Grosso", activeLength: "6.0mm" },
      { model: "Cilíndrica Gold", code: "BD-GOLD-CIL-02", iso: "016", diameter: "3.0mm", grain: "Médio", activeLength: "7.0mm" },
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
  "linha-gold": "goldLine",
};

// Grain color map with correct colors from catalog
const grainColorMap: Record<string, { bg: string; text: string }> = {
  "Extra Grosso": { bg: "#000000", text: "#FFFFFF" },
  "Grosso": { bg: "#4CAF50", text: "#FFFFFF" },  // Verde
  "Médio": { bg: "#2196F3", text: "#FFFFFF" },   // Azul
  "Fino": { bg: "#F44336", text: "#FFFFFF" },    // Vermelho
  "Extra Fino": { bg: "#FFEB3B", text: "#212121" },
  "Ultra Fino": { bg: "#FFFFFF", text: "#212121" },
};

const ProductCategory = () => {
  const { t, i18n } = useTranslation();
  const { currentLang } = useLanguage();
  const [activeSubtype, setActiveSubtype] = useState<string>("all");
  const [activeGrain, setActiveGrain] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
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


  // Get translated grain label
  const getGrainLabel = (grain: string): string => {
    const grainKey = grain.toLowerCase().replace(' ', '');
    const grainMap: Record<string, string> = {
      'extragrosso': 'extraCoarse',
      'grosso': 'coarse',
      'médio': 'medium',
      'medio': 'medium',
      'fino': 'fine',
      'extrafino': 'extraFine',
      'ultrafino': 'ultraFine',
    };
    const key = grainMap[grainKey] || grainKey;
    return t(`products.grains.${key}`, grain);
  };

  const testimonials = [
    { 
      name: "Maria S.", 
      role: t("products.testimonials.roles.nailDesigner", "Nail Designer"), 
      text: t("products.testimonials.quotes.1", "Perfeito para manicure precisa! Qualidade excepcional.") 
    },
    { 
      name: "Dr. Carlos M.", 
      role: t("products.testimonials.roles.podiatrist", "Podólogo"), 
      text: t("products.testimonials.quotes.2", "Uso há 5 anos e nunca me decepcionou. Recomendo!") 
    },
    { 
      name: "Ana Paula R.", 
      role: t("products.testimonials.roles.manicurist", "Manicure"), 
      text: t("products.testimonials.quotes.3", "Os melhores produtos do mercado, sem dúvida.") 
    },
  ];

  return (
    <Layout>
      {/* Immersive Hero - 600px with clean static background */}
      <section
        className={`relative min-h-[600px] md:min-h-[500px] overflow-hidden flex items-center ${
          category === "linha-gold" 
            ? "bg-gradient-to-br from-[#FFD54F] via-[#FFC107] to-[#FFA000]" 
            : "bg-gradient-to-br from-primary via-[#9B0000] to-[#720000]"
        }`}
        style={category === "linha-gold" ? {
          background: 'linear-gradient(135deg, #FFD54F 0%, #FFC107 50%, #FFA000 100%)',
          padding: '60px 0'
        } : {}}
      >
        {category !== "linha-gold" && <ParticleBackground />}
        
        {/* Gold Line glow effect */}
        {category === "linha-gold" && (
          <div className="absolute inset-0 animate-shimmer opacity-40" style={{
            background: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.5) 50%, transparent 75%)',
            backgroundSize: '400% 100%',
            animation: 'shimmer 3s ease-in-out infinite'
          }} />
        )}
        
        {/* Overlay for non-Gold Line pages */}
        {category !== "linha-gold" && <div className="absolute inset-0 bg-black/40" />}
        
        {/* No play button - clean hero layout */}
        
        <div className="container mx-auto px-4 relative z-10 py-16">
          <Link
            to={getLocalizedPath("/produtos")}
            className={`inline-flex items-center gap-2 mb-6 transition-colors group ${
              category === "linha-gold" 
                ? "text-yellow-900/80 hover:text-yellow-900" 
                : "text-white/80 hover:text-white"
            }`}
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            {t("products.backToCategories", "Voltar às Categorias")}
          </Link>

          <div className="max-w-4xl">
            {/* Bilingual Animated Title - 60px with text shadow */}
            <h1 
              className={`font-montserrat font-black text-4xl md:text-5xl lg:text-6xl mb-2 animate-fade-in ${
                category === "linha-gold" 
                  ? "text-yellow-900 flex items-center gap-4" 
                  : "text-white text-shadow-lg"
              }`} 
              style={{ fontSize: '60px' }}
            >
              {category === "linha-gold" && <Sparkles className="w-14 h-14 animate-pulse" />}
              {t(`products.sections.${categoryKey}`).toUpperCase()}
              {category === "linha-gold" && <Sparkles className="w-14 h-14 animate-pulse" />}
            </h1>
            
            {/* Description from PDF - 20px, line-height 1.8 */}
            <p 
              className={`font-inter text-lg md:text-xl leading-relaxed mb-8 animate-fade-in stagger-1 max-w-3xl ${
                category === "linha-gold" ? "text-yellow-900" : "text-white/90"
              }`} 
              style={{ fontSize: '20px', lineHeight: '1.8', padding: '0 40px 0 0' }}
            >
              {currentLang === "en" ? data.description.en : data.description.pt}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in stagger-3">
              <a
                href="/catalogo-brilho.pdf"
                target="_blank"
                className={`inline-flex items-center gap-3 font-montserrat font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-lg ${
                  category === "linha-gold" 
                    ? "bg-yellow-900 text-yellow-100" 
                    : "bg-white text-primary"
                }`}
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

      {/* Removed Gold Line Banner - Gold Line has its own dedicated page /produtos/linha-gold */}

      {/* Grain Legend Section - Always visible for all product categories */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              {/* Floating Grain Legend Card - width 300px, right aligned on desktop */}
              <div 
                className="bg-white rounded-lg p-5 shadow-lg w-full max-w-[600px] lg:max-w-[800px]"
                style={{ 
                  borderRadius: '8px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  padding: '20px'
                }}
              >
                <h3 className="font-montserrat font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-800 via-red-600 to-yellow-400" />
                  {t("products.grainLegend", "Legenda de Grãos")}
                </h3>
                
                <p className="text-muted-foreground text-base mb-5" style={{ fontSize: '16px', color: '#424242' }}>
                  {t("products.clickToFilter", "Clique para filtrar os produtos por granulometria")}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {Object.entries(grainColorMap).map(([grain, colors]) => (
                    <button
                      key={grain}
                      onClick={() => setActiveGrain(activeGrain === grain ? null : grain)}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 border
                        ${activeGrain === grain 
                          ? "ring-2 ring-primary ring-offset-2 scale-105 shadow-lg border-primary bg-primary/5" 
                          : "border-gray-200 hover:border-gray-300 hover:scale-102 bg-white"
                        }
                      `}
                      style={{ margin: '10px 0' }}
                    >
                      <div 
                        className="w-5 h-5 rounded-full shadow-sm flex-shrink-0"
                        style={{ 
                          width: '20px',
                          height: '20px',
                          backgroundColor: colors.bg,
                          border: colors.bg === "#FFFFFF" ? "2px solid #DDD" : "none"
                        }} 
                      />
                      <span className="text-sm font-medium text-foreground" style={{ fontSize: '16px', color: '#424242' }}>
                        {getGrainLabel(grain)}
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
            </div>
          </div>
        </section>
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
                    relative rounded-2xl overflow-hidden transition-all duration-500
                    bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg hover:shadow-2xl hover-lift
                  `}
                  style={{ height: '500px' }}
                >
                  {/* Product Visual - 350x250px with hover zoom */}
                  <div className="relative h-[250px] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden group">
                    {/* Product Image or Placeholder */}
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={`${product.model} - ${product.code}`}
                        className="h-full w-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="relative w-28 h-28 rounded-full flex items-center justify-center group-hover:animate-spin-slow transition-all"
                        style={{
                          background: "linear-gradient(135deg, #9B0000, #720000, #9B0000)",
                          boxShadow: "0 0 30px rgba(155, 0, 0, 0.3)",
                        }}
                      >
                        <div className="absolute inset-2 rounded-full bg-white/20 backdrop-blur-sm" />
                        <Sparkles className="w-12 h-12 text-white" />
                      </div>
                    )}

                    {/* Model Badge (Esférica, Cônica, etc.) */}
                    <span className="absolute top-4 left-4 px-4 py-2 rounded-lg text-sm font-bold bg-primary text-white shadow-lg">
                      {product.model}
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
                        <span className="text-sm font-medium text-gray-700">{getGrainLabel(product.grain)}</span>
                      </div>
                    )}
                  </div>

                  {/* Product Info - Code as title */}
                  <div className="p-6 bg-white">
                    <h3 className="font-montserrat font-bold text-xl mb-3 text-foreground" style={{ fontSize: '24px', color: '#212121' }}>
                      {product.code}
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
                  </tr>
                </thead>
                <tbody className="table-striped">
                  {filteredProducts.map((product, idx) => (
                    <tr 
                      key={idx} 
                      className="border-b border-gray-100 hover:bg-primary/5 transition-colors animate-slide-in-right"
                      style={{ animationDelay: `${idx * 0.05}s` }}
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
                            <span>{getGrainLabel(product.grain)}</span>
                          </div>
                        ) : (
                          product.grain ? getGrainLabel(product.grain) : (product.cut || "-")
                        )}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{product.iso || "-"}</td>
                      <td className="px-6 py-4 text-muted-foreground">{product.activeLength || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Testimonials Carousel - 3 slides fade */}
          <div className="mt-16">
            <h2 className="text-foreground font-montserrat font-bold text-2xl md:text-3xl mb-8 text-center">
              {t("products.testimonials.title", "O que dizem nossos clientes")}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-lg hover-lift transition-all animate-fade-in"
                  style={{ 
                    animationDelay: `${idx * 0.2}s`,
                    borderRadius: '12px'
                  }}
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

    </Layout>
  );
};

export default ProductCategory;
