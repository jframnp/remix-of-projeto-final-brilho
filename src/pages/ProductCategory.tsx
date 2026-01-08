import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { Download, ArrowLeft, MessageCircle, Play, Sparkles } from "lucide-react";
import ProductCard3D from "@/components/products/ProductCard3D";
import ProductTable from "@/components/products/ProductTable";
import ProductModal from "@/components/products/ProductModal";
import ShaftDiagram from "@/components/products/ShaftDiagram";
import GrainLegend from "@/components/products/GrainLegend";
import TestimonialSlider from "@/components/products/TestimonialSlider";
import ParticleBackground from "@/components/products/ParticleBackground";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Product data based on PDF catalog
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
  }>;
  features?: string[];
  hasGoldLine?: boolean;
  subtypes?: string[];
}> = {
  "brocas-diamantadas": {
    hasGoldLine: true,
    subtypes: ["Esférica", "Roda", "Cônica", "Chama", "Cilíndrica", "Torpedo"],
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
      { model: "Roda", code: "BD-ROD-01", iso: "010", diameter: "3.0mm", grain: "Grosso", activeLength: "1.5mm" },
      { model: "Roda", code: "BD-ROD-02", iso: "010", diameter: "4.0mm", grain: "Médio", activeLength: "2.0mm" },
      { model: "Cônica", code: "BD-CON-01", iso: "012", diameter: "2.5mm", grain: "Fino", activeLength: "6.0mm" },
      { model: "Cônica", code: "BD-CON-02", iso: "012", diameter: "3.5mm", grain: "Extra Fino", activeLength: "8.0mm" },
      { model: "Chama", code: "BD-CHA-01", iso: "014", diameter: "2.0mm", grain: "Médio", activeLength: "5.0mm" },
      { model: "Cilíndrica", code: "BD-CIL-01", iso: "016", diameter: "3.0mm", grain: "Grosso", activeLength: "7.0mm" },
      { model: "Torpedo", code: "BD-TOR-01", iso: "018", diameter: "4.0mm", grain: "Médio", activeLength: "10.0mm" },
    ]
  },
  "fresas-tungstenio": {
    subtypes: ["Maxi Cut", "Mini Cut"],
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
    products: [
      { model: "Cerdas Poliamida Rosa", code: "EC-CPR-01", diameter: "20mm" },
      { model: "Cerdas Poliamida Lilás", code: "EC-CPL-01", diameter: "20mm" },
      { model: "Escova Limpeza Brocas", code: "EC-ELB-01", diameter: "15mm" },
      { model: "Esponja Polidora", code: "EC-ESP-01", diameter: "25mm" },
      { model: "Feltro Polidor", code: "EC-FP-01", diameter: "20mm" },
    ]
  },
  "fibras-enucleadora-mandril": {
    products: [
      { model: "Fibra Molecular P", code: "FE-FMP-01", diameter: "2.0mm" },
      { model: "Fibra Molecular M", code: "FE-FMM-01", diameter: "3.0mm" },
      { model: "Fibra Molecular G", code: "FE-FMG-01", diameter: "4.0mm" },
      { model: "Enucleadora Calos Inox", code: "FE-ECI-01", diameter: "5mm" },
      { model: "Mandril PM Church", code: "FE-MPC-01", diameter: "2.35mm" },
    ]
  },
  "apoio-lixas-afiacao": {
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

const ProductCategory = () => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<typeof productData["brocas-diamantadas"]["products"][0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSubtype, setActiveSubtype] = useState<string>("all");
  
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

  const filteredProducts = activeSubtype === "all" 
    ? data.products 
    : data.products.filter(p => p.model.includes(activeSubtype));

  const handleViewDetails = (product: typeof data.products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      {/* Immersive Hero Section */}
      <section className="relative min-h-[50vh] bg-gradient-to-br from-primary via-[#720000] to-[#5a0a0a] overflow-hidden flex items-center">
        <ParticleBackground />
        
        {/* Video placeholder overlay */}
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="container mx-auto px-4 relative z-10 py-16">
          <Link
            to={getLocalizedPath("/produtos")}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            {t("products.backToCategories", "Voltar às Categorias")}
          </Link>

          <div className="max-w-3xl">
            {/* Bilingual Animated Title */}
            <h1 className="text-white font-montserrat font-black text-4xl md:text-5xl lg:text-6xl mb-2 animate-fade-in">
              {t(`products.${categoryKey}.title`, t(`products.sections.${categoryKey}`))}
            </h1>
            <p className="text-white/60 font-inter text-lg mb-4 animate-fade-in stagger-1">
              {t(`products.${categoryKey}.titleEn`, "")}
            </p>
            
            {/* Animated Benefits */}
            <p className="text-white/90 font-inter text-lg md:text-xl leading-relaxed mb-8 animate-fade-in stagger-2">
              {t(`products.${categoryKey}.description`, "")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in stagger-3">
              <a
                href="/catalogo-brilho.pdf"
                target="_blank"
                className="inline-flex items-center gap-3 bg-white text-primary font-montserrat font-bold px-6 py-3 rounded-xl hover:scale-105 transition-all shadow-lg"
              >
                <Download size={20} />
                {t("products.downloadCatalog")}
              </a>
              <a
                href="https://wa.me/5511940101807"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 text-white font-montserrat font-bold px-6 py-3 rounded-xl hover:scale-105 transition-all shadow-lg"
              >
                <MessageCircle size={20} />
                {t("products.requestQuote", "Orçamento")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Line Section */}
      {data.hasGoldLine && (
        <section className="bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 py-6 relative overflow-hidden">
          <div className="absolute inset-0 animate-shimmer opacity-30" />
          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-yellow-900 animate-pulse" />
                <div>
                  <h3 className="text-yellow-900 font-montserrat font-black text-xl md:text-2xl">
                    ★ {t("products.diamondBurs.goldLineTitle", "LINHA GOLD")}
                  </h3>
                  <p className="text-yellow-900/70 text-sm">
                    {t("products.diamondBurs.goldLineDesc", "Premium para nail designers")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technology Section */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <ShaftDiagram />
            {data.products.some(p => p.grain) && (
              <GrainLegend />
            )}
          </div>
        </div>
      </section>

      {/* Products Grid with Subtypes */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
            <h2 className="text-foreground font-montserrat font-bold text-2xl md:text-3xl">
              {t("products.ourProducts", "Nossos Produtos")}
            </h2>
            
            {/* Subtype Tabs */}
            {data.subtypes && data.subtypes.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveSubtype("all")}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    activeSubtype === "all" ? "bg-primary text-white" : "bg-white text-foreground hover:bg-gray-100"
                  }`}
                >
                  {t("products.all", "Todos")}
                </button>
                {data.subtypes.map(subtype => (
                  <button
                    key={subtype}
                    onClick={() => setActiveSubtype(subtype)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                      activeSubtype === subtype ? "bg-primary text-white" : "bg-white text-foreground hover:bg-gray-100"
                    }`}
                  >
                    {subtype}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 3D Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredProducts.map((product, idx) => (
              <ProductCard3D
                key={idx}
                product={product}
                onViewDetails={() => handleViewDetails(product)}
                isGold={data.hasGoldLine && product.model.toLowerCase().includes("gold")}
              />
            ))}
          </div>

          {/* Technical Table */}
          <div className="mb-16">
            <h2 className="text-foreground font-montserrat font-bold text-2xl md:text-3xl mb-8 text-center">
              {t("products.technicalSpecs", "Especificações Técnicas")}
            </h2>
            <ProductTable 
              products={filteredProducts} 
              onRowClick={handleViewDetails}
            />
          </div>

          {/* Testimonials */}
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white font-montserrat font-bold text-2xl md:text-3xl mb-4">
            {t("products.ctaTitle", "Solicite seu Orçamento")}
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            {t("products.ctaCategoryDesc", "Entre em contato para preços especiais e condições exclusivas.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511940101807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-700 transition-all"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a
              href="/catalogo-brilho.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all"
            >
              <Download size={20} />
              {t("products.downloadThisLine", "Baixar Linha em PDF")}
            </a>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
        categoryName={t(`products.sections.${categoryKey}`)}
        isGold={data.hasGoldLine}
      />
    </Layout>
  );
};

export default ProductCategory;
