import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brilho-red-dark py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-brilho-text-light font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            {t("contact.title")}
          </h1>
          <p className="text-brilho-text-light/80 font-inter text-lg max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-brilho-bg-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Form */}
            <div className="lg:w-1/2">
              <h2 className="text-brilho-red font-montserrat font-bold text-2xl mb-8">{t("contact.formTitle")}</h2>

              {/* Success Message */}
              {showSuccess && (
                <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg flex items-center gap-4">
                  <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-green-800 font-montserrat font-bold text-lg">{t("contact.successTitle")}</h3>
                    <p className="text-green-700 font-inter">{t("contact.successDesc")}</p>
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
                  <label htmlFor="nome" className="block text-foreground font-inter font-medium mb-2">
                    {t("contact.nameLabel")}
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-inter focus:outline-none focus:border-brilho-red-vivid focus:ring-2 focus:ring-brilho-red-vivid/20 transition-all"
                    placeholder={t("contact.namePlaceholder")}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-foreground font-inter font-medium mb-2">
                      {t("contact.emailLabel")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-inter focus:outline-none focus:border-brilho-red-vivid focus:ring-2 focus:ring-brilho-red-vivid/20 transition-all"
                      placeholder={t("contact.emailPlaceholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="telefone" className="block text-foreground font-inter font-medium mb-2">
                      {t("contact.phoneLabel")}
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-inter focus:outline-none focus:border-brilho-red-vivid focus:ring-2 focus:ring-brilho-red-vivid/20 transition-all"
                      placeholder={t("contact.phonePlaceholder")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-foreground font-inter font-medium mb-2">
                    {t("contact.subjectLabel")}
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-inter focus:outline-none focus:border-brilho-red-vivid focus:ring-2 focus:ring-brilho-red-vivid/20 transition-all"
                  >
                    <option value="">{t("contact.subjectPlaceholder")}</option>
                    <option value="orcamento">{t("contact.subjectQuote")}</option>
                    <option value="catalogo">{t("contact.subjectCatalog")}</option>
                    <option value="representante">{t("contact.subjectRep")}</option>
                    <option value="suporte">{t("contact.subjectSupport")}</option>
                    <option value="outro">{t("contact.subjectOther")}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-foreground font-inter font-medium mb-2">
                    {t("contact.messageLabel")}
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-inter focus:outline-none focus:border-brilho-red-vivid focus:ring-2 focus:ring-brilho-red-vivid/20 transition-all resize-none"
                    placeholder={t("contact.messagePlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-brilho-red-vivid text-brilho-text-light font-montserrat font-bold text-lg px-12 py-4 rounded-lg hover:scale-105 hover:shadow-button-hover transition-all duration-300"
                >
                  <Send size={20} />
                  {t("contact.sendBtn")}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="text-brilho-red font-montserrat font-bold text-2xl mb-8">{t("contact.infoTitle")}</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-brilho-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brilho-red" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-montserrat font-bold text-lg mb-1">{t("contact.phone")}</h3>
                    <a
                      href="tel:+551139316343"
                      className="text-foreground/70 font-inter hover:text-brilho-red transition-colors"
                    >
                      (11) 3931-6343
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-brilho-whatsapp/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brilho-whatsapp" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-foreground font-montserrat font-bold text-lg mb-1">{t("contact.whatsapp")}</h3>
                    <a
                      href="https://wa.me/5511940101807"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 font-inter hover:text-brilho-whatsapp transition-colors"
                    >
                      (11) 94010-1807
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-brilho-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brilho-red" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-montserrat font-bold text-lg mb-1">{t("contact.email")}</h3>
                    <a
                      href="mailto:metalurgicabrilho@gmail.com"
                      className="text-foreground/70 font-inter hover:text-brilho-red transition-colors"
                    >
                      metalurgicabrilho@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-brilho-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brilho-red" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-montserrat font-bold text-lg mb-1">{t("contact.address")}</h3>
                    <p className="text-foreground/70 font-inter">
                      {t("footer.address")}
                      <br />
                      {t("footer.city")}
                    </p>
                  </div>
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
