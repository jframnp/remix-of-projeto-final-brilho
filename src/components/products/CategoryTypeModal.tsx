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

const CategoryTypeModal = ({ isOpen, onClose, typeName, products, typeImage, isGold = false }: CategoryTypeModalProps) => {
  const { t } = useTranslation();

  // Catalog-style table design matching the PDF reference
  const headerBgColor = isGold ? "#FFC107" : "#C62828";
  const headerTextColor = isGold ? "#795548" : "#FFFFFF";
  const rowBgLight = isGold ? "#FFF8E1" : "#FFEBEE";
  const rowBgWhite = "#FFFFFF";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="p-0">
          {/* Title Header - Catalog Style */}
          <div className="p-6 pb-4">
            <h2 
              className="font-montserrat font-black text-4xl md:text-5xl tracking-tight"
              style={{ color: isGold ? "#FFC107" : "#C62828" }}
            >
              {typeName.toUpperCase()}
            </h2>
            <p className="text-muted-foreground font-light text-lg mt-1">
              {t(`products.types.${typeName.toLowerCase()}`, typeName)}
            </p>
          </div>
        </DialogHeader>

        <div className="px-6 pb-6 overflow-x-auto">
          {/* Catalog-Style Horizontal Table */}
          <div className="min-w-max">
            {/* Product Silhouettes Row - Images on top */}
            <div className="flex">
              {/* Left column - Main product image */}
              <div className="w-[140px] flex-shrink-0 flex items-end justify-center pb-4">
                {typeImage ? (
                  <img 
                    src={typeImage} 
                    alt={typeName}
                    className="max-h-[180px] w-auto object-contain"
                  />
                ) : (
                  <div 
                    className="w-24 h-32 rounded-lg flex items-center justify-center"
                    style={{ 
                      background: isGold 
                        ? 'linear-gradient(135deg, #FFD54F, #FFC107, #FFA000)' 
                        : 'linear-gradient(135deg, #C62828, #B71C1C, #8B0000)'
                    }}
                  >
                    <span className="text-white text-4xl">◆</span>
                  </div>
                )}
              </div>
              
              {/* Product silhouettes */}
              {products.map((product, idx) => (
                <div 
                  key={idx} 
                  className="flex-1 min-w-[100px] flex items-end justify-center pb-2"
                >
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.code}
                      className="max-h-[120px] w-auto object-contain"
                    />
                  ) : (
                    // Silhouette placeholder based on diameter
                    <div className="flex flex-col items-center">
                      <div 
                        className="rounded-full bg-black"
                        style={{ 
                          width: `${Math.max(16, Math.min(48, parseFloat(product.diameter || "2") * 12))}px`,
                          height: `${Math.max(16, Math.min(48, parseFloat(product.diameter || "2") * 12))}px`
                        }}
                      />
                      <div className="w-[2px] h-16 bg-black mt-1" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Table Rows - Catalog Style */}
            <table className="w-full border-collapse">
              <tbody>
                {/* MODELOS Row */}
                <tr style={{ backgroundColor: headerBgColor }}>
                  <td 
                    className="w-[140px] px-4 py-3 font-bold text-sm tracking-wider"
                    style={{ color: headerTextColor }}
                  >
                    MODELOS
                  </td>
                  {products.map((product, idx) => (
                    <td 
                      key={idx}
                      className="px-2 py-3 text-center font-bold min-w-[100px]"
                      style={{ color: headerTextColor }}
                    >
                      {product.code.replace(/^PM-?|^BD-GOLD-|^FT-|^FC-|^LX-|^LT-|^LA-|^PO-|^EC-|^FE-|^AL-/i, '')}
                    </td>
                  ))}
                </tr>

                {/* DIÂMETRO Row */}
                <tr style={{ backgroundColor: rowBgLight }}>
                  <td className="px-4 py-3 font-bold text-sm" style={{ color: headerBgColor }}>
                    DIÂMETRO ∅
                  </td>
                  {products.map((product, idx) => (
                    <td key={idx} className="px-2 py-3 text-center text-sm">
                      {product.diameter?.replace('mm', '') || '—'}
                    </td>
                  ))}
                </tr>

                {/* COMPRIMENTO ÁREA ATIVA Row */}
                <tr style={{ backgroundColor: rowBgWhite }}>
                  <td className="px-4 py-2 text-xs font-medium" style={{ color: headerBgColor }}>
                    <span className="block text-[10px] leading-tight">COMPRIMENTO</span>
                    <span className="block text-[10px] leading-tight">ÁREA ATIVA</span>
                  </td>
                  {products.map((product, idx) => (
                    <td key={idx} className="px-2 py-2 text-center text-sm">
                      {product.activeLength?.replace('mm', '') || '—'}
                    </td>
                  ))}
                </tr>

                {/* GRÃO Row - Colored circles */}
                <tr style={{ backgroundColor: rowBgLight }}>
                  <td className="px-4 py-3 font-bold text-sm" style={{ color: headerBgColor }}>
                    GRÃO
                  </td>
                  {products.map((product, idx) => (
                    <td key={idx} className="px-2 py-3 text-center">
                      <div className="flex items-center justify-center gap-1">
                        {product.grain && grainColorMap[product.grain] ? (
                          <div 
                            className="w-5 h-5 rounded-full"
                            style={{ 
                              backgroundColor: grainColorMap[product.grain],
                              border: grainColorMap[product.grain] === "#FFFFFF" ? "2px solid #DDD" : "none"
                            }}
                          />
                        ) : product.cut ? (
                          <span className="text-xs text-muted-foreground">{product.cut}</span>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* ISO Row */}
                <tr style={{ backgroundColor: rowBgWhite }}>
                  <td className="px-4 py-3 font-bold text-sm" style={{ color: headerBgColor }}>
                    ISO
                  </td>
                  {products.map((product, idx) => (
                    <td key={idx} className="px-2 py-3 text-center text-xs text-muted-foreground">
                      {product.iso || '—'}
                    </td>
                  ))}
                </tr>

                {/* CÓDIGO Row */}
                <tr style={{ backgroundColor: rowBgLight }}>
                  <td className="px-4 py-3 font-bold text-sm" style={{ color: headerBgColor }}>
                    CÓDIGO
                  </td>
                  {products.map((product, idx) => (
                    <td 
                      key={idx} 
                      className="px-2 py-3 text-center text-xs font-semibold"
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
          <div className="mt-6 flex flex-wrap items-center gap-4 justify-center">
            {Object.entries(grainColorMap).map(([grain, color]) => (
              <div key={grain} className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ 
                    backgroundColor: color,
                    border: color === "#FFFFFF" ? "2px solid #DDD" : "none"
                  }}
                />
                <span className="text-xs text-muted-foreground">{grain}</span>
              </div>
            ))}
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
