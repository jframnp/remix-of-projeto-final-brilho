import Layout from "@/components/Layout";

const Institucional = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brilho-red-dark py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-brilho-text-light font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            INSTITUCIONAL
          </h1>
          <p className="text-brilho-text-light/80 font-inter text-lg max-w-2xl mx-auto">
            Conheça nossa história, valores e compromisso com a qualidade
          </p>
        </div>
      </section>

      {/* Certificações Section */}
      <section className="bg-brilho-bg-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-brilho-red font-montserrat font-bold text-3xl md:text-4xl mb-6">
                CERTIFICAÇÕES
              </h2>
              <p className="text-foreground/80 font-inter text-base md:text-lg leading-relaxed mb-6">
                A Metalúrgica Brilho possui todas as certificações necessárias
                para garantir a qualidade e segurança de seus produtos. Nossa
                empresa é registrada na ANVISA e segue rigorosamente as normas
                de fabricação de produtos para saúde.
              </p>
              <p className="text-foreground/80 font-inter text-base md:text-lg leading-relaxed">
                Investimos constantemente em processos de qualidade e controle,
                assegurando que cada produto que sai de nossa fábrica atenda
                aos mais elevados padrões internacionais.
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
                      Certificado
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
                NOSSA MISSÃO
              </h3>
              <p className="text-foreground/80 font-inter text-base leading-relaxed text-justify">
                Desenvolver e fabricar produtos de alta qualidade para os
                segmentos de podologia, manicure e odontologia, contribuindo
                para a saúde e bem-estar das pessoas. Buscamos constantemente
                a inovação e excelência em todos os nossos processos, oferecendo
                soluções que atendam às necessidades de nossos clientes com
                eficiência e segurança.
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
                NOSSOS VALORES
              </h3>
              <p className="text-foreground/80 font-inter text-base leading-relaxed text-justify">
                Ética e transparência em todas as relações comerciais.
                Compromisso com a qualidade e segurança dos produtos.
                Respeito ao meio ambiente e sustentabilidade. Valorização
                das pessoas e trabalho em equipe. Inovação constante e
                busca pela excelência. Responsabilidade social e
                contribuição para a comunidade.
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
                NOSSA VISÃO
              </h3>
              <p className="text-foreground/80 font-inter text-base leading-relaxed text-justify">
                Ser reconhecida como a principal referência no mercado
                brasileiro de instrumentos para podologia e manicure,
                expandindo nossa atuação para mercados internacionais.
                Almejamos ser sinônimo de qualidade, inovação e
                confiabilidade, mantendo-nos sempre à frente das
                tendências e necessidades do mercado.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Institucional;
