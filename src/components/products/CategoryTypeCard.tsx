import { useTranslation } from "react-i18next";
import { Sparkles } from "lucide-react";

interface CategoryTypeCardProps {
  typeName: string;
  image?: string;
  productCount: number;
  onClick: () => void;
  isGold?: boolean;
  availableGrains?: string[];
}

const CategoryTypeCard = ({ typeName, image, productCount, onClick, isGold = false }: CategoryTypeCardProps) => {
  const { t } = useTranslation();
  
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
    </button>
  );
};

export default CategoryTypeCard;
