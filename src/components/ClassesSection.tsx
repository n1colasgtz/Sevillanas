import React from 'react';

interface DonationOption {
  name: string;
  amount: string;
}

interface ClassesSectionProps {
  title: string;
  subtitle: string;
  classLevels?: any[]; // Made optional since we're not using it
  donationOptions: DonationOption[];
}

const ClassesSection: React.FC<ClassesSectionProps> = ({ 
  title, 
  subtitle, 
  donationOptions 
}) => {
  return (
    <section id="clases" className="py-16 md:py-20 px-4 md:px-6 lg:px-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <div className="w-16 md:w-24 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-base md:text-lg max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Clases 100% Gratuitas</h3>
            <p className="text-gray-600 mb-6">Creemos que el arte y la cultura deben ser accesibles para todos. Por eso, nuestras clases son completamente gratuitas.</p>
            
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg mb-6">
              <h4 className="font-bold text-lg mb-2">Donaciones Voluntarias</h4>
              <p className="text-gray-600 mb-4">Si deseas apoyar este proyecto open source, puedes hacer una donación voluntaria. Estas son algunas de las donaciones más comunes:</p>
              <ul className="space-y-2 text-left">
                {donationOptions.map((option, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{option.name}</span>
                    <span className="font-semibold">{option.amount}</span>
                  </li>
                ))}
                <li className="flex justify-between border-t pt-2 mt-2">
                  <span>Otros</span>
                  <span className="font-semibold italic text-red-700">¿Cuál es el precio del arte? ¡Saque su duende!</span>
                </li>
              </ul>
            </div>
            
            <a href="#contacto" className="inline-block w-full sm:w-auto text-center bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 md:px-8 rounded-full transition-colors shadow-lg">
              Reserva tu clase de prueba discreta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;