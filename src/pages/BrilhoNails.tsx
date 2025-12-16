import Layout from "@/components/Layout";
import { Download, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const BrilhoNails = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brilho-red-dark py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-10 h-10 text-brilho-text-light" />
            <h1 className="text-brilho-text-light font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl">
              {t("brilhoNails.title")}
            </h1>
            <Sparkles className="w-10 h-10 text-brilho-text-light" />
          </div>
          <p className="text-brilho-text-light/80 font-inter text-lg max-w-2xl mx-auto">
            {t("brilhoNails.subtitle")}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-brilho-bg-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-brilho-red font-montserrat font-bold text-3xl md:text-4xl mb-6">
                {t("brilhoNails.lineTitle")}
              </h2>
              <p className="text-foreground/80 font-inter text-base md:text-lg leading-relaxed mb-6">
                {t("brilhoNails.lineText1")}
              </p>
              <p className="text-foreground/80 font-inter text-base md:text-lg leading-relaxed mb-6">
                {t("brilhoNails.lineText2")}
              </p>
              <p className="text-foreground/80 font-inter text-base md:text-lg leading-relaxed">
                {t("brilhoNails.lineText3")}
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg overflow-hidden shadow-card aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-brilho-red" />
                  </div>
                  <p className="text-foreground/60 font-inter text-lg">
                    {t("brilhoNails.lineImage")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-brilho-red font-montserrat font-bold text-3xl md:text-4xl text-center mb-12">
            {t("brilhoNails.productsTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: t("brilhoNails.prod1Name"), description: t("brilhoNails.prod1Desc") },
              { name: t("brilhoNails.prod2Name"), description: t("brilhoNails.prod2Desc") },
              { name: t("brilhoNails.prod3Name"), description: t("brilhoNails.prod3Desc") },
              { name: t("brilhoNails.prod4Name"), description: t("brilhoNails.prod4Desc") },
              { name: t("brilhoNails.prod5Name"), description: t("brilhoNails.prod5Desc") },
              { name: t("brilhoNails.prod6Name"), description: t("brilhoNails.prod6Desc") },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-brilho-bg-light rounded-lg p-6 border border-border shadow-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg aspect-video flex items-center justify-center mb-6 group-hover:from-pink-100 group-hover:to-purple-100 transition-colors">
                  <Sparkles className="w-12 h-12 text-brilho-red opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-foreground font-montserrat font-bold text-xl mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground font-inter text-sm">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brilho-red-dark py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-brilho-text-light font-montserrat font-bold text-3xl md:text-4xl mb-6">
            {t("brilhoNails.catalogTitle")}
          </h2>
          <p className="text-brilho-text-light/80 font-inter text-lg max-w-2xl mx-auto mb-10">
            {t("brilhoNails.catalogDesc")}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-brilho-red-vivid text-brilho-text-light font-montserrat font-bold text-lg px-12 py-5 rounded-lg hover:scale-105 hover:shadow-button-hover transition-all duration-300"
          >
            <Download size={24} />
            {t("brilhoNails.downloadBtn")}
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-brilho-bg-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-brilho-red font-montserrat font-bold text-3xl md:text-4xl text-center mb-12">
            {t("brilhoNails.whyTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: t("brilhoNails.benefit1Title"), description: t("brilhoNails.benefit1Desc"), icon: "⭐" },
              { title: t("brilhoNails.benefit2Title"), description: t("brilhoNails.benefit2Desc"), icon: "💪" },
              { title: t("brilhoNails.benefit3Title"), description: t("brilhoNails.benefit3Desc"), icon: "✋" },
              { title: t("brilhoNails.benefit4Title"), description: t("brilhoNails.benefit4Desc"), icon: "✓" },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-foreground font-montserrat font-bold text-xl mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground font-inter text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BrilhoNails;