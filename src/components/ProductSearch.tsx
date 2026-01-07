import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface ProductSearchProps {
  onSearch: (query: string) => void;
  onFilterChange: (filter: string) => void;
  filters?: string[];
  placeholder?: string;
}

const ProductSearch = ({
  onSearch,
  onFilterChange,
  filters = [],
  placeholder,
}: ProductSearchProps) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const handleFilterChange = (value: string) => {
    setActiveFilter(value);
    onFilterChange(value);
  };

  const clearSearch = () => {
    setSearchQuery("");
    onSearch("");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder={placeholder || t("products.searchPlaceholder", "Buscar produtos...")}
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10 pr-10 h-12 border-gray-200 focus:border-[#9B0000] focus:ring-[#9B0000] rounded-xl"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Filter Dropdown */}
      {filters.length > 0 && (
        <Select value={activeFilter} onValueChange={handleFilterChange}>
          <SelectTrigger className="w-full sm:w-48 h-12 border-gray-200 rounded-xl">
            <Filter className="w-4 h-4 mr-2 text-gray-400" />
            <SelectValue placeholder={t("products.filterBy", "Filtrar por")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("products.filterAll", "Todos")}</SelectItem>
            {filters.map((filter) => (
              <SelectItem key={filter} value={filter}>
                {filter}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

export default ProductSearch;
