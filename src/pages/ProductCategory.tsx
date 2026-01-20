import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Download, 
  MessageCircle, 
  Star
} from "lucide-react";
import CategoryTypeCard from "@/components/products/CategoryTypeCard";
import CategoryTypeModal from "@/components/products/CategoryTypeModal";
import ProductCategoryHero from "@/components/products/ProductCategoryHero";
import CatalogSection from "@/components/products/CatalogSection";

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
// Polisher images
import PolidoraVerde from "@/assets/products/polidora-verde.png";
import PolidoraCinza from "@/assets/products/polidora-cinza.png";
import PolidoraAzul from "@/assets/products/polidora-azul.png";
// Torpedo Ogival polisher images by code
import PolidoraTorpedo70101 from "@/assets/products/polidora-torpedo-70101.png";
import PolidoraTorpedo70501 from "@/assets/products/polidora-torpedo-70501.png";
import PolidoraTorpedo70701 from "@/assets/products/polidora-torpedo-70701.png";
import PolidoraTorpedo70201 from "@/assets/products/polidora-torpedo-70201.png";
import PolidoraTorpedo70301 from "@/assets/products/polidora-torpedo-70301.png";
import PolidoraTorpedo70601 from "@/assets/products/polidora-torpedo-70601.png";
import PolidoraTorpedo70401 from "@/assets/products/polidora-torpedo-70401.png";
// Torpedo Grande polisher images by code
import PolidoraTorpedo70102 from "@/assets/products/polidora-torpedo-70102.png";
import PolidoraTorpedo70502 from "@/assets/products/polidora-torpedo-70502.png";
import PolidoraTorpedo70702 from "@/assets/products/polidora-torpedo-70702.png";
import PolidoraTorpedo70202 from "@/assets/products/polidora-torpedo-70202.png";
import PolidoraTorpedo70302 from "@/assets/products/polidora-torpedo-70302.png";
import PolidoraTorpedo70602 from "@/assets/products/polidora-torpedo-70602.png";
import PolidoraTorpedo70402 from "@/assets/products/polidora-torpedo-70402.png";
// Torpedo Média polisher images by code
import PolidoraTorpedo70103 from "@/assets/products/polidora-torpedo-70103.png";
import PolidoraTorpedo70503 from "@/assets/products/polidora-torpedo-70503.png";
import PolidoraTorpedo70703 from "@/assets/products/polidora-torpedo-70703.png";
import PolidoraTorpedo70203 from "@/assets/products/polidora-torpedo-70203.png";
import PolidoraTorpedo70303 from "@/assets/products/polidora-torpedo-70303.png";
import PolidoraTorpedo70603 from "@/assets/products/polidora-torpedo-70603.png";
import PolidoraTorpedo70403 from "@/assets/products/polidora-torpedo-70403.png";
// Cilíndrica polisher images by code
import PolidoraCilindrica70104 from "@/assets/products/polidora-cilindrica-70104.png";
import PolidoraCilindrica70504 from "@/assets/products/polidora-cilindrica-70504.png";
import PolidoraCilindrica70704 from "@/assets/products/polidora-cilindrica-70704.png";
import PolidoraCilindrica70204 from "@/assets/products/polidora-cilindrica-70204.png";
import PolidoraCilindrica70304 from "@/assets/products/polidora-cilindrica-70304.png";
import PolidoraCilindrica70604 from "@/assets/products/polidora-cilindrica-70604.png";
import PolidoraCilindrica70404 from "@/assets/products/polidora-cilindrica-70404.png";
// Chama polisher images by code
import PolidoraChama70105 from "@/assets/products/polidora-chama-70105.png";
import PolidoraChama70505 from "@/assets/products/polidora-chama-70505.png";
import PolidoraChama70705 from "@/assets/products/polidora-chama-70705.png";
import PolidoraChama70205 from "@/assets/products/polidora-chama-70205.png";
import PolidoraChama70305 from "@/assets/products/polidora-chama-70305.png";
import PolidoraChama70605 from "@/assets/products/polidora-chama-70605.png";
import PolidoraChama70405 from "@/assets/products/polidora-chama-70405.png";
// Sandpaper images
import LixaTubular from "@/assets/products/lixa-tubular.png";
import LixaManualNailsVerde from "@/assets/products/lixa-manual-nails-verde.png";
import LixaManualNailsBranca from "@/assets/products/lixa-manual-nails-branca.png";
import LixaManualWhiteFina from "@/assets/products/lixa-manual-white-fina.png";
import LixaManualDescartavelBranca from "@/assets/products/lixa-manual-descartavel-branca.png";
import LixaManualBaseInox from "@/assets/products/lixa-manual-base-inox.png";

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
    subcategory?: string;
    totalLength?: string;
    bristleType?: string;
    subtype?: string;
  }>;
  features?: string[];
  hasGoldLine?: boolean;
  subtypes?: string[];
  subcategories?: Record<string, { description: string; types: string[] }>;
  titlePt: string;
  titleEn?: string;
  description: {
    pt: string;
    en: string;
  };
}> = {
  "brocas-diamantadas": {
    hasGoldLine: false,
    subtypes: ["Esférica", "Roda", "Cônica Topo Invertido", "Cônica Topo Arredondado", "Cônica Topo Plano", "Cônica", "Cilíndrica Topo Plano", "Cilíndrica Topo Arredondado", "Lentilha", "Chama", "Cônica Topo Chama"],
    titlePt: "BROCAS DIAMANTADAS",
    titleEn: "DIAMOND BURS",
    description: {
      pt: "As peças de mão da Brilho são indicadas para laboratórios de prótese, joalherias, esmalterias, nail design e podologia. São fabricadas seguindo rigorosos critérios de produção, buscando sempre oferecer instrumentos de excelente qualidade.",
      en: "Brilho's handpieces are recommended for prosthesis laboratories, jewelry stores, nail salons, nail design, and podiatry. They are manufactured following strict production criteria, always aiming to offer high-quality instruments."
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
      // ESFÉRICA (ROUND)
      { model: "Esférica", code: "500.001.01", iso: "001.801.010", diameter: "1,0mm", grain: "Médio", image: PM07 },
      { model: "Esférica", code: "500.001.03", iso: "001.801.016", diameter: "1,6mm", grain: "Médio" },
      { model: "Esférica", code: "500.001.05", iso: "001.801.017", diameter: "1,7mm", grain: "Médio" },
      { model: "Esférica", code: "500.001.06", iso: "001.801.026", diameter: "2,6mm", grain: "Médio" },
      { model: "Esférica", code: "500.001.096", iso: "001.801.029", diameter: "2,9mm", grain: "Médio" },
      { model: "Esférica", code: "500.001.07", iso: "001.801.040", diameter: "4,0mm", grain: "Médio" },
      { model: "Esférica", code: "500.001.08", iso: "001.801.048", diameter: "4,8mm", grain: "Médio" },
      { model: "Esférica", code: "500.001.10", iso: "001.801.052", diameter: "5,2mm", grain: "Médio" },
      // RODA (WHEEL)
      { model: "Roda", code: "500.001.17", iso: "040.815.065", diameter: "6,5mm", grain: "Médio", activeLength: "1,0mm" },
      { model: "Roda", code: "500.001.19", iso: "040.815.050", diameter: "5,0mm", grain: "Médio", activeLength: "1,0mm" },
      { model: "Roda", code: "500.001.21", iso: "048.815.060", diameter: "6,0mm", grain: "Médio", activeLength: "2,0mm" },
      // CÔNICA TOPO INVERTIDO (CONICAL INVERTED END)
      { model: "Cônica Topo Invertido", code: "500.001.33", iso: "010/805", diameter: "1,0mm", grain: "Médio", activeLength: "1,3mm", image: PM42 },
      { model: "Cônica Topo Invertido", code: "500.001.35", iso: "010/805", diameter: "1,6mm", grain: "Médio", activeLength: "1,8mm" },
      { model: "Cônica Topo Invertido", code: "500.001.38", iso: "010/805", diameter: "2,5mm", grain: "Médio", activeLength: "2,5mm" },
      { model: "Cônica Topo Invertido", code: "500.001.42", iso: "010/805", diameter: "5,0mm", grain: "Médio", activeLength: "2,2mm" },
      { model: "Cônica Topo Invertido", code: "500.001.46", iso: "010/805", diameter: "6,0mm", grain: "Médio", activeLength: "7,0mm" },
      { model: "Cônica Topo Invertido", code: "500.001.49", iso: "225/807", diameter: "2,3mm", grain: "Médio", activeLength: "5,0mm" },
      // CÔNICA TOPO ARREDONDADO (CONICAL ROUNDED TOP)
      { model: "Cônica Topo Arredondado", code: "500.001.718", iso: "199.825.018", diameter: "1,8mm", grain: "Fino", activeLength: "11mm", image: PM718 },
      { model: "Cônica Topo Arredondado", code: "500.001.720", iso: "199.852.026", diameter: "2,6mm", grain: "Fino", activeLength: "10mm", image: PM720 },
      { model: "Cônica Topo Arredondado", code: "500.001.720L", iso: "198.850.024", diameter: "2,4mm", grain: "Fino", activeLength: "14mm", image: PM720L },
      { model: "Cônica Topo Arredondado", code: "500.001.721", iso: "198.850.040", diameter: "4,0mm", grain: "Fino", activeLength: "1mm" },
      // CÔNICA TOPO PLANO (TAPERED FLAT END)
      { model: "Cônica Topo Plano", code: "500.001.700", iso: "170/845", diameter: "1,0mm", grain: "Médio", activeLength: "4,0mm" },
      { model: "Cônica Topo Plano", code: "500.001.703", iso: "170/845", diameter: "1,5mm", grain: "Médio", activeLength: "5,0mm" },
      { model: "Cônica Topo Plano", code: "500.001.705", iso: "170/845", diameter: "1,3mm", grain: "Médio", activeLength: "4,0mm" },
      { model: "Cônica Topo Plano", code: "500.001.707", iso: "172/847", diameter: "2,1mm", grain: "Médio", activeLength: "5,5mm" },
      { model: "Cônica Topo Plano", code: "500.001.708", iso: "173/848", diameter: "1,6mm", grain: "Médio", activeLength: "8,0mm" },
      { model: "Cônica Topo Plano", code: "500.001.710", iso: "173/848", diameter: "2,1mm", grain: "Médio", activeLength: "10,0mm" },
      { model: "Cônica Topo Plano", code: "500.001.715", iso: "173/848", diameter: "2,5mm", grain: "Médio", activeLength: "10,0mm" },
      { model: "Cônica Topo Plano", code: "500.001.716", iso: "173/848", diameter: "2,9mm", grain: "Médio", activeLength: "11,0mm" },
      { model: "Cônica Topo Plano", code: "500.001.716L", iso: "173/848", diameter: "2,5mm", grain: "Médio", activeLength: "10,0mm" },
      { model: "Cônica Topo Plano", code: "500.001.717", iso: "173/848", diameter: "4,0mm", grain: "Médio", activeLength: "10,0mm" },
      // CÔNICA (CONICAL)
      { model: "Cônica", code: "500.001.730", iso: "161.898.050", diameter: "5,0mm", grain: "Médio", activeLength: "10,0mm" },
      // CILÍNDRICA TOPO PLANO (CYLINDRICAL FLAT END)
      { model: "Cilíndrica Topo Plano", code: "500.001.56", iso: "109.835.010", diameter: "1,0mm", grain: "Médio", activeLength: "4mm", image: PM57 },
      { model: "Cilíndrica Topo Plano", code: "500.001.57", iso: "109.835.014", diameter: "1,4mm", grain: "Médio", activeLength: "4mm" },
      { model: "Cilíndrica Topo Plano", code: "500.001.61", iso: "110.835.025", diameter: "2,5mm", grain: "Médio", activeLength: "6mm" },
      { model: "Cilíndrica Topo Plano", code: "500.001.82", iso: "110.837.029", diameter: "2,9mm", grain: "Médio", activeLength: "10mm" },
      { model: "Cilíndrica Topo Plano", code: "500.001.85", iso: "110.837.040", diameter: "4,0mm", grain: "Médio", activeLength: "10mm" },
      { model: "Cilíndrica Topo Plano", code: "500.001.85L", iso: "110.842.050", diameter: "5,0mm", grain: "Médio", activeLength: "15mm" },
      { model: "Cilíndrica Topo Plano", code: "500.001.87", iso: "110.837.045", diameter: "4,5mm", grain: "Médio", activeLength: "10mm" },
      // CILÍNDRICA TOPO ARREDONDADO (CYLINDER ROUNDED END)
      { model: "Cilíndrica Topo Arredondado", code: "500.001.92", iso: "142.881.029", diameter: "2,9mm", grain: "Médio", activeLength: "10,0mm" },
      { model: "Cilíndrica Topo Arredondado", code: "500.001.95", iso: "142.881.040", diameter: "4,0mm", grain: "Médio", activeLength: "10,0mm" },
      // LENTILHA (LENTIL)
      { model: "Lentilha", code: "500.001.23", iso: "304.825.045", diameter: "4,5mm", grain: "Médio", activeLength: "1,5mm" },
      { model: "Lentilha", code: "500.001.25", iso: "304.825.058", diameter: "5,8mm", grain: "Médio", activeLength: "1,5mm" },
      // CHAMA (FLAME)
      { model: "Chama", code: "500.001.740", iso: "249.862.012", diameter: "1,2mm", grain: "Médio", activeLength: "8,0mm", image: PM744 },
      { model: "Chama", code: "500.001.741", iso: "249.862.015", diameter: "1,5mm", grain: "Médio", activeLength: "8,0mm" },
      { model: "Chama", code: "500.001.743", iso: "249.862.026", diameter: "2,6mm", grain: "Médio", activeLength: "6,5mm" },
      { model: "Chama", code: "500.001.744", iso: "249.862.024", diameter: "2,4mm", grain: "Médio", activeLength: "9,0mm" },
      { model: "Chama", code: "500.001.829", iso: "249.862.017", diameter: "1,7mm", grain: "Médio", activeLength: "5,0mm", image: PM829 },
      { model: "Chama", code: "500.001.830", iso: "249.862.022", diameter: "2,2mm", grain: "Médio", activeLength: "5,0mm" },
      { model: "Chama", code: "500.001.837", iso: "249.862.022", diameter: "2,2mm", grain: "Médio", activeLength: "8,0mm" },
      { model: "Chama", code: "500.001.838", iso: "249.862.026", diameter: "2,6mm", grain: "Médio", activeLength: "8,0mm", image: PM838 },
      { model: "Chama", code: "500.001.858", iso: "249.862.028", diameter: "2,8mm", grain: "Médio", activeLength: "5,0mm" },
      // CÔNICA TOPO CHAMA (CONICAL FLAME END)
      { model: "Cônica Topo Chama", code: "500.001.859", iso: "299/879", diameter: "2,0mm", grain: "Médio", activeLength: "11mm", image: PM859 },
      { model: "Cônica Topo Chama", code: "500.001.3203", iso: "253/863", diameter: "1,5mm", grain: "Médio", activeLength: "10mm" },
      { model: "Cônica Topo Chama", code: "500.001.3195", iso: "253/862", diameter: "1,3mm", grain: "Médio", activeLength: "10mm" },
    ]
  },
  "fresas-tungstenio": {
    subtypes: ["Corte Cruzado Médio", "Corte Cruzado Fino", "Corte Cruzado Extra Fino", "Corte Cruzado Grosso", "Corte Reto"],
    subcategories: {
      "Maxi Cut": {
        description: "Fresas de tungstênio de alta remoção - ideais para desbaste rápido",
        types: ["Corte Cruzado Médio", "Corte Cruzado Fino", "Corte Cruzado Extra Fino", "Corte Cruzado Grosso", "Corte Reto"]
      },
      "Mini Cut": {
        description: "Fresas de tungstênio de precisão - ideais para acabamento e detalhes",
        types: ["Corte Cruzado Médio", "Corte Cruzado Fino", "Corte Cruzado Extra Fino", "Corte Cruzado Grosso"]
      }
    },
    titlePt: "FRESAS DE TUNGSTÊNIO",
    titleEn: "TUNGSTEN BURS",
    description: {
      pt: "Fresas de tungstênio de alta performance para procedimentos que exigem precisão e durabilidade. Ideais para laboratórios de prótese e aplicações industriais.",
      en: "High-performance tungsten burs for procedures requiring precision and durability. Ideal for prosthesis laboratories and industrial applications."
    },
    products: [
      // MAXI CUT - CORTE CRUZADO MÉDIO
      { model: "Corte Cruzado Médio", code: "500.002.1507", iso: "194.190.060", diameter: "6,0mm", grain: "Médio", activeLength: "15,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Médio", code: "500.002.1508", iso: "274.190.060", diameter: "6,0mm", grain: "Médio", activeLength: "14,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Médio", code: "500.002.1509", iso: "274.190.050", diameter: "5,0mm", grain: "Médio", activeLength: "13,50mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Médio", code: "500.002.1510", iso: "200.110.040", diameter: "4,0mm", grain: "Médio", activeLength: "14,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Médio", code: "500.002.1517", iso: "201.190.060", diameter: "6,0mm", grain: "Médio", activeLength: "15,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Médio", code: "500.002.1520", iso: "199.850.050", diameter: "5,0mm", grain: "Médio", activeLength: "13,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Médio", code: "500.002.92", iso: "194.190.050", diameter: "5,5mm", grain: "Médio", activeLength: "13,50mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Médio", code: "500.002.95", iso: "194.190.060", diameter: "6,0mm", grain: "Médio", activeLength: "13,50mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Médio", code: "500.002.1251", iso: "277.175.045", diameter: "4,5mm", grain: "Médio", activeLength: "13,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Médio", code: "500.002.3029", iso: "194.175.055", diameter: "5,5mm", grain: "Médio", activeLength: "13,00mm", subcategory: "Maxi Cut" },
      // MAXI CUT - CORTE CRUZADO FINO
      { model: "Corte Cruzado Fino", code: "500.002.1507F", iso: "194.190.060", diameter: "6,0mm", grain: "Fino", activeLength: "15,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Fino", code: "500.002.1508F", iso: "274.140.060", diameter: "6,0mm", grain: "Fino", activeLength: "14,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Fino", code: "500.002.1509F", iso: "274.140.050", diameter: "5,0mm", grain: "Fino", activeLength: "14,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Fino", code: "500.002.1510F", iso: "199.850.040", diameter: "4,0mm", grain: "Fino", activeLength: "14,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Fino", code: "500.002.1517F", iso: "201.140.060", diameter: "6,0mm", grain: "Fino", activeLength: "15,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Fino", code: "500.002.1520F", iso: "199.850.050", diameter: "5,0mm", grain: "Fino", activeLength: "13,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Fino", code: "500.002.92F", iso: "194.190.050", diameter: "5,5mm", grain: "Fino", activeLength: "13,50mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Fino", code: "500.002.95F", iso: "194.190.060", diameter: "6,0mm", grain: "Fino", activeLength: "13,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Fino", code: "500.002.1251F", iso: "277.175.045", diameter: "4,5mm", grain: "Fino", activeLength: "13,00mm", subcategory: "Maxi Cut" },
      // MAXI CUT - CORTE CRUZADO EXTRA FINO
      { model: "Corte Cruzado Extra Fino", code: "500.002.1508XEF", iso: "274.110.060", diameter: "6,0mm", grain: "Extra Fino", activeLength: "14,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Extra Fino", code: "500.002.1510XEF", iso: "200.110.040", diameter: "4,0mm", grain: "Extra Fino", activeLength: "14,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Extra Fino", code: "500.002.1520XEF", iso: "194.215.050", diameter: "5,0mm", grain: "Extra Fino", activeLength: "13,00mm", subcategory: "Maxi Cut" },
      // MAXI CUT - CORTE CRUZADO GROSSO
      { model: "Corte Cruzado Grosso", code: "500.002.1508G", iso: "274.190.060", diameter: "6,0mm", grain: "Grosso", activeLength: "14,00mm", subcategory: "Maxi Cut" },
      // MAXI CUT - CORTE RETO (717 models)
      { model: "Corte Reto", code: "500.002.717EG", iso: "173.849.070", diameter: "7,0mm", grain: "Extra Grosso", activeLength: "15,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Reto", code: "500.002.717G", iso: "173.849.070", diameter: "7,0mm", grain: "Grosso", activeLength: "15,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Reto", code: "500.002.717", iso: "173.849.070", diameter: "7,0mm", grain: "Médio", activeLength: "15,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Reto", code: "500.002.717F", iso: "173.849.070", diameter: "7,0mm", grain: "Fino", activeLength: "15,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Reto", code: "500.002.717XEF", iso: "173.849.070", diameter: "7,0mm", grain: "Extra Fino", activeLength: "15,00mm", subcategory: "Maxi Cut" },
      // MINI CUT - CORTE CRUZADO MÉDIO
      { model: "Corte Cruzado Médio", code: "500.002.1503", iso: "137.190.023", diameter: "2,3mm", grain: "Médio", activeLength: "16,00mm", subcategory: "Mini Cut" },
      { model: "Corte Cruzado Médio", code: "500.002.1511", iso: "292.140.023", diameter: "2,3mm", grain: "Médio", activeLength: "14,00mm", subcategory: "Mini Cut" },
      { model: "Corte Cruzado Médio", code: "500.002.1512", iso: "194.190.045", diameter: "4,3mm", grain: "Médio", activeLength: "13,00mm", subcategory: "Mini Cut" },
      { model: "Corte Cruzado Médio", code: "500.002.1571", iso: "175.190.023", diameter: "2,3mm", grain: "Médio", activeLength: "15,00mm", subcategory: "Mini Cut" },
      { model: "Corte Cruzado Médio", code: "500.002.3022", iso: "289.140.019", diameter: "1,9mm", grain: "Médio", activeLength: "11,00mm", subcategory: "Mini Cut" },
      { model: "Corte Cruzado Médio", code: "500.002.4061", iso: "141.140.022", diameter: "2,2mm", grain: "Médio", activeLength: "10,00mm", subcategory: "Mini Cut" },
      // MINI CUT - CORTE CRUZADO FINO
      { model: "Corte Cruzado Fino", code: "500.002.1503F", iso: "137.190.023", diameter: "2,3mm", grain: "Fino", activeLength: "16,00mm", subcategory: "Mini Cut" },
      { model: "Corte Cruzado Fino", code: "500.002.1511F", iso: "292.140.023", diameter: "2,3mm", grain: "Fino", activeLength: "14,00mm", subcategory: "Mini Cut" },
      { model: "Corte Cruzado Fino", code: "500.002.1512F", iso: "194.190.050", diameter: "5,0mm", grain: "Fino", activeLength: "15,00mm", subcategory: "Mini Cut" },
      { model: "Corte Cruzado Fino", code: "500.002.1571F", iso: "175.110.023", diameter: "2,3mm", grain: "Fino", activeLength: "15,00mm", subcategory: "Mini Cut" },
      { model: "Corte Cruzado Fino", code: "500.002.3022F", iso: "289.140.019", diameter: "1,9mm", grain: "Fino", activeLength: "11,00mm", subcategory: "Mini Cut" },
      // MINI CUT - CORTE CRUZADO EXTRA FINO
      { model: "Corte Cruzado Extra Fino", code: "500.002.1503XEF", iso: "144.110.023", diameter: "2,3mm", grain: "Extra Fino", activeLength: "14,00mm", subcategory: "Mini Cut" },
      { model: "Corte Cruzado Extra Fino", code: "500.002.1511XEF", iso: "292.140.023", diameter: "6,0mm", grain: "Extra Fino", activeLength: "14,00mm", subcategory: "Mini Cut" },
      { model: "Corte Cruzado Extra Fino", code: "500.002.1571XEF", iso: "175.110.023", diameter: "2,3mm", grain: "Extra Fino", activeLength: "15,00mm", subcategory: "Mini Cut" },
      // MINI CUT - CORTE CRUZADO GROSSO (Ponta Dupla)
      { model: "Corte Cruzado Grosso", code: "500.002.1503G/1511G", iso: "137.140.023 / 292.140.023", diameter: "2,3mm", grain: "Grosso", activeLength: "14,00mm", subcategory: "Mini Cut" },
    ]
  },
  "fresas-ceramica": {
    subtypes: ["Corte Cruzado Médio", "Corte Cruzado Fino", "Corte Cruzado Extra Fino", "Corte Cruzado Grosso"],
    subcategories: {
      "Maxi Cut": {
        description: "Fresas de cerâmica de alta remoção - ideais para desbaste rápido",
        types: ["Corte Cruzado Médio", "Corte Cruzado Fino", "Corte Cruzado Extra Fino", "Corte Cruzado Grosso"]
      },
      "Mini Cut": {
        description: "Fresas de cerâmica de precisão - ideais para acabamento e detalhes",
        types: ["Corte Cruzado Médio", "Corte Cruzado Fino", "Corte Cruzado Extra Fino", "Corte Cruzado Grosso"]
      }
    },
    titlePt: "FRESAS DE CERÂMICA",
    titleEn: "CERAMIC BURS",
    description: {
      pt: "Fresas cerâmicas de alta tecnologia para acabamentos perfeitos e procedimentos delicados. Resistentes ao calor e de longa durabilidade.",
      en: "High-tech ceramic burs for perfect finishes and delicate procedures. Heat resistant and long lasting."
    },
    products: [
      // MAXI CUT - CORTE CRUZADO MÉDIO
      { model: "Corte Cruzado Médio", code: "500.004.1508C", iso: "274.190.060", diameter: "6,0mm", grain: "Médio", activeLength: "14,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Médio", code: "500.004.1509C", iso: "274.110.060", diameter: "6,0mm", grain: "Médio", activeLength: "15,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Médio", code: "500.004.1510C", iso: "201.190.050", diameter: "5,0mm", grain: "Médio", activeLength: "14,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Médio", code: "500.004.1517C", iso: "201.190.060", diameter: "11,5mm", grain: "Médio", activeLength: "19,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Médio", code: "500.004.85C", iso: "113.190.050", diameter: "5,0mm", grain: "Médio", activeLength: "12,50mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Médio", code: "500.004.95C", iso: "194.190.060", diameter: "6,0mm", grain: "Médio", activeLength: "15,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Médio", code: "500.004.717C", iso: "173.849.065", diameter: "6,5mm", grain: "Médio", activeLength: "14,00mm", subcategory: "Maxi Cut" },
      // MAXI CUT - CORTE CRUZADO FINO
      { model: "Corte Cruzado Fino", code: "500.004.1508CF", iso: "274.140.050", diameter: "5,0mm", grain: "Fino", activeLength: "14,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Fino", code: "500.004.1509CF", iso: "274.110.060", diameter: "6,0mm", grain: "Fino", activeLength: "15,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Fino", code: "500.004.1510CF", iso: "201.190.050", diameter: "5,0mm", grain: "Fino", activeLength: "14,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Fino", code: "500.004.1517CF", iso: "201.190.060", diameter: "11,5mm", grain: "Fino", activeLength: "19,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Fino", code: "500.004.85CF", iso: "113.140.050", diameter: "5,0mm", grain: "Fino", activeLength: "12,50mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Fino", code: "500.004.95CF", iso: "194.190.060", diameter: "6,0mm", grain: "Fino", activeLength: "15,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Fino", code: "500.004.717CF", iso: "173.849.065", diameter: "6,5mm", grain: "Fino", activeLength: "14,00mm", subcategory: "Maxi Cut" },
      // MAXI CUT - CORTE CRUZADO EXTRA FINO
      { model: "Corte Cruzado Extra Fino", code: "500.004.1508CXF", iso: "274.110.060", diameter: "6,0mm", grain: "Extra Fino", activeLength: "14,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Extra Fino", code: "500.004.1509CXF", iso: "274.110.060", diameter: "6,0mm", grain: "Extra Fino", activeLength: "15,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Extra Fino", code: "500.004.1510CXF", iso: "201.190.050", diameter: "5,0mm", grain: "Extra Fino", activeLength: "14,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Extra Fino", code: "500.004.1517CXF", iso: "201.190.060", diameter: "11,5mm", grain: "Extra Fino", activeLength: "19,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Extra Fino", code: "500.004.85CXF", iso: "113.140.050", diameter: "5,0mm", grain: "Extra Fino", activeLength: "12,50mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Extra Fino", code: "500.004.95CXF", iso: "194.190.060", diameter: "6,0mm", grain: "Extra Fino", activeLength: "15,00mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Extra Fino", code: "500.004.717CXF", iso: "173.849.065", diameter: "6,5mm", grain: "Extra Fino", activeLength: "14,00mm", subcategory: "Maxi Cut" },
      // MAXI CUT - CORTE CRUZADO GROSSO
      { model: "Corte Cruzado Grosso", code: "500.004.95CG", iso: "144.175.068", diameter: "6,8mm", grain: "Grosso", activeLength: "14,50mm", subcategory: "Maxi Cut" },
      { model: "Corte Cruzado Grosso", code: "500.004.1509CG", iso: "274.110.060", diameter: "6,0mm", grain: "Grosso", activeLength: "14,00mm", subcategory: "Maxi Cut" },
      // MINI CUT - CORTE CRUZADO MÉDIO
      { model: "Corte Cruzado Médio", code: "500.004.1571C", iso: "175.110.023", diameter: "2,3mm", grain: "Médio", activeLength: "15,00mm", subcategory: "Mini Cut" },
      { model: "Corte Cruzado Médio", code: "500.004.07C", iso: "119.002.2", diameter: "2,2mm", grain: "Médio", activeLength: "---", subcategory: "Mini Cut" },
      { model: "Corte Cruzado Médio", code: "500.004.859C", iso: "175.190.023", diameter: "2,3mm", grain: "Médio", activeLength: "15,00mm", subcategory: "Mini Cut" },
      // MINI CUT - CORTE CRUZADO FINO
      { model: "Corte Cruzado Fino", code: "500.004.1571CF", iso: "175.110.023", diameter: "2,3mm", grain: "Fino", activeLength: "15,00mm", subcategory: "Mini Cut" },
      { model: "Corte Cruzado Fino", code: "500.004.07CF", iso: "119.002.2", diameter: "2,2mm", grain: "Fino", activeLength: "---", subcategory: "Mini Cut" },
      { model: "Corte Cruzado Fino", code: "500.004.859CF", iso: "175.190.023", diameter: "2,3mm", grain: "Fino", activeLength: "15,00mm", subcategory: "Mini Cut" },
      // MINI CUT - CORTE CRUZADO EXTRA FINO
      { model: "Corte Cruzado Extra Fino", code: "500.004.1571CXF", iso: "175.140.023", diameter: "2,3mm", grain: "Extra Fino", activeLength: "15,00mm", subcategory: "Mini Cut" },
      { model: "Corte Cruzado Extra Fino", code: "500.004.859CXF", iso: "175.190.023", diameter: "2,3mm", grain: "Extra Fino", activeLength: "15,00mm", subcategory: "Mini Cut" },
      // MINI CUT - CORTE CRUZADO GROSSO
      { model: "Corte Cruzado Grosso", code: "500.004.1571CG", iso: "175.190.023", diameter: "2,3mm", grain: "Grosso", activeLength: "15,00mm", subcategory: "Mini Cut" },
      { model: "Corte Cruzado Grosso", code: "500.004.859CG", iso: "175.190.023", diameter: "2,3mm", grain: "Grosso", activeLength: "15,00mm", subcategory: "Mini Cut" },
    ]
  },
  "lixas": {
    subtypes: ["Nails Verde", "Nails Branca", "White Fina 2mm", "Descartável Branca", "Base Inox Refil", "Laminar", "Plantar", "Tubular", "Adesiva"],
    subcategories: {
      "Lixas Manuais": {
        description: "Lixas tradicionais para nail design - formatos ergonômicos para acabamento perfeito",
        types: ["Nails Verde", "Nails Branca", "White Fina 2mm", "Descartável Branca", "Base Inox Refil"]
      },
      "Lixas com Mandril": {
        description: "Lixas para uso com motor/mandril - ideais para podologia e procedimentos profissionais",
        types: ["Laminar", "Plantar", "Tubular", "Adesiva"]
      }
    },
    titlePt: "LIXAS",
    titleEn: "SANDING FILES",
    description: {
      pt: "Lixas profissionais de alta qualidade para podologia e nail design. Disponíveis em diversas granulometrias e formatos para diferentes aplicações.",
      en: "High-quality professional files for podiatry and nail design. Available in various grits and shapes for different applications."
    },
    products: [
      // NAILS VERDE - Alta Performance
      { model: "Boomerang", code: "500.0015.01", diameter: "3,0mm", grain: "180/100", activeLength: "18,0mm", subcategory: "Lixas Manuais", image: LixaManualNailsVerde, cut: "Nails Verde" },
      { model: "Quadrada", code: "500.0015.02", diameter: "2,8mm", grain: "180/100", activeLength: "17,5mm", subcategory: "Lixas Manuais", cut: "Nails Verde" },
      { model: "Caixão", code: "500.0015.03", diameter: "2,5mm", grain: "180/100", activeLength: "17,5mm", subcategory: "Lixas Manuais", cut: "Nails Verde" },
      { model: "Gota", code: "500.0015.004", diameter: "3,0mm", grain: "180/100", activeLength: "17,5mm", subcategory: "Lixas Manuais", cut: "Nails Verde" },
      // NAILS BRANCA
      { model: "Boomerang", code: "500.0015.05", diameter: "3,0mm", grain: "180/100", activeLength: "18,0mm", subcategory: "Lixas Manuais", image: LixaManualNailsBranca, cut: "Nails Branca" },
      { model: "Quadrada", code: "500.009.06", diameter: "2,8mm", grain: "180/100", activeLength: "17,5mm", subcategory: "Lixas Manuais", cut: "Nails Branca" },
      { model: "Caixão", code: "500.009.07", diameter: "2,5mm", grain: "180/100", activeLength: "17,5mm", subcategory: "Lixas Manuais", cut: "Nails Branca" },
      { model: "Gota", code: "500.009.08", diameter: "3,0mm", grain: "180/100", activeLength: "17,5mm", subcategory: "Lixas Manuais", cut: "Nails Branca" },
      // WHITE FINA 2MM
      { model: "Boomerang", code: "500.009.09", diameter: "3,0mm", grain: "180/100", activeLength: "18,0mm", subcategory: "Lixas Manuais", image: LixaManualWhiteFina, cut: "White Fina 2mm" },
      { model: "Quadrada", code: "500.009.10", diameter: "2,8mm", grain: "180/100", activeLength: "17,5mm", subcategory: "Lixas Manuais", cut: "White Fina 2mm" },
      { model: "Caixão", code: "500.009.11", diameter: "2,5mm", grain: "180/100", activeLength: "17,5mm", subcategory: "Lixas Manuais", cut: "White Fina 2mm" },
      { model: "Gota", code: "500.009.12", diameter: "3,0mm", grain: "180/100", activeLength: "17,5mm", subcategory: "Lixas Manuais", cut: "White Fina 2mm" },
      // DESCARTÁVEL BRANCA
      { model: "Boomerang", code: "500.012.073", diameter: "3,0mm", grain: "180/100", activeLength: "18,0mm", subcategory: "Lixas Manuais", image: LixaManualDescartavelBranca, cut: "Descartável Branca" },
      // BASE INOX REFIL BOOMERANG
      { model: "Base Inox", code: "500.009.05", diameter: "---", grain: "---", activeLength: "17,5mm", subcategory: "Lixas Manuais", image: LixaManualBaseInox, cut: "Base Inox Refil" },
      // Lixas com Mandril - LAMINAR
      { model: "Laminar Premium (Norton)", code: "500.012.14", diameter: "23,00mm", grain: "100/120/150/180/220/320/400/600", activeLength: "0,15mm", subcategory: "Lixas com Mandril" },
      { model: "Laminar (Alcar)", code: "500.012.20", diameter: "17,00mm", grain: "100/120/150/180/220/320/400/600", activeLength: "0,10mm", subcategory: "Lixas com Mandril" },
      // Lixas com Mandril - PLANTAR
      { model: "Plantar Premium (Norton)", code: "500.012.02", diameter: "30,00mm", grain: "80/100/120/150/180/220/320", activeLength: "0,15mm", subcategory: "Lixas com Mandril" },
      { model: "Plantar Premium Extra Grande (Norton)", code: "500.012.27", diameter: "30,00mm", grain: "80/100/120/150/180/220", activeLength: "0,15mm", subcategory: "Lixas com Mandril" },
      { model: "Plantar (Alcar)", code: "500.012.37", diameter: "30,00mm", grain: "60/80/100/120/150/220/320", activeLength: "0,10mm", subcategory: "Lixas com Mandril" },
      // Lixas com Mandril - TUBULAR
      { model: "Tubular", code: "500.012.046", diameter: "8,0mm", grain: "80/100/120/180/220", activeLength: "14,0mm", subcategory: "Lixas com Mandril" },
      // Lixas com Mandril - ADESIVA CIRCULAR
      { model: "Adesiva Circular", code: "500.012.046", diameter: "8,0mm", grain: "80/100/120/180/220", activeLength: "14,0mm", subcategory: "Lixas com Mandril" },
    ]
  },
  "polidoras": {
    subtypes: ["Polidora Torpedo Ogival", "Polidora Torpedo Grande", "Polidora Torpedo Média", "Polidora Cilíndrica", "Polidora Chama", "Polidora Cônica", "Polidora Esférica"],
    titlePt: "POLIDORAS",
    titleEn: "POLISHERS",
    description: {
      pt: "Polidoras de silicone em diversas cores e granulometrias para acabamento perfeito. Sistema de cores para fácil identificação.",
      en: "Silicone polishers in various colors and grits for perfect finishing. Color system for easy identification."
    },
    products: [
      // POLIDORA TORPEDO OGIVAL
      { model: "Polidora Torpedo Ogival", code: "500.008.70101", diameter: "10,0mm", grain: "Extra Grosso", color: "Marrom", activeLength: "24,0mm", image: PolidoraTorpedo70101 },
      { model: "Polidora Torpedo Ogival", code: "500.008.70501", diameter: "10,0mm", grain: "Grosso", color: "Cinza", activeLength: "24,0mm", image: PolidoraTorpedo70501 },
      { model: "Polidora Torpedo Ogival", code: "500.008.70701", diameter: "10,0mm", grain: "Médio-Grosso", color: "Branco", activeLength: "24,0mm", image: PolidoraTorpedo70701 },
      { model: "Polidora Torpedo Ogival", code: "500.008.70201", diameter: "10,0mm", grain: "Médio", color: "Verde", activeLength: "24,0mm", image: PolidoraTorpedo70201 },
      { model: "Polidora Torpedo Ogival", code: "500.008.70301", diameter: "10,0mm", grain: "Fino", color: "Azul", activeLength: "24,0mm", image: PolidoraTorpedo70301 },
      { model: "Polidora Torpedo Ogival", code: "500.008.70601", diameter: "10,0mm", grain: "Extra Fino", color: "Amarelo", activeLength: "24,0mm", image: PolidoraTorpedo70601 },
      { model: "Polidora Torpedo Ogival", code: "500.008.70401", diameter: "10,0mm", grain: "Ultra Fino", color: "Lilás", activeLength: "24,0mm", image: PolidoraTorpedo70401 },
      // POLIDORA TORPEDO GRANDE
      { model: "Polidora Torpedo Grande", code: "500.008.70102", diameter: "12,0mm", grain: "Extra Grosso", color: "Marrom", activeLength: "28,0mm", image: PolidoraTorpedo70102 },
      { model: "Polidora Torpedo Grande", code: "500.008.70502", diameter: "12,0mm", grain: "Grosso", color: "Cinza", activeLength: "28,0mm", image: PolidoraTorpedo70502 },
      { model: "Polidora Torpedo Grande", code: "500.008.70702", diameter: "12,0mm", grain: "Médio-Grosso", color: "Branco", activeLength: "28,0mm", image: PolidoraTorpedo70702 },
      { model: "Polidora Torpedo Grande", code: "500.008.70202", diameter: "12,0mm", grain: "Médio", color: "Verde", activeLength: "28,0mm", image: PolidoraTorpedo70202 },
      { model: "Polidora Torpedo Grande", code: "500.008.70302", diameter: "12,0mm", grain: "Fino", color: "Azul", activeLength: "28,0mm", image: PolidoraTorpedo70302 },
      { model: "Polidora Torpedo Grande", code: "500.008.70602", diameter: "12,0mm", grain: "Extra Fino", color: "Amarelo", activeLength: "28,0mm", image: PolidoraTorpedo70602 },
      { model: "Polidora Torpedo Grande", code: "500.008.70402", diameter: "12,0mm", grain: "Ultra Fino", color: "Lilás", activeLength: "28,0mm", image: PolidoraTorpedo70402 },
      // POLIDORA TORPEDO MÉDIA
      { model: "Polidora Torpedo Média", code: "500.008.70103", diameter: "8,0mm", grain: "Extra Grosso", color: "Marrom", activeLength: "20,0mm", image: PolidoraTorpedo70103 },
      { model: "Polidora Torpedo Média", code: "500.008.70503", diameter: "8,0mm", grain: "Grosso", color: "Cinza", activeLength: "20,0mm", image: PolidoraTorpedo70503 },
      { model: "Polidora Torpedo Média", code: "500.008.70703", diameter: "8,0mm", grain: "Médio-Grosso", color: "Branco", activeLength: "20,0mm", image: PolidoraTorpedo70703 },
      { model: "Polidora Torpedo Média", code: "500.008.70203", diameter: "8,0mm", grain: "Médio", color: "Verde", activeLength: "20,0mm", image: PolidoraTorpedo70203 },
      { model: "Polidora Torpedo Média", code: "500.008.70303", diameter: "8,0mm", grain: "Fino", color: "Azul", activeLength: "20,0mm", image: PolidoraTorpedo70303 },
      { model: "Polidora Torpedo Média", code: "500.008.70603", diameter: "8,0mm", grain: "Extra Fino", color: "Amarelo", activeLength: "20,0mm", image: PolidoraTorpedo70603 },
      { model: "Polidora Torpedo Média", code: "500.008.70403", diameter: "8,0mm", grain: "Ultra Fino", color: "Lilás", activeLength: "20,0mm", image: PolidoraTorpedo70403 },
      // POLIDORA CILÍNDRICA
      { model: "Polidora Cilíndrica", code: "500.008.70104", diameter: "6,0mm", grain: "Extra Grosso", color: "Marrom", activeLength: "18,0mm", image: PolidoraCilindrica70104 },
      { model: "Polidora Cilíndrica", code: "500.008.70504", diameter: "6,0mm", grain: "Grosso", color: "Cinza", activeLength: "18,0mm", image: PolidoraCilindrica70504 },
      { model: "Polidora Cilíndrica", code: "500.008.70704", diameter: "6,0mm", grain: "Médio-Grosso", color: "Branco", activeLength: "18,0mm", image: PolidoraCilindrica70704 },
      { model: "Polidora Cilíndrica", code: "500.008.70204", diameter: "6,0mm", grain: "Médio", color: "Verde", activeLength: "18,0mm", image: PolidoraCilindrica70204 },
      { model: "Polidora Cilíndrica", code: "500.008.70304", diameter: "6,0mm", grain: "Fino", color: "Azul", activeLength: "18,0mm", image: PolidoraCilindrica70304 },
      { model: "Polidora Cilíndrica", code: "500.008.70604", diameter: "6,0mm", grain: "Extra Fino", color: "Amarelo", activeLength: "18,0mm", image: PolidoraCilindrica70604 },
      { model: "Polidora Cilíndrica", code: "500.008.70404", diameter: "6,0mm", grain: "Ultra Fino", color: "Lilás", activeLength: "18,0mm", image: PolidoraCilindrica70404 },
      // POLIDORA CHAMA
      { model: "Polidora Chama", code: "500.008.70105", diameter: "5,0mm", grain: "Extra Grosso", color: "Marrom", activeLength: "15,0mm", image: PolidoraChama70105 },
      { model: "Polidora Chama", code: "500.008.70505", diameter: "5,0mm", grain: "Grosso", color: "Cinza", activeLength: "15,0mm", image: PolidoraChama70505 },
      { model: "Polidora Chama", code: "500.008.70705", diameter: "5,0mm", grain: "Médio-Grosso", color: "Branco", activeLength: "15,0mm", image: PolidoraChama70705 },
      { model: "Polidora Chama", code: "500.008.70205", diameter: "5,0mm", grain: "Médio", color: "Verde", activeLength: "15,0mm", image: PolidoraChama70205 },
      { model: "Polidora Chama", code: "500.008.70305", diameter: "5,0mm", grain: "Fino", color: "Azul", activeLength: "15,0mm", image: PolidoraChama70305 },
      { model: "Polidora Chama", code: "500.008.70605", diameter: "5,0mm", grain: "Extra Fino", color: "Amarelo", activeLength: "15,0mm", image: PolidoraChama70605 },
      { model: "Polidora Chama", code: "500.008.70405", diameter: "5,0mm", grain: "Ultra Fino", color: "Lilás", activeLength: "15,0mm", image: PolidoraChama70405 },
      // POLIDORA CÔNICA
      { model: "Polidora Cônica", code: "500.008.70106", diameter: "6,0mm", grain: "Extra Grosso", color: "Marrom", activeLength: "16,0mm" },
      { model: "Polidora Cônica", code: "500.008.70506", diameter: "6,0mm", grain: "Grosso", color: "Cinza", activeLength: "16,0mm" },
      { model: "Polidora Cônica", code: "500.008.70706", diameter: "6,0mm", grain: "Médio-Grosso", color: "Branco", activeLength: "16,0mm" },
      { model: "Polidora Cônica", code: "500.008.70206", diameter: "6,0mm", grain: "Médio", color: "Verde", activeLength: "16,0mm" },
      { model: "Polidora Cônica", code: "500.008.70306", diameter: "6,0mm", grain: "Fino", color: "Azul", activeLength: "16,0mm" },
      { model: "Polidora Cônica", code: "500.008.70606", diameter: "6,0mm", grain: "Extra Fino", color: "Amarelo", activeLength: "16,0mm" },
      { model: "Polidora Cônica", code: "500.008.70406", diameter: "6,0mm", grain: "Ultra Fino", color: "Lilás", activeLength: "16,0mm" },
      // POLIDORA ESFÉRICA
      { model: "Polidora Esférica", code: "500.008.70107", diameter: "5,0mm", grain: "Extra Grosso", color: "Marrom", activeLength: "---" },
      { model: "Polidora Esférica", code: "500.008.70507", diameter: "5,0mm", grain: "Grosso", color: "Cinza", activeLength: "---" },
      { model: "Polidora Esférica", code: "500.008.70707", diameter: "5,0mm", grain: "Médio-Grosso", color: "Branco", activeLength: "---" },
      { model: "Polidora Esférica", code: "500.008.70207", diameter: "5,0mm", grain: "Médio", color: "Verde", activeLength: "---" },
      { model: "Polidora Esférica", code: "500.008.70307", diameter: "5,0mm", grain: "Fino", color: "Azul", activeLength: "---" },
      { model: "Polidora Esférica", code: "500.008.70607", diameter: "5,0mm", grain: "Extra Fino", color: "Amarelo", activeLength: "---" },
      { model: "Polidora Esférica", code: "500.008.70407", diameter: "5,0mm", grain: "Ultra Fino", color: "Lilás", activeLength: "---" },
    ]
  },
  "escovas-limpeza": {
    subtypes: ["Cerdas de Poliamida", "Brocas Polidoras"],
    titlePt: "ESCOVAS DE LIMPEZA",
    titleEn: "CLEANING BRUSHES",
    description: {
      pt: "Escovas de limpeza e acessórios para manutenção de brocas e instrumentos. Essenciais para prolongar a vida útil dos equipamentos.",
      en: "Cleaning brushes and accessories for maintaining burs and instruments. Essential for extending equipment life."
    },
    products: [
      // CERDAS DE POLIAMIDA - POLYAMIDE BRISTLES
      { model: "Cerdas de Poliamida", code: "137.190.023", iso: "137.190.023", diameter: "8,00mm", activeLength: "5,00mm", totalLength: "45,0mm", bristleType: "Finas", color: "Rosa" },
      { model: "Cerdas de Poliamida", code: "010/805", iso: "010/805", diameter: "8,00mm", activeLength: "5,00mm", totalLength: "45,0mm", bristleType: "Finas", color: "Lilás" },
      // BROCAS POLIDORAS - POLISHING DRILLS
      { model: "Brocas Polidoras", code: "01.01.01", diameter: "28,00mm", totalLength: "44,50mm", bristleType: "Aço", subtype: "Broca de Limpeza" },
      { model: "Brocas Polidoras", code: "500.0010.18", diameter: "25,00mm", totalLength: "50,0mm", bristleType: "Polímero Impregnado", subtype: "Esponja Polidora" },
      { model: "Brocas Polidoras", code: "500.0010.20", diameter: "25,00mm", totalLength: "50,0mm", bristleType: "Lã de Carneiro", subtype: "Esponja Feltro" },
    ]
  },
  "fibras-enucleadora-mandril": {
    subtypes: ["Fibra Molecular", "Enucleadora", "Mandril PM"],
    titlePt: "FIBRAS, ENUCLEADORA E MANDRIL",
    titleEn: "FIBERS, ENUCLEATORS & MANDRELS",
    description: {
      pt: "Fibras moleculares, enucleadoras e mandris de alta qualidade. Componentes essenciais para diversos procedimentos.",
      en: "High-quality molecular fibers, enucleators and mandrels. Essential components for various procedures."
    },
    products: [
      // FIBRA MOLECULAR - 6 variations based on width
      { model: "Fibra Molecular", code: "500.013.04", diameter: "0,16", activeLength: "10", totalLength: "120", iso: "3", subtype: "fibra" },
      { model: "Fibra Molecular", code: "500.013.05", diameter: "0,18", activeLength: "10", totalLength: "120", iso: "3", subtype: "fibra" },
      { model: "Fibra Molecular", code: "500.013.01", diameter: "0,20", activeLength: "10", totalLength: "120", iso: "3", subtype: "fibra" },
      { model: "Fibra Molecular", code: "500.013.02", diameter: "0,22", activeLength: "10", totalLength: "120", iso: "3", subtype: "fibra" },
      { model: "Fibra Molecular", code: "500.013.03", diameter: "0,25", activeLength: "10", totalLength: "120", iso: "3", subtype: "fibra" },
      { model: "Fibra Molecular", code: "500.013.06", diameter: "0,30", activeLength: "10", totalLength: "120", iso: "3", subtype: "fibra" },
      // ENUCLEADORA DE CALOS DE AÇO INOXIDÁVEL - 3 sizes P, M, G
      { model: "Enucleadora", code: "500.004.01", diameter: "2,00", activeLength: "7,00", totalLength: "44,50", iso: "2,35", subtype: "P" },
      { model: "Enucleadora", code: "500.004.02", diameter: "2,30", activeLength: "7,50", totalLength: "44,50", iso: "2,35", subtype: "M" },
      { model: "Enucleadora", code: "500.004.03", diameter: "3,15", activeLength: "7,90", totalLength: "44,50", iso: "2,35", subtype: "G" },
      // MANDRIL PM - 4 types: Reforçado, Standart, Tubular, Roda
      { model: "Mandril PM", code: "500.009.03", diameter: "6,0", totalLength: "50,0", iso: "2,35", subtype: "Reforçado" },
      { model: "Mandril PM", code: "500.009.01", diameter: "4,5", totalLength: "44,50", iso: "2,35", subtype: "Standart" },
      { model: "Mandril PM", code: "500.009.02", diameter: "6,6", totalLength: "44,50", iso: "2,35", subtype: "Tubular" },
      { model: "Mandril PM", code: "500.009.04", diameter: "25,0", totalLength: "32,0", iso: "2,35", subtype: "Roda" },
    ]
  },
  "apoio-lixas-afiacao": {
    subtypes: ["Apoio para Lixas de Podologia", "Afiação de Instrumentos"],
    titlePt: "APOIO PARA LIXAS E AFIAÇÃO",
    titleEn: "FILE SUPPORTS & SHARPENING",
    description: {
      pt: "Apoios para lixas e materiais de afiação profissional. Garantem precisão e segurança nos procedimentos.",
      en: "File supports and professional sharpening materials. Ensure precision and safety in procedures."
    },
    products: [
      // APOIO PARA LIXAS DE PODOLOGIA - RÍGIDO FIBRA GLASS
      { model: "Apoio para Lixas de Podologia", code: "500.013.07", diameter: "16/29", activeLength: "0,30", iso: "3", subtype: "Rígido Fibra Glass" },
      // APOIO PARA LIXAS DE PODOLOGIA - FLEXÍVEL SILICONE
      { model: "Apoio para Lixas de Podologia", code: "500.012.32", diameter: "16/29", activeLength: "1,00", iso: "3", subtype: "Flexível Silicone" },
      // AFIAÇÃO DE INSTRUMENTOS - DISCO COURO
      { model: "Afiação de Instrumentos", code: "500.008.12", diameter: "44,00", activeLength: "4,00", iso: "1", subtype: "Disco Couro" },
      // AFIAÇÃO DE INSTRUMENTOS - DISCO ABRASIVO
      { model: "Afiação de Instrumentos", code: "500.008.13", diameter: "34,00", activeLength: "1,40", iso: "1", subtype: "Disco Abrasivo" },
      // AFIAÇÃO DE INSTRUMENTOS - PASTA DE POLIMENTO
      { model: "Afiação de Instrumentos", code: "500.007.11", diameter: "5 GRAMAS", activeLength: "", iso: "1", subtype: "Pasta de Polimento" },
      // AFIAÇÃO DE INSTRUMENTOS - MANDRIL STANDART
      { model: "Afiação de Instrumentos", code: "500.009.01", diameter: "4,50", activeLength: "", iso: "1", subtype: "Mandril Standart" },
    ]
  },
  "linha-gold": {
    hasGoldLine: true,
    subtypes: ["Esférica Gold", "Cônica Gold", "Chama Gold", "Cilíndrica Gold"],
    titlePt: "LINHA GOLD",
    titleEn: "GOLD LINE",
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
  const { t } = useTranslation();
  const { currentLang } = useLanguage();
  const [activeGrain, setActiveGrain] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const pathParts = window.location.pathname.split("/");
  const category = pathParts[pathParts.length - 1];

  const getLocalizedPath = (path: string) => {
    if (currentLang === "en") return `/en${path}`;
    if (currentLang === "es") return `/es${path}`;
    return path;
  };

  // Map category slugs to translation keys
  const getCategoryTranslationKey = (slug: string): string => {
    const categoryTranslationKeys: Record<string, string> = {
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
    return categoryTranslationKeys[slug] || "diamondBurs";
  };

  const categoryKey = category ? categoryKeyMap[category] || category : "";
  const data = category ? productData[category] : null;

  // Group products by exact type name (full model name match for subtypes)
  const productsByType = useMemo(() => {
    if (!data) return {};
    const groups: Record<string, typeof data.products> = {};
    
    // If subtypes are defined, use them for grouping
    if (data.subtypes) {
      data.subtypes.forEach(subtype => {
        // For lixas, match by model starting with subtype name (e.g., "Laminar" matches "Laminar Premium (Norton)")
        if (category === 'lixas') {
          groups[subtype] = data.products.filter(product => 
            product.model.toLowerCase().startsWith(subtype.toLowerCase())
          );
        } else {
          groups[subtype] = data.products.filter(product => product.model === subtype);
        }
      });
    } else {
      // Default: group by first word
      data.products.forEach(product => {
        const baseType = product.model.split(' ')[0];
        if (!groups[baseType]) {
          groups[baseType] = [];
        }
        groups[baseType].push(product);
      });
    }
    
    return groups;
  }, [data?.products, data?.subtypes, category]);

  // Get featured images (first 3 products with images) - must be before early return
  const featuredImages = useMemo(() => {
    if (!data) return [];
    return data.products
      .filter(p => p.image)
      .slice(0, 3)
      .map(p => p.image);
  }, [data?.products]);

  if (!data) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">{t("products.categoryNotFound", "Categoria não encontrada")}</p>
            <Link to={getLocalizedPath("/produtos")} className="text-primary underline">
              {t("products.backToProducts", "Voltar aos Produtos")}
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Get products for selected type, filtered by grain and subcategory if active
  const getProductsForType = (typeName: string, subcategory?: string | null) => {
    let products = data?.products.filter(p => {
      // For lixas manuais, use the 'cut' field for filtering
      if (p.cut) return p.cut === typeName;
      // Otherwise use model matching
      return p.model.startsWith(typeName);
    }) || [];
    
    // Filter by subcategory if provided (for Maxi Cut / Mini Cut distinction)
    if (subcategory) {
      products = products.filter(p => p.subcategory === subcategory);
    }
    
    if (activeGrain) {
      products = products.filter(p => p.grain === activeGrain);
    }
    return products;
  };

  // Get image for a type (use first product's image)
  const getTypeImage = (typeName: string) => {
    const products = productsByType[typeName];
    return products?.[0]?.image;
  };

  const handleTypeClick = (typeName: string, subcategory?: string) => {
    setSelectedType(typeName);
    setSelectedSubcategory(subcategory || null);
    setIsModalOpen(true);
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

  const isGold = category === "linha-gold";

  return (
    <Layout>
      {/* 1. Hero Section - Dark background with 3 featured products */}
      <ProductCategoryHero
        category={category}
        categoryKey={categoryKey}
        featuredImages={featuredImages}
        getLocalizedPath={getLocalizedPath}
        isGold={isGold}
      />

      {/* 2. Catalog Section - Like the PDF catalog style (unique per category) */}
      <CatalogSection
        categorySlug={category}
        isGold={isGold}
      />

      {/* Grain Legend Section removed - now integrated into CatalogSection diagram */}

      {/* 4. Products Grid Section - "Selecione o Tipo" */}
      <section className="bg-muted/30 section-padding-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-foreground font-montserrat font-bold text-2xl md:text-3xl mb-4">
              {t("products.selectType")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("products.selectTypeDesc")}
            </p>
          </div>

          {/* Subcategories layout for lixas */}
          {data.subcategories ? (
            <div className="space-y-12">
              {Object.entries(data.subcategories).map(([subcatName, subcatData], subcatIdx) => {
                // Get translated subcategory name and description
                const translationKey = getCategoryTranslationKey(category);
                const translatedSubcatName = t(`products.${translationKey}.subcategories.${subcatName}.name`, subcatName);
                const translatedSubcatDesc = t(`products.${translationKey}.subcategories.${subcatName}.description`, subcatData.description);
                
                return (
                  <div key={subcatName} className="animate-fade-in" style={{ animationDelay: `${subcatIdx * 0.2}s` }}>
                    {/* Subcategory Header */}
                    <div className="mb-6">
                      <h3 className="text-foreground font-montserrat font-bold text-xl md:text-2xl mb-2">
                        {translatedSubcatName}
                      </h3>
                      <p className="text-muted-foreground">
                        {translatedSubcatDesc}
                      </p>
                    </div>
                    
                    {/* Type Cards Grid for this subcategory */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                      {subcatData.types.map((typeName, idx) => {
                        // Filter products by both type AND subcategory
                        // For lixas manuais, use the 'cut' field for filtering
                        const typeProducts = data.products.filter(p => {
                          if (p.subcategory !== subcatName) return false;
                          // For lixas manuais, check the 'cut' field
                          if (p.cut) return p.cut === typeName;
                          // Otherwise fall back to model matching
                          return p.model.startsWith(typeName);
                        });
                        return (
                          <div
                            key={typeName}
                            className="animate-fade-in"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                          >
                            <CategoryTypeCard
                              typeName={typeName}
                              image={typeProducts[0]?.image}
                              productCount={typeProducts.length}
                              onClick={() => handleTypeClick(typeName, subcatName)}
                              isGold={isGold}
                              categorySlug={category}
                              subcategoryName={subcatName}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Default Type Cards Grid - centered */
            <div className="flex justify-center w-full">
              <div className={`grid gap-6 mb-16 ${
                Object.keys(productsByType).length <= 3 
                  ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto justify-items-center' 
                  : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
              }`}>
                {Object.keys(productsByType).map((typeName, idx) => (
                  <div
                    key={typeName}
                    className="animate-fade-in w-full max-w-[250px]"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <CategoryTypeCard
                      typeName={typeName}
                      image={getTypeImage(typeName)}
                      productCount={getProductsForType(typeName).length}
                      onClick={() => handleTypeClick(typeName)}
                      isGold={isGold}
                      categorySlug={category}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonials Carousel */}
          <div className="mt-16">
            <h2 className="text-foreground font-montserrat font-bold text-2xl md:text-3xl mb-8 text-center">
              {t("products.testimonials.title")}
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

      {/* 5. CTA Section - Dark navy blue for better site identity */}
      <section className="bg-[#1a2332] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white font-montserrat font-bold text-2xl md:text-3xl mb-4">
            {t("products.requestQuoteTitle")}
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            {t("products.ctaCategoryDesc")}
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
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-10 py-4 rounded-xl hover:bg-gray-100 transition-all hover:scale-105 border-2 border-white"
            >
              <Download size={20} />
              {t("products.downloadThisLine")}
            </a>
          </div>
        </div>
      </section>

      {/* Product Type Modal */}
      {selectedType && (
        <CategoryTypeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          typeName={selectedType}
          products={getProductsForType(selectedType, selectedSubcategory)}
          typeImage={getTypeImage(selectedType)}
          isGold={isGold}
          categorySlug={category}
        />
      )}

    </Layout>
  );
};

export default ProductCategory;
