import { useTranslation } from "react-i18next";

interface GrainLegendProps {
  onFilterChange?: (grain: string | null) => void;
  activeGrain?: string | null;
}

const grainData = [
  { key: "extraGrosso", label: "Extra Grosso", color: "bg-gray-800", textColor: "text-white" },
  { key: "grosso", label: "Grosso", color: "bg-blue-600", textColor: "text-white" },
  { key: "medio", label: "Médio", color: "bg-red-500", textColor: "text-white" },
  { key: "fino", label: "Fino", color: "bg-green-500", textColor: "text-white" },
  { key: "extraFino", label: "Extra Fino", color: "bg-yellow-400", textColor: "text-yellow-900" },
  { key: "ultraFino", label: "Ultra Fino", color: "bg-white border-2 border-gray-300", textColor: "text-gray-700" },
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
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
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
