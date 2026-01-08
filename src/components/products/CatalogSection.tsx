import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";

interface CatalogSectionProps {
  categoryTitle: string;
  categorySubtitle?: string;
  descriptionPt: string;
  descriptionEn: string;
  grainLegend?: {
    grosso: boolean;
    medio: boolean;
    fino: boolean;
  };
  modelNumber?: string;
}

const CatalogSection = ({
  categoryTitle,
  categorySubtitle,
  descriptionPt,
  descriptionEn,
  grainLegend = { grosso: true, medio: true, fino: false },
  modelNumber = "721",
}: CatalogSectionProps) => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();

  return (
    <section className="bg-white py-16 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Title and descriptions */}
          <div>
            {/* Category title in red */}
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-primary mb-1 uppercase tracking-tight">
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

          {/* Right side - Technical diagram */}
          <div className="flex flex-col items-end">
            {/* Shaft diagram */}
            <div className="relative w-full max-w-md">
              {/* Total length indicator */}
              <div className="flex items-center justify-between mb-2 text-xs text-muted-foreground">
                <span></span>
                <span className="flex items-center gap-1">
                  <span className="w-24 border-t border-dashed border-gray-400"></span>
                  Comprimento total: 44,5 mm
                  <span className="w-8 border-t border-dashed border-gray-400"></span>
                </span>
              </div>

              {/* Main shaft diagram */}
              <div className="relative flex items-center">
                {/* Shaft diameter label */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground whitespace-nowrap transform -rotate-90 origin-center">
                  Ø Haste: 2,34 mm
                </div>

                {/* Shaft body */}
                <div className="flex items-center w-full">
                  {/* Shaft */}
                  <div className="flex-1 h-4 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 rounded-l relative">
                    {/* Colored band (grain indicator) */}
                    <div className="absolute right-4 top-0 bottom-0 w-6 bg-primary rounded-sm" />
                  </div>
                  
                  {/* Tip */}
                  <div className="w-12 h-6 bg-gradient-to-r from-gray-400 to-gray-300 rounded-r relative flex items-center justify-end pr-1">
                    <div className="w-4 h-4 bg-gray-500 rounded-full" />
                  </div>
                </div>

                {/* Active area length label */}
                <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-xs text-muted-foreground whitespace-nowrap">
                  L= mm
                  <br />
                  <span className="text-[10px]">Comp.<br />Área ativa</span>
                </div>
              </div>

              {/* Grain legend and Model number */}
              <div className="flex justify-between items-end mt-8">
                {/* Grain legend */}
                <div>
                  <p className="font-semibold text-foreground mb-2">Grão/Grain</p>
                  <div className="flex flex-col gap-1">
                    {grainLegend.medio && (
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">Médio/Medium</span>
                      </div>
                    )}
                    {grainLegend.grosso && (
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <span className="text-sm text-muted-foreground">Grosso/Coarse</span>
                      </div>
                    )}
                    {grainLegend.fino && (
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="text-sm text-muted-foreground">Fino/Fine</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Model number */}
                <div className="text-right">
                  <p className="text-3xl font-bold text-foreground">Nº {modelNumber}</p>
                  <p className="text-sm text-muted-foreground">Modelo/Model</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
