import Layout from "@/components/Layout";
import { Download, Sparkles } from "lucide-react";

const BrilhoNails = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brilho-red-dark py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-10 h-10 text-brilho-text-light" />
            <h1 className="text-brilho-text-light font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl">
              BRILHO-NAILS
            </h1>
            <Sparkles className="w-10 h-10 text-brilho-text-light" />
          </div>
          <p className="text-brilho-text-light/80 font-inter text-lg max-w-2xl mx-auto">
            Linha exclusiva de produtos para manicure e nail design
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-brilho-bg-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-brilho-red font-montserrat font-bold text-3xl md:text-4xl mb-6">
                LINHA BRILHO-NAILS
              </h2>
              <p className="text-foreground/80 font-inter text-base md:text-lg leading-relaxed mb-6">
                A linha Brilho-Nails foi desenvolvida especialmente para
                profissionais de manicure e nail designers que buscam
                qualidade e performance em seus trabalhos.
              </p>
              <p className="text-foreground/80 font-inter text-base md:text-lg leading-relaxed mb-6">
                Com produtos fabricados sob os mais rigorosos padrões de
                qualidade, a linha oferece lixas, brocas, polidores e
                acessórios que garantem resultados impecáveis.
              </p>
              <p className="text-foreground/80 font-inter text-base md:text-lg leading-relaxed">
                Todos os produtos são desenvolvidos pensando na ergonomia,
                durabilidade e eficiência, proporcionando conforto para o
                profissional e satisfação para os clientes.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg overflow-hidden shadow-card aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-brilho-red" />
                  </div>
                  <p className="text-foreground/60 font-inter text-lg">
                    Imagem linha Brilho-Nails
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
            NOSSOS PRODUTOS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Lixas Descartáveis",
                description: "Diversas gramaturas para cada etapa do trabalho",
              },
              {
                name: "Brocas para Unha",
                description: "Alta precisão para remoção e acabamento",
              },
              {
                name: "Polidores",
                description: "Acabamento perfeito e brilho intenso",
              },
              {
                name: "Esponjas Polidoras",
                description: "Textura especial para polimento delicado",
              },
              {
                name: "Cutículas Removers",
                description: "Remoção segura e precisa de cutículas",
              },
              {
                name: "Kits Profissionais",
                description: "Conjuntos completos para profissionais",
              },
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
            CATÁLOGO BRILHO-NAILS
          </h2>
          <p className="text-brilho-text-light/80 font-inter text-lg max-w-2xl mx-auto mb-10">
            Conheça nossa linha completa de produtos para manicure.
            Baixe o catálogo e descubra as melhores soluções para seu salão.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-brilho-red-vivid text-brilho-text-light font-montserrat font-bold text-lg px-12 py-5 rounded-lg hover:scale-105 hover:shadow-button-hover transition-all duration-300"
          >
            <Download size={24} />
            BAIXE O CATÁLOGO
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-brilho-bg-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-brilho-red font-montserrat font-bold text-3xl md:text-4xl text-center mb-12">
            POR QUE ESCOLHER BRILHO-NAILS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Qualidade Premium",
                description: "Materiais de alta qualidade para resultados profissionais",
                icon: "⭐",
              },
              {
                title: "Durabilidade",
                description: "Produtos resistentes que duram muito mais",
                icon: "💪",
              },
              {
                title: "Ergonomia",
                description: "Design pensado para o conforto do profissional",
                icon: "✋",
              },
              {
                title: "Certificação",
                description: "Todos os produtos com registro ANVISA",
                icon: "✓",
              },
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
