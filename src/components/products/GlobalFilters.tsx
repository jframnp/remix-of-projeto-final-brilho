import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Filter, X, ChevronDown } from "lucide-react";

interface GlobalFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  usage: string[];
  material: string[];
  grain: string[];
}

const GlobalFilters = ({ onFilterChange }: GlobalFiltersProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    usage: [],
    material: [],
    grain: [],
  });

  const usageOptions = [
    { value: "podologia", label: t("products.usage.podologia", "Podologia") },
    { value: "nails", label: t("products.usage.nails", "Nails Design") },
    { value: "odontologia", label: t("products.usage.odontologia", "Odontologia") },
  ];

  const materialOptions = [
    { value: "diamante", label: t("products.material.diamante", "Diamante") },
    { value: "tungstenio", label: t("products.material.tungstenio", "Tungstênio") },
    { value: "ceramica", label: t("products.material.ceramica", "Cerâmica") },
  ];

  const grainOptions = [
    { value: "grosso", label: t("products.grains.grosso", "Grosso") },
    { value: "medio", label: t("products.grains.medio", "Médio") },
    { value: "fino", label: t("products.grains.fino", "Fino") },
  ];

  const toggleFilter = (category: keyof FilterState, value: string) => {
    setFilters(prev => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      const newFilters = { ...prev, [category]: updated };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const clearFilters = () => {
    const emptyFilters = { usage: [], material: [], grain: [] };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  const activeFiltersCount = filters.usage.length + filters.material.length + filters.grain.length;

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
      >
        <Filter className="w-5 h-5 text-primary" />
        <span className="font-semibold text-foreground">{t("products.filters", "Filtros")}</span>
        {activeFiltersCount > 0 && (
          <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center">
            {activeFiltersCount}
          </span>
        )}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-montserrat font-bold text-foreground">{t("products.filterBy", "Filtrar por")}</h3>
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-sm text-primary hover:underline flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                {t("products.clearAll", "Limpar")}
              </button>
            )}
          </div>

          {/* Usage */}
          <div className="mb-4">
            <p className="text-sm font-semibold text-muted-foreground mb-2">{t("products.usage.title", "Uso")}</p>
            <div className="flex flex-wrap gap-2">
              {usageOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() => toggleFilter("usage", option.value)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                    filters.usage.includes(option.value)
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-foreground hover:bg-gray-200"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Material */}
          <div className="mb-4">
            <p className="text-sm font-semibold text-muted-foreground mb-2">{t("products.material.title", "Material")}</p>
            <div className="flex flex-wrap gap-2">
              {materialOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() => toggleFilter("material", option.value)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                    filters.material.includes(option.value)
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-foreground hover:bg-gray-200"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grain */}
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-2">{t("products.grain", "Grão")}</p>
            <div className="flex flex-wrap gap-2">
              {grainOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() => toggleFilter("grain", option.value)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                    filters.grain.includes(option.value)
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-foreground hover:bg-gray-200"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalFilters;
