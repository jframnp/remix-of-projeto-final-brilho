import { useTranslation } from "react-i18next";
import { Sparkles } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

// Grain color configuration matching the catalog
const grainConfig: Record<string, { color: string; border?: boolean }> = {
  "Extra Grosso": { color: "#6B3E26" },
  "Grosso": { color: "#808080" },
  "Médio-Grosso": { color: "#FFFFFF", border: true },
  "Médio": { color: "#1B7D3A" },
  "Fino": { color: "#0066CC" },
  "Extra Fino": { color: "#FFD700" },
  "Ultra Fino": { color: "#9B59B6" },
};

// Order of grains for display
const grainOrder = ["Extra Grosso", "Grosso", "Médio-Grosso", "Médio", "Fino", "Extra Fino", "Ultra Fino"];

interface CategoryTypeCardProps {
  typeName: string;
  image?: string;
  productCount: number;
  onClick: () => void;
  isGold?: boolean;
  availableGrains?: string[];
}

const CategoryTypeCard = ({ typeName, image, productCount, onClick, isGold = false, availableGrains = [] }: CategoryTypeCardProps) => {
  const { t } = useTranslation();

  // Sort grains according to predefined order
  const sortedGrains = grainOrder.filter(g => availableGrains.includes(g));

  // Get translated grain name
  const getGrainLabel = (grain: string): string => {
    const grainKeyMap: Record<string, string> = {
      'Extra Grosso': 'extraGrosso',
      'Grosso': 'grosso',
      'Médio-Grosso': 'medioGrosso',
      'Médio': 'medio',
      'Fino': 'fino',
      'Extra Fino': 'extraFino',
      'Ultra Fino': 'ultraFino',
    };
    const key = grainKeyMap[grain] || grain.toLowerCase().replace(' ', '');
    return t(`products.grains.${key}`, grain);
  };
  
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
        {image ? (
          <img 
            src={image} 
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
        {typeName}
      </h3>
      
      {/* Product Count Badge */}
      <span className="text-sm text-muted-foreground mt-1">
        {productCount} {productCount === 1 ? t("products.model", "modelo") : t("products.models", "modelos")}
      </span>

      {/* Grain Legend - Only show if grains are available */}
      {sortedGrains.length > 0 && (
        <TooltipProvider>
          <div className="mt-3 pt-3 border-t border-gray-100 w-full">
            <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wide">
              {t("products.grainTypes", "Grãos")}
            </p>
            <div className="flex justify-center gap-1.5 flex-wrap">
              {sortedGrains.map((grain) => {
                const config = grainConfig[grain];
                if (!config) return null;
                return (
                  <Tooltip key={grain}>
                    <TooltipTrigger asChild>
                      <div
                        className={`w-4 h-4 rounded-full transition-transform hover:scale-125 cursor-help ${config.border ? 'border-2 border-gray-300' : ''}`}
                        style={{ backgroundColor: config.color }}
                      />
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-foreground text-background">
                      <p className="text-xs font-medium">{getGrainLabel(grain)}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </div>
        </TooltipProvider>
      )}
    </button>
  );
};

export default CategoryTypeCard;
