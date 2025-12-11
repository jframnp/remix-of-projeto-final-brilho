import Layout from "@/components/Layout";
import { Download } from "lucide-react";

const Produtos = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brilho-red-dark py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-brilho-text-light font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            BROCAS DIAMANTADAS
          </h1>
          <p className="text-brilho-text-light/80 font-inter text-lg max-w-2xl mx-auto">
            Conheça nossa linha completa de brocas diamantadas para podologia
          </p>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="bg-brilho-bg-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-brilho-red font-montserrat font-bold text-3xl md:text-4xl mb-6">
                Qualidade e Precisão
              </h2>
              <p className="text-foreground/80 font-inter text-base md:text-lg leading-relaxed mb-6">
                Nossas brocas diamantadas são fabricadas com os mais altos
                padrões de qualidade, utilizando diamantes industriais de
                primeira linha. O processo de fabricação garante uniformidade
                na granulometria e durabilidade excepcional.
              </p>
              <p className="text-foreground/80 font-inter text-base md:text-lg leading-relaxed mb-6">
                Indicadas para uso em podologia, as brocas são ideais para
                desbaste de unhas, remoção de calosidades e tratamentos
                diversos. Disponíveis em diversos formatos e granulometrias
                para atender às necessidades específicas de cada procedimento.
              </p>
              <p className="text-foreground/80 font-inter text-base md:text-lg leading-relaxed mb-8">
                Todas as brocas passam por rigoroso controle de qualidade,
                garantindo segurança e eficiência no uso profissional.
                Produto registrado na ANVISA.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Alta durabilidade e resistência",
                  "Diamantes industriais de primeira linha",
                  "Diversas granulometrias disponíveis",
                  "Formatos específicos para cada procedimento",
                  "Registro ANVISA",
                  "Fabricação 100% nacional",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-foreground/80 font-inter"
                  >
                    <span className="w-5 h-5 bg-brilho-red rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-brilho-text-light"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-muted rounded-lg overflow-hidden shadow-card aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 bg-brilho-red/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-brilho-red"
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
                  <p className="text-muted-foreground font-inter text-lg">
                    Imagem das brocas diamantadas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Catálogo */}
      <section className="bg-brilho-red-vivid py-8">
        <div className="container mx-auto px-4">
          <a
            href="#"
            className="flex items-center justify-center gap-4 text-brilho-text-light font-montserrat font-bold text-lg md:text-xl py-4 hover:scale-105 transition-transform"
          >
            <Download size={28} />
            <span className="text-center">
              BAIXE AQUI O CATÁLOGO DAS NOSSAS BROCAS DIAMANTADAS E FIQUE
              ATUALIZADO
            </span>
          </a>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-brilho-bg-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-brilho-red font-montserrat font-bold text-3xl md:text-4xl text-center mb-12">
            OUTROS PRODUTOS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Lixas Descartáveis",
              "Brocas de Tungstênio",
              "Mandris e Adaptadores",
              "Kits Profissionais",
              "Esponjas Polidoras",
              "Pontas Montadas",
              "Discos de Corte",
              "Acessórios",
            ].map((product, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border shadow-card hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="bg-muted rounded-lg aspect-square flex items-center justify-center mb-4 group-hover:bg-brilho-red/5 transition-colors">
                  <svg
                    className="w-12 h-12 text-muted-foreground group-hover:text-brilho-red transition-colors"
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
                <h3 className="text-foreground font-montserrat font-bold text-lg text-center">
                  {product}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Produtos;
