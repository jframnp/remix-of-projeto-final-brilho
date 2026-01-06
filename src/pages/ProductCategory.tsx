import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { Download, ChevronRight, Star, Shield, Check, ArrowLeft } from "lucide-react";

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
  }>;
  features?: string[];
  hasGoldLine?: boolean;
}> = {
  "brocas-diamantadas": {
    hasGoldLine: true,
    features: [
      "Diamantes industriais de primeira linha",
      "Alta durabilidade e resistência",
      "Diversas granulometrias disponíveis",
      "Formatos específicos para cada procedimento",
      "Registro ANVISA",
      "Fabricação 100% nacional"
    ],
    products: [
      { model: "Esférica", code: "BD-ESF-01", iso: "001", diameter: "1.0mm", grain: "Médio" },
      { model: "Esférica", code: "BD-ESF-02", iso: "001", diameter: "1.5mm", grain: "Médio" },
      { model: "Esférica", code: "BD-ESF-03", iso: "001", diameter: "2.0mm", grain: "Fino" },
      { model: "Roda", code: "BD-ROD-01", iso: "010", diameter: "3.0mm", grain: "Grosso" },
      { model: "Roda", code: "BD-ROD-02", iso: "010", diameter: "4.0mm", grain: "Médio" },
      { model: "Cônica", code: "BD-CON-01", iso: "012", diameter: "2.5mm", grain: "Fino" },
      { model: "Cônica", code: "BD-CON-02", iso: "012", diameter: "3.5mm", grain: "Extra Fino" },
      { model: "Chama", code: "BD-CHA-01", iso: "014", diameter: "2.0mm", grain: "Médio" },
      { model: "Cilíndrica", code: "BD-CIL-01", iso: "016", diameter: "3.0mm", grain: "Grosso" },
      { model: "Torpedo", code: "BD-TOR-01", iso: "018", diameter: "4.0mm", grain: "Médio" },
    ]
  },
  "fresas-tungstenio": {
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

// Category key mapping
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
  
  // Get category from URL
  const pathParts = window.location.pathname.split("/");
  const categorySlug = pathParts[pathParts.length - 1];
  const category = categorySlug;

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
            <p className="text-gray-500 mb-4">Categoria não encontrada</p>
            <Link to={getLocalizedPath("/produtos")} className="text-[#9B0000] underline">
              Voltar aos Produtos
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#9B0000] via-[#720000] to-[#5a0a0a] py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          {/* Back Link */}
          <Link
            to={getLocalizedPath("/produtos")}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            {t("products.backToCategories", "Voltar às Categorias")}
          </Link>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="lg:max-w-2xl">
              <h1 className="text-white font-montserrat font-black text-3xl md:text-5xl mb-4">
                {t(`products.${categoryKey}.title`, t(`products.sections.${categoryKey}`))}
              </h1>
              <p className="text-white/60 font-inter text-lg mb-2">
                {t(`products.${categoryKey}.subtitle`, "")}
              </p>
              <p className="text-white/90 font-inter text-base md:text-lg leading-relaxed mb-6">
                {t(`products.${categoryKey}.description`, "")}
              </p>
              
              {/* Features list if available */}
              {data.features && (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {data.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              <a
                href="/catalogo-brilho.pdf"
                target="_blank"
                className="inline-flex items-center gap-3 bg-white text-[#9B0000] font-montserrat font-bold px-6 py-3 rounded-xl hover:scale-105 transition-all"
              >
                <Download size={20} />
                {t("products.downloadCatalog")}
              </a>
            </div>

            {/* Promo badges */}
            <div className="flex flex-col gap-3">
              <div className="bg-green-500 text-white px-6 py-3 rounded-lg font-montserrat font-bold text-center">
                <Shield className="w-5 h-5 inline mr-2" />
                {t("products.badge.anvisa", "Certificado ANVISA")}
              </div>
              <div className="bg-yellow-500 text-yellow-900 px-6 py-3 rounded-lg font-montserrat font-bold text-center">
                <Star className="w-5 h-5 inline mr-2" />
                {t("products.badge.quality", "Qualidade Premium")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Line Section (only for Brocas Diamantadas) */}
      {data.hasGoldLine && (
        <section className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-yellow-900 font-montserrat font-black text-2xl md:text-3xl mb-2">
                  ★ {t("products.diamondBurs.goldLineTitle", "LINHA GOLD")}
                </h3>
                <p className="text-yellow-900/80 font-inter text-sm md:text-base max-w-xl">
                  {t("products.diamondBurs.goldLineDesc", "Linha premium diamantada otimizada para manicure e nail design, com tecnologia avançada para precisão em cutículas e unhas.")}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="bg-[#FAFAFA] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-[#212121] font-montserrat font-bold text-2xl md:text-3xl mb-8 text-center">
            {t("products.ourProducts", "Nossos Produtos")}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#9B0000]/10 transition-all duration-300 group"
              >
                {/* Product Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#9B0000]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-12 h-12 text-[#9B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <span className="absolute top-3 left-3 bg-[#9B0000] text-white text-xs font-bold px-2 py-1 rounded">
                    {product.code}
                  </span>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="font-montserrat font-bold text-lg text-[#212121] mb-2 group-hover:text-[#9B0000] transition-colors">
                    {product.model}
                  </h3>
                  
                  <div className="space-y-1 text-sm text-gray-600 mb-4">
                    {product.iso && (
                      <p><span className="font-semibold">ISO:</span> {product.iso}</p>
                    )}
                    {product.diameter && product.diameter !== "N/A" && (
                      <p><span className="font-semibold">Diâmetro:</span> {product.diameter}</p>
                    )}
                    {product.grain && product.grain !== "N/A" && (
                      <p><span className="font-semibold">Grão:</span> {product.grain}</p>
                    )}
                    {product.cut && (
                      <p><span className="font-semibold">Corte:</span> {product.cut}</p>
                    )}
                    {product.color && (
                      <p><span className="font-semibold">Cor:</span> {product.color}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#9B0000] font-montserrat font-bold">
                      {t("products.priceConsult", "Consulte")}
                    </span>
                    <button className="bg-[#9B0000] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#720000] transition-colors">
                      {t("products.moreDetails", "Detalhes")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Table */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-[#212121] font-montserrat font-bold text-2xl md:text-3xl mb-8 text-center">
            {t("products.technicalSpecs", "Especificações Técnicas")}
          </h2>
          
          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="w-full bg-white">
              <thead className="bg-[#9B0000] text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-montserrat font-bold">Modelo</th>
                  <th className="px-4 py-4 text-left font-montserrat font-bold">Código</th>
                  {data.products[0]?.iso && (
                    <th className="px-4 py-4 text-left font-montserrat font-bold">ISO</th>
                  )}
                  {data.products[0]?.diameter && (
                    <th className="px-4 py-4 text-left font-montserrat font-bold">Diâmetro</th>
                  )}
                  {data.products[0]?.grain && (
                    <th className="px-4 py-4 text-left font-montserrat font-bold">Grão</th>
                  )}
                  {data.products[0]?.cut && (
                    <th className="px-4 py-4 text-left font-montserrat font-bold">Corte</th>
                  )}
                  {data.products[0]?.color && (
                    <th className="px-4 py-4 text-left font-montserrat font-bold">Cor</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {data.products.map((product, idx) => (
                  <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="px-4 py-3 font-inter">{product.model}</td>
                    <td className="px-4 py-3 font-inter font-semibold text-[#9B0000]">{product.code}</td>
                    {product.iso !== undefined && (
                      <td className="px-4 py-3 font-inter">{product.iso}</td>
                    )}
                    {product.diameter !== undefined && (
                      <td className="px-4 py-3 font-inter">{product.diameter}</td>
                    )}
                    {product.grain !== undefined && (
                      <td className="px-4 py-3 font-inter">{product.grain}</td>
                    )}
                    {product.cut !== undefined && (
                      <td className="px-4 py-3 font-inter">{product.cut}</td>
                    )}
                    {product.color !== undefined && (
                      <td className="px-4 py-3 font-inter">{product.color}</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#212121] py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white font-montserrat font-bold text-xl md:text-2xl mb-4">
            {t("products.ctaInterested", "Interessado nesta linha de produtos?")}
          </h2>
          <p className="text-white/70 font-inter mb-6">
            {t("products.ctaRequest", "Solicite um orçamento ou entre em contato para mais informações")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={getLocalizedPath("/contato")}
              className="bg-[#D32F2F] text-white font-montserrat font-bold px-8 py-3 rounded-xl hover:bg-[#B71C1C] transition-colors"
            >
              {t("products.requestQuote", "Solicitar Orçamento")}
            </Link>
            <Link
              to={getLocalizedPath("/produtos")}
              className="bg-white/10 text-white font-montserrat font-bold px-8 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20"
            >
              {t("products.backToCategories", "Voltar às Categorias")}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductCategory;
