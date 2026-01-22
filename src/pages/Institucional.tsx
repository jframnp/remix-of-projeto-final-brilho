import Layout from "@/components/Layout";
import { useTranslation } from "react-i18next";
import { Target, Heart, Eye, Award, Users, Factory, Globe, CheckCircle } from "lucide-react";
import anvisaCertificado from "@/assets/certificado-anvisa.png";
import logoImage from "@/assets/logo-metalurgicabrilho.png";

const Institucional = () => {
  const { t } = useTranslation();

  const timeline = [
    { year: "2003", event: t("institutional.timeline.2003", "Fundação da Metalúrgica Brilho") },
    { year: "2008", event: t("institutional.timeline.2008", "Certificação ANVISA") },
    { year: "2012", event: t("institutional.timeline.2018", "Expansão internacional") },
    { year: "2018", event: t("institutional.timeline.2020", "Lançamento Linha Gold") },
    { year: "2023", event: t("institutional.timeline.2023", "20 anos de excelência") },
  ];

  const values = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: t("institutional.value1", "Qualidade"),
      desc: t("institutional.value1Desc", "Produtos certificados com padrão internacional"),
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("institutional.value2", "Compromisso"),
      desc: t("institutional.value2Desc", "Dedicação total aos nossos clientes"),
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: t("institutional.value3", "Inovação"),
      desc: t("institutional.value3Desc", "Tecnologia de ponta em nossos processos"),
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t("institutional.value4", "Sustentabilidade"),
      desc: t("institutional.value4Desc", "Respeito ao meio ambiente"),
    },
  ];

  return (
    <Layout>
      {/* Hero Section - Modern with Gradient */}
      <section className="relative min-h-[60vh] overflow-hidden flex items-center">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0a] via-[#3d0f0f] to-[#720000]">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#D32F2F]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#9B0000]/30 rounded-full blur-[100px]" />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10 py-24 text-center">
          <span className="inline-block text-[#FFEB3B] font-montserrat font-bold text-sm tracking-widest uppercase mb-4 animate-fade-in">
            {t("institutional.label", "Conheça nossa história")}
          </span>
          <h1 className="text-white font-montserrat font-black text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
            {t("institutional.title", "Institucional")}
          </h1>
          <p
            className="text-white/80 font-inter text-lg md:text-xl max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {t(
              "institutional.subtitle",
              "Há mais de 20 anos fabricando produtos de alta precisão para profissionais que exigem qualidade.",
            )}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="inline-block text-[#D32F2F] font-montserrat font-bold text-sm tracking-widest uppercase mb-4">
                {t("institutional.aboutLabel", "Nossa História")}
              </span>
              <h2 className="text-gray-900 font-montserrat font-bold text-3xl md:text-5xl mb-6 leading-tight">
                {t("institutional.aboutTitle", "Mais de duas décadas de excelência")}
              </h2>
              <p className="text-gray-600 font-inter text-lg leading-relaxed mb-6">
                {t(
                  "institutional.certText1",
                  "A Metalúrgica Brilho nasceu da paixão pela precisão e qualidade. Desde 2003, desenvolvemos produtos que se tornaram referência no mercado de podologia, odontologia e estética.",
                )}
              </p>
              <p className="text-gray-600 font-inter text-lg leading-relaxed mb-8">
                {t(
                  "institutional.certText2",
                  "Nosso compromisso com a inovação e a satisfação dos clientes nos levou a conquistar certificações internacionais e a exportar para mais de 50 países.",
                )}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="text-3xl font-montserrat font-black text-[#D32F2F]">20+</div>
                  <div className="text-gray-600 font-inter text-sm">
                    {t("institutional.yearsExp", "Anos de experiência")}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="text-3xl font-montserrat font-black text-[#D32F2F]">15+</div>
                  <div className="text-gray-600 font-inter text-sm">
                    {t("institutional.countries", "Países atendidos")}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#D32F2F]/10 rounded-xl" />
                <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#9B0000]/10 rounded-xl" />

                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-[#720000] to-[#9B0000] rounded-3xl p-12 shadow-2xl">
                  <img src={logoImage} alt="Metalúrgica Brilho" className="h-20 w-auto mx-auto mb-8 opacity-90" />

                  {/* ANVISA Badge */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
                    <div className="flex items-center gap-5">
                      <img
                        src={anvisaCertificado}
                        alt="Certificado ANVISA - Boas Práticas de Bioequivalência"
                        className="w-20 h-20 object-contain flex-shrink-0"
                      />
                      <div>
                        <p className="text-[#006341] font-montserrat font-bold text-lg">Certificado ANVISA</p>
                        <p className="text-gray-700 font-inter text-sm">Nº 8019.208</p>
                        <p className="text-gray-500 font-inter text-xs mt-1">
                          {t("institutional.anvisaCert", "Boas Práticas de Bioequivalência")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-[#FAFAFA] py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#D32F2F] font-montserrat font-bold text-sm tracking-widest uppercase mb-4">
              {t("institutional.timelineLabel", "Nossa Trajetória")}
            </span>
            <h2 className="text-gray-900 font-montserrat font-bold text-3xl md:text-5xl">
              {t("institutional.timelineTitle", "Marcos da Nossa História")}
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D32F2F] to-[#9B0000] hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <span className="text-[#D32F2F] font-montserrat font-black text-2xl">{item.year}</span>
                      <p className="text-gray-700 font-inter mt-2">{item.event}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="w-4 h-4 bg-[#D32F2F] rounded-full border-4 border-white shadow-lg z-10 hidden md:block" />

                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Missão */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D32F2F] to-[#9B0000] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 font-montserrat font-bold text-2xl mb-4">
                {t("institutional.missionTitle", "Missão")}
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                {t(
                  "institutional.missionText",
                  "Fornecer produtos de alta qualidade que atendam às necessidades dos profissionais de saúde e estética, contribuindo para o sucesso de nossos clientes.",
                )}
              </p>
            </div>

            {/* Visão */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D32F2F] to-[#9B0000] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 font-montserrat font-bold text-2xl mb-4">
                {t("institutional.visionTitle", "Visão")}
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                {t(
                  "institutional.visionText",
                  "Ser reconhecida como a principal referência em instrumentos de precisão para podologia e odontologia na América Latina.",
                )}
              </p>
            </div>

            {/* Valores */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D32F2F] to-[#9B0000] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 font-montserrat font-bold text-2xl mb-4">
                {t("institutional.valuesTitle", "Valores")}
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                {t(
                  "institutional.valuesText",
                  "Ética, transparência, inovação contínua e respeito aos nossos colaboradores, clientes e parceiros.",
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-[#FAFAFA] py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#D32F2F] font-montserrat font-bold text-sm tracking-widest uppercase mb-4">
              {t("institutional.principlesLabel", "Nossos Princípios")}
            </span>
            <h2 className="text-gray-900 font-montserrat font-bold text-3xl md:text-5xl">
              {t("institutional.principlesTitle", "O que nos guia")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#D32F2F]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#D32F2F]">
                  {value.icon}
                </div>
                <h4 className="text-gray-900 font-montserrat font-bold text-lg mb-2">{value.title}</h4>
                <p className="text-gray-600 font-inter text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0a] via-[#3d0f0f] to-[#720000]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D32F2F]/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#9B0000]/30 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-white font-montserrat font-bold text-3xl md:text-5xl mb-6">
            {t("institutional.ctaTitle", "Pronto para conhecer nossos produtos?")}
          </h2>
          <p className="text-white/80 font-inter text-lg mb-10 max-w-2xl mx-auto">
            {t("institutional.ctaDesc", "Explore nossa linha completa de produtos de alta qualidade.")}
          </p>
          <a
            href="/produtos"
            className="inline-flex items-center gap-3 bg-white text-[#9B0000] font-montserrat font-bold text-lg px-10 py-5 rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <Award className="w-5 h-5" />
            {t("institutional.ctaBtn", "Ver Produtos")}
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Institucional;
