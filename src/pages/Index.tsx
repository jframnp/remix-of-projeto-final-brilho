import Layout from "@/components/Layout";
import { ArrowDown, Download } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-brilho-red-dark">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80')",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brilho-red-dark/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-brilho-text-light font-montserrat font-bold text-3xl md:text-5xl lg:text-6xl mb-6 text-shadow max-w-4xl animate-fade-in">
            Excelência em Brocas Diamantadas e Produtos para Podologia
          </h1>
          <p className="text-brilho-text-light/90 font-inter text-lg md:text-xl max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Qualidade certificada ANVISA há mais de 35 anos no mercado
          </p>
          <a
            href="#quem-somos"
            className="text-brilho-text-light animate-bounce mt-4"
            aria-label="Rolar para baixo"
          >
            <ArrowDown size={32} />
          </a>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section id="quem-somos" className="bg-brilho-bg-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-brilho-red font-montserrat font-bold text-3xl md:text-4xl mb-6">
                QUEM SOMOS NÓS
              </h2>
              <p className="text-foreground/80 font-inter text-base md:text-lg leading-relaxed mb-6">
                A Metalúrgica Brilho é uma empresa brasileira com mais de 35 anos de experiência
                na fabricação de instrumentos de alta precisão para as áreas de podologia,
                manicure e odontologia. Nossa trajetória é marcada pela busca constante
                da excelência e inovação.
              </p>
              <p className="text-foreground/80 font-inter text-base md:text-lg leading-relaxed">
                Contamos com uma equipe altamente qualificada e um parque fabril moderno,
                permitindo-nos oferecer produtos que atendem aos mais rigorosos padrões
                de qualidade e segurança, com certificação ANVISA.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-muted rounded-lg overflow-hidden shadow-card aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-brilho-red/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-brilho-red"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-muted-foreground font-inter text-lg">
                    Vídeo institucional da empresa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="bg-brilho-bg-light py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Qualidade Certificada",
                description:
                  "Todos os nossos produtos possuem certificação ANVISA, garantindo segurança e qualidade para profissionais e pacientes.",
                icon: "🏆",
              },
              {
                title: "Tecnologia Avançada",
                description:
                  "Utilizamos equipamentos de última geração e processos de fabricação modernos para entregar produtos de alta precisão.",
                icon: "⚙️",
              },
              {
                title: "Atendimento Especializado",
                description:
                  "Nossa equipe está pronta para atender suas necessidades com expertise e dedicação em cada projeto.",
                icon: "🤝",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 border border-border shadow-card h-[280px] flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-brilho-red font-montserrat font-bold text-xl mb-4">
                  {card.title}
                </h3>
                <p className="text-foreground/70 font-inter text-sm leading-relaxed flex-1">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo Section */}
      <section className="bg-brilho-red-dark py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-brilho-text-light font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
                CATÁLOGO DOS PRODUTOS
              </h2>
              <p className="text-brilho-text-light/80 font-inter text-lg mb-8">
                Conheça nossa linha completa de produtos. Baixe nosso catálogo
                e descubra as melhores soluções para seu negócio.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-brilho-red-vivid text-brilho-text-light font-montserrat font-bold text-lg px-10 py-5 rounded-lg hover:scale-105 hover:shadow-button-hover transition-all duration-300"
              >
                <Download size={24} />
                BAIXE AQUI
              </a>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-brilho-text-light/10 rounded-lg p-8 flex items-center justify-center aspect-[4/3]">
                <div className="text-center">
                  <div className="w-24 h-32 mx-auto mb-4 bg-brilho-text-light/20 rounded flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-brilho-text-light"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <p className="text-brilho-text-light/70 font-inter">
                    Imagem do catálogo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Destaque Section */}
      <section className="bg-brilho-bg-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-brilho-red font-montserrat font-bold text-3xl md:text-4xl text-center mb-12">
            PRODUTOS DESTAQUE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Brocas Diamantadas", category: "Podologia" },
              { name: "Lixas Descartáveis", category: "Manicure" },
              { name: "Instrumentos Cirúrgicos", category: "Odontologia" },
            ].map((product, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="bg-muted rounded-lg overflow-hidden shadow-card aspect-[4/3] flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-brilho-red/10 rounded-full flex items-center justify-center group-hover:bg-brilho-red/20 transition-colors">
                      <svg
                        className="w-8 h-8 text-brilho-red"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                    </div>
                    <p className="text-muted-foreground font-inter">
                      Imagem do produto
                    </p>
                  </div>
                </div>
                <h3 className="text-foreground font-montserrat font-bold text-xl mb-1">
                  {product.name}
                </h3>
                <p className="text-muted-foreground font-inter text-sm">
                  {product.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
