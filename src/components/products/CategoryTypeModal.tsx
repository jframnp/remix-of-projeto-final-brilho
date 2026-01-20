import { useTranslation } from "react-i18next";
import { X, Download, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import LixaTubular from "@/assets/products/lixa-tubular.png";
import LixaAdesiva from "@/assets/products/lixa-adesiva-circular.png";

// Torpedo polisher images by code suffix
import PolidoraTorpedo70101 from "@/assets/products/polidora-torpedo-70101.png";
import PolidoraTorpedo70501 from "@/assets/products/polidora-torpedo-70501.png";
import PolidoraTorpedo70701 from "@/assets/products/polidora-torpedo-70701.png";
import PolidoraTorpedo70201 from "@/assets/products/polidora-torpedo-70201.png";
import PolidoraTorpedo70301 from "@/assets/products/polidora-torpedo-70301.png";
import PolidoraTorpedo70601 from "@/assets/products/polidora-torpedo-70601.png";
import PolidoraTorpedo70401 from "@/assets/products/polidora-torpedo-70401.png";
import PolidoraTorpedo70102 from "@/assets/products/polidora-torpedo-70102.png";
import PolidoraTorpedo70502 from "@/assets/products/polidora-torpedo-70502.png";
import PolidoraTorpedo70702 from "@/assets/products/polidora-torpedo-70702.png";
import PolidoraTorpedo70202 from "@/assets/products/polidora-torpedo-70202.png";
import PolidoraTorpedo70302 from "@/assets/products/polidora-torpedo-70302.png";
import PolidoraTorpedo70602 from "@/assets/products/polidora-torpedo-70602.png";
import PolidoraTorpedo70402 from "@/assets/products/polidora-torpedo-70402.png";
// Torpedo Média polisher images
import PolidoraTorpedo70103 from "@/assets/products/polidora-torpedo-70103.png";
import PolidoraTorpedo70503 from "@/assets/products/polidora-torpedo-70503.png";
import PolidoraTorpedo70703 from "@/assets/products/polidora-torpedo-70703.png";
import PolidoraTorpedo70203 from "@/assets/products/polidora-torpedo-70203.png";
import PolidoraTorpedo70303 from "@/assets/products/polidora-torpedo-70303.png";
import PolidoraTorpedo70603 from "@/assets/products/polidora-torpedo-70603.png";
import PolidoraTorpedo70403 from "@/assets/products/polidora-torpedo-70403.png";

// Map polisher codes to their images
const polisherCodeImages: Record<string, string> = {
  "70101": PolidoraTorpedo70101,
  "70501": PolidoraTorpedo70501,
  "70701": PolidoraTorpedo70701,
  "70201": PolidoraTorpedo70201,
  "70301": PolidoraTorpedo70301,
  "70601": PolidoraTorpedo70601,
  "70401": PolidoraTorpedo70401,
  "70102": PolidoraTorpedo70102,
  "70502": PolidoraTorpedo70502,
  "70702": PolidoraTorpedo70702,
  "70202": PolidoraTorpedo70202,
  "70302": PolidoraTorpedo70302,
  "70602": PolidoraTorpedo70602,
  "70402": PolidoraTorpedo70402,
  "70103": PolidoraTorpedo70103,
  "70503": PolidoraTorpedo70503,
  "70703": PolidoraTorpedo70703,
  "70203": PolidoraTorpedo70203,
  "70303": PolidoraTorpedo70303,
  "70603": PolidoraTorpedo70603,
  "70403": PolidoraTorpedo70403,
};

// Sandpaper manual type images
import LixaManualNailsVerde from "@/assets/products/lixa-manual-nails-verde.png";
import LixaManualNailsBranca from "@/assets/products/lixa-manual-nails-branca.png";
import LixaManualWhiteFina from "@/assets/products/lixa-manual-white-fina.png";
import LixaManualDescartavelBranca from "@/assets/products/lixa-manual-descartavel-branca.png";
import LixaManualBaseInox from "@/assets/products/lixa-manual-base-inox.png";

// Sandpaper shape/model images (Boomerang, Quadrada, Caixão, Gota)
import LixaFormatoBoomerang from "@/assets/products/lixa-formato-boomerang.png";
import LixaFormatoQuadrada from "@/assets/products/lixa-formato-quadrada.png";
import LixaFormatoCaixao from "@/assets/products/lixa-formato-caixao.png";
import LixaFormatoGota from "@/assets/products/lixa-formato-gota.png";

// Cleaning brush images - Cerdas de Poliamida
import EscovaPoliamidaRosa from "@/assets/products/escova-poliamida-rosa.png";
import EscovaPoliamidaLilas from "@/assets/products/escova-poliamida-lilas.png";

// Cleaning brush images - Brocas Polidoras
import BrocaLimpezaAco from "@/assets/products/broca-limpeza-aco.png";
import EsponjaPolidora from "@/assets/products/esponja-polidora.png";
import EsponjaFeltro from "@/assets/products/esponja-feltro.png";

// Map sandpaper manual types to images
const sandpaperManualImages: Record<string, string> = {
  "nails verde": LixaManualNailsVerde,
  "nails branca": LixaManualNailsBranca,
  "white fina 2mm": LixaManualWhiteFina,
  "descartável branca": LixaManualDescartavelBranca,
  "base inox refil": LixaManualBaseInox,
};

// Map sandpaper shape/model names to images
const sandpaperShapeImages: Record<string, string> = {
  "boomerang": LixaFormatoBoomerang,
  "quadrada": LixaFormatoQuadrada,
  "caixão": LixaFormatoCaixao,
  "gota": LixaFormatoGota,
  "base inox": LixaManualBaseInox,
};

// Map cleaning brush model colors to images
const cleaningBrushModelImages: Record<string, string> = {
  "rosa": EscovaPoliamidaRosa,
  "lilás": EscovaPoliamidaLilas,
};

// Map polishing brush model subtypes to images
const polishingBrushImages: Record<string, string> = {
  "broca de limpeza": BrocaLimpezaAco,
  "esponja polidora": EsponjaPolidora,
  "esponja feltro": EsponjaFeltro,
};

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

// Ceramic bur images - Mini Cut - Corte Cruzado Fino
import FresaCeramica1571CF from "@/assets/products/fresa-ceramica-1571CF.png";
import FresaCeramica07CF from "@/assets/products/fresa-ceramica-07CF.png";
import FresaCeramica859CF from "@/assets/products/fresa-ceramica-859CF.png";

// Ceramic bur images - Mini Cut - Corte Cruzado Extra Fino
import FresaCeramica1571CXF from "@/assets/products/fresa-ceramica-1571CXF.png";
import FresaCeramica859CXF from "@/assets/products/fresa-ceramica-859CXF.png";

// Ceramic bur images - Mini Cut - Corte Cruzado Grosso
import FresaCeramica1571CG from "@/assets/products/fresa-ceramica-1571CG.png";
import FresaCeramica859CG from "@/assets/products/fresa-ceramica-859CG.png";

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
  "1571CF": FresaCeramica1571CF,
  "07CF": FresaCeramica07CF,
  "859CF": FresaCeramica859CF,
  "1571CXF": FresaCeramica1571CXF,
  "859CXF": FresaCeramica859CXF,
  "1571CG": FresaCeramica1571CG,
  "859CG": FresaCeramica859CG,
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
          {/* Product Image - Show for Tubular, Adesiva, and Manual sandpaper types at top */}
          {categorySlug === 'lixas' && (
            typeName.toLowerCase().includes('tubular') || 
            typeName.toLowerCase().includes('adesiva') ||
            sandpaperManualImages[typeName.toLowerCase()]
          ) && (
            <div className="flex justify-center items-center p-4 mb-4">
              <img 
                src={
                  typeName.toLowerCase().includes('adesiva') ? LixaAdesiva : 
                  typeName.toLowerCase().includes('tubular') ? LixaTubular :
                  sandpaperManualImages[typeName.toLowerCase()] || LixaTubular
                }
                alt={translatedTypeName}
                className="max-w-full max-h-[200px] sm:max-h-[280px] object-contain rounded-lg"
              />
            </div>
          )}

          {/* Special Table for Cerdas de Poliamida */}
          {categorySlug === 'escovas-limpeza' && typeName.toLowerCase().includes('cerdas de poliamida') ? (
            <div className="min-w-max">
              <table className="w-full border-collapse text-xs sm:text-sm">
                <tbody>
                  {/* MODELOS Row */}
                  <tr style={{ backgroundColor: headerBgColor }}>
                    <td 
                      className="w-[80px] sm:w-[140px] px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm tracking-wider"
                      style={{ color: headerTextColor }}
                    >
                      MODELOS
                    </td>
                    {products.map((product, idx) => (
                      <td 
                        key={idx}
                        className="px-1 sm:px-2 py-2 sm:py-3 text-center font-bold min-w-[80px] sm:min-w-[120px] text-[10px] sm:text-sm"
                        style={{ color: headerTextColor }}
                      >
                        {product.color?.toUpperCase() || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* IMAGEM Row - Display product images */}
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3" style={{ color: headerBgColor }}></td>
                    {products.map((product, idx) => {
                      const colorKey = product.color?.toLowerCase() || '';
                      const productImage = cleaningBrushModelImages[colorKey];
                      return (
                        <td key={idx} className="px-1 sm:px-2 py-4 sm:py-6 text-center">
                          {productImage && (
                            <div className="flex justify-center">
                              <img 
                                src={productImage} 
                                alt={product.color || 'Produto'} 
                                className="max-h-[100px] sm:max-h-[140px] object-contain"
                              />
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>

                  {/* DIÂMETRO Row */}
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      DIÂMETRO ∅(MM)
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {product.diameter?.replace('mm', '') || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* COMPRIMENTO DE ÁREA ATIVA Row */}
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      <span className="block leading-tight">COMPRIMENTO DE</span>
                      <span className="block leading-tight">ÁREA ATIVA ∅(MM)</span>
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {product.activeLength?.replace('mm', '') || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* COMPRIMENTO TOTAL Row */}
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      <span className="block leading-tight">COMPRIMENTO</span>
                      <span className="block leading-tight">TOTAL</span>
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {(product as any).totalLength?.replace('mm', '') || '45,0'}
                      </td>
                    ))}
                  </tr>

                  {/* CERDAS Row */}
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      CERDAS
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {(product as any).bristleType?.toUpperCase() || 'FINAS'}
                      </td>
                    ))}
                  </tr>

                  {/* ISO Row */}
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      ISO
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {product.iso || product.code || '—'}
                      </td>
                    ))}
                    </tr>
                </tbody>
              </table>
            </div>
          ) : categorySlug === 'escovas-limpeza' && typeName.toLowerCase().includes('brocas polidoras') ? (
            /* Special Table for Brocas Polidoras */
            <div className="min-w-max">
              <table className="w-full border-collapse text-xs sm:text-sm">
                <tbody>
                  {/* MODELOS Row */}
                  <tr style={{ backgroundColor: headerBgColor }}>
                    <td 
                      className="w-[80px] sm:w-[140px] px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm tracking-wider"
                      style={{ color: headerTextColor }}
                    >
                      MODELOS
                    </td>
                    {products.map((product, idx) => (
                      <td 
                        key={idx}
                        className="px-1 sm:px-2 py-2 sm:py-3 text-center font-bold min-w-[80px] sm:min-w-[120px] text-[8px] sm:text-xs"
                        style={{ color: headerTextColor }}
                      >
                        {(product as any).subtype?.toUpperCase() || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* IMAGEM Row - Display product images */}
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3" style={{ color: headerBgColor }}></td>
                    {products.map((product, idx) => {
                      const subtypeKey = ((product as any).subtype || '').toLowerCase();
                      const productImage = polishingBrushImages[subtypeKey];
                      return (
                        <td key={idx} className="px-1 sm:px-2 py-4 sm:py-6 text-center">
                          {productImage && (
                            <div className="flex justify-center">
                              <img 
                                src={productImage} 
                                alt={(product as any).subtype || 'Produto'} 
                                className="max-h-[80px] sm:max-h-[120px] object-contain"
                              />
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>

                  {/* DIÂMETRO DE ÁREA ATIVA Row */}
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      <span className="block leading-tight">DIÂMETRO DE ÁREA</span>
                      <span className="block leading-tight">ATIVA ∅(MM)</span>
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {product.diameter?.replace('mm', '') || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* COMPRIMENTO DE ÁREA ATIVA Row */}
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      <span className="block leading-tight">COMPRIMENTO DE</span>
                      <span className="block leading-tight">ÁREA ATIVA ∅(MM)</span>
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        ----
                      </td>
                    ))}
                  </tr>

                  {/* COMPRIMENTO TOTAL Row */}
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      <span className="block leading-tight">COMPRIMENTO</span>
                      <span className="block leading-tight">TOTAL</span>
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {(product as any).totalLength?.replace('mm', '') || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* EMBALAGEM Row */}
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      EMBALAGEM
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        1
                      </td>
                    ))}
                  </tr>

                  {/* CERDAS Row */}
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      CERDAS
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[8px] sm:text-xs">
                        {(product as any).bristleType?.toUpperCase() || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* CÓDIGO Row */}
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      CÓDIGO
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm font-semibold" style={{ color: headerBgColor }}>
                        {product.code || '—'}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          ) : categorySlug === 'fibras-enucleadora-mandril' && typeName.toLowerCase().includes('fibra molecular') ? (
            /* Special Table for Fibra Molecular */
            <div className="min-w-max">
              <table className="w-full border-collapse text-xs sm:text-sm">
                <tbody>
                  {/* MODELOS Row - Empty for Fibra, shows variation numbers */}
                  <tr style={{ backgroundColor: headerBgColor }}>
                    <td 
                      className="w-[80px] sm:w-[140px] px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm tracking-wider"
                      style={{ color: headerTextColor }}
                    >
                      
                    </td>
                    {products.map((_, idx) => (
                      <td 
                        key={idx}
                        className="px-1 sm:px-2 py-2 sm:py-3 text-center font-bold min-w-[60px] sm:min-w-[80px] text-[10px] sm:text-sm"
                        style={{ color: headerTextColor }}
                      >
                        
                      </td>
                    ))}
                  </tr>

                  {/* LARGURA (MM) Row - First row showing widths */}
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      LARGURA (MM)
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {product.diameter || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* LARGURA (MM) Row - Second row (width 10) */}
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      LARGURA (MM)
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {product.activeLength || '10'}
                      </td>
                    ))}
                  </tr>

                  {/* COMPRIMENTO (MM) Row */}
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      COMPRIMENTO (MM)
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {(product as any).totalLength || '120'}
                      </td>
                    ))}
                  </tr>

                  {/* EMBALAGEM (UNIT) Row */}
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      EMBALAGEM (UNIT)
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {product.iso || '3'}
                      </td>
                    ))}
                  </tr>

                  {/* CÓDIGO Row */}
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      CÓDIGO
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm font-semibold" style={{ color: headerBgColor }}>
                        {product.code || '—'}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          ) : categorySlug === 'fibras-enucleadora-mandril' && typeName.toLowerCase().includes('enucleadora') ? (
            /* Special Table for Enucleadora */
            <div className="min-w-max">
              <table className="w-full border-collapse text-xs sm:text-sm">
                <tbody>
                  {/* MODELOS Row - P, M, G */}
                  <tr style={{ backgroundColor: headerBgColor }}>
                    <td 
                      className="w-[80px] sm:w-[140px] px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm tracking-wider"
                      style={{ color: headerTextColor }}
                    >
                      MODELOS
                    </td>
                    {products.map((product, idx) => (
                      <td 
                        key={idx}
                        className="px-1 sm:px-2 py-2 sm:py-3 text-center font-bold min-w-[80px] sm:min-w-[100px] text-[10px] sm:text-sm"
                        style={{ color: headerTextColor }}
                      >
                        {(product as any).subtype?.toUpperCase() || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* DIÂMETRO ÁREA ATIVA Row */}
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      DIÂMETRO ÁREA ATIVA ∅ (MM)
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {product.diameter || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* COMPRIMENTO ÁREA ATIVA Row */}
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      COMPRIMENTO ÁREA ATIVA (MM)
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {product.activeLength || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* COMPRIMENTO TOTAL Row */}
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      COMPRIMENTO TOTAL (MM)
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {(product as any).totalLength || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* DIÂMETRO DA HASTE Row */}
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      DIÂMETRO DA HASTE ∅ (MM)
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {product.iso || '2,35'}
                      </td>
                    ))}
                  </tr>

                  {/* EMBALAGEM Row */}
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      EMBALAGEM (UNIT)
                    </td>
                    {products.map((_, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        1
                      </td>
                    ))}
                  </tr>

                  {/* CÓDIGO Row */}
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      CÓDIGO
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm font-semibold" style={{ color: headerBgColor }}>
                        {product.code || '—'}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          ) : categorySlug === 'fibras-enucleadora-mandril' && typeName.toLowerCase().includes('mandril') ? (
            /* Special Table for Mandril PM */
            <div className="min-w-max">
              <table className="w-full border-collapse text-xs sm:text-sm">
                <tbody>
                  {/* MODELOS Row - Reforçado, Standart, Tubular, Roda */}
                  <tr style={{ backgroundColor: headerBgColor }}>
                    <td 
                      className="w-[80px] sm:w-[140px] px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm tracking-wider"
                      style={{ color: headerTextColor }}
                    >
                      MODELOS
                    </td>
                    {products.map((product, idx) => (
                      <td 
                        key={idx}
                        className="px-1 sm:px-2 py-2 sm:py-3 text-center font-bold min-w-[70px] sm:min-w-[90px] text-[8px] sm:text-xs"
                        style={{ color: headerTextColor }}
                      >
                        {(product as any).subtype?.toUpperCase() || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* DIÂMETRO ÁREA DE ENCAIXE Row */}
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      <span className="block leading-tight">DIÂMETRO ÁREA DE</span>
                      <span className="block leading-tight">ENCAIXE ∅ (MM)</span>
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {product.diameter || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* COMPRIMENTO TOTAL Row */}
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      COMPRIMENTO TOTAL (MM)
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {(product as any).totalLength || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* DIÂMETRO DA HASTE Row */}
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      DIÂMETRO DA HASTE ∅ (MM)
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {product.iso || '2,35'}
                      </td>
                    ))}
                  </tr>

                  {/* EMBALAGEM Row */}
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      EMBALAGEM (UNIT)
                    </td>
                    {products.map((_, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        1
                      </td>
                    ))}
                  </tr>

                  {/* CÓDIGO Row */}
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      CÓDIGO
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm font-semibold" style={{ color: headerBgColor }}>
                        {product.code || '—'}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          ) : categorySlug === 'apoio-lixas-afiacao' && typeName.toLowerCase().includes('apoio para lixas') ? (
            /* Special Table for Apoio para Lixas de Podologia */
            <div className="min-w-max">
              <table className="w-full border-collapse text-xs sm:text-sm">
                <tbody>
                  {/* CATEGORIA Row */}
                  <tr style={{ backgroundColor: headerBgColor }}>
                    <td 
                      className="w-[80px] sm:w-[140px] px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm tracking-wider"
                      style={{ color: headerTextColor }}
                    >
                      CATEGORIA
                    </td>
                    {products.map((product, idx) => (
                      <td 
                        key={idx}
                        className="px-1 sm:px-2 py-2 sm:py-3 text-center font-bold min-w-[80px] sm:min-w-[120px] text-[8px] sm:text-xs"
                        style={{ color: headerTextColor }}
                      >
                        {(product as any).subtype?.toUpperCase() || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* MODELO Row */}
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      MODELO
                    </td>
                    {products.map((_, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        LAMINAR/PLANTAR
                      </td>
                    ))}
                  </tr>

                  {/* DIÂMETRO ÁREA ATIVA Row */}
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      DIÂMETRO ÁREA ATIVA ∅ (MM)
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {product.diameter || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* ESPESSURA Row */}
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      ESPESSURA (MM)
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {product.activeLength || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* EMBALAGEM Row */}
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      EMBALAGEM (UNIT)
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {product.iso || '3'}
                      </td>
                    ))}
                  </tr>

                  {/* CÓDIGO Row */}
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      CÓDIGO
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm font-semibold" style={{ color: headerBgColor }}>
                        {product.code || '—'}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          ) : categorySlug === 'apoio-lixas-afiacao' && typeName.toLowerCase().includes('afiação') ? (
            /* Special Table for Afiação de Instrumentos */
            <div className="min-w-max">
              <table className="w-full border-collapse text-xs sm:text-sm">
                <tbody>
                  {/* CATEGORIA Row */}
                  <tr style={{ backgroundColor: headerBgColor }}>
                    <td 
                      className="w-[80px] sm:w-[140px] px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm tracking-wider"
                      style={{ color: headerTextColor }}
                    >
                      CATEGORIA
                    </td>
                    {products.map((product, idx) => (
                      <td 
                        key={idx}
                        className="px-1 sm:px-2 py-2 sm:py-3 text-center font-bold min-w-[70px] sm:min-w-[100px] text-[8px] sm:text-xs"
                        style={{ color: headerTextColor }}
                      >
                        {(product as any).subtype?.toUpperCase() || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* DIÂMETRO ÁREA ATIVA Row */}
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      <span className="block leading-tight">DIÂMETRO ÁREA</span>
                      <span className="block leading-tight">ATIVA ∅(MM)</span>
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {product.diameter || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* ESPESSURA Row */}
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      ESPESSURA (MM)
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {product.activeLength || '—'}
                      </td>
                    ))}
                  </tr>

                  {/* EMBALAGEM Row */}
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      EMBALAGEM (UNIT)
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                        {product.iso || '1'}
                      </td>
                    ))}
                  </tr>

                  {/* CÓDIGO Row */}
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      CÓDIGO
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm font-semibold" style={{ color: headerBgColor }}>
                        {product.code || '—'}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
          
          /* Catalog-Style Horizontal Table */
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
                    // For Lixas, show the model name (Boomerang, Quadrada, Caixão, Gota, etc.)
                    const isLixaCategory = categorySlug === 'lixas';
                    let displayName = getProductName(product.code);
                    
                    if (isLixaCategory) {
                      // For manual sandpaper types, show the model name directly (Boomerang, Quadrada, etc.)
                      displayName = product.model;
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

                {/* PRODUCT IMAGE Row - For Polidoras */}
                {categorySlug === 'polidoras' && (
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3" style={{ color: headerBgColor }}></td>
                    {products.map((product, idx) => {
                      // Extract code suffix from product code (e.g., "500.008.70102" -> "70102")
                      const codeMatch = product.code.match(/500\.008\.(\d+)$/);
                      const codeSuffix = codeMatch ? codeMatch[1] : '';
                      const productImage = polisherCodeImages[codeSuffix] || (product as any).image;
                      
                      return (
                        <td key={idx} className="px-1 sm:px-2 py-3 sm:py-4 text-center">
                          {productImage && (
                            <div className="flex justify-center">
                              <img 
                                src={productImage} 
                                alt={product.model || 'Produto'} 
                                className="max-h-[60px] sm:max-h-[90px] object-contain"
                              />
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                )}

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

                {/* IMAGE Row - For Lixas Manuais (Nails Verde, Nails Branca, White Fina 2mm) */}
                {categorySlug === 'lixas' && sandpaperManualImages[typeName.toLowerCase()] && 
                  (typeName.toLowerCase() === 'nails verde' || 
                   typeName.toLowerCase() === 'nails branca' || 
                   typeName.toLowerCase() === 'white fina 2mm') && (
                  <tr style={{ backgroundColor: rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-2 sm:py-3" style={{ color: headerBgColor }}></td>
                    {products.map((product, idx) => {
                      const modelLower = product.model.toLowerCase();
                      const shapeImage = sandpaperShapeImages[modelLower];
                      
                      return (
                        <td key={idx} className="px-1 sm:px-2 py-3 sm:py-4 text-center">
                          <div className="flex justify-center">
                            {shapeImage ? (
                              <img 
                                src={shapeImage} 
                                alt={product.model}
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

                {/* DIÂMETRO/LARGURA Row */}
                <tr style={{ backgroundColor: rowBgLight }}>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                    {categorySlug === 'lixas' && sandpaperManualImages[typeName.toLowerCase()]
                      ? t("products.table.width", "LARGURA") + " (MM)"
                      : t("products.table.diameter", "DIÂMETRO") + " ∅ (MM)"
                    }
                  </td>
                  {products.map((product, idx) => (
                    <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                      {product.diameter?.replace('mm', '') || '—'}
                    </td>
                  ))}
                </tr>

                {/* GRANULOMETRIA Row - For Lixas Manuais and Laminar/Plantar */}
                {categorySlug === 'lixas' && (
                  typeName.toLowerCase().includes('laminar') || 
                  typeName.toLowerCase().includes('plantar') ||
                  sandpaperManualImages[typeName.toLowerCase()]
                ) && (
                  <tr style={{ backgroundColor: rowBgWhite }}>
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

                {/* COMPRIMENTO TOTAL Row - For Lixas Manuais */}
                {categorySlug === 'lixas' && sandpaperManualImages[typeName.toLowerCase()] && (
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-1.5 sm:py-2 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      {t("products.table.totalLength", "COMPRIMENTO TOTAL")} (MM)
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-1.5 sm:py-2 text-center text-[10px] sm:text-sm">
                        {product.activeLength?.replace('mm', '') || '—'}
                      </td>
                    ))}
                  </tr>
                )}

                {/* EMBALAGEM Row - For Lixas Manuais and Laminar/Plantar */}
                {categorySlug === 'lixas' && (
                  typeName.toLowerCase().includes('laminar') || 
                  typeName.toLowerCase().includes('plantar') ||
                  sandpaperManualImages[typeName.toLowerCase()]
                ) && (
                  <tr style={{ backgroundColor: sandpaperManualImages[typeName.toLowerCase()] ? rowBgWhite : rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-1.5 sm:py-2 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      {t("products.table.packaging", "EMBALAGEM")}
                    </td>
                    {products.map((product, idx) => {
                      // Determine packaging based on type
                      let packaging = "1";
                      if (typeName.toLowerCase().includes('laminar') || typeName.toLowerCase().includes('plantar')) {
                        packaging = "100";
                      } else if (typeName.toLowerCase().includes('nails branca') || typeName.toLowerCase().includes('white fina')) {
                        packaging = "20";
                      } else if (typeName.toLowerCase().includes('descartável')) {
                        packaging = "12";
                      }
                      return (
                        <td key={idx} className="px-1 sm:px-2 py-1.5 sm:py-2 text-center text-[10px] sm:text-sm">
                          {packaging}
                        </td>
                      );
                    })}
                  </tr>
                )}

                {/* TIPO ABRASIVO Row - For Lixas Manuais */}
                {categorySlug === 'lixas' && sandpaperManualImages[typeName.toLowerCase()] && !typeName.toLowerCase().includes('base inox') && (
                  <tr style={{ backgroundColor: rowBgLight }}>
                    <td className="px-2 sm:px-4 py-1.5 sm:py-2 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      {t("products.table.abrasiveType", "TIPO ABRASIVO")}
                    </td>
                    {products.map((product, idx) => (
                      <td key={idx} className="px-1 sm:px-2 py-1.5 sm:py-2 text-center text-[8px] sm:text-xs">
                        ÓXIDO DE ALUMÍNIO
                      </td>
                    ))}
                  </tr>
                )}

                {/* MATERIAL Row - For Lixas Manuais */}
                {categorySlug === 'lixas' && sandpaperManualImages[typeName.toLowerCase()] && (
                  <tr style={{ backgroundColor: typeName.toLowerCase().includes('base inox') ? rowBgLight : rowBgWhite }}>
                    <td className="px-2 sm:px-4 py-1.5 sm:py-2 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                      {t("products.table.material", "MATERIAL")}
                    </td>
                    {products.map((product, idx) => {
                      let material = "ABS/EVA/POLIESTER";
                      if (typeName.toLowerCase().includes('white fina') || typeName.toLowerCase().includes('descartável')) {
                        material = "MADEIRA";
                      } else if (typeName.toLowerCase().includes('base inox')) {
                        material = "AÇO INOXIDÁVEL AISI420";
                      }
                      return (
                        <td key={idx} className="px-1 sm:px-2 py-1.5 sm:py-2 text-center text-[8px] sm:text-xs">
                          {material}
                        </td>
                      );
                    })}
                  </tr>
                )}

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
          )}

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
