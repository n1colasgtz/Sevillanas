import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  text: string;
  author: {
    name: string;
    age: number;
    level: string;
    imageUrl: string;
  };
  rating: number;
}

interface TestimonialsSectionProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ 
  title, 
  subtitle, 
  testimonials 
}) => {
  // Updated testimonials with the corrected text
  const updatedTestimonials = testimonials.map(testimonial => {
    if (testimonial.id === "1") {
      return {
        ...testimonial,
        text: '"Siempre me daba vergüenza bailar en las ferias. Después de 3 meses con los videos de SOMOS DISCRETOS, bailé en la Feria de Abril sin miedo al qué dirán. ¡Un sueño cumplido! Doné 20€ porque lo que aprendí no tiene precio."'
      };
    }
    return testimonial;
  });

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 lg:px-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <div className="w-16 md:w-24 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-base md:text-lg max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {updatedTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="italic mb-4 text-sm md:text-base">{testimonial.text}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.author.imageUrl} 
                  alt={testimonial.author.name} 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4" 
                />
                <div>
                  <h4 className="font-bold text-sm md:text-base">{testimonial.author.name}</h4>
                  <p className="text-xs md:text-sm text-gray-600">{testimonial.author.age} años, {testimonial.author.level}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;