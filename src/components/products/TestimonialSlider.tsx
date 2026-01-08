import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Perfeito para manicure precisa! A qualidade das brocas é incomparável.",
    author: "Maria Silva",
    role: "Nail Designer",
    rating: 5,
  },
  {
    text: "Uso as fresas há 3 anos e nunca me decepcionaram. Excelente durabilidade!",
    author: "Dr. Carlos Mendes",
    role: "Podólogo",
    rating: 5,
  },
  {
    text: "As lixas tubulares são as melhores do mercado. Recomendo a todos os profissionais.",
    author: "Ana Rodrigues",
    role: "Esteticista",
    rating: 5,
  },
  {
    text: "Qualidade premium e atendimento impecável. Fornecedor confiável!",
    author: "Pedro Santos",
    role: "Distribuidor",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <Quote className="w-8 h-8 text-primary" />
          <h3 className="text-white font-montserrat font-bold text-xl">
            {t("products.testimonials", "O que dizem nossos clientes")}
          </h3>
        </div>

        {/* Testimonial Content */}
        <div className="min-h-[150px]">
          <div 
            key={currentIndex}
            className="animate-fade-in"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-white/90 text-lg italic mb-4">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold">
                {testimonials[currentIndex].author.charAt(0)}
              </div>
              <div>
                <p className="text-white font-semibold">{testimonials[currentIndex].author}</p>
                <p className="text-white/60 text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? "w-6 bg-primary" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
