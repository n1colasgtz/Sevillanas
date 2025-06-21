import React from 'react';
import { Heart, Users, Star, Youtube, BookOpen, Users2, Target, Sparkles, Library, Share2, Shield, Award, Lightbulb, Palette } from 'lucide-react';

const TeacherSection: React.FC = () => {
  return (
    <section id="profesores" className="py-16 md:py-20 px-4 md:px-6 lg:px-12 bg-gradient-to-br from-white to-red-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-3">NUESTRA MISIÓN</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre el Proyecto</h2>
          <div className="w-16 md:w-24 h-1 bg-red-700 mx-auto mb-6"></div>
        </div>

        {/* Main Content Banner */}
        <div className="max-w-6xl mx-auto mb-12 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 text-center relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full opacity-10 transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-500 rounded-full opacity-10 transform -translate-x-24 translate-y-24"></div>
            
            <div className="relative z-10">
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                <Library className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Biblioteca Digital de Sevillanas
              </h3>
              <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
                SOMOS DISCRETOS SEVILLANAS es una plataforma educativa que recopila y organiza cuidadosamente contenido de destacados maestros de sevillanas. Cada video en nuestra colección proviene de canales oficiales de YouTube, manteniendo la atribución original y respetando la propiedad intelectual de sus creadores.
              </p>
            </div>
          </div>
        </div>

        {/* Content Curation Features */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: <Youtube className="h-6 w-6" />,
              title: "Contenido Verificado",
              description: "Videos seleccionados de canales oficiales de maestros de sevillanas"
            },
            {
              icon: <Share2 className="h-6 w-6" />,
              title: "Atribución Completa",
              description: "Reconocimiento y enlaces directos a los creadores originales"
            },
            {
              icon: <BookOpen className="h-6 w-6" />,
              title: "Organización Didáctica",
              description: "Material estructurado para facilitar el aprendizaje progresivo"
            },
            {
              icon: <Users2 className="h-6 w-6" />,
              title: "Comunidad Respetuosa",
              description: "Valoramos y promovemos el trabajo de los maestros"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-600 hover:transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-red-600 mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Two Column Content */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Target className="h-6 w-6 text-red-600 mr-3" />
                Nuestro Propósito
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Nuestra misión es facilitar el acceso al aprendizaje de las sevillanas mediante la organización sistemática de recursos educativos de calidad. Actuamos como puente entre los maestros que generosamente comparten su conocimiento en YouTube y los estudiantes que buscan aprender.
                </p>
                <p className="text-gray-600">
                  Cada video en nuestra plataforma ha sido cuidadosamente seleccionado y categorizado, manteniendo siempre los enlaces originales y el reconocimiento a sus creadores. Esta labor de curación nos permite ofrecer un camino de aprendizaje estructurado y coherente.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center">
                <Heart className="h-6 w-6 mr-3" />
                Nuestro Compromiso
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Shield className="h-8 w-8 text-yellow-400 mb-3" />
                  <h4 className="text-white font-semibold mb-2">Ética y Transparencia</h4>
                  <p className="text-white/90 text-sm">Respetamos la propiedad intelectual y mantenemos una atribución clara de todo el contenido</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Award className="h-8 w-8 text-yellow-400 mb-3" />
                  <h4 className="text-white font-semibold mb-2">Calidad Educativa</h4>
                  <p className="text-white/90 text-sm">Seleccionamos y organizamos el mejor contenido para garantizar un aprendizaje efectivo</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Lightbulb className="h-8 w-8 text-yellow-400 mb-3" />
                  <h4 className="text-white font-semibold mb-2">Innovación Continua</h4>
                  <p className="text-white/90 text-sm">Mejoramos constantemente nuestra plataforma para facilitar el aprendizaje</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Palette className="h-8 w-8 text-yellow-400 mb-3" />
                  <h4 className="text-white font-semibold mb-2">Preservación Cultural</h4>
                  <p className="text-white/90 text-sm">Contribuimos a la difusión y conservación del arte de las sevillanas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Column */}
            <div className="relative h-[400px] md:h-full">
              <img 
                src="https://i.imgur.com/U41oQKM.png"
                alt="Nicolás Gutiérrez Lorca"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">Nicolás Gutiérrez Lorca</h3>
                <p className="text-white/90">Fundador del Proyecto</p>
              </div>
            </div>

            {/* Content Column */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Un Eterno Estudiante
              </h3>
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-4">
                  Nicolás comenzó su viaje en el mundo de las sevillanas como cualquier otro principiante: con mucha ilusión y algo de miedo. A través de incontables horas de práctica, visualización de videos en YouTube y un proceso constante de ensayo y error, fue desarrollando su comprensión del baile.
                </p>
                <p className="text-gray-600 mb-4">
                  Su experiencia como autodidacta le permitió entender las dificultades que enfrentan quienes aprenden por su cuenta. Esta perspectiva única fue la semilla que dio origen a SOMOS DISCRETOS SEVILLANAS, un proyecto que busca facilitar el camino para otros aprendices.
                </p>
                <p className="text-gray-600">
                  Hoy, Nicolás continúa aprendiendo y mejorando cada día, demostrando que el verdadero maestro es aquel que nunca deja de ser estudiante. Su filosofía es simple: compartir el conocimiento adquirido mientras sigue creciendo junto a la comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;