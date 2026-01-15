import { useTranslation } from "react-i18next";

interface GrainLegendProps {
  onFilterChange?: (grain: string | null) => void;
  activeGrain?: string | null;
}

// Updated grain data with exact colors from catalog - Polidoras section
const grainData = [
  { key: "extraGrosso", label: "Extra Grosso", color: "bg-[#6B3E26]", bgHex: "#6B3E26", textColor: "text-white" },
  { key: "grosso", label: "Grosso", color: "bg-[#808080]", bgHex: "#808080", textColor: "text-white" },
  { key: "medioGrosso", label: "Médio-Grosso", color: "bg-white border-2 border-gray-400", bgHex: "#FFFFFF", textColor: "text-gray-700" },
  { key: "medio", label: "Médio", color: "bg-[#1B7D3A]", bgHex: "#1B7D3A", textColor: "text-white" },
  { key: "fino", label: "Fino", color: "bg-[#0066CC]", bgHex: "#0066CC", textColor: "text-white" },
  { key: "extraFino", label: "Extra Fino", color: "bg-[#FFD700]", bgHex: "#FFD700", textColor: "text-gray-900" },
  { key: "ultraFino", label: "Ultra Fino", color: "bg-[#9B59B6]", bgHex: "#9B59B6", textColor: "text-white" },
];

const GrainLegend = ({ onFilterChange, activeGrain }: GrainLegendProps) => {
  const { t } = useTranslation();

  const handleClick = (grain: string) => {
    if (onFilterChange) {
      onFilterChange(activeGrain === grain ? null : grain);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h3 className="font-montserrat font-bold text-lg text-foreground mb-4 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-800 via-red-500 to-yellow-400" />
        {t("products.grainLegend", "Legenda de Grãos")}
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {grainData.map((grain) => (
          <button
            key={grain.key}
            onClick={() => handleClick(grain.label)}
            className={`
              flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300
              ${activeGrain === grain.label 
                ? "ring-2 ring-primary ring-offset-2 scale-105 shadow-lg" 
                : "hover:scale-105 hover:shadow-md"
              }
              ${onFilterChange ? "cursor-pointer" : "cursor-default"}
            `}
          >
            <div className={`w-5 h-5 rounded-full ${grain.color} flex-shrink-0 shadow-sm`} />
            <span className={`text-sm font-medium ${grain.textColor === "text-white" ? "text-foreground" : grain.textColor}`}>
              {t(`products.grains.${grain.key}`, grain.label)}
            </span>
          </button>
        ))}
      </div>

      {activeGrain && (
        <button
          onClick={() => onFilterChange?.(null)}
          className="mt-4 text-sm text-primary hover:underline"
        >
          {t("products.clearFilter", "Limpar filtro")}
        </button>
      )}
    </div>
  );
};

export default GrainLegend;
