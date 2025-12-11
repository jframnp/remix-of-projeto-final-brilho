import { useState } from "react";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brilho-red-dark py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-brilho-text-light font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            CONTATO
          </h1>
          <p className="text-brilho-text-light/80 font-inter text-lg max-w-2xl mx-auto">
            Entre em contato conosco. Estamos prontos para atendê-lo!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-brilho-bg-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Form */}
            <div className="lg:w-1/2">
              <h2 className="text-brilho-red font-montserrat font-bold text-2xl mb-8">
                Envie sua mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-foreground font-inter font-medium mb-2"
                  >
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-inter focus:outline-none focus:border-brilho-red-vivid focus:ring-2 focus:ring-brilho-red-vivid/20 transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-foreground font-inter font-medium mb-2"
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-inter focus:outline-none focus:border-brilho-red-vivid focus:ring-2 focus:ring-brilho-red-vivid/20 transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefone"
                      className="block text-foreground font-inter font-medium mb-2"
                    >
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-inter focus:outline-none focus:border-brilho-red-vivid focus:ring-2 focus:ring-brilho-red-vivid/20 transition-all"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="assunto"
                    className="block text-foreground font-inter font-medium mb-2"
                  >
                    Assunto *
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    required
                    value={formData.assunto}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-inter focus:outline-none focus:border-brilho-red-vivid focus:ring-2 focus:ring-brilho-red-vivid/20 transition-all"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="orcamento">Solicitar Orçamento</option>
                    <option value="catalogo">Solicitar Catálogo</option>
                    <option value="representante">Falar com Representante</option>
                    <option value="suporte">Suporte Técnico</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-foreground font-inter font-medium mb-2"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={5}
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-inter focus:outline-none focus:border-brilho-red-vivid focus:ring-2 focus:ring-brilho-red-vivid/20 transition-all resize-none"
                    placeholder="Digite sua mensagem..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-brilho-red-vivid text-brilho-text-light font-montserrat font-bold text-lg px-12 py-4 rounded-lg hover:scale-105 hover:shadow-button-hover transition-all duration-300"
                >
                  <Send size={20} />
                  ENVIAR
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="text-brilho-red font-montserrat font-bold text-2xl mb-8">
                Informações de contato
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-brilho-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brilho-red" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-montserrat font-bold text-lg mb-1">
                      Telefone
                    </h3>
                    <a
                      href="tel:+551139916943"
                      className="text-foreground/70 font-inter hover:text-brilho-red transition-colors"
                    >
                      (11) 3991-6943
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-brilho-whatsapp/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-brilho-whatsapp"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-foreground font-montserrat font-bold text-lg mb-1">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/5511999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 font-inter hover:text-brilho-whatsapp transition-colors"
                    >
                      (11) 99999-9999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-brilho-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brilho-red" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-montserrat font-bold text-lg mb-1">
                      E-mail
                    </h3>
                    <a
                      href="mailto:contato@metalurgicabrilho.com.br"
                      className="text-foreground/70 font-inter hover:text-brilho-red transition-colors"
                    >
                      contato@metalurgicabrilho.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-brilho-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brilho-red" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-montserrat font-bold text-lg mb-1">
                      Endereço
                    </h3>
                    <p className="text-foreground/70 font-inter">
                      Rua Frei Gaspar, 1095 - Mooca
                      <br />
                      São Paulo - SP, 03164-001
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-10 bg-muted rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground font-inter">
                    Mapa de localização
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
