import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Eye, Sparkles } from "lucide-react";

interface ProductCard3DProps {
  product: {
    model: string;
    code: string;
    iso?: string;
    diameter?: string;
    grain?: string;
    cut?: string;
    color?: string;
    activeLength?: string;
  };
  onViewDetails: () => void;
  isGold?: boolean;
}

const ProductCard3D = ({ product, onViewDetails, isGold = false }: ProductCard3DProps) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotation({ x: y * 20, y: x * 20 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const grainColorMap: Record<string, string> = {
    "Extra Grosso": "bg-gray-800",
    "Grosso": "bg-blue-600",
    "Médio": "bg-red-500",
    "Fino": "bg-green-500",
    "Extra Fino": "bg-yellow-400",
    "Ultra Fino": "bg-white border border-gray-300",
  };

  return (
    <div
      className="perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`
          relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer
          ${isGold 
            ? "bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 shadow-lg shadow-yellow-500/30" 
            : "bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg hover:shadow-2xl hover:shadow-primary/20"
          }
        `}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovered ? "scale(1.05)" : "scale(1)"}`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Product Visual */}
        <div className={`relative h-48 flex items-center justify-center ${isGold ? "bg-gradient-to-b from-yellow-300/20 to-transparent" : "bg-gradient-to-b from-gray-100 to-white"}`}>
          {/* 3D Product Representation */}
          <div
            className={`
              relative w-24 h-24 rounded-full flex items-center justify-center
              transition-transform duration-700
              ${isHovered ? "animate-spin-slow" : ""}
            `}
            style={{
              background: isGold 
                ? "linear-gradient(135deg, #ffd700, #ffaa00, #ffd700)" 
                : "linear-gradient(135deg, #9B0000, #720000, #9B0000)",
              boxShadow: isGold 
                ? "0 0 30px rgba(255, 215, 0, 0.5)" 
                : "0 0 20px rgba(155, 0, 0, 0.3)",
            }}
          >
            <div className="absolute inset-2 rounded-full bg-white/20 backdrop-blur-sm" />
            <Sparkles className={`w-10 h-10 ${isGold ? "text-yellow-900" : "text-white"}`} />
          </div>

          {/* Code Badge */}
          <span className={`absolute top-3 left-3 px-3 py-1.5 rounded-lg text-xs font-bold ${isGold ? "bg-yellow-900 text-yellow-100" : "bg-primary text-white"}`}>
            {product.code}
          </span>

          {/* Grain Color Indicator */}
          {product.grain && grainColorMap[product.grain] && (
            <div className="absolute top-3 right-3 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
              <div className={`w-3 h-3 rounded-full ${grainColorMap[product.grain]}`} />
              <span className="text-xs font-medium text-gray-700">{product.grain}</span>
            </div>
          )}

          {/* Gold Badge */}
          {isGold && (
            <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-yellow-900/80 text-yellow-100 px-2 py-1 rounded-lg text-xs font-bold">
              ★ GOLD
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className={`p-5 ${isGold ? "bg-gradient-to-b from-amber-600 to-amber-700" : "bg-white"}`}>
          <h3 className={`font-montserrat font-bold text-lg mb-3 ${isGold ? "text-white" : "text-foreground"}`}>
            {product.model}
          </h3>
          
          {/* Specs Grid */}
          <div className={`grid grid-cols-2 gap-2 text-sm mb-4 ${isGold ? "text-yellow-100" : "text-muted-foreground"}`}>
            {product.iso && (
              <div className="flex flex-col">
                <span className={`text-xs ${isGold ? "text-yellow-200/70" : "text-muted-foreground/70"}`}>ISO</span>
                <span className="font-semibold">{product.iso}</span>
              </div>
            )}
            {product.diameter && product.diameter !== "N/A" && (
              <div className="flex flex-col">
                <span className={`text-xs ${isGold ? "text-yellow-200/70" : "text-muted-foreground/70"}`}>Ø</span>
                <span className="font-semibold">{product.diameter}</span>
              </div>
            )}
            {product.activeLength && (
              <div className="flex flex-col">
                <span className={`text-xs ${isGold ? "text-yellow-200/70" : "text-muted-foreground/70"}`}>Área Ativa</span>
                <span className="font-semibold">{product.activeLength}</span>
              </div>
            )}
            {product.cut && (
              <div className="flex flex-col">
                <span className={`text-xs ${isGold ? "text-yellow-200/70" : "text-muted-foreground/70"}`}>Corte</span>
                <span className="font-semibold">{product.cut}</span>
              </div>
            )}
            {product.color && (
              <div className="flex flex-col">
                <span className={`text-xs ${isGold ? "text-yellow-200/70" : "text-muted-foreground/70"}`}>Cor</span>
                <span className="font-semibold">{product.color}</span>
              </div>
            )}
          </div>

          {/* Action Button */}
          <button
            onClick={onViewDetails}
            className={`
              w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-300
              ${isGold 
                ? "bg-yellow-900 text-yellow-100 hover:bg-yellow-950" 
                : "bg-primary text-white hover:bg-primary/90"
              }
            `}
          >
            <Eye className="w-4 h-4" />
            {t("products.viewDetails", "Ver Detalhes")}
          </button>
        </div>

        {/* Hover Shine Effect */}
        {isHovered && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, transparent 100%)",
              transform: `translateX(${rotation.y * 5}px) translateY(${rotation.x * 5}px)`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard3D;
