import { useTranslation } from "react-i18next";
import { X, Download, MessageCircle, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    model: string;
    code: string;
    iso?: string;
    diameter?: string;
    grain?: string;
    cut?: string;
    color?: string;
    activeLength?: string;
  } | null;
  categoryName?: string;
  isGold?: boolean;
}

const ProductModal = ({ isOpen, onClose, product, categoryName, isGold = false }: ProductModalProps) => {
  const { t } = useTranslation();

  if (!product) return null;

  const grainColorMap: Record<string, string> = {
    "Extra Grosso": "bg-gray-800 text-white",
    "Grosso": "bg-blue-600 text-white",
    "Médio": "bg-red-500 text-white",
    "Fino": "bg-green-500 text-white",
    "Extra Fino": "bg-yellow-400 text-yellow-900",
    "Ultra Fino": "bg-white border border-gray-300 text-gray-700",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        <div className={`p-6 ${isGold ? "bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600" : "bg-gradient-to-br from-primary via-primary/90 to-primary/80"}`}>
          <DialogHeader>
            <DialogTitle className="text-white font-montserrat text-2xl flex items-center gap-3">
              {isGold && <span className="text-yellow-900">★</span>}
              {product.model}
            </DialogTitle>
            <p className={`${isGold ? "text-yellow-900/70" : "text-white/70"}`}>
              {categoryName}
            </p>
          </DialogHeader>

          {/* 3D Product Visual */}
          <div className="mt-6 flex justify-center">
            <div 
              className={`
                w-32 h-32 rounded-full flex items-center justify-center animate-float
                ${isGold 
                  ? "bg-gradient-to-br from-yellow-200 to-amber-400 shadow-lg shadow-yellow-500/50" 
                  : "bg-gradient-to-br from-white/30 to-white/10 shadow-lg shadow-black/20"
                }
              `}
            >
              <Sparkles className={`w-16 h-16 ${isGold ? "text-yellow-800" : "text-white"}`} />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white">
          {/* Code Badge */}
          <div className="flex items-center justify-between mb-6">
            <span className={`px-4 py-2 rounded-lg font-bold text-lg ${isGold ? "bg-yellow-500 text-yellow-900" : "bg-primary text-white"}`}>
              {product.code}
            </span>
            {product.grain && grainColorMap[product.grain] && (
              <span className={`px-4 py-2 rounded-lg font-semibold ${grainColorMap[product.grain]}`}>
                {product.grain}
              </span>
            )}
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {product.iso && (
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-1">ISO</p>
                <p className="text-xl font-bold text-foreground">{product.iso}</p>
              </div>
            )}
            {product.diameter && product.diameter !== "N/A" && (
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-1">{t("products.diameter", "Diâmetro")}</p>
                <p className="text-xl font-bold text-foreground">{product.diameter}</p>
              </div>
            )}
            {product.activeLength && (
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-1">{t("products.activeLength", "Área Ativa")}</p>
                <p className="text-xl font-bold text-foreground">{product.activeLength}</p>
              </div>
            )}
            {product.cut && (
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-1">{t("products.cutType", "Tipo de Corte")}</p>
                <p className="text-xl font-bold text-foreground">{product.cut}</p>
              </div>
            )}
            {product.color && (
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-1">{t("products.color", "Cor")}</p>
                <p className="text-xl font-bold text-foreground">{product.color}</p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/5511940101807"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              {t("products.requestQuote", "Solicitar Orçamento")}
            </a>
            <a
              href="/catalogo-brilho.pdf"
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-foreground py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              <Download className="w-5 h-5" />
              {t("products.downloadCatalog", "Baixar Catálogo")}
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
