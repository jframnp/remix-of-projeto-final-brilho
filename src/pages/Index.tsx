import Layout from "@/components/Layout";
import { ArrowDown, Download, Sparkles, Award, Users, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import logoImage from "@/assets/logo-metalurgicabrilho.png";
import anvisaCertificado from "@/assets/certificado-anvisa.png";

const Index = () => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();

  const getLocalizedPath = (path: string) => {
    if (currentLang === "en") return `/en${path === "/" ? "" : path}`;
    if (currentLang === "es") return `/es${path === "/" ? "" : path}`;
    return path;
  };

  const stats = [
    { value: "20+", label: t("home.stats.years", "Anos de Experiência") },
    { value: "500+", label: t("home.stats.products", "Produtos") },
    { value: "10K+", label: t("home.stats.clients", "Clientes Satisfeitos") },
    { value: "15+", label: t("home.stats.countries", "Países Atendidos") },
  ];

  return (
    <Layout>
      {/* Hero Section - Modern Gradient with Glassmorphism */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0a] via-[#3d0f0f] to-[#720000]">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D32F2F]/30 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#9B0000]/40 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff4444]/10 rounded-full blur-[150px]" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 py-32">
          {/* Logo with Glow */}
          <div className="mb-8 animate-fade-in">
            <img 
              src={logoImage} 
              alt="Metalúrgica Brilho" 
              className="h-24 md:h-32 w-auto mx-auto drop-shadow-[0_0_30px_rgba(211,47,47,0.5)]"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-white font-montserrat font-black text-4xl md:text-6xl lg:text-7xl mb-6 drop-shadow-lg max-w-5xl animate-fade-in leading-tight">
            {t("home.welcomeTitle", "Bem-vindo à Metalúrgica Brilho!")}
          </h1>
          
          {/* Subtitle with Glass Effect */}
          <p 
            className="text-white/80 font-inter text-lg md:text-xl max-w-2xl mb-10 animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl px-8 py-4 border border-white/10" 
            style={{ animationDelay: "0.2s" }}
          >
            {t("home.welcomeSubtitle", "Descubra nossa linha de produtos de alta qualidade para podologia, odontologia e mais.")}
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link
              to={getLocalizedPath("/produtos")}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D32F2F] to-[#9B0000] text-white font-montserrat font-bold text-lg px-8 py-4 rounded-full hover:scale-105 hover:shadow-[0_10px_40px_rgba(211,47,47,0.4)] transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              {t("home.ctaProducts", "Ver Produtos")}
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Scroll Indicator */}
          <a
            href="#stats"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <div className="w-8 h-12 rounded-full border-2 border-current flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="bg-[#FAFAFA] py-12 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl shadow-black/5 p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl md:text-5xl font-montserrat font-black text-transparent bg-clip-text bg-gradient-to-r from-[#9B0000] to-[#D32F2F] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-inter text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section id="quem-somos" className="bg-[#FAFAFA] py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="inline-block text-[#D32F2F] font-montserrat font-bold text-sm tracking-widest uppercase mb-4">
                {t("home.aboutLabel", "Sobre Nós")}
              </span>
              <h2 className="text-gray-900 font-montserrat font-bold text-3xl md:text-5xl mb-6 leading-tight">
                {t("home.aboutTitle", "Quem Somos")}
              </h2>
              <p className="text-gray-600 font-inter text-lg leading-relaxed mb-6">
                {t("home.aboutText1", "A Metalúrgica Brilho possui mais de 20 anos de experiência em micro moldagem por injeção e montagem de componentes de alta precisão.")}
              </p>
              <p className="text-gray-600 font-inter text-lg leading-relaxed mb-8">
                {t("home.aboutText2", "Fornecemos produtos de qualidade premium para indústrias de podologia, odontologia e estética em todo o Brasil e exterior.")}
              </p>
              <Link
                to={getLocalizedPath("/institucional")}
                className="inline-flex items-center gap-2 text-[#D32F2F] font-montserrat font-bold hover:gap-4 transition-all duration-300"
              >
                {t("home.learnMore", "Saiba Mais")}
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#D32F2F]/10 rounded-2xl" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#9B0000]/10 rounded-2xl" />
                
                <div className="relative bg-gradient-to-br from-[#720000] to-[#9B0000] rounded-3xl p-10 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-lg">
                      <img 
                        src={anvisaCertificado} 
                        alt="Certificado ANVISA" 
                        className="w-14 h-14 object-contain mx-auto mb-2"
                      />
                      <p className="text-[#006341] font-montserrat font-bold text-sm">ANVISA</p>
                      <p className="text-gray-500 text-xs">{t("home.certified", "Certificado")}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                      <Award className="w-10 h-10 text-white mx-auto mb-3" />
                      <p className="text-white font-montserrat font-bold">{t("home.quality", "Qualidade")}</p>
                      <p className="text-white/70 text-sm">Premium</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 col-span-2">
                      <Users className="w-10 h-10 text-white mx-auto mb-3" />
                      <p className="text-white font-montserrat font-bold">{t("home.trust", "Confiança")}</p>
                      <p className="text-white/70 text-sm">{t("home.clientsTrust", "+10.000 clientes confiam em nós")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Cards Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#D32F2F] font-montserrat font-bold text-sm tracking-widest uppercase mb-4">
              {t("home.whyUsLabel", "Por que escolher?")}
            </span>
            <h2 className="text-gray-900 font-montserrat font-bold text-3xl md:text-5xl">
              {t("home.whyUsTitle", "Por que a Metalúrgica Brilho?")}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t("home.card1Title", "Qualidade Premium"),
                description: t("home.card1Desc", "Produtos certificados ANVISA com padrão internacional de excelência."),
                icon: "🏆",
                gradient: "from-amber-500 to-orange-600"
              },
              {
                title: t("home.card2Title", "Tecnologia Avançada"),
                description: t("home.card2Desc", "Equipamentos de última geração para micro moldagem de alta precisão."),
                icon: "⚙️",
                gradient: "from-blue-500 to-indigo-600"
              },
              {
                title: t("home.card3Title", "Atendimento Dedicado"),
                description: t("home.card3Desc", "Suporte técnico especializado e atendimento personalizado."),
                icon: "🤝",
                gradient: "from-emerald-500 to-teal-600"
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-gray-900 font-montserrat font-bold text-xl mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 font-inter leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0a] via-[#3d0f0f] to-[#720000]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D32F2F]/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#9B0000]/30 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="inline-block text-[#FFEB3B] font-montserrat font-bold text-sm tracking-widest uppercase mb-4">
                {t("home.catalogLabel", "Download Gratuito")}
              </span>
              <h2 className="text-white font-montserrat font-black text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                {t("home.catalogTitle", "Catálogo Completo")}
              </h2>
              <p className="text-white/80 font-inter text-lg mb-8 max-w-xl">
                {t("home.catalogDesc", "Baixe nosso catálogo digital e conheça toda nossa linha de produtos premium.")}
              </p>
              
              {/* Glowing CTA Button */}
              <a
                href="/catalogo-brilho.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FFEB3B] to-[#FFC107] text-[#1a0a0a] font-montserrat font-bold text-lg px-10 py-5 rounded-full hover:scale-105 hover:shadow-[0_10px_40px_rgba(255,235,59,0.4)] transition-all duration-300"
              >
                <Download size={24} />
                {t("home.downloadBtn", "Baixar Catálogo")}
              </a>
            </div>
            
            <div className="lg:w-1/2">
              {/* Catalog Preview Card */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D32F2F] to-[#9B0000] rounded-3xl transform rotate-3 opacity-50" />
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                  <div className="aspect-[3/4] bg-gradient-to-br from-[#9B0000] to-[#720000] rounded-2xl flex items-center justify-center shadow-2xl">
                    <div className="text-center p-8">
                      <img 
                        src={logoImage} 
                        alt="Catálogo" 
                        className="h-20 w-auto mx-auto mb-6 opacity-80"
                      />
                      <p className="text-white font-montserrat font-bold text-xl">CATÁLOGO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="bg-[#FAFAFA] py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#D32F2F] font-montserrat font-bold text-sm tracking-widest uppercase mb-4">
              {t("home.featuredLabel", "Destaques")}
            </span>
            <h2 className="text-gray-900 font-montserrat font-bold text-3xl md:text-5xl mb-4">
              {t("home.featuredTitle", "Produtos em Destaque")}
            </h2>
            <p className="text-gray-600 font-inter text-lg max-w-2xl mx-auto">
              {t("home.featuredDesc", "Conheça nossos produtos mais procurados")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: t("home.product1", "Brocas Diamantadas"), 
                category: t("home.product1Cat", "Podologia"),
                path: "/produtos/brocas-diamantadas",
                color: "from-red-500 to-rose-600"
              },
              { 
                name: t("home.product2New", "Fresas de Cerâmica"), 
                category: t("home.product2CatNew", "Precisão"),
                path: "/produtos/fresas-ceramica",
                color: "from-sky-400 to-blue-500"
              },
              { 
                name: t("home.product3", "Fresas de Tungstênio"), 
                category: t("home.product3Cat", "Alta Performance"),
                path: "/produtos/fresas-tungstenio",
                color: "from-gray-500 to-slate-600"
              },
            ].map((product, index) => (
              <Link
                key={index}
                to={getLocalizedPath(product.path)}
                className="group"
              >
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Product Image Placeholder */}
                  <div className={`h-64 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Sparkles className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <span className="text-[#D32F2F] font-inter text-sm font-medium">
                      {product.category}
                    </span>
                    <h3 className="text-gray-900 font-montserrat font-bold text-xl mt-1 group-hover:text-[#D32F2F] transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-4 text-[#D32F2F] font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span>{t("home.viewProducts", "Ver Produtos")}</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              to={getLocalizedPath("/produtos")}
              className="inline-flex items-center gap-3 bg-[#9B0000] text-white font-montserrat font-bold text-lg px-8 py-4 rounded-full hover:bg-[#720000] hover:scale-105 transition-all duration-300"
            >
              {t("home.viewAllProducts", "Ver Todos os Produtos")}
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
