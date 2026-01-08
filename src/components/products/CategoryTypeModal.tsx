import { useState } from "react";
import { useTranslation } from "react-i18next";
import { X, Search, Download, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
}

// Grain color map with correct colors from catalog
const grainColorMap: Record<string, { bg: string; text: string }> = {
  "Extra Grosso": { bg: "#000000", text: "#FFFFFF" },
  "Grosso": { bg: "#4CAF50", text: "#FFFFFF" },  // Verde
  "Médio": { bg: "#2196F3", text: "#FFFFFF" },   // Azul
  "Fino": { bg: "#F44336", text: "#FFFFFF" },    // Vermelho
  "Extra Fino": { bg: "#FFEB3B", text: "#212121" },
  "Ultra Fino": { bg: "#FFFFFF", text: "#212121" },
};

const CategoryTypeModal = ({ isOpen, onClose, typeName, products, typeImage, isGold = false }: CategoryTypeModalProps) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter products by search
  const filteredProducts = products.filter(p => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      p.model.toLowerCase().includes(query) ||
      p.code.toLowerCase().includes(query) ||
      (p.iso && p.iso.toLowerCase().includes(query)) ||
      (p.grain && p.grain.toLowerCase().includes(query))
    );
  });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Get grain label
  const getGrainLabel = (grain: string): string => {
    const grainKey = grain.toLowerCase().replace(' ', '');
    const grainMap: Record<string, string> = {
      'extragrosso': 'extraCoarse',
      'grosso': 'coarse',
      'médio': 'medium',
      'medio': 'medium',
      'fino': 'fine',
      'extrafino': 'extraFine',
      'ultrafino': 'ultraFine',
    };
    const key = grainMap[grainKey] || grainKey;
    return t(`products.grains.${key}`, grain);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className={`p-6 ${isGold ? "bg-gradient-to-r from-yellow-400 to-amber-500" : "bg-gradient-to-r from-primary to-primary/80"}`}>
          <DialogTitle className="text-white font-montserrat text-2xl">
            {typeName}
          </DialogTitle>
        </DialogHeader>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Controls Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm text-muted-foreground">resultados por página</span>
            </div>
            
            <div className="relative w-full sm:w-auto">
              <span className="text-sm text-muted-foreground mr-2">Pesquisar</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-full sm:w-48"
              />
            </div>
          </div>

          {/* Products Table */}
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">G</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Ø</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">L1</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">ISO/FIG</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Código</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Modelo</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Ilustração</th>
                </tr>
              </thead>
              <tbody>
                {paginatedProducts.map((product, idx) => (
                  <tr 
                    key={idx} 
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    {/* Grain Indicator */}
                    <td className="px-4 py-3">
                      {product.grain && grainColorMap[product.grain] ? (
                        <div className="flex items-center gap-1">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ 
                              backgroundColor: grainColorMap[product.grain].bg,
                              border: grainColorMap[product.grain].bg === "#FFFFFF" ? "2px solid #DDD" : "none"
                            }} 
                          />
                        </div>
                      ) : product.cut ? (
                        <span className="text-xs text-muted-foreground">-</span>
                      ) : (
                        <span className="text-xs text-muted-foreground">-</span>
                      )}
                    </td>
                    {/* Diameter */}
                    <td className="px-4 py-3 text-sm text-foreground">
                      {product.diameter?.replace("mm", "") || "-"}
                    </td>
                    {/* Active Length */}
                    <td className="px-4 py-3 text-sm text-foreground">
                      {product.activeLength?.replace("mm", "") || "-"}
                    </td>
                    {/* ISO */}
                    <td className="px-4 py-3 text-sm text-foreground">
                      {product.iso || "-"}
                    </td>
                    {/* Code */}
                    <td className="px-4 py-3 text-sm font-semibold text-primary">
                      {product.code}
                    </td>
                    {/* Model */}
                    <td className="px-4 py-3 text-sm text-foreground">
                      {product.model}
                    </td>
                    {/* Product Image */}
                    <td className="px-4 py-3">
                      <div className="flex justify-center">
                        {product.image ? (
                          <img 
                            src={product.image} 
                            alt={product.model}
                            className="h-10 w-auto object-contain"
                          />
                        ) : (
                          <div className="w-24 h-10 bg-gray-100 rounded flex items-center justify-center">
                            <div className="w-20 h-6 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 rounded-full relative">
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-700 rounded-full" />
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
            <p className="text-sm text-muted-foreground">
              Mostrando de {((currentPage - 1) * itemsPerPage) + 1} até {Math.min(currentPage * itemsPerPage, filteredProducts.length)} de {filteredProducts.length} registros
            </p>
            
            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border border-gray-200 rounded-lg text-sm disabled:opacity-50 hover:bg-gray-50"
                >
                  ‹
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 border rounded-lg text-sm ${
                      currentPage === page 
                        ? "bg-primary text-white border-primary" 
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border border-gray-200 rounded-lg text-sm disabled:opacity-50 hover:bg-gray-50"
                >
                  ›
                </button>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-100">
            <a
              href="https://wa.me/5511940101807"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento
            </a>
            <a
              href="/catalogo-brilho.pdf"
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-foreground py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              <Download className="w-5 h-5" />
              Baixar Catálogo
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryTypeModal;
