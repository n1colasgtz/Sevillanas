import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  subtitle: string;
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ title, subtitle, faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-3">PREGUNTAS FRECUENTES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#f8312f] to-[#63171b] mx-auto mb-6"></div>
          <p className="text-base md:text-lg max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'shadow-lg border-l-4 border-red-600' 
                  : 'shadow border border-gray-100 hover:shadow-md'
              }`}
            >
              <button 
                className="w-full text-left p-5 md:p-6 flex justify-between items-center focus:outline-none group"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className={`text-lg md:text-xl font-bold transition-colors ${
                  openIndex === index ? 'text-red-700' : 'text-gray-800 group-hover:text-red-600'
                }`}>
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 ml-4 p-1 rounded-full ${
                  openIndex === index 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-100 text-gray-500 group-hover:bg-red-100 group-hover:text-red-600'
                } transition-colors`}>
                  {openIndex === index ? 
                    <Minus className="h-5 w-5" /> : 
                    <Plus className="h-5 w-5" />
                  }
                </div>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 md:p-6 pt-0 text-gray-600">
                  <p className="text-base leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="relative mt-16 hidden md:block">
          <div className="absolute -top-8 -left-4 w-24 h-24 bg-red-50 rounded-full opacity-70 blur-xl"></div>
          <div className="absolute -bottom-12 right-1/4 w-32 h-32 bg-yellow-50 rounded-full opacity-70 blur-xl"></div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">¿No encuentras la respuesta que buscas?</p>
          <a 
            href="#contacto" 
            className="inline-flex items-center text-red-700 font-semibold hover:text-red-800 transition-colors"
          >
            Contáctanos directamente
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;