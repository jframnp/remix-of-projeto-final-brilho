import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Download, TrendingUp } from "lucide-react";

const DownloadCounter = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(12847);

  useEffect(() => {
    // Simulate occasional downloads
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setCount(prev => prev + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="/catalogo-brilho.pdf"
      target="_blank"
      className="fixed bottom-24 right-6 z-40 group"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 bg-primary rounded-2xl animate-ping opacity-20" />
        
        {/* Main button */}
        <div className="relative flex items-center gap-3 bg-gradient-to-r from-primary to-primary/90 text-white px-6 py-4 rounded-2xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
          <div className="relative">
            <Download className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          </div>
          
          <div className="flex flex-col">
            <span className="font-bold text-sm">{t("products.downloadCatalog", "Baixar Catálogo")}</span>
            <span className="text-xs text-white/80 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              {count.toLocaleString()} downloads
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default DownloadCounter;
