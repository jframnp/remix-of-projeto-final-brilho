import Layout from "@/components/Layout";
import { useTranslation } from "react-i18next";

const Institucional = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brilho-red-dark py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-brilho-text-light font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            {t("institutional.title")}
          </h1>
          <p className="text-brilho-text-light/80 font-inter text-lg max-w-2xl mx-auto">
            {t("institutional.subtitle")}
          </p>
        </div>
      </section>

      {/* Certificações Section */}
      <section className="bg-brilho-bg-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-brilho-red font-montserrat font-bold text-3xl md:text-4xl mb-6">
                {t("institutional.certTitle")}
              </h2>
              <p className="text-foreground/80 font-inter text-base md:text-lg leading-relaxed mb-6">
                {t("institutional.certText1")}
              </p>
              <p className="text-foreground/80 font-inter text-base md:text-lg leading-relaxed">
                {t("institutional.certText2")}
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="bg-card rounded-lg p-12 border border-border shadow-card">
                <div className="w-48 h-48 mx-auto bg-brilho-red/10 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-20 h-20 text-brilho-red mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    <p className="text-brilho-red font-montserrat font-bold text-lg">
                      ANVISA
                    </p>
                    <p className="text-muted-foreground font-inter text-sm">
                      {t("institutional.anvisaCert")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Valores, Visão */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Missão */}
            <div>
              <h3 className="text-brilho-red font-montserrat font-bold text-2xl mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-brilho-red/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-brilho-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </span>
                {t("institutional.missionTitle")}
              </h3>
              <p className="text-foreground/80 font-inter text-base leading-relaxed text-justify">
                {t("institutional.missionText")}
              </p>
            </div>

            {/* Valores */}
            <div>
              <h3 className="text-brilho-red font-montserrat font-bold text-2xl mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-brilho-red/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-brilho-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </span>
                {t("institutional.valuesTitle")}
              </h3>
              <p className="text-foreground/80 font-inter text-base leading-relaxed text-justify">
                {t("institutional.valuesText")}
              </p>
            </div>

            {/* Visão */}
            <div>
              <h3 className="text-brilho-red font-montserrat font-bold text-2xl mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-brilho-red/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-brilho-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
                {t("institutional.visionTitle")}
              </h3>
              <p className="text-foreground/80 font-inter text-base leading-relaxed text-justify">
                {t("institutional.visionText")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Institucional;