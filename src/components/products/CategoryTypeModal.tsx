import { useTranslation } from "react-i18next";
import { X, Download, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import LixaTubular from "@/assets/products/lixa-tubular.png";
import LixaAdesiva from "@/assets/products/lixa-adesiva-circular.png";

// Tungsten bur images by model number - Corte Cruzado Médio
import Fresa1507 from "@/assets/products/fresa-1507.png";
import Fresa1508 from "@/assets/products/fresa-1508.png";
import Fresa1509 from "@/assets/products/fresa-1509.png";
import Fresa1510 from "@/assets/products/fresa-1510.png";
import Fresa1517 from "@/assets/products/fresa-1517.png";
import Fresa1520 from "@/assets/products/fresa-1520.png";
import Fresa92 from "@/assets/products/fresa-92.png";
import Fresa95 from "@/assets/products/fresa-95.png";
import Fresa1251 from "@/assets/products/fresa-1251.png";
import Fresa3029 from "@/assets/products/fresa-3029.png";

// Tungsten bur images - Corte Cruzado Fino
import Fresa1507F from "@/assets/products/fresa-1507F.png";
import Fresa1508F from "@/assets/products/fresa-1508F.png";
import Fresa1509F from "@/assets/products/fresa-1509F.png";
import Fresa1510F from "@/assets/products/fresa-1510F.png";
import Fresa1517F from "@/assets/products/fresa-1517F.png";
import Fresa1520F from "@/assets/products/fresa-1520F.png";
import Fresa92F from "@/assets/products/fresa-92F.png";
import Fresa95F from "@/assets/products/fresa-95F.png";
import Fresa1251F from "@/assets/products/fresa-1251F.png";

// Tungsten bur images - Corte Cruzado Extra Fino
import Fresa1508XEF from "@/assets/products/fresa-1508XEF.png";
import Fresa1510XEF from "@/assets/products/fresa-1510XEF.png";
import Fresa1520XEF from "@/assets/products/fresa-1520XEF.png";

// Tungsten bur images - Corte Cruzado Grosso
import Fresa1508G from "@/assets/products/fresa-1508G.png";

// Tungsten bur images - Corte Reto
import Fresa717EG from "@/assets/products/fresa-717EG.png";
import Fresa717G from "@/assets/products/fresa-717G.png";
import Fresa717 from "@/assets/products/fresa-717.png";
import Fresa717F from "@/assets/products/fresa-717F.png";
import Fresa717XEF from "@/assets/products/fresa-717XEF.png";

// Tungsten bur images - Mini Cut - Corte Cruzado Médio
import Fresa1503 from "@/assets/products/fresa-1503.png";
import Fresa1511 from "@/assets/products/fresa-1511.png";
import Fresa1512 from "@/assets/products/fresa-1512.png";
import Fresa1571 from "@/assets/products/fresa-1571.png";
import Fresa3022 from "@/assets/products/fresa-3022.png";
import Fresa4061 from "@/assets/products/fresa-4061.png";

// Tungsten bur images - Mini Cut - Corte Cruzado Fino
import Fresa1503F from "@/assets/products/fresa-1503F.png";
import Fresa1511F from "@/assets/products/fresa-1511F.png";
import Fresa1512F from "@/assets/products/fresa-1512F.png";
import Fresa1571F from "@/assets/products/fresa-1571F.png";
import Fresa3022F from "@/assets/products/fresa-3022F.png";

// Tungsten bur images - Mini Cut - Corte Cruzado Extra Fino
import Fresa1503XEF from "@/assets/products/fresa-1503XEF.png";
import Fresa1511XEF from "@/assets/products/fresa-1511XEF.png";
import Fresa1571XEF from "@/assets/products/fresa-1571XEF.png";

// Tungsten bur images - Mini Cut - Corte Cruzado Grosso
import Fresa1503G1511G from "@/assets/products/fresa-1503G-1511G.png";

// Ceramic bur images - Maxi Cut - Corte Cruzado Médio
import FresaCeramica1508C from "@/assets/products/fresa-ceramica-1508C.png";
import FresaCeramica1509C from "@/assets/products/fresa-ceramica-1509C.png";
import FresaCeramica1510C from "@/assets/products/fresa-ceramica-1510C.png";
import FresaCeramica1517C from "@/assets/products/fresa-ceramica-1517C.png";
import FresaCeramica85C from "@/assets/products/fresa-ceramica-85C.png";
import FresaCeramica95C from "@/assets/products/fresa-ceramica-95C.png";
import FresaCeramica717C from "@/assets/products/fresa-ceramica-717C.png";

// Ceramic bur images - Maxi Cut - Corte Cruzado Fino
import FresaCeramica1508CF from "@/assets/products/fresa-ceramica-1508CF.png";
import FresaCeramica1509CF from "@/assets/products/fresa-ceramica-1509CF.png";
import FresaCeramica1510CF from "@/assets/products/fresa-ceramica-1510CF.png";
import FresaCeramica1517CF from "@/assets/products/fresa-ceramica-1517CF.png";
import FresaCeramica85CF from "@/assets/products/fresa-ceramica-85CF.png";
import FresaCeramica95CF from "@/assets/products/fresa-ceramica-95CF.png";
import FresaCeramica717CF from "@/assets/products/fresa-ceramica-717CF.png";

// Ceramic bur images - Maxi Cut - Corte Cruzado Extra Fino
import FresaCeramica1508CXF from "@/assets/products/fresa-ceramica-1508CXF.png";
import FresaCeramica1509CXF from "@/assets/products/fresa-ceramica-1509CXF.png";
import FresaCeramica1510CXF from "@/assets/products/fresa-ceramica-1510CXF.png";
import FresaCeramica1517CXF from "@/assets/products/fresa-ceramica-1517CXF.png";
import FresaCeramica85CXF from "@/assets/products/fresa-ceramica-85CXF.png";
import FresaCeramica95CXF from "@/assets/products/fresa-ceramica-95CXF.png";
import FresaCeramica717CXF from "@/assets/products/fresa-ceramica-717CXF.png";

// Ceramic bur images - Maxi Cut - Corte Cruzado Grosso
import FresaCeramica95CG from "@/assets/products/fresa-ceramica-95CG.png";
import FresaCeramica1509CG from "@/assets/products/fresa-ceramica-1509CG.png";

// Ceramic bur images - Mini Cut - Corte Cruzado Médio
import FresaCeramica1571C from "@/assets/products/fresa-ceramica-1571C.png";
import FresaCeramica07C from "@/assets/products/fresa-ceramica-07C.png";
import FresaCeramica859C from "@/assets/products/fresa-ceramica-859C.png";

// Map tungsten bur model numbers to their images
const tungstenBurImages: Record<string, string> = {
  "1507": Fresa1507,
  "1508": Fresa1508,
  "1509": Fresa1509,
  "1510": Fresa1510,
  "1517": Fresa1517,
  "1520": Fresa1520,
  "92": Fresa92,
  "95": Fresa95,
  "1251": Fresa1251,
  "3029": Fresa3029,
  "1507F": Fresa1507F,
  "1508F": Fresa1508F,
  "1509F": Fresa1509F,
  "1510F": Fresa1510F,
  "1517F": Fresa1517F,
  "1520F": Fresa1520F,
  "92F": Fresa92F,
  "95F": Fresa95F,
  "1251F": Fresa1251F,
  "1508XEF": Fresa1508XEF,
  "1510XEF": Fresa1510XEF,
  "1520XEF": Fresa1520XEF,
  "1508G": Fresa1508G,
  "717EG": Fresa717EG,
  "717G": Fresa717G,
  "717": Fresa717,
  "717F": Fresa717F,
  "717XEF": Fresa717XEF,
  "1503": Fresa1503,
  "1511": Fresa1511,
  "1512": Fresa1512,
  "1571": Fresa1571,
  "3022": Fresa3022,
  "4061": Fresa4061,
  "1503F": Fresa1503F,
  "1511F": Fresa1511F,
  "1512F": Fresa1512F,
  "1571F": Fresa1571F,
  "3022F": Fresa3022F,
  "1503XEF": Fresa1503XEF,
  "1511XEF": Fresa1511XEF,
  "1571XEF": Fresa1571XEF,
  "1503G/1511G": Fresa1503G1511G,
};

// Map ceramic bur model numbers to their images
const ceramicBurImages: Record<string, string> = {
  "1508C": FresaCeramica1508C,
  "1509C": FresaCeramica1509C,
  "1510C": FresaCeramica1510C,
  "1517C": FresaCeramica1517C,
  "85C": FresaCeramica85C,
  "95C": FresaCeramica95C,
  "717C": FresaCeramica717C,
  "1508CF": FresaCeramica1508CF,
  "1509CF": FresaCeramica1509CF,
  "1510CF": FresaCeramica1510CF,
  "1517CF": FresaCeramica1517CF,
  "85CF": FresaCeramica85CF,
  "95CF": FresaCeramica95CF,
  "717CF": FresaCeramica717CF,
  "1508CXF": FresaCeramica1508CXF,
  "1509CXF": FresaCeramica1509CXF,
  "1510CXF": FresaCeramica1510CXF,
  "1517CXF": FresaCeramica1517CXF,
  "85CXF": FresaCeramica85CXF,
  "95CXF": FresaCeramica95CXF,
  "717CXF": FresaCeramica717CXF,
  "95CG": FresaCeramica95CG,
  "1509CG": FresaCeramica1509CG,
  "1571C": FresaCeramica1571C,
  "07C": FresaCeramica07C,
  "859C": FresaCeramica859C,
};

interface Product {
  model: string;
  code: string;
  iso?: string;
  diameter?: string;
  grain?: string;
  cut?: string;
  color?: string;
  activeLength?: string;
  image?: string;
}

interface CategoryTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  typeName: string;
  products: Product[];
  typeImage?: string;
  isGold?: boolean;
  categorySlug?: string;
}

// Grain color map for POLIDORAS section - specific colors from catalog
const polidorasGrainColorMap: Record<string, { color: string; border?: boolean }> = {
  "Extra Grosso": { color: "#5D3A1A" },           // Marrom escuro
  "Grosso": { color: "#808080" },                 // Cinza
  "Médio-Grosso": { color: "#FFFFFF", border: true }, // Branco com borda
  "Médio": { color: "#1B7D3A" },                  // Verde
  "Fino": { color: "#0066CC" },                   // Azul
  "Extra Fino": { color: "#FFD700" },             // Amarelo
  "Ultra Fino": { color: "#9C6B8E" },             // Rosa/Mauve
};

// Grain color map for BROCAS DIAMANTADAS - vermelho (Grosso) e azul (Fino) as per catalog
const diamantadasGrainColorMap: Record<string, { color: string; border?: boolean }> = {
  "Grosso": { color: "#C62828" },                 // Vermelho
  "Fino": { color: "#0066CC" },                   // Azul
};

// Default grain color map for other categories - Médio=Azul, Grosso=Verde, Extra Grosso=Roxo
const defaultGrainColorMap: Record<string, { color: string; border?: boolean }> = {
  "Extra Grosso": { color: "#8B5CF6" },           // Roxo
  "Grosso": { color: "#1B7D3A" },                 // Verde
  "Médio-Grosso": { color: "#FFFFFF", border: true }, // Branco com borda
  "Médio": { color: "#0066CC" },                  // Azul
  "Fino": { color: "#C62828" },                   // Vermelho
  "Extra Fino": { color: "#FFD700" },             // Amarelo
  "Ultra Fino": { color: "#C62828" },             // Vermelho
};

// Categories that have grain information
const categoriesWithGrain = ['brocas-diamantadas', 'fresas-tungstenio', 'fresas-ceramica', 'polidoras', 'linha-gold'];

// Function to check if category has grain
const categoryHasGrain = (categorySlug?: string): boolean => {
  return categorySlug ? categoriesWithGrain.includes(categorySlug) : false;
};

// Function to get the correct grain color map based on category
const getGrainColorMap = (categorySlug?: string): Record<string, { color: string; border?: boolean }> => {
  if (categorySlug === 'polidoras') {
    return polidorasGrainColorMap;
  }
  if (categorySlug === 'brocas-diamantadas') {
    return diamantadasGrainColorMap;
  }
  return defaultGrainColorMap;
};

// Get unique grain colors for a product (can have multiple)
const getProductGrains = (product: Product): string[] => {
  if (!product.grain) return [];
  // For now, just return the single grain, but could expand for multiple
  return [product.grain];
};

// Extract product name from code - returns readable model names
const getProductName = (code: string, model?: string): string => {
  // For diamond burs with format "500.001.XXX" -> "PM718", "PM720L", etc.
  const diamondBurMatch = code.match(/500\.001\.(.+)$/);
  if (diamondBurMatch) {
    return `PM${diamondBurMatch[1]}`;
  }
  
  // For tungsten burs with format "500.002.XXXX" -> show model suffix (e.g., "1507", "1507F", "717")
  const tungstenMatch = code.match(/500\.002\.(.+)$/);
  if (tungstenMatch) {
    const modelName = tungstenMatch[1].toUpperCase();
    // Special case for Ponta Dupla - show as 1503/1511
    if (modelName === 'PONTA DUPLA') {
      return '1503/1511';
    }
    return modelName;
  }
  
  // For ceramic burs with format "500.004.XXXX" -> show model suffix (e.g., "1508C", "717C")
  const ceramicMatch = code.match(/500\.004\.(.+)$/);
  if (ceramicMatch) {
    return ceramicMatch[1].toUpperCase();
  }
  
  // For polidoras with format "500.008.XXXX"
  const polisherMatch = code.match(/500\.008\.(.+)$/);
  if (polisherMatch) {
    return polisherMatch[1];
  }
  
  // For lixas with specific patterns
  if (code.startsWith('LX-') || code.startsWith('LT-')) {
    return code;
  }
  
  // For other products, just return the model name if available
  if (model) {
    return model;
  }
  
  return code;
};

const CategoryTypeModal = ({ isOpen, onClose, typeName, products, typeImage, isGold = false, categorySlug }: CategoryTypeModalProps) => {
  const { t } = useTranslation();

  // Get translated type name
  const getTranslatedTypeName = (name: string): string => {
    const translationKey = `products.diamondBurs.types.${name}`;
    const translated = t(translationKey, name);
    return translated !== translationKey ? translated : name;
  };
  
  const translatedTypeName = getTranslatedTypeName(typeName);

  // Check if this category has grain information
  const hasGrain = categoryHasGrain(categorySlug);
  
  // Get the correct grain color map based on category
  const grainColorMap = getGrainColorMap(categorySlug);
  
  // For Brocas Diamantadas, show both colors (available in both grains)
  const showBothGrains = categorySlug === 'brocas-diamantadas';

  // Catalog-style table design matching the PDF reference
  const headerBgColor = isGold ? "#FFC107" : "#C62828";
  const headerTextColor = isGold ? "#795548" : "#FFFFFF";
  const rowBgLight = isGold ? "#FFF8E1" : "#FFEBEE";
  const rowBgWhite = "#FFFFFF";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="p-0">
          {/* Title Header - Catalog Style */}
          <div className="p-4 sm:p-6 pb-2 sm:pb-4">
            <h2 
              className="font-montserrat font-black text-2xl sm:text-4xl md:text-5xl tracking-tight"
              style={{ color: isGold ? "#FFC107" : "#C62828" }}
            >
              {translatedTypeName.toUpperCase()}
            </h2>
            <p className="text-muted-foreground font-light text-sm sm:text-lg mt-1">
              {t(`products.types.${typeName.toLowerCase()}`, typeName)}
            </p>
          </div>
        </DialogHeader>

        <div className="px-3 sm:px-6 pb-4 sm:pb-6 overflow-x-auto">
          {/* Product Image - Show for Tubular and Adesiva at top */}
          {categorySlug === 'lixas' && (typeName.toLowerCase().includes('tubular') || typeName.toLowerCase().includes('adesiva')) && (
            <div className="flex justify-center items-center p-4 mb-4">
              <img 
                src={typeName.toLowerCase().includes('adesiva') ? LixaAdesiva : LixaTubular}
                alt={translatedTypeName}
                className="max-w-full max-h-[160px] sm:max-h-[200px] object-contain rounded-lg"
              />
            </div>
          )}
          
          {/* Catalog-Style Horizontal Table */}
          <div className="min-w-max">
            {/* Table Rows - Catalog Style */}
            <table className="w-full border-collapse text-xs sm:text-sm">
              <tbody>
                {/* MODELOS Row */}
                <tr style={{ backgroundColor: headerBgColor }}>
                  <td 
                    className="w-[80px] sm:w-[140px] px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm tracking-wider"
                    style={{ color: headerTextColor }}
                  >
                    {t("products.table.model", "MODELOS").toUpperCase()}
                  </td>
                  {products.map((product, idx) => {
                    // For Lixas, show the variant name (Branca, Green, Fina) or model name
                    const isLixaCategory = categorySlug === 'lixas';
                    let displayName = getProductName(product.code);
                    
                    if (isLixaCategory) {
                      // Extract the variant from model name (e.g., "Gota Branca" -> "Branca")
                      const modelParts = product.model.split(' ');
                      if (modelParts.length > 1) {
                        displayName = modelParts.slice(1).join(' '); // Get everything after first word
                      } else {
                        displayName = product.model; // For single-word models like "Tubular"
                      }
                    }
                    
                    return (
                      <td 
                        key={idx}
                        className="px-1 sm:px-2 py-2 sm:py-3 text-center font-bold min-w-[60px] sm:min-w-[100px] text-[8px] sm:text-xs"
                        style={{ color: headerTextColor }}
                      >
                        {displayName}
                      </td>
                    );
                  })}
                </tr>

                {/* DIAGRAM Row - For Brocas Diamantadas and Lixas */}
                {(categorySlug === 'brocas-diamantadas' || categorySlug === 'lixas') && (
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3" style={{ color: headerBgColor }}></td>
                    {products.map((product, idx) => {
                      const diameterValue = parseFloat(product.diameter?.replace('mm', '') || '0');
                      const activeLengthValue = parseFloat(product.activeLength?.replace('mm', '') || '0');
                      const typeNameLower = typeName.toLowerCase();
                      
                      // Common stem dimensions
                      const stemWidth = 4;
                      const stemHeight = 30;
                      
                      // Esférica (Spherical)
                      if (typeNameLower.includes('esférica')) {
                        const sphereSize = Math.max(6, Math.min(28, diameterValue * 2.5));
                        const svgHeight = stemHeight + sphereSize + 4;
                        const svgWidth = Math.max(sphereSize + 8, 36);
                        
                        return (
                          <td key={idx} className="px-1 sm:px-2 py-3 sm:py-4 text-center">
                            <div className="flex justify-center">
                              <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
                                <path d={`M${svgWidth/2 - 2} ${svgHeight} L${svgWidth/2 - 1} ${sphereSize + 4} L${svgWidth/2 + 1} ${sphereSize + 4} L${svgWidth/2 + 2} ${svgHeight} Z`} fill="#1a1a1a"/>
                                <circle cx={svgWidth/2} cy={sphereSize/2 + 2} r={sphereSize/2} fill="#1a1a1a"/>
                              </svg>
                            </div>
                          </td>
                        );
                      }
                      
                      // Cônica Topo Invertido (Inverted Cone)
                      if (typeNameLower.includes('cônica topo invertido')) {
                        const topWidth = Math.max(8, Math.min(32, diameterValue * 2.8));
                        const bottomWidth = Math.max(4, topWidth * 0.4);
                        const coneHeight = Math.max(10, Math.min(24, diameterValue * 1.8));
                        const svgWidth = topWidth + 12;
                        const svgHeight = stemHeight + coneHeight + 4;
                        
                        return (
                          <td key={idx} className="px-1 sm:px-2 py-3 sm:py-4 text-center">
                            <div className="flex justify-center">
                              <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
                                <path d={`M${svgWidth/2 - 2} ${svgHeight} L${svgWidth/2 - 2} ${coneHeight + 4} L${svgWidth/2 + 2} ${coneHeight + 4} L${svgWidth/2 + 2} ${svgHeight} Z`} fill="#1a1a1a"/>
                                <path d={`M${(svgWidth - topWidth)/2} 2 L${(svgWidth + topWidth)/2} 2 L${(svgWidth + bottomWidth)/2} ${coneHeight + 2} L${(svgWidth - bottomWidth)/2} ${coneHeight + 2} Z`} fill="#1a1a1a"/>
                              </svg>
                            </div>
                          </td>
                        );
                      }
                      
                      // Roda (Wheel) - flat disc
                      if (typeNameLower.includes('roda')) {
                        const discWidth = Math.max(12, Math.min(36, diameterValue * 3));
                        const discHeight = Math.max(4, Math.min(10, activeLengthValue * 3));
                        const svgWidth = discWidth + 12;
                        const svgHeight = stemHeight + discHeight + 6;
                        
                        return (
                          <td key={idx} className="px-1 sm:px-2 py-3 sm:py-4 text-center">
                            <div className="flex justify-center">
                              <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
                                <path d={`M${svgWidth/2 - 2} ${svgHeight} L${svgWidth/2 - 2} ${discHeight + 6} L${svgWidth/2 + 2} ${discHeight + 6} L${svgWidth/2 + 2} ${svgHeight} Z`} fill="#1a1a1a"/>
                                <rect x={(svgWidth - discWidth)/2} y={2} width={discWidth} height={discHeight} fill="#1a1a1a"/>
                              </svg>
                            </div>
                          </td>
                        );
                      }
                      
                      // Cônica Topo Arredondado (Conical Rounded Top)
                      if (typeNameLower.includes('cônica topo arredondado')) {
                        const modelCode = getProductName(product.code);
                        const is721 = modelCode.includes('721');
                        
                        const width = Math.max(8, Math.min(20, diameterValue * 4));
                        const bodyHeight = Math.max(24, Math.min(50, activeLengthValue * 3));
                        const svgWidth = width + 16;
                        const svgHeight = stemHeight + bodyHeight + 6;
                        
                        if (is721) {
                          // PM721: Tapered - wider at bottom, narrower at top
                          const bottomWidth = width;
                          const topWidth = bottomWidth * 0.55;
                          const topRadius = topWidth / 2;
                          
                          return (
                            <td key={idx} className="px-1 sm:px-2 py-3 sm:py-4 text-center">
                              <div className="flex justify-center">
                                <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
                                  <rect x={svgWidth/2 - 1.5} y={bodyHeight + 6} width={3} height={stemHeight} fill="#1a1a1a"/>
                                  <path d={`
                                    M${svgWidth/2 - bottomWidth/2} ${bodyHeight + 4}
                                    L${svgWidth/2 - topWidth/2} ${topRadius + 4}
                                    A${topRadius} ${topRadius} 0 0 1 ${svgWidth/2 + topWidth/2} ${topRadius + 4}
                                    L${svgWidth/2 + bottomWidth/2} ${bodyHeight + 4}
                                    Z
                                  `} fill="#1a1a1a"/>
                                </svg>
                              </div>
                            </td>
                          );
                        } else {
                          // PM718, PM720, PM720L: Cylinder with straight sides and rounded top
                          const radius = width / 2;
                          
                          return (
                            <td key={idx} className="px-1 sm:px-2 py-3 sm:py-4 text-center">
                              <div className="flex justify-center">
                                <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
                                  <rect x={svgWidth/2 - 1.5} y={bodyHeight + 6} width={3} height={stemHeight} fill="#1a1a1a"/>
                                  <path d={`
                                    M${svgWidth/2 - width/2} ${bodyHeight + 4}
                                    L${svgWidth/2 - width/2} ${radius + 4}
                                    A${radius} ${radius} 0 0 1 ${svgWidth/2 + width/2} ${radius + 4}
                                    L${svgWidth/2 + width/2} ${bodyHeight + 4}
                                    Z
                                  `} fill="#1a1a1a"/>
                                </svg>
                              </div>
                            </td>
                          );
                        }
                      }
                      
                      // Cônica Topo Plano (Tapered Flat End)
                      if (typeNameLower.includes('cônica topo plano')) {
                        const topWidth = Math.max(6, Math.min(24, diameterValue * 3));
                        const coneHeight = Math.max(12, Math.min(32, activeLengthValue * 2.2));
                        const bottomWidth = Math.max(4, topWidth * 0.3);
                        const svgWidth = topWidth + 12;
                        const svgHeight = stemHeight + coneHeight + 4;
                        
                        return (
                          <td key={idx} className="px-1 sm:px-2 py-3 sm:py-4 text-center">
                            <div className="flex justify-center">
                              <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
                                <path d={`M${svgWidth/2 - 2} ${svgHeight} L${svgWidth/2 - 2} ${coneHeight + 4} L${svgWidth/2 + 2} ${coneHeight + 4} L${svgWidth/2 + 2} ${svgHeight} Z`} fill="#1a1a1a"/>
                                <path d={`M${(svgWidth - topWidth)/2} 2 L${(svgWidth + topWidth)/2} 2 L${(svgWidth + bottomWidth)/2} ${coneHeight + 2} L${(svgWidth - bottomWidth)/2} ${coneHeight + 2} Z`} fill="#1a1a1a"/>
                              </svg>
                            </div>
                          </td>
                        );
                      }
                      
                      // Cônica (Conical) - pointed triangle
                      if (typeNameLower === 'cônica') {
                        const baseWidth = Math.max(10, Math.min(28, diameterValue * 3));
                        const coneHeight = Math.max(20, Math.min(40, activeLengthValue * 2.5));
                        const svgWidth = baseWidth + 12;
                        const svgHeight = stemHeight + coneHeight + 4;
                        
                        return (
                          <td key={idx} className="px-1 sm:px-2 py-3 sm:py-4 text-center">
                            <div className="flex justify-center">
                              <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
                                <path d={`M${svgWidth/2 - 2} ${svgHeight} L${svgWidth/2 - 2} ${coneHeight + 4} L${svgWidth/2 + 2} ${coneHeight + 4} L${svgWidth/2 + 2} ${svgHeight} Z`} fill="#1a1a1a"/>
                                <path d={`M${svgWidth/2} 2 L${(svgWidth + baseWidth)/2} ${coneHeight + 2} L${(svgWidth - baseWidth)/2} ${coneHeight + 2} Z`} fill="#1a1a1a"/>
                              </svg>
                            </div>
                          </td>
                        );
                      }
                      
                      // Cilíndrica Topo Plano (Cylindrical Flat End)
                      if (typeNameLower.includes('cilíndrica topo plano')) {
                        const rectWidth = Math.max(6, Math.min(24, diameterValue * 3));
                        const rectHeight = Math.max(12, Math.min(40, activeLengthValue * 2.5));
                        const svgWidth = rectWidth + 12;
                        const svgHeight = stemHeight + rectHeight + 4;
                        
                        return (
                          <td key={idx} className="px-1 sm:px-2 py-3 sm:py-4 text-center">
                            <div className="flex justify-center">
                              <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
                                <path d={`M${svgWidth/2 - 2} ${svgHeight} L${svgWidth/2 - 2} ${rectHeight + 4} L${svgWidth/2 + 2} ${rectHeight + 4} L${svgWidth/2 + 2} ${svgHeight} Z`} fill="#1a1a1a"/>
                                <rect x={(svgWidth - rectWidth)/2} y={2} width={rectWidth} height={rectHeight} fill="#1a1a1a"/>
                              </svg>
                            </div>
                          </td>
                        );
                      }
                      
                      // Cilíndrica Topo Arredondado (Cylinder Rounded End)
                      if (typeNameLower.includes('cilíndrica topo arredondado')) {
                        const rectWidth = Math.max(8, Math.min(22, diameterValue * 3));
                        const rectHeight = Math.max(16, Math.min(36, activeLengthValue * 2.5));
                        const radius = rectWidth / 2;
                        const svgWidth = rectWidth + 12;
                        const svgHeight = stemHeight + rectHeight + 4;
                        
                        return (
                          <td key={idx} className="px-1 sm:px-2 py-3 sm:py-4 text-center">
                            <div className="flex justify-center">
                              <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
                                <path d={`M${svgWidth/2 - 2} ${svgHeight} L${svgWidth/2 - 2} ${rectHeight + 4} L${svgWidth/2 + 2} ${rectHeight + 4} L${svgWidth/2 + 2} ${svgHeight} Z`} fill="#1a1a1a"/>
                                <path d={`M${(svgWidth - rectWidth)/2} ${radius + 2} L${(svgWidth - rectWidth)/2} ${rectHeight + 2} L${(svgWidth + rectWidth)/2} ${rectHeight + 2} L${(svgWidth + rectWidth)/2} ${radius + 2} A${radius} ${radius} 0 0 0 ${(svgWidth - rectWidth)/2} ${radius + 2} Z`} fill="#1a1a1a"/>
                              </svg>
                            </div>
                          </td>
                        );
                      }
                      
                      // Lentilha (Lentil) - lens/ellipse shape
                      if (typeNameLower.includes('lentilha')) {
                        const lensWidth = Math.max(14, Math.min(36, diameterValue * 3.5));
                        const lensHeight = Math.max(4, Math.min(10, activeLengthValue * 3));
                        const svgWidth = lensWidth + 12;
                        const svgHeight = stemHeight + lensHeight + 8;
                        
                        return (
                          <td key={idx} className="px-1 sm:px-2 py-3 sm:py-4 text-center">
                            <div className="flex justify-center">
                              <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
                                <path d={`M${svgWidth/2 - 2} ${svgHeight} L${svgWidth/2 - 2} ${lensHeight + 8} L${svgWidth/2 + 2} ${lensHeight + 8} L${svgWidth/2 + 2} ${svgHeight} Z`} fill="#1a1a1a"/>
                                <ellipse cx={svgWidth/2} cy={lensHeight/2 + 3} rx={lensWidth/2} ry={lensHeight/2} fill="#1a1a1a"/>
                              </svg>
                            </div>
                          </td>
                        );
                      }
                      
                      // Chama (Flame) - teardrop/flame shape
                      if (typeNameLower === 'chama') {
                        const flameWidth = Math.max(6, Math.min(18, diameterValue * 3));
                        const flameHeight = Math.max(14, Math.min(32, activeLengthValue * 2.5));
                        const svgWidth = flameWidth + 12;
                        const svgHeight = stemHeight + flameHeight + 4;
                        
                        return (
                          <td key={idx} className="px-1 sm:px-2 py-3 sm:py-4 text-center">
                            <div className="flex justify-center">
                              <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
                                <path d={`M${svgWidth/2 - 2} ${svgHeight} L${svgWidth/2 - 2} ${flameHeight + 4} L${svgWidth/2 + 2} ${flameHeight + 4} L${svgWidth/2 + 2} ${svgHeight} Z`} fill="#1a1a1a"/>
                                <path d={`M${svgWidth/2} 2 Q${svgWidth/2 - flameWidth/2 - 2} ${flameHeight * 0.4} ${svgWidth/2 - flameWidth/2} ${flameHeight * 0.7} Q${svgWidth/2 - flameWidth/2} ${flameHeight + 2} ${svgWidth/2} ${flameHeight + 2} Q${svgWidth/2 + flameWidth/2} ${flameHeight + 2} ${svgWidth/2 + flameWidth/2} ${flameHeight * 0.7} Q${svgWidth/2 + flameWidth/2 + 2} ${flameHeight * 0.4} ${svgWidth/2} 2 Z`} fill="#1a1a1a"/>
                              </svg>
                            </div>
                          </td>
                        );
                      }
                      
                      // Cônica Topo Chama (Conical Flame End) - thin pointed triangle
                      if (typeNameLower.includes('cônica topo chama') || typeNameLower.includes('conica topo chama')) {
                        const baseWidth = Math.max(4, Math.min(12, diameterValue * 2.5));
                        const coneHeight = Math.max(24, Math.min(44, activeLengthValue * 2.8));
                        const svgWidth = baseWidth + 16;
                        const svgHeight = stemHeight + coneHeight + 4;
                        
                        return (
                          <td key={idx} className="px-1 sm:px-2 py-3 sm:py-4 text-center">
                            <div className="flex justify-center">
                              <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
                                <path d={`M${svgWidth/2 - 2} ${svgHeight} L${svgWidth/2 - 2} ${coneHeight + 4} L${svgWidth/2 + 2} ${coneHeight + 4} L${svgWidth/2 + 2} ${svgHeight} Z`} fill="#1a1a1a"/>
                                <path d={`M${svgWidth/2} 2 L${(svgWidth + baseWidth)/2} ${coneHeight + 2} L${(svgWidth - baseWidth)/2} ${coneHeight + 2} Z`} fill="#1a1a1a"/>
                              </svg>
                            </div>
                          </td>
                        );
                      }
                      
                      // ===== LIXAS SECTION =====
                      // Laminar - circular sandpaper disc (thin)
                      if (categorySlug === 'lixas' && typeNameLower.includes('laminar')) {
                        const discDiameter = parseFloat(product.diameter?.replace('mm', '').replace(',', '.') || '23');
                        const discSize = Math.max(30, Math.min(50, discDiameter * 1.8));
                        const svgSize = discSize + 16;
                        
                        return (
                          <td key={idx} className="px-1 sm:px-2 py-3 sm:py-4 text-center">
                            <div className="flex justify-center">
                              <svg width={svgSize} height={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`}>
                                {/* Outer circle - sandpaper texture */}
                                <circle 
                                  cx={svgSize/2} 
                                  cy={svgSize/2} 
                                  r={discSize/2} 
                                  fill="#D4A854"
                                  stroke="#B8963F"
                                  strokeWidth="1.5"
                                />
                                {/* Inner circle - center hole */}
                                <circle 
                                  cx={svgSize/2} 
                                  cy={svgSize/2} 
                                  r={4}
                                  fill="#1a1a1a"
                                />
                                {/* Texture dots pattern */}
                                <circle cx={svgSize/2 - 8} cy={svgSize/2 - 6} r="1.5" fill="#C49844" />
                                <circle cx={svgSize/2 + 6} cy={svgSize/2 - 8} r="1.5" fill="#C49844" />
                                <circle cx={svgSize/2 - 5} cy={svgSize/2 + 7} r="1.5" fill="#C49844" />
                                <circle cx={svgSize/2 + 8} cy={svgSize/2 + 5} r="1.5" fill="#C49844" />
                                <circle cx={svgSize/2 + 2} cy={svgSize/2 - 12} r="1" fill="#C49844" />
                                <circle cx={svgSize/2 - 10} cy={svgSize/2 + 2} r="1" fill="#C49844" />
                              </svg>
                            </div>
                          </td>
                        );
                      }
                      
                      // Plantar - circular sandpaper disc (larger)
                      if (categorySlug === 'lixas' && typeNameLower.includes('plantar')) {
                        const discDiameter = parseFloat(product.diameter?.replace('mm', '').replace(',', '.') || '30');
                        const discSize = Math.max(40, Math.min(60, discDiameter * 1.6));
                        const svgSize = discSize + 16;
                        
                        return (
                          <td key={idx} className="px-1 sm:px-2 py-3 sm:py-4 text-center">
                            <div className="flex justify-center">
                              <svg width={svgSize} height={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`}>
                                {/* Outer circle - sandpaper texture */}
                                <circle 
                                  cx={svgSize/2} 
                                  cy={svgSize/2} 
                                  r={discSize/2} 
                                  fill="#D4A854"
                                  stroke="#B8963F"
                                  strokeWidth="1.5"
                                />
                                {/* Inner circle - center hole */}
                                <circle 
                                  cx={svgSize/2} 
                                  cy={svgSize/2} 
                                  r={5}
                                  fill="#1a1a1a"
                                />
                                {/* Texture dots pattern - more dots for larger disc */}
                                <circle cx={svgSize/2 - 12} cy={svgSize/2 - 8} r="1.5" fill="#C49844" />
                                <circle cx={svgSize/2 + 10} cy={svgSize/2 - 10} r="1.5" fill="#C49844" />
                                <circle cx={svgSize/2 - 8} cy={svgSize/2 + 10} r="1.5" fill="#C49844" />
                                <circle cx={svgSize/2 + 12} cy={svgSize/2 + 6} r="1.5" fill="#C49844" />
                                <circle cx={svgSize/2 + 3} cy={svgSize/2 - 15} r="1" fill="#C49844" />
                                <circle cx={svgSize/2 - 15} cy={svgSize/2 + 3} r="1" fill="#C49844" />
                                <circle cx={svgSize/2 + 15} cy={svgSize/2 - 2} r="1" fill="#C49844" />
                                <circle cx={svgSize/2 - 4} cy={svgSize/2 + 16} r="1" fill="#C49844" />
                              </svg>
                            </div>
                          </td>
                        );
                      }
                      
                      return <td key={idx}></td>;
                    })}
                  </tr>
                )}

                {/* IMAGE Row - For Fresas Tungstênio */}
                {categorySlug === 'fresas-tungstenio' && (
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3" style={{ color: headerBgColor }}></td>
                    {products.map((product, idx) => {
                      // Extract model number from product code (e.g., "500.002.1507" -> "1507")
                      const modelMatch = product.code.match(/500\.002\.(.+)$/);
                      const modelNumber = modelMatch ? modelMatch[1].toUpperCase() : product.model;
                      const imageUrl = tungstenBurImages[modelNumber];
                      
                      return (
                        <td key={idx} className="px-1 sm:px-2 py-3 sm:py-4 text-center">
                          <div className="flex justify-center">
                            {imageUrl ? (
                              <img 
                                src={imageUrl} 
                                alt={`Fresa ${modelNumber}`}
                                className="max-h-[60px] sm:max-h-[80px] object-contain"
                              />
                            ) : (
                              <div className="w-8 h-16 bg-gray-200 rounded" />
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                )}

                {/* IMAGE Row - For Fresas Cerâmica */}
                {categorySlug === 'fresas-ceramica' && (
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3" style={{ color: headerBgColor }}></td>
                    {products.map((product, idx) => {
                      // Extract model number from product code (e.g., "500.004.1508C" -> "1508C")
                      const modelMatch = product.code.match(/500\.004\.(.+)$/);
                      const modelNumber = modelMatch ? modelMatch[1].toUpperCase() : product.model;
                      const imageUrl = ceramicBurImages[modelNumber];
                      
                      return (
                        <td key={idx} className="px-1 sm:px-2 py-3 sm:py-4 text-center">
                          <div className="flex justify-center">
                            {imageUrl ? (
                              <img 
                                src={imageUrl} 
                                alt={`Fresa Cerâmica ${modelNumber}`}
                                className="max-h-[60px] sm:max-h-[80px] object-contain"
                              />
                            ) : (
                              <div className="w-8 h-16 bg-gray-200 rounded" />
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                )}

                {/* DIÂMETRO Row */}
                <tr style={{ backgroundColor: rowBgLight }}>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                    {t("products.table.diameter", "DIÂMETRO")} ∅ (MM)
                  </td>
                  {products.map((product, idx) => (
                    <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                      {product.diameter?.replace('mm', '') || '—'}
                    </td>
                  ))}
                </tr>

                {/* ESPESSURA Row - Only for Lixas Laminar/Plantar */}
                {categorySlug === 'lixas' && (typeName.toLowerCase().includes('laminar') || typeName.toLowerCase().includes('plantar')) && (
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-1.5 sm:py-2 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      {t("products.table.thickness", "ESPESSURA")} (MM)
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-1.5 sm:py-2 text-center text-[10px] sm:text-sm">
                        {product.activeLength?.replace('mm', '') || '—'}
                      </td>
                    ))}
                  </tr>
                )}

                {/* GRANULOMETRIA Row - Only for Lixas Laminar/Plantar */}
                {categorySlug === 'lixas' && (typeName.toLowerCase().includes('laminar') || typeName.toLowerCase().includes('plantar')) && (
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-1.5 sm:py-2 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      {t("products.table.granulometry", "GRANULOMETRIA")} (MESH)
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-1.5 sm:py-2 text-center text-[8px] sm:text-xs whitespace-nowrap">
                        {product.grain || '—'}
                      </td>
                    ))}
                  </tr>
                )}

                {/* EMBALAGEM Row - Only for Lixas Laminar/Plantar */}
                {categorySlug === 'lixas' && (typeName.toLowerCase().includes('laminar') || typeName.toLowerCase().includes('plantar')) && (
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-1.5 sm:py-2 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      {t("products.table.packaging", "EMBALAGEM")} (UNIT)
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-1.5 sm:py-2 text-center text-[10px] sm:text-sm">
                        100
                      </td>
                    ))}
                  </tr>
                )}

                {/* COMPRIMENTO ÁREA ATIVA Row - Hide for Lixas Laminar/Plantar */}
                {!(categorySlug === 'lixas' && (typeName.toLowerCase().includes('laminar') || typeName.toLowerCase().includes('plantar'))) && (
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-1.5 sm:py-2 text-[8px] sm:text-xs font-medium" style={{ color: headerBgColor }}>
                      <span className="block text-[8px] sm:text-[10px] leading-tight">{t("products.table.activeLength", "ÁREA ATIVA").toUpperCase()}</span>
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-1.5 sm:py-2 text-center text-[10px] sm:text-sm">
                        {product.activeLength?.replace('mm', '') || '—'}
                      </td>
                    ))}
                  </tr>
                )}

                {/* GRÃO Row - Colored circles - Only show for categories with grain */}
                {hasGrain && (
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      {t("products.table.grain", "GRÃO").toUpperCase()}
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center">
                        <div className="flex items-center justify-center gap-1">
                          {showBothGrains ? (
                            // For Brocas Diamantadas: show both red and blue circles
                            <>
                              <div 
                                className="w-3 h-3 sm:w-5 sm:h-5 rounded-full"
                                style={{ backgroundColor: "#C62828" }}
                                title="Grosso"
                              />
                              <div 
                                className="w-3 h-3 sm:w-5 sm:h-5 rounded-full"
                                style={{ backgroundColor: "#0066CC" }}
                                title="Fino"
                              />
                            </>
                          ) : product.grain && grainColorMap[product.grain] ? (
                            <div 
                              className="w-3 h-3 sm:w-5 sm:h-5 rounded-full"
                              style={{ 
                                backgroundColor: grainColorMap[product.grain].color,
                                border: grainColorMap[product.grain].border ? "2px solid #DDD" : "none"
                              }}
                            />
                          ) : product.cut ? (
                            <span className="text-[8px] sm:text-xs text-muted-foreground">{product.cut}</span>
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                )}

                {/* ISO Row */}
                <tr style={{ backgroundColor: rowBgWhite }}>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                    {t("products.table.iso", "ISO").toUpperCase()}
                  </td>
                  {products.map((product, idx) => (
                    <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[8px] sm:text-xs text-muted-foreground">
                      {product.iso || '—'}
                    </td>
                  ))}
                </tr>

                {/* CÓDIGO Row */}
                <tr style={{ backgroundColor: rowBgLight }}>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                    {t("products.table.code", "CÓDIGO").toUpperCase()}
                  </td>
                  {products.map((product, idx) => (
                    <td 
                      key={idx} 
                      className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[8px] sm:text-xs font-semibold"
                      style={{ color: headerBgColor }}
                    >
                      {product.code}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Grain Legend - Only show for categories with grain */}
          {hasGrain && (
            <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-4 justify-center">
              {Object.entries(grainColorMap).map(([grain, config]) => (
                <div key={grain} className="flex items-center gap-1 sm:gap-2">
                  <div 
                    className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                    style={{ 
                      backgroundColor: config.color,
                      border: config.border ? "2px solid #DDD" : "none"
                    }}
                  />
                  <span className="text-[10px] sm:text-xs text-muted-foreground">{grain}</span>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
            <a
              href="https://wa.me/5511940101807"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              {t("products.requestQuote")}
            </a>
            <a
              href="/catalogo-brilho.pdf"
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-foreground py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors text-sm sm:text-base"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              {t("products.downloadCatalog")}
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryTypeModal;
