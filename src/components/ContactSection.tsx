import React from 'react';
import { Mail, Instagram } from 'lucide-react';

interface ContactInfo {
  email: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
}

const ContactSection: React.FC<ContactSectionProps> = ({ contactInfo, socialLinks }) => {
  return (
    <section id="contacto" className="py-16 md:py-20 px-4 md:px-6 lg:px-12 bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-3">
            CONTACTO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comunícate con Nosotros</h2>
          <div className="w-16 md:w-24 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-600">
            Estamos aquí para responder tus consultas y ayudarte en tu viaje de aprendizaje
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-lg p-8 text-white">
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-white">Información de Contacto</h4>
                <div className="space-y-3">
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center text-white/90 hover:text-white transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    <span>{contactInfo.email}</span>
                  </a>
                  <a 
                    href="https://instagram.com/somosdiscretos_sevillanas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-white/90 hover:text-white transition-colors"
                  >
                    <Instagram className="h-5 w-5 mr-3" />
                    <span>@somosdiscretos_sevillanas</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;