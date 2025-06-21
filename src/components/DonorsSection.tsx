import React from 'react';
import { Youtube, Shield, Coins, AlertTriangle, Sparkles } from 'lucide-react';

const DonorsSection: React.FC = () => {
  // Calculate days remaining until March 31st, 2025
  const deadline = new Date('2025-03-31').getTime();
  const now = new Date().getTime();
  const daysRemaining = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));
  
  // Calculate monthly goal: (13€/year ÷ 12 months) + 5€/month = 6.08€/month
  const domainPerMonth = Math.floor((13 / 12) * 100) / 100; // Domain cost per month (≈1.08€)
  const hostingPerMonth = 5; // Hosting cost per month
  const monthlyGoal = Math.ceil(domainPerMonth + hostingPerMonth); // Round up to nearest euro (7€)
  
  // Current fundraising progress
  const currentAmount = 0; // €0 raised
  const progressPercentage = (currentAmount / monthlyGoal) * 100;

  // SVG pattern encoded properly
  const backgroundPattern = `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0V0zm6 0h4v4H6V0zm6 0h4v4h-4V0zm6 0h4v4h-4V0zm0 6h4v4h-4V6zm-6 0h4v4h-4V6zm-6 0h4v4H6V6zm-6 0h4v4H0V6zm0 6h4v4H0v-4zm6 0h4v4H6v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z' fill='white' fill-opacity='0.05'/%3E%3C/svg%3E")`;

  return (
    <section id="donadores" className="py-16 md:py-20 px-4 md:px-6 lg:px-12 bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Apoyo al Proyecto</h2>
          <div className="w-16 md:w-24 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-base md:text-lg max-w-3xl mx-auto">
            Tu contribución ayuda a mantener y mejorar esta plataforma educativa gratuita
          </p>
        </div>

        {/* Donation Info */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Donaciones
              </h3>

              {/* Content Creators Recognition */}
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-8">
                <div className="flex items-start">
                  <Youtube className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-red-800 mb-2">Prioridad a los Creadores</h4>
                    <p className="text-red-700">
                      Los verdaderos maestros son los creadores del contenido que compartimos. Te animamos a que primero consideres donar directamente a sus canales de YouTube y Patreon. Ellos son quienes crean el valioso contenido que organizamos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-8">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-red-800 mb-2">Respeto a la Propiedad Intelectual</h4>
                    <p className="text-red-700">
                      Todo el contenido pertenece a sus respectivos creadores. Si algún autor desea que retiremos su contenido, lo haremos inmediatamente. Nuestra labor es únicamente organizar y facilitar el acceso a estos valiosos recursos educativos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Purpose of Donations - Red Section with Effects */}
              <div className="relative bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-lg mb-8 overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                {/* Animated background effects */}
                <div 
                  className="absolute inset-0 opacity-50"
                  style={{ backgroundImage: backgroundPattern }}
                ></div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-yellow-500 rounded-full opacity-20 blur-2xl"></div>

                <div className="relative flex items-start">
                  <div className="flex-shrink-0 bg-white/10 p-2 rounded-lg backdrop-blur-sm mr-3">
                    <Coins className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <h4 className="font-bold text-white text-lg">Apoyo a la Infraestructura</h4>
                      <Sparkles className="h-5 w-5 text-yellow-300 ml-2" />
                    </div>
                    <p className="text-white/90 font-medium">
                      SOMOS DISCRETOS SEVILLANAS es y siempre será una plataforma gratuita. Las donaciones son completamente voluntarias y se destinan de la siguiente manera:
                    </p>
                    <ul className="mt-4 space-y-3">
                      {[
                        'Mantenimiento básico de la infraestructura (5€/mes para hosting)',
                        'Dominio web (13€/año ≈ 1.08€/mes)',
                        'El resto será destinado a los desarrolladores del proyecto para continuar mejorando la plataforma'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center text-white/90 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-yellow-300 mr-2 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-white/90 text-sm mb-3">
                            Las startups tienen un alto riesgo de fracaso. Nueve de cada diez no llegan a cumplir los tres años. Por eso, tu apoyo es fundamental para mantener vivo este proyecto.
                            <a 
                              href="https://iffe.es/principales-causas-de-fracaso-de-las-startups/" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="block mt-1 text-white/70 hover:text-white text-xs"
                            >
                              Fuente: IFFE Business School
                            </a>
                          </p>
                          <div className="bg-black/20 p-3 rounded-lg">
                            <div className="mb-2 flex justify-between items-center">
                              <span className="text-white/90 font-medium text-sm">Progreso del mes</span>
                              <span className="text-white font-bold text-sm">{currentAmount}€ / {monthlyGoal}€</span>
                            </div>
                            <div className="h-3 bg-black/20 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-yellow-300 to-yellow-400 transition-all duration-500"
                                style={{ width: `${progressPercentage}%` }}
                              ></div>
                            </div>
                            <p className="mt-2 text-white/70 text-xs">
                              ¡Quedan {daysRemaining} días para alcanzar nuestra meta mensual!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a 
                  href="#contacto" 
                  className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 px-8 rounded-full hover:from-red-700 hover:to-red-800 transition-colors duration-300 shadow-lg"
                >
                  Apoya el Proyecto
                </a>
              </div>

              <p className="text-xs text-gray-500 text-center mt-6">
                * Costos de infraestructura actualizados a 06 de marzo de 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonorsSection;