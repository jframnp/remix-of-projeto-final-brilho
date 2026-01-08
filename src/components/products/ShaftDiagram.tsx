import { useState } from "react";
import { useTranslation } from "react-i18next";

interface ShaftDiagramProps {
  shaftLength?: string;
  shaftDiameter?: string;
  totalLength?: string;
}

const ShaftDiagram = ({ 
  shaftLength = "44.5mm", 
  shaftDiameter = "2.34mm",
  totalLength = "44.5mm"
}: ShaftDiagramProps) => {
  const { t } = useTranslation();
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 md:p-8">
      <h3 className="text-white font-montserrat font-bold text-xl mb-6 flex items-center gap-2">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        {t("products.shaftDiagram", "Diagrama da Haste")}
      </h3>

      <div className="relative flex flex-col items-center">
        {/* SVG Diagram */}
        <svg viewBox="0 0 400 120" className="w-full max-w-md">
          {/* Shaft body */}
          <g
            onMouseEnter={() => setHoveredPart("shaft")}
            onMouseLeave={() => setHoveredPart(null)}
            className="cursor-pointer"
          >
            <rect
              x="50"
              y="45"
              width="250"
              height="30"
              rx="2"
              fill={hoveredPart === "shaft" ? "#DC2626" : "#6B7280"}
              className="transition-colors duration-300"
            />
            {/* Shaft gradient overlay */}
            <defs>
              <linearGradient id="shaftGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
              </linearGradient>
            </defs>
            <rect
              x="50"
              y="45"
              width="250"
              height="30"
              rx="2"
              fill="url(#shaftGradient)"
            />
          </g>

          {/* Bur head (diamond tip) */}
          <g
            onMouseEnter={() => setHoveredPart("head")}
            onMouseLeave={() => setHoveredPart(null)}
            className="cursor-pointer"
          >
            <ellipse
              cx="330"
              cy="60"
              rx="25"
              ry="20"
              fill={hoveredPart === "head" ? "#FCD34D" : "#9B0000"}
              className="transition-colors duration-300"
            />
            {/* Diamond sparkle effect */}
            <circle cx="325" cy="55" r="3" fill="rgba(255,255,255,0.6)" />
            <circle cx="335" cy="62" r="2" fill="rgba(255,255,255,0.4)" />
          </g>

          {/* Dimension lines */}
          {/* Total length */}
          <line x1="50" y1="95" x2="355" y2="95" stroke="#9CA3AF" strokeWidth="1" />
          <line x1="50" y1="90" x2="50" y2="100" stroke="#9CA3AF" strokeWidth="1" />
          <line x1="355" y1="90" x2="355" y2="100" stroke="#9CA3AF" strokeWidth="1" />
          <text x="200" y="110" fill="#9CA3AF" textAnchor="middle" fontSize="12" fontFamily="Inter">
            {totalLength}
          </text>

          {/* Shaft diameter */}
          <line x1="30" y1="45" x2="30" y2="75" stroke="#9CA3AF" strokeWidth="1" />
          <line x1="25" y1="45" x2="35" y2="45" stroke="#9CA3AF" strokeWidth="1" />
          <line x1="25" y1="75" x2="35" y2="75" stroke="#9CA3AF" strokeWidth="1" />
          <text x="20" y="65" fill="#9CA3AF" textAnchor="middle" fontSize="10" fontFamily="Inter" transform="rotate(-90, 20, 65)">
            Ø{shaftDiameter}
          </text>
        </svg>

        {/* Interactive Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <div 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${hoveredPart === "shaft" ? "bg-primary/20 scale-105" : "bg-gray-700/50"}`}
            onMouseEnter={() => setHoveredPart("shaft")}
            onMouseLeave={() => setHoveredPart(null)}
          >
            <div className="w-4 h-4 rounded bg-gray-500" />
            <span className="text-white text-sm">{t("products.shaft", "Haste")} ({shaftDiameter})</span>
          </div>
          <div 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${hoveredPart === "head" ? "bg-yellow-500/20 scale-105" : "bg-gray-700/50"}`}
            onMouseEnter={() => setHoveredPart("head")}
            onMouseLeave={() => setHoveredPart(null)}
          >
            <div className="w-4 h-4 rounded bg-primary" />
            <span className="text-white text-sm">{t("products.activeTip", "Ponta Ativa")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShaftDiagram;
