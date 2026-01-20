import { useTranslation } from "react-i18next";
import { Sparkles } from "lucide-react";

// Import diamond bur type images
import BrocaConicaInvertida from "@/assets/products/broca-conica-invertida.png";
import BrocaConica from "@/assets/products/broca-conica.png";
import BrocaConicaTopoArredondado from "@/assets/products/broca-conica-topo-arredondado.png";
import BrocaConicaTopoPlano from "@/assets/products/broca-conica-topo-plano.png";
import BrocaEsferica from "@/assets/products/broca-esferica.png";
import BrocaLentilha from "@/assets/products/broca-lentilha.png";
import BrocaCilindrica from "@/assets/products/broca-cilindrica.png";
import BrocaRoda from "@/assets/products/broca-roda.png";
import BrocaCilindricaTopoArredondado from "@/assets/products/broca-cilindrica-topo-arredondado.png";
import BrocaChama from "@/assets/products/broca-chama.png";

// Import tungsten bur Maxi Cut type images
import MaxiCutMedio from "@/assets/products/maxi-cut-medio.png";
import MaxiCutFino from "@/assets/products/maxi-cut-fino.png";
import MaxiCutExtraFino from "@/assets/products/maxi-cut-extra-fino.png";
import MaxiCutReto from "@/assets/products/maxi-cut-reto.png";
import MaxiCutGrosso from "@/assets/products/maxi-cut-grosso.png";

// Import tungsten bur Mini Cut type images
import MiniCutMedio from "@/assets/products/mini-cut-medio.png";
import MiniCutFino from "@/assets/products/mini-cut-fino.png";
import MiniCutExtraFino from "@/assets/products/mini-cut-extra-fino.png";
import MiniCutGrosso from "@/assets/products/mini-cut-grosso.png";

// Import ceramic bur Maxi Cut type images
import CeramicaMaxiCutMedio from "@/assets/products/ceramica-maxi-cut-medio.png";
import CeramicaMaxiCutFino from "@/assets/products/ceramica-maxi-cut-fino.png";
import CeramicaMaxiCutExtraFino from "@/assets/products/ceramica-maxi-cut-extra-fino.png";
import CeramicaMaxiCutGrosso from "@/assets/products/ceramica-maxi-cut-grosso.png";

// Import ceramic bur Mini Cut type images
import CeramicaMiniCutMedio from "@/assets/products/ceramica-mini-cut-medio.png";
import CeramicaMiniCutFino from "@/assets/products/ceramica-mini-cut-fino.png";
import CeramicaMiniCutExtraFino from "@/assets/products/ceramica-mini-cut-extra-fino.png";

// Map type names to images for diamond burs
const diamondBurImages: Record<string, string> = {
  "cônica topo invertido": BrocaConicaInvertida,
  "cônica invertida": BrocaConicaInvertida,
  "cônica": BrocaConica,
  "cônica topo arredondado": BrocaConicaTopoArredondado,
  "cônica topo plano": BrocaConicaTopoPlano,
  "esférica": BrocaEsferica,
  "esféricas": BrocaEsferica,
  "lentilha": BrocaLentilha,
  "cilíndrica": BrocaCilindrica,
  "cilíndrica topo plano": BrocaCilindrica,
  "roda": BrocaRoda,
  "cilíndrica topo arredondado": BrocaCilindricaTopoArredondado,
  "chama": BrocaChama,
  "cônica topo chama": BrocaChama,
};

// Map type names to images for tungsten bur Maxi Cut
const tungstenMaxiCutImages: Record<string, string> = {
  "corte cruzado médio": MaxiCutMedio,
  "corte cruzado fino": MaxiCutFino,
  "corte cruzado extra fino": MaxiCutExtraFino,
  "corte reto": MaxiCutReto,
  "corte cruzado grosso": MaxiCutGrosso,
};

// Map type names to images for tungsten bur Mini Cut
const tungstenMiniCutImages: Record<string, string> = {
  "corte cruzado médio": MiniCutMedio,
  "corte cruzado fino": MiniCutFino,
  "corte cruzado extra fino": MiniCutExtraFino,
  "corte cruzado grosso": MiniCutGrosso,
};

// Map type names to images for ceramic bur Maxi Cut
const ceramicMaxiCutImages: Record<string, string> = {
  "corte cruzado médio": CeramicaMaxiCutMedio,
  "corte cruzado fino": CeramicaMaxiCutFino,
  "corte cruzado extra fino": CeramicaMaxiCutExtraFino,
  "corte cruzado grosso": CeramicaMaxiCutGrosso,
};

// Map type names to images for ceramic bur Mini Cut
const ceramicMiniCutImages: Record<string, string> = {
  "corte cruzado médio": CeramicaMiniCutMedio,
  "corte cruzado fino": CeramicaMiniCutFino,
  "corte cruzado extra fino": CeramicaMiniCutExtraFino,
};

interface CategoryTypeCardProps {
  typeName: string;
  image?: string;
  productCount: number;
  onClick: () => void;
  isGold?: boolean;
  availableGrains?: string[];
  categorySlug?: string;
  subcategoryName?: string;
}

const CategoryTypeCard = ({ typeName, image, productCount, onClick, isGold = false, categorySlug, subcategoryName }: CategoryTypeCardProps) => {
  const { t, i18n } = useTranslation();
  
  // Get translated type name
  const getTranslatedTypeName = (name: string): string => {
    const translationKey = `products.diamondBurs.types.${name}`;
    const translated = t(translationKey, name);
    return translated !== translationKey ? translated : name;
  };
  
  const translatedName = getTranslatedTypeName(typeName);
  
  // Get the appropriate image for diamond burs and tungsten burs
  const getTypeImage = (): string | undefined => {
    if (categorySlug === "brocas-diamantadas") {
      const normalizedTypeName = typeName.toLowerCase().trim();
      return diamondBurImages[normalizedTypeName] || image;
    }
    if (categorySlug === "fresas-tungstenio" && subcategoryName === "Maxi Cut") {
      const normalizedTypeName = typeName.toLowerCase().trim();
      return tungstenMaxiCutImages[normalizedTypeName] || image;
    }
    if (categorySlug === "fresas-tungstenio" && subcategoryName === "Mini Cut") {
      const normalizedTypeName = typeName.toLowerCase().trim();
      return tungstenMiniCutImages[normalizedTypeName] || image;
    }
    if (categorySlug === "fresas-ceramica" && subcategoryName === "Maxi Cut") {
      const normalizedTypeName = typeName.toLowerCase().trim();
      return ceramicMaxiCutImages[normalizedTypeName] || image;
    }
    if (categorySlug === "fresas-ceramica" && subcategoryName === "Mini Cut") {
      const normalizedTypeName = typeName.toLowerCase().trim();
      return ceramicMiniCutImages[normalizedTypeName] || image;
    }
    return image;
  };
  
  const displayImage = getTypeImage();
  
  return (
    <button
      onClick={onClick}
      className={`
        group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300
        border border-gray-100 hover:border-primary/20 hover:-translate-y-1
        flex flex-col items-center text-center min-h-[200px] w-full
        ${isGold ? "hover:border-yellow-400/50" : ""}
      `}
    >
      {/* Product Image */}
      <div className="flex-1 flex items-center justify-center mb-4 w-full">
        {displayImage ? (
          <img 
            src={displayImage} 
            alt={typeName}
            className="max-h-[120px] w-auto object-contain group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div 
            className={`
              w-20 h-20 rounded-full flex items-center justify-center
              ${isGold 
                ? "bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600" 
                : "bg-gradient-to-br from-primary via-primary/90 to-primary/70"
              }
            `}
          >
            <Sparkles className="w-10 h-10 text-white" />
          </div>
        )}
      </div>
      
      {/* Type Name */}
      <h3 className={`
        font-montserrat font-bold text-lg text-foreground group-hover:text-primary transition-colors
        ${isGold ? "group-hover:text-yellow-600" : ""}
      `}>
        {translatedName}
      </h3>
      
      {/* Product Count Badge */}
      <span className="text-sm text-muted-foreground mt-1">
        {productCount} {productCount === 1 ? t("products.model", "modelo") : t("products.models", "modelos")}
      </span>
    </button>
  );
};

export default CategoryTypeCard;
