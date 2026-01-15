import { useTranslation } from "react-i18next";
import { X, Download, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

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
const grainColorMap: Record<string, string> = {
  "Extra Grosso": "#000000",
  "Grosso": "#4CAF50",    // Verde
  "Médio": "#2196F3",     // Azul
  "Fino": "#F44336",      // Vermelho
  "Extra Fino": "#FFEB3B",
  "Ultra Fino": "#FFFFFF",
};

// Get unique grain colors for a product (can have multiple)
const getProductGrains = (product: Product): string[] => {
  if (!product.grain) return [];
  // For now, just return the single grain, but could expand for multiple
  return [product.grain];
};

// Extract product name from code - returns readable model names
const getProductName = (code: string, model?: string): string => {
  // For diamond burs with format "500.001.XXX" -> "PM718", "PM720L", etc.
  const diamondBurMatch = code.match(/500\.001\.(.+)$/);
  if (diamondBurMatch) {
    return `PM${diamondBurMatch[1]}`;
  }
  
  // For tungsten burs with format "500.002.XXXX" -> show model suffix (e.g., "1507", "1507F", "717")
  const tungstenMatch = code.match(/500\.002\.(.+)$/);
  if (tungstenMatch) {
    return tungstenMatch[1].toUpperCase();
  }
  
  // For ceramic burs with format "500.004.XXXX" -> show model suffix (e.g., "1508C", "717C")
  const ceramicMatch = code.match(/500\.004\.(.+)$/);
  if (ceramicMatch) {
    return ceramicMatch[1].toUpperCase();
  }
  
  // For polidoras with format "500.008.XXXX"
  const polisherMatch = code.match(/500\.008\.(.+)$/);
  if (polisherMatch) {
    return polisherMatch[1];
  }
  
  // For lixas with specific patterns
  if (code.startsWith('LX-') || code.startsWith('LT-')) {
    return code;
  }
  
  // For other products, just return the model name if available
  if (model) {
    return model;
  }
  
  return code;
};

const CategoryTypeModal = ({ isOpen, onClose, typeName, products, typeImage, isGold = false }: CategoryTypeModalProps) => {
  const { t } = useTranslation();

  // Catalog-style table design matching the PDF reference
  const headerBgColor = isGold ? "#FFC107" : "#C62828";
  const headerTextColor = isGold ? "#795548" : "#FFFFFF";
  const rowBgLight = isGold ? "#FFF8E1" : "#FFEBEE";
  const rowBgWhite = "#FFFFFF";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="p-0">
          {/* Title Header - Catalog Style */}
          <div className="p-4 sm:p-6 pb-2 sm:pb-4">
            <h2 
              className="font-montserrat font-black text-2xl sm:text-4xl md:text-5xl tracking-tight"
              style={{ color: isGold ? "#FFC107" : "#C62828" }}
            >
              {typeName.toUpperCase()}
            </h2>
            <p className="text-muted-foreground font-light text-sm sm:text-lg mt-1">
              {t(`products.types.${typeName.toLowerCase()}`, typeName)}
            </p>
          </div>
        </DialogHeader>

        <div className="px-3 sm:px-6 pb-4 sm:pb-6 overflow-x-auto">
          {/* Catalog-Style Horizontal Table */}
          <div className="min-w-max">
            {/* Table Rows - Catalog Style */}
            <table className="w-full border-collapse text-xs sm:text-sm">
              <tbody>
                {/* MODELOS Row */}
                <tr style={{ backgroundColor: headerBgColor }}>
                  <td 
                    className="w-[80px] sm:w-[140px] px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm tracking-wider"
                    style={{ color: headerTextColor }}
                  >
                    {t("products.table.model", "MODELOS").toUpperCase()}
                  </td>
                  {products.map((product, idx) => (
                    <td 
                      key={idx}
                      className="px-1 sm:px-2 py-2 sm:py-3 text-center font-bold min-w-[60px] sm:min-w-[100px] text-[10px] sm:text-sm"
                      style={{ color: headerTextColor }}
                    >
                      {getProductName(product.code)}
                    </td>
                  ))}
                </tr>

                {/* DIÂMETRO Row */}
                <tr style={{ backgroundColor: rowBgLight }}>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                    {t("products.table.diameter", "DIÂMETRO")} ∅
                  </td>
                  {products.map((product, idx) => (
                    <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[10px] sm:text-sm">
                      {product.diameter?.replace('mm', '') || '—'}
                    </td>
                  ))}
                </tr>

                {/* COMPRIMENTO ÁREA ATIVA Row */}
                <tr style={{ backgroundColor: rowBgWhite }}>
                  <td className="px-2 sm:px-4 py-1.5 sm:py-2 text-[8px] sm:text-xs font-medium" style={{ color: headerBgColor }}>
                    <span className="block text-[8px] sm:text-[10px] leading-tight">{t("products.table.activeLength", "ÁREA ATIVA").toUpperCase()}</span>
                  </td>
                  {products.map((product, idx) => (
                    <td key={idx} className="px-1 sm:px-2 py-1.5 sm:py-2 text-center text-[10px] sm:text-sm">
                      {product.activeLength?.replace('mm', '') || '—'}
                    </td>
                  ))}
                </tr>

                {/* GRÃO Row - Colored circles */}
                <tr style={{ backgroundColor: rowBgLight }}>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                    {t("products.table.grain", "GRÃO").toUpperCase()}
                  </td>
                  {products.map((product, idx) => (
                    <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center">
                      <div className="flex items-center justify-center gap-1">
                        {product.grain && grainColorMap[product.grain] ? (
                          <div 
                            className="w-3 h-3 sm:w-5 sm:h-5 rounded-full"
                            style={{ 
                              backgroundColor: grainColorMap[product.grain],
                              border: grainColorMap[product.grain] === "#FFFFFF" ? "2px solid #DDD" : "none"
                            }}
                          />
                        ) : product.cut ? (
                          <span className="text-[8px] sm:text-xs text-muted-foreground">{product.cut}</span>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* ISO Row */}
                <tr style={{ backgroundColor: rowBgWhite }}>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                    {t("products.table.iso", "ISO").toUpperCase()}
                  </td>
                  {products.map((product, idx) => (
                    <td key={idx} className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[8px] sm:text-xs text-muted-foreground">
                      {product.iso || '—'}
                    </td>
                  ))}
                </tr>

                {/* CÓDIGO Row */}
                <tr style={{ backgroundColor: rowBgLight }}>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-[10px] sm:text-sm" style={{ color: headerBgColor }}>
                    {t("products.table.code", "CÓDIGO").toUpperCase()}
                  </td>
                  {products.map((product, idx) => (
                    <td 
                      key={idx} 
                      className="px-1 sm:px-2 py-2 sm:py-3 text-center text-[8px] sm:text-xs font-semibold"
                      style={{ color: headerBgColor }}
                    >
                      {product.code}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Grain Legend */}
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-4 justify-center">
            {Object.entries(grainColorMap).map(([grain, color]) => (
              <div key={grain} className="flex items-center gap-1 sm:gap-2">
                <div 
                  className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                  style={{ 
                    backgroundColor: color,
                    border: color === "#FFFFFF" ? "2px solid #DDD" : "none"
                  }}
                />
                <span className="text-[10px] sm:text-xs text-muted-foreground">{grain}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
            <a
              href="https://wa.me/5511940101807"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              {t("products.requestQuote")}
            </a>
            <a
              href="/catalogo-brilho.pdf"
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-foreground py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors text-sm sm:text-base"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              {t("products.downloadCatalog")}
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryTypeModal;
