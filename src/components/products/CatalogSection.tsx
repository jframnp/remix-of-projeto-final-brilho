import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";

// Category-specific diagram configurations
type DiagramType = "shaft" | "disc" | "support" | "brush" | "polisher" | "fiber" | "none";

interface CategoryDiagramConfig {
  type: DiagramType;
  showShaft: boolean;
  shaftDiameter?: string;
  totalLength?: string;
  activeLength?: string;
  discDiameter?: string;
  grainColors?: { name: string; color: string; label: string }[];
  modelPrefix?: string;
}

// Unique configurations for each product category
const categoryDiagramConfigs: Record<string, CategoryDiagramConfig> = {
  "brocas-diamantadas": {
    type: "shaft",
    showShaft: true,
    shaftDiameter: "2,34 mm",
    totalLength: "44,5 mm",
    activeLength: "Variável",
    grainColors: [
      { name: "Grosso", color: "#4CAF50", label: "Grosso/Coarse" },
      { name: "Médio", color: "#2196F3", label: "Médio/Medium" },
      { name: "Fino", color: "#F44336", label: "Fino/Fine" },
    ],
    modelPrefix: "PM",
  },
  "fresas-tungstenio": {
    type: "shaft",
    showShaft: true,
    shaftDiameter: "2,34 mm",
    totalLength: "44,5 mm",
    activeLength: "Variável",
    grainColors: [
      { name: "Cruzado Grosso", color: "#1E3A8A", label: "Cruzado Grosso" },
      { name: "Cruzado Médio", color: "#3B82F6", label: "Cruzado Médio" },
      { name: "Cruzado Fino", color: "#93C5FD", label: "Cruzado Fino" },
    ],
    modelPrefix: "FT",
  },
  "fresas-ceramica": {
    type: "shaft",
    showShaft: true,
    shaftDiameter: "2,34 mm",
    totalLength: "44,5 mm",
    activeLength: "Variável",
    grainColors: [
      { name: "Cruzado Médio", color: "#F97316", label: "Cruzado Médio" },
      { name: "Cruzado Fino", color: "#FB923C", label: "Cruzado Fino" },
    ],
    modelPrefix: "FC",
  },
  "lixas": {
    type: "disc",
    showShaft: false,
    discDiameter: "15mm / 25mm",
    grainColors: [
      { name: "80", color: "#1E3A8A", label: "Grão 80 (Grosso)" },
      { name: "100", color: "#3B82F6", label: "Grão 100 (Médio)" },
      { name: "120", color: "#60A5FA", label: "Grão 120 (Fino)" },
      { name: "150/180", color: "#93C5FD", label: "Grão 150/180" },
    ],
    modelPrefix: "LX",
  },
  "lixa-tubular-adesiva": {
    type: "disc",
    showShaft: false,
    discDiameter: "10mm / 20mm",
    grainColors: [
      { name: "60", color: "#1E3A8A", label: "Grão 60 (Grosso)" },
      { name: "80", color: "#3B82F6", label: "Grão 80 (Médio)" },
      { name: "100", color: "#60A5FA", label: "Grão 100" },
      { name: "120", color: "#93C5FD", label: "Grão 120 (Fino)" },
    ],
    modelPrefix: "LT/LA",
  },
  "polidoras": {
    type: "polisher",
    showShaft: true,
    shaftDiameter: "2,34 mm",
    totalLength: "44,5 mm",
    grainColors: [
      { name: "Extra Grosso", color: "#000000", label: "Extra Grosso (Preto)" },
      { name: "Grosso", color: "#2196F3", label: "Grosso (Azul)" },
      { name: "Médio", color: "#4CAF50", label: "Médio (Verde)" },
      { name: "Fino", color: "#FFEB3B", label: "Fino (Amarelo)" },
      { name: "Extra Fino", color: "#E91E63", label: "Extra Fino (Rosa)" },
      { name: "Ultra Fino", color: "#FFFFFF", label: "Ultra Fino (Branco)" },
    ],
    modelPrefix: "PO",
  },
  "escovas-limpeza": {
    type: "brush",
    showShaft: true,
    shaftDiameter: "2,34 mm",
    totalLength: "44,5 mm",
    grainColors: [
      { name: "Rosa", color: "#F472B6", label: "Cerdas Rosa" },
      { name: "Lilás", color: "#A78BFA", label: "Cerdas Lilás" },
    ],
    modelPrefix: "EC",
  },
  "fibras-enucleadora-mandril": {
    type: "fiber",
    showShaft: true,
    shaftDiameter: "2,34 mm",
    totalLength: "44,5 mm",
    grainColors: [],
    modelPrefix: "FE",
  },
  "apoio-lixas-afiacao": {
    type: "support",
    showShaft: false,
    discDiameter: "15mm / 25mm / 75mm",
    grainColors: [],
    modelPrefix: "AL",
  },
  "linha-gold": {
    type: "shaft",
    showShaft: true,
    shaftDiameter: "2,34 mm",
    totalLength: "44,5 mm",
    activeLength: "Variável",
    grainColors: [
      { name: "Grosso", color: "#4CAF50", label: "Grosso/Coarse" },
      { name: "Médio", color: "#2196F3", label: "Médio/Medium" },
      { name: "Fino", color: "#F44336", label: "Fino/Fine" },
      { name: "Extra Fino", color: "#FFEB3B", label: "Extra Fino/Extra Fine" },
    ],
    modelPrefix: "BD-GOLD",
  },
};

interface CatalogSectionProps {
  categoryTitle: string;
  categorySubtitle?: string;
  descriptionPt: string;
  descriptionEn: string;
  categorySlug: string;
  isGold?: boolean;
}

const CatalogSection = ({
  categoryTitle,
  categorySubtitle,
  descriptionPt,
  descriptionEn,
  categorySlug,
  isGold = false,
}: CatalogSectionProps) => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();

  const config = categoryDiagramConfigs[categorySlug] || categoryDiagramConfigs["brocas-diamantadas"];

  // Render shaft-based diagram (for burs, polishers, brushes)
  const renderShaftDiagram = () => (
    <div className="relative w-full max-w-md">
      {/* Total length indicator */}
      <div className="flex items-center justify-end mb-2 text-xs text-muted-foreground">
        <span className="w-16 border-t border-dashed border-gray-400"></span>
        <span className="px-2">Comprimento total: {config.totalLength}</span>
        <span className="w-8 border-t border-dashed border-gray-400"></span>
      </div>

      {/* Main shaft diagram */}
      <div className="relative flex items-center">
        {/* Shaft diameter label */}
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-xs text-muted-foreground whitespace-nowrap transform -rotate-90 origin-center">
          Ø Haste: {config.shaftDiameter}
        </div>

        {/* Shaft body */}
        <div className="flex items-center w-full ml-4">
          {/* Shaft */}
          <div className="flex-1 h-4 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 rounded-l relative">
            {/* Colored band (grain indicator) */}
            <div 
              className="absolute right-4 top-0 bottom-0 w-6 rounded-sm" 
              style={{ backgroundColor: isGold ? "#FFD700" : "#DC2626" }}
            />
          </div>
          
          {/* Tip - varies by category */}
          <div className="w-12 h-6 bg-gradient-to-r from-gray-400 to-gray-300 rounded-r relative flex items-center justify-end pr-1">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: isGold ? "#FFD700" : "#6B7280" }}
            />
          </div>
        </div>

        {/* Active area length label */}
        {config.activeLength && (
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-xs text-muted-foreground whitespace-nowrap text-right">
            L= {config.activeLength}
            <br />
            <span className="text-[10px]">Comp.<br />Área ativa</span>
          </div>
        )}
      </div>
    </div>
  );

  // Render disc-based diagram (for lixas, supports)
  const renderDiscDiagram = () => (
    <div className="relative w-full max-w-md flex flex-col items-center">
      {/* Disc illustration */}
      <div className="relative">
        <div 
          className="w-32 h-32 rounded-full border-8 border-gray-300 flex items-center justify-center"
          style={{ 
            background: "linear-gradient(135deg, #f0f0f0 0%, #d0d0d0 50%, #b0b0b0 100%)"
          }}
        >
          <div className="w-4 h-4 rounded-full bg-gray-600" />
        </div>
        
        {/* Diameter indicator */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground text-center">
          <span className="w-24 border-t border-dashed border-gray-400 block mb-1"></span>
          Ø {config.discDiameter}
        </div>
      </div>
      
      {/* Support info */}
      {categorySlug === "apoio-lixas-afiacao" && (
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Apoios rígidos e flexíveis<br />
            para diferentes aplicações
          </p>
        </div>
      )}
    </div>
  );

  // Render polisher diagram with color system
  const renderPolisherDiagram = () => (
    <div className="relative w-full max-w-md">
      {/* Polisher silhouette with color indicator */}
      <div className="flex items-center justify-center gap-4 mb-6">
        {/* Torpedo shape */}
        <div 
          className="w-24 h-10 rounded-full bg-gradient-to-r from-gray-400 to-gray-300 relative"
          style={{ borderRadius: "50% / 100%" }}
        >
          <div className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-green-500" />
        </div>
        <div className="text-xs text-muted-foreground">
          Sistema de cores<br />para identificação
        </div>
      </div>
      
      {/* Shaft info */}
      <div className="text-xs text-muted-foreground text-center">
        Haste padrão: Ø {config.shaftDiameter}
      </div>
    </div>
  );

  // Render brush diagram
  const renderBrushDiagram = () => (
    <div className="relative w-full max-w-md flex flex-col items-center">
      {/* Brush illustration */}
      <div className="relative flex items-center">
        {/* Shaft */}
        <div className="w-24 h-3 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 rounded-l" />
        {/* Brush head */}
        <div 
          className="w-16 h-12 rounded-r-lg"
          style={{ 
            background: "radial-gradient(circle at 80% 50%, #F472B6 0%, #BE185D 100%)"
          }}
        />
      </div>
      
      {/* Info */}
      <div className="mt-6 text-xs text-muted-foreground text-center">
        Cerdas de poliamida<br />
        Haste: Ø {config.shaftDiameter}
      </div>
    </div>
  );

  // Render fiber/mandril diagram
  const renderFiberDiagram = () => (
    <div className="relative w-full max-w-md flex flex-col items-center">
      <div className="flex gap-8 items-end">
        {/* Fiber molecular */}
        <div className="flex flex-col items-center">
          <div className="w-2 h-16 bg-gradient-to-b from-amber-200 to-amber-400 rounded" />
          <span className="text-xs text-muted-foreground mt-2">Fibra</span>
        </div>
        
        {/* Enucleadora */}
        <div className="flex flex-col items-center">
          <div className="w-4 h-12 bg-gradient-to-b from-gray-300 to-gray-500 rounded-t">
            <div className="w-6 h-6 -mx-1 rounded-full bg-gradient-to-br from-gray-400 to-gray-600" />
          </div>
          <span className="text-xs text-muted-foreground mt-2">Enucleadora</span>
        </div>
        
        {/* Mandril */}
        <div className="flex flex-col items-center">
          <div className="w-1 h-16 bg-gradient-to-b from-gray-400 to-gray-600 rounded" />
          <span className="text-xs text-muted-foreground mt-2">Mandril</span>
        </div>
      </div>
    </div>
  );

  // Render support diagram (no shaft)
  const renderSupportDiagram = () => (
    <div className="relative w-full max-w-md flex flex-col items-center">
      {/* Support disc illustration */}
      <div className="flex gap-8 items-center">
        {/* Rigid support */}
        <div className="flex flex-col items-center">
          <div 
            className="w-20 h-20 rounded-full border-4 border-gray-400 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)" }}
          >
            <div className="w-3 h-3 rounded-full bg-gray-500" />
          </div>
          <span className="text-xs text-muted-foreground mt-2">Apoio Rígido</span>
        </div>
        
        {/* Flexible support */}
        <div className="flex flex-col items-center">
          <div 
            className="w-20 h-20 rounded-full border-4 border-gray-300 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #e0e0e0 0%, #c0c0c0 100%)" }}
          >
            <div className="w-3 h-3 rounded-full bg-gray-400" />
          </div>
          <span className="text-xs text-muted-foreground mt-2">Apoio Flexível</span>
        </div>
      </div>
      
      {/* Diameters info */}
      <div className="mt-6 text-xs text-muted-foreground text-center">
        Diâmetros disponíveis: {config.discDiameter}
      </div>
    </div>
  );

  // Select which diagram to render based on category
  const renderDiagram = () => {
    switch (config.type) {
      case "shaft":
        return renderShaftDiagram();
      case "disc":
        return renderDiscDiagram();
      case "polisher":
        return renderPolisherDiagram();
      case "brush":
        return renderBrushDiagram();
      case "fiber":
        return renderFiberDiagram();
      case "support":
        return renderSupportDiagram();
      default:
        return null;
    }
  };

  return (
    <section className="bg-white py-16 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Title and descriptions */}
          <div>
            {/* Category title */}
            <h2 className={`font-montserrat font-black text-4xl md:text-5xl mb-1 uppercase tracking-tight ${
              isGold ? "text-yellow-500" : "text-primary"
            }`}>
              {categoryTitle}
            </h2>
            
            {/* Subtitle in gray */}
            {categorySubtitle && (
              <p className="font-montserrat font-bold text-2xl md:text-3xl text-gray-400 uppercase tracking-tight mb-8">
                {categorySubtitle}
              </p>
            )}

            {/* Portuguese description - Bold */}
            <p className="text-foreground text-lg font-semibold leading-relaxed mb-4">
              {descriptionPt}
            </p>

            {/* English description - Italic */}
            <p className="text-muted-foreground text-base italic leading-relaxed">
              {descriptionEn}
            </p>
          </div>

          {/* Right side - Technical diagram (specific to category) */}
          <div className="flex flex-col items-center lg:items-end">
            {/* Diagram */}
            {renderDiagram()}

            {/* Grain/Color legend and Model prefix */}
            <div className="flex justify-between items-end mt-8 w-full max-w-md">
              {/* Grain/Color legend */}
              {config.grainColors && config.grainColors.length > 0 && (
                <div>
                  <p className="font-semibold text-foreground mb-2">
                    {config.type === "polisher" ? "Cores/Colors" : "Grão/Grain"}
                  </p>
                  <div className="flex flex-col gap-1">
                    {config.grainColors.slice(0, 4).map((grain) => (
                      <div key={grain.name} className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ 
                            backgroundColor: grain.color,
                            border: grain.color === "#FFFFFF" || grain.color === "#FFEB3B" ? "1px solid #999" : "none"
                          }}
                        />
                        <span className="text-sm text-muted-foreground">{grain.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Model prefix */}
              <div className="text-right">
                <p className={`text-3xl font-bold ${isGold ? "text-yellow-500" : "text-foreground"}`}>
                  {config.modelPrefix}
                </p>
                <p className="text-sm text-muted-foreground">Modelo/Model</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
