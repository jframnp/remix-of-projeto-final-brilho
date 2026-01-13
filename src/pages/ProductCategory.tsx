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
    subtypes: ["Maxi Cut", "Mini Cut"],
    titlePt: "FRESAS DE TUNGSTÊNIO",
    titleEn: "TUNGSTEN BURS",
    description: {
      pt: "Fresas de tungstênio de alta performance para procedimentos que exigem precisão e durabilidade. Ideais para laboratórios de prótese e aplicações industriais.",
      en: "High-performance tungsten burs for procedures requiring precision and durability. Ideal for prosthesis laboratories and industrial applications."
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
    titlePt: "FRESAS DE CERÂMICA",
    titleEn: "CERAMIC BURS",
    description: {
      pt: "Fresas cerâmicas de alta tecnologia para acabamentos perfeitos e procedimentos delicados. Resistentes ao calor e de longa durabilidade.",
      en: "High-tech ceramic burs for perfect finishes and delicate procedures. Heat resistant and long lasting."
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
    subtypes: ["Boomerang", "Quadrada", "Gota", "Caixão", "Laminar", "Plantar", "Tubular", "Base"],
    subcategories: {
      "Lixas Manuais": {
        description: "Lixas tradicionais para nail design - formatos ergonômicos para acabamento perfeito",
        types: ["Boomerang", "Quadrada", "Gota", "Caixão"]
      },
      "Lixas com Mandril": {
        description: "Lixas para uso com motor/mandril - ideais para podologia e procedimentos profissionais",
        types: ["Laminar", "Plantar", "Tubular", "Base"]
      }
    },
    titlePt: "LIXAS",
    titleEn: "SANDING FILES",
    description: {
      pt: "Lixas profissionais de alta qualidade para podologia e nail design. Disponíveis em diversas granulometrias e formatos para diferentes aplicações.",
      en: "High-quality professional files for podiatry and nail design. Available in various grits and shapes for different applications."
    },
    products: [
      // Lixas Manuais
      { model: "Boomerang Nails Verde", code: "LX-BNV-150", diameter: "N/A", grain: "150/180", subcategory: "Lixas Manuais" },
      { model: "Boomerang White 2mm", code: "LX-BW-180", diameter: "N/A", grain: "180", subcategory: "Lixas Manuais" },
      { model: "Quadrada Preta", code: "LX-QP-100", diameter: "N/A", grain: "100/180", subcategory: "Lixas Manuais" },
      { model: "Quadrada Branca", code: "LX-QB-150", diameter: "N/A", grain: "150/180", subcategory: "Lixas Manuais" },
      { model: "Gota Rosa", code: "LX-GR-100", diameter: "N/A", grain: "100/180", subcategory: "Lixas Manuais" },
      { model: "Gota Preta", code: "LX-GP-150", diameter: "N/A", grain: "150/180", subcategory: "Lixas Manuais" },
      { model: "Caixão Premium", code: "LX-CP-100", diameter: "N/A", grain: "100/180", subcategory: "Lixas Manuais" },
      { model: "Caixão Descartável", code: "LX-CD-150", diameter: "N/A", grain: "150/180", subcategory: "Lixas Manuais" },
      // Lixas com Mandril
      { model: "Laminar Premium (Norton)", code: "LX-LP-80", diameter: "15mm", grain: "80", subcategory: "Lixas com Mandril" },
      { model: "Laminar Premium (Norton)", code: "LX-LP-100", diameter: "15mm", grain: "100", subcategory: "Lixas com Mandril" },
      { model: "Laminar Premium (Norton)", code: "LX-LP-120", diameter: "15mm", grain: "120", subcategory: "Lixas com Mandril" },
      { model: "Plantar Premium (Norton)", code: "LX-PP-60", diameter: "25mm", grain: "60", subcategory: "Lixas com Mandril" },
      { model: "Plantar Premium (Norton)", code: "LX-PP-80", diameter: "25mm", grain: "80", subcategory: "Lixas com Mandril" },
      { model: "Tubular Send Grossa", code: "LT-TG-60", diameter: "10mm", grain: "60", subcategory: "Lixas com Mandril" },
      { model: "Tubular Send Média", code: "LT-TM-80", diameter: "10mm", grain: "80", subcategory: "Lixas com Mandril" },
      { model: "Tubular Send Fina", code: "LT-TF-120", diameter: "10mm", grain: "120", subcategory: "Lixas com Mandril" },
      { model: "Base Inox Boomerang", code: "LX-BIB-01", diameter: "N/A", grain: "N/A", subcategory: "Lixas com Mandril" },
      { model: "Base Inox Plantar", code: "LX-BIP-01", diameter: "25mm", grain: "N/A", subcategory: "Lixas com Mandril" },
    ]
  },
  "polidoras": {
    titlePt: "POLIDORAS",
    titleEn: "POLISHERS",
    description: {
      pt: "Polidoras de silicone em diversas cores e granulometrias para acabamento perfeito. Sistema de cores para fácil identificação.",
      en: "Silicone polishers in various colors and grits for perfect finishing. Color system for easy identification."
    },
    products: [
      { model: "Torpedo Ogival", code: "PO-TOG-EG", diameter: "8mm", grain: "Extra Grosso", color: "Preto" },
      { model: "Torpedo Ogival", code: "PO-TOG-G", diameter: "8mm", grain: "Grosso", color: "Azul", image: PolidoraAzul },
      { model: "Torpedo Ogival", code: "PO-TOG-M", diameter: "8mm", grain: "Médio", color: "Verde", image: PolidoraVerde },
      { model: "Torpedo Grande", code: "PO-TG-F", diameter: "10mm", grain: "Fino", color: "Amarelo" },
      { model: "Torpedo Média", code: "PO-TM-EF", diameter: "6mm", grain: "Extra Fino", color: "Rosa" },
      { model: "Cilíndrica", code: "PO-CIL-UF", diameter: "5mm", grain: "Ultra Fino", color: "Branco", image: PolidoraCinza },
      { model: "Chama Pequena", code: "PO-CP-M", diameter: "4mm", grain: "Médio", color: "Verde" },
    ]
  },
  "escovas-limpeza": {
    titlePt: "ESCOVAS DE LIMPEZA",
    titleEn: "CLEANING BRUSHES",
    description: {
      pt: "Escovas de limpeza e acessórios para manutenção de brocas e instrumentos. Essenciais para prolongar a vida útil dos equipamentos.",
      en: "Cleaning brushes and accessories for maintaining burs and instruments. Essential for extending equipment life."
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
    titlePt: "FIBRAS, ENUCLEADORA E MANDRIL",
    titleEn: "FIBERS, ENUCLEATORS & MANDRELS",
    description: {
      pt: "Fibras moleculares, enucleadoras e mandris de alta qualidade. Componentes essenciais para diversos procedimentos.",
      en: "High-quality molecular fibers, enucleators and mandrels. Essential components for various procedures."
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
    titlePt: "APOIO PARA LIXAS E AFIAÇÃO",
    titleEn: "FILE SUPPORTS & SHARPENING",
    description: {
      pt: "Apoios para lixas e materiais de afiação profissional. Garantem precisão e segurança nos procedimentos.",
      en: "File supports and professional sharpening materials. Ensure precision and safety in procedures."
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const pathParts = window.location.pathname.split("/");
  const category = pathParts[pathParts.length - 1];

  const getLocalizedPath = (path: string) => {
    if (currentLang === "en") return `/en${path}`;
    if (currentLang === "es") return `/es${path}`;
    return path;
  };

  const categoryKey = category ? categoryKeyMap[category] || category : "";
  const data = category ? productData[category] : null;

  // Group products by type (model name base) - must be before early return
  const productsByType = useMemo(() => {
    if (!data) return {};
    const groups: Record<string, typeof data.products> = {};
    
    data.products.forEach(product => {
      const baseType = product.model.split(' ')[0];
      if (!groups[baseType]) {
        groups[baseType] = [];
      }
      groups[baseType].push(product);
    });
    
    return groups;
  }, [data?.products]);

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
            <p className="text-muted-foreground mb-4">Categoria não encontrada</p>
            <Link to={getLocalizedPath("/produtos")} className="text-primary underline">
              Voltar aos Produtos
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Get products for selected type, filtered by grain if active
  const getProductsForType = (typeName: string) => {
    let products = productsByType[typeName] || [];
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

  const handleTypeClick = (typeName: string) => {
    setSelectedType(typeName);
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
        description={currentLang === "en" ? data.description.en : data.description.pt}
        featuredImages={featuredImages}
        getLocalizedPath={getLocalizedPath}
        isGold={isGold}
      />

      {/* 2. Catalog Section - Like the PDF catalog style (unique per category) */}
      <CatalogSection
        categoryTitle={data.titlePt}
        categorySubtitle={data.titleEn}
        descriptionPt={data.description.pt}
        descriptionEn={data.description.en}
        categorySlug={category}
        isGold={isGold}
      />

      {/* Grain Legend Section removed - now integrated into CatalogSection diagram */}

      {/* 4. Products Grid Section - "Selecione o Tipo" */}
      <section className="bg-muted/30 section-padding-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-foreground font-montserrat font-bold text-2xl md:text-3xl mb-4">
              {t("products.selectType", "Selecione o Tipo")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("products.selectTypeDesc", "Clique em um tipo para ver todos os modelos disponíveis com especificações completas.")}
            </p>
          </div>

          {/* Subcategories layout for lixas */}
          {data.subcategories ? (
            <div className="space-y-12">
              {Object.entries(data.subcategories).map(([subcatName, subcatData], subcatIdx) => (
                <div key={subcatName} className="animate-fade-in" style={{ animationDelay: `${subcatIdx * 0.2}s` }}>
                  {/* Subcategory Header */}
                  <div className="mb-6">
                    <h3 className="text-foreground font-montserrat font-bold text-xl md:text-2xl mb-2">
                      {subcatName}
                    </h3>
                    <p className="text-muted-foreground">
                      {subcatData.description}
                    </p>
                  </div>
                  
                  {/* Type Cards Grid for this subcategory */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {subcatData.types.map((typeName, idx) => {
                      const typeProducts = data.products.filter(p => p.model.startsWith(typeName));
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
                            onClick={() => handleTypeClick(typeName)}
                            isGold={isGold}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Default Type Cards Grid */
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
              {Object.keys(productsByType).map((typeName, idx) => (
                <div
                  key={typeName}
                  className="animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CategoryTypeCard
                    typeName={typeName}
                    image={getTypeImage(typeName)}
                    productCount={getProductsForType(typeName).length}
                    onClick={() => handleTypeClick(typeName)}
                    isGold={isGold}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Testimonials Carousel */}
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

      {/* 5. CTA Section - Dark navy blue for better site identity */}
      <section className="bg-[#1a2332] py-16">
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
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-10 py-4 rounded-xl hover:bg-gray-100 transition-all hover:scale-105 border-2 border-white"
            >
              <Download size={20} />
              {t("products.downloadThisLine", "Baixar Esta Linha em PDF")}
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
          products={getProductsForType(selectedType)}
          typeImage={getTypeImage(selectedType)}
          isGold={isGold}
        />
      )}

    </Layout>
  );
};

export default ProductCategory;
