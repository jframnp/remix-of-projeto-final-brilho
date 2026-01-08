import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronUp, ChevronDown, Search, Filter } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

interface Product {
  model: string;
  code: string;
  iso?: string;
  diameter?: string;
  grain?: string;
  cut?: string;
  color?: string;
  activeLength?: string;
}

interface ProductTableProps {
  products: Product[];
  onRowClick?: (product: Product) => void;
}

type SortField = "model" | "code" | "diameter" | "grain";
type SortDirection = "asc" | "desc";

const ProductTable = ({ products, onRowClick }: ProductTableProps) => {
  const { t } = useTranslation();
  const [sortField, setSortField] = useState<SortField>("model");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [grainFilter, setGrainFilter] = useState<string>("");

  const grainColorMap: Record<string, string> = {
    "Extra Grosso": "bg-black text-white",
    "Grosso": "bg-green-500 text-white",      // Verde
    "Médio": "bg-blue-500 text-white",        // Azul
    "Fino": "bg-red-500 text-white",          // Vermelho
    "Extra Fino": "bg-yellow-400 text-yellow-900",
    "Ultra Fino": "bg-white border border-gray-300 text-gray-700",
  };

  const uniqueGrains = [...new Set(products.filter(p => p.grain).map(p => p.grain))];

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = 
        product.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.code.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGrain = !grainFilter || product.grain === grainFilter;
      return matchesSearch && matchesGrain;
    })
    .sort((a, b) => {
      const aValue = a[sortField] || "";
      const bValue = b[sortField] || "";
      const comparison = aValue.localeCompare(bValue);
      return sortDirection === "asc" ? comparison : -comparison;
    });

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ChevronUp className="w-4 h-4 opacity-30" />;
    return sortDirection === "asc" 
      ? <ChevronUp className="w-4 h-4 text-primary" />
      : <ChevronDown className="w-4 h-4 text-primary" />;
  };

  const hasColumn = (field: keyof Product) => products.some(p => p[field] !== undefined);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Filters Header */}
      <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder={t("products.searchProducts", "Buscar produtos...")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        {uniqueGrains.length > 0 && (
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <select
              value={grainFilter}
              onChange={(e) => setGrainFilter(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm bg-white"
            >
              <option value="">{t("products.allGrains", "Todos os Grãos")}</option>
              {uniqueGrains.map(grain => (
                <option key={grain} value={grain}>{grain}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary/90">
              <TableHead 
                className="text-white font-bold cursor-pointer hover:bg-white/10 transition-colors"
                onClick={() => handleSort("model")}
              >
                <div className="flex items-center gap-2">
                  {t("products.model", "Modelo")}
                  <SortIcon field="model" />
                </div>
              </TableHead>
              <TableHead 
                className="text-white font-bold cursor-pointer hover:bg-white/10 transition-colors"
                onClick={() => handleSort("code")}
              >
                <div className="flex items-center gap-2">
                  {t("products.code", "Código")}
                  <SortIcon field="code" />
                </div>
              </TableHead>
              {hasColumn("diameter") && (
                <TableHead 
                  className="text-white font-bold cursor-pointer hover:bg-white/10 transition-colors"
                  onClick={() => handleSort("diameter")}
                >
                  <div className="flex items-center gap-2">
                    {t("products.diameter", "Diâmetro Ø")}
                    <SortIcon field="diameter" />
                  </div>
                </TableHead>
              )}
              {hasColumn("grain") && (
                <TableHead 
                  className="text-white font-bold cursor-pointer hover:bg-white/10 transition-colors"
                  onClick={() => handleSort("grain")}
                >
                  <div className="flex items-center gap-2">
                    {t("products.grain", "Grão")}
                    <SortIcon field="grain" />
                  </div>
                </TableHead>
              )}
              {hasColumn("iso") && (
                <TableHead className="text-white font-bold">ISO</TableHead>
              )}
              {hasColumn("activeLength") && (
                <TableHead className="text-white font-bold">
                  {t("products.activeLength", "Área Ativa")}
                </TableHead>
              )}
              {hasColumn("iso") && (
                <TableHead className="text-white font-bold">ISO</TableHead>
              )}
              {hasColumn("diameter") && (
                <TableHead 
                  className="text-white font-bold cursor-pointer hover:bg-white/10 transition-colors"
                  onClick={() => handleSort("diameter")}
                >
                  <div className="flex items-center gap-2">
                    Ø
                    <SortIcon field="diameter" />
                  </div>
                </TableHead>
              )}
              {hasColumn("activeLength") && (
                <TableHead className="text-white font-bold">
                  {t("products.activeLength", "Área Ativa")}
                </TableHead>
              )}
              {hasColumn("grain") && (
                <TableHead 
                  className="text-white font-bold cursor-pointer hover:bg-white/10 transition-colors"
                  onClick={() => handleSort("grain")}
                >
                  <div className="flex items-center gap-2">
                    {t("products.grain", "Grão")}
                    <SortIcon field="grain" />
                  </div>
                </TableHead>
              )}
              {hasColumn("cut") && (
                <TableHead className="text-white font-bold">
                  {t("products.cut", "Corte")}
                </TableHead>
              )}
              {hasColumn("color") && (
                <TableHead className="text-white font-bold">
                  {t("products.color", "Cor")}
                </TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product, idx) => (
              <TableRow 
                key={idx} 
                className={`
                  cursor-pointer transition-all duration-200
                  ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                  hover:bg-primary/5 hover:shadow-md
                `}
                onClick={() => onRowClick?.(product)}
              >
                <TableCell className="font-medium">{product.model}</TableCell>
                <TableCell className="font-bold text-primary">{product.code}</TableCell>
                {hasColumn("diameter") && (
                  <TableCell>{product.diameter}</TableCell>
                )}
                {hasColumn("grain") && (
                  <TableCell>
                    {product.grain && grainColorMap[product.grain] && (
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${grainColorMap[product.grain]}`}>
                        {product.grain}
                      </span>
                    )}
                  </TableCell>
                )}
                {hasColumn("iso") && (
                  <TableCell>{product.iso}</TableCell>
                )}
                {hasColumn("activeLength") && (
                  <TableCell>{product.activeLength}</TableCell>
                )}
                {hasColumn("cut") && (
                  <TableCell>{product.cut}</TableCell>
                )}
                {hasColumn("color") && (
                  <TableCell>{product.color}</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Results Count */}
      <div className="p-4 bg-gray-50 border-t text-sm text-muted-foreground">
        {filteredProducts.length} {t("products.of", "de")} {products.length} {t("products.productsFound", "produtos encontrados")}
      </div>
    </div>
  );
};

export default ProductTable;
