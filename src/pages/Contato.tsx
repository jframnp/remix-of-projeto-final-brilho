import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const Contato = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [showSuccess, setShowSuccess] = useState(false);

  // Check for success param from FormSubmit redirect
  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setShowSuccess(true);
      toast({
        title: t("contact.successTitle"),
        description: t("contact.successDesc"),
      });
    }
  }, [searchParams, toast, t]);

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: t("contact.phone", "Telefone"),
      value: "(11) 3931-6343",
      href: "tel:+551139316343",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: t("contact.whatsapp", "WhatsApp"),
      value: "(11) 94010-1807",
      href: "https://wa.me/5511940101807",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t("contact.email", "E-mail"),
      value: "metalurgicabrilho@gmail.com",
      href: "mailto:metalurgicabrilho@gmail.com",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t("contact.hours", "Horário"),
      value: t("contact.hoursValue", "Seg-Sex: 8h-18h"),
      href: null,
      color: "from-purple-500 to-purple-600"
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden flex items-center">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0a] via-[#3d0f0f] to-[#720000]">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#D32F2F]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#9B0000]/30 rounded-full blur-[100px]" />
        </div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        <div className="container mx-auto px-4 relative z-10 py-24 text-center">
          <span className="inline-block text-[#FFEB3B] font-montserrat font-bold text-sm tracking-widest uppercase mb-4 animate-fade-in">
            {t("contact.label", "Fale Conosco")}
          </span>
          <h1 className="text-white font-montserrat font-black text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
            {t("contact.title", "Contato")}
          </h1>
          <p className="text-white/80 font-inter text-lg md:text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t("contact.subtitle", "Estamos prontos para atender você. Entre em contato conosco!")}
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#FAFAFA] py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Form - Primeiro (esquerda) */}
            <div className="lg:w-1/2">
              <span className="inline-block text-[#D32F2F] font-montserrat font-bold text-sm tracking-widest uppercase mb-4">
                {t("contact.formLabel", "Envie sua mensagem")}
              </span>
              <h2 className="text-gray-900 font-montserrat font-bold text-3xl md:text-4xl mb-8">
                {t("contact.formTitle", "Envie sua mensagem")}
              </h2>

              {/* Success Message */}
              {showSuccess && (
                <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl flex items-center gap-4 animate-fade-in">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-green-800 font-montserrat font-bold text-lg">{t("contact.successTitle", "Mensagem Enviada!")}</h3>
                    <p className="text-green-700 font-inter">{t("contact.successDesc", "Retornaremos em breve.")}</p>
                  </div>
                </div>
              )}

              {/* FormSubmit Form */}
              <form action="https://formsubmit.co/metalurgicabrilho@gmail.com" method="POST" className="space-y-6">
                {/* Hidden FormSubmit Fields */}
                <input type="hidden" name="_subject" value="Nova mensagem do site Metalúrgica Brilho!" />
                <input type="hidden" name="_next" value={`${window.location.origin}/contato?success=true`} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: "none" }} />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label htmlFor="nome" className="block text-gray-900 font-inter font-medium mb-2">
                    {t("contact.nameLabel", "Nome completo")} *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 font-inter focus:outline-none focus:border-[#D32F2F] focus:ring-2 focus:ring-[#D32F2F]/20 transition-all"
                    placeholder={t("contact.namePlaceholder", "Seu nome")}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-900 font-inter font-medium mb-2">
                      {t("contact.emailLabel", "E-mail")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 font-inter focus:outline-none focus:border-[#D32F2F] focus:ring-2 focus:ring-[#D32F2F]/20 transition-all"
                      placeholder={t("contact.emailPlaceholder", "seu@email.com")}
                    />
                  </div>
                  <div>
                    <label htmlFor="telefone" className="block text-gray-900 font-inter font-medium mb-2">
                      {t("contact.phoneLabel", "Telefone")}
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 font-inter focus:outline-none focus:border-[#D32F2F] focus:ring-2 focus:ring-[#D32F2F]/20 transition-all"
                      placeholder={t("contact.phonePlaceholder", "(11) 99999-9999")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-gray-900 font-inter font-medium mb-2">
                    {t("contact.subjectLabel", "Assunto")} *
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 font-inter focus:outline-none focus:border-[#D32F2F] focus:ring-2 focus:ring-[#D32F2F]/20 transition-all"
                  >
                    <option value="">{t("contact.subjectPlaceholder", "Selecione um assunto")}</option>
                    <option value="orcamento">{t("contact.subjectQuote", "Orçamento")}</option>
                    <option value="catalogo">{t("contact.subjectCatalog", "Catálogo")}</option>
                    <option value="representante">{t("contact.subjectRep", "Representante")}</option>
                    <option value="suporte">{t("contact.subjectSupport", "Suporte Técnico")}</option>
                    <option value="outro">{t("contact.subjectOther", "Outro")}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-gray-900 font-inter font-medium mb-2">
                    {t("contact.messageLabel", "Mensagem")} *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 font-inter focus:outline-none focus:border-[#D32F2F] focus:ring-2 focus:ring-[#D32F2F]/20 transition-all resize-none"
                    placeholder={t("contact.messagePlaceholder", "Digite sua mensagem...")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#D32F2F] to-[#9B0000] text-white font-montserrat font-bold text-lg px-10 py-4 rounded-full hover:scale-105 hover:shadow-[0_10px_40px_rgba(211,47,47,0.3)] transition-all duration-300"
                >
                  <Send size={20} />
                  {t("contact.sendBtn", "Enviar Mensagem")}
                </button>
              </form>
            </div>

            {/* Map & Info - Segundo (direita) */}
            <div className="lg:w-1/2">
              <span className="inline-block text-[#D32F2F] font-montserrat font-bold text-sm tracking-widest uppercase mb-4">
                {t("contact.locationLabel", "Nossa Localização")}
              </span>
              <h2 className="text-gray-900 font-montserrat font-bold text-3xl md:text-4xl mb-8">
                {t("contact.infoTitle", "Informações de contato")}
              </h2>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 mb-8 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[#720000]/5" />
                <div className="text-center z-10">
                  <MapPin className="w-12 h-12 text-[#D32F2F] mx-auto mb-3" />
                  <p className="text-gray-600 font-inter">São Paulo - SP</p>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#D32F2F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#D32F2F]" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-montserrat font-bold text-lg mb-1">
                      {t("contact.address", "Endereço")}
                    </h3>
                    <p className="text-gray-600 font-inter">
                      R. Cel. Botelho, 58 - Bela Aliança<br />
                      São Paulo – SP – 05508-020
                    </p>
                  </div>
                </div>

                {/* Quick Contact Links */}
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://wa.me/5511940101807"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-montserrat font-bold py-3 px-4 rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+551139316343"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#D32F2F] to-[#9B0000] text-white font-montserrat font-bold py-3 px-4 rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    {t("contact.callNow", "Ligar")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Cards */}
      <section className="bg-[#FAFAFA] pb-20 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
                  {method.icon}
                </div>
                <h3 className="text-gray-900 font-montserrat font-bold text-lg mb-1">{method.title}</h3>
                {method.href ? (
                  <a 
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-600 font-inter hover:text-[#D32F2F] transition-colors"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-gray-600 font-inter">{method.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;