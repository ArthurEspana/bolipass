import React from 'react';
import { MapPin, Ticket, Gift, Share2 } from 'lucide-react';
import SectionTitle from './SectionTitle';

const steps = [
  {
    id: 1,
    icon: <MapPin size={24} className="text-primary-500" />,
    title: 'Visita destinos increíbles',
    description: 'Explora más de 50 destinos cuidadosamente seleccionados en toda Bolivia, comenzando por Tarija.'
  },
  {
    id: 2,
    icon: <Ticket size={24} className="text-primary-500" />,
    title: 'Colecciona sellos y recuerdos',
    description: 'Obtén sellos, stickers y manualidades exclusivas en cada destino que visites para tu pasaporte físico.'
  },
  {
    id: 3,
    icon: <Gift size={24} className="text-primary-500" />,
    title: 'Desbloquea recompensas',
    description: 'Gana descuentos, experiencias exclusivas y premios especiales al completar rutas y colecciones.'
  },
  {
    id: 4,
    icon: <Share2 size={24} className="text-primary-500" />,
    title: 'Comparte tus aventuras',
    description: 'Registra tus experiencias en la app, comparte en redes sociales y conecta con otros viajeros.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle 
          title="Cómo Funciona BoliPass" 
          subtitle="Transforma tu viaje en una experiencia única"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(step => (
            <div 
              key={step.id} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-primary-500"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h3 className="text-2xl font-bold mb-6">Un pasaporte para tus aventuras</h3>
              <p className="text-gray-600 mb-6">
                BoliPass combina la emoción de coleccionar recuerdos físicos con la comodidad de una plataforma digital. 
                Tu pasaporte se convierte en un tesoro personal que documenta cada aventura.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-accent-700 text-sm font-bold">✓</span>
                  </div>
                  <p>Pasaporte físico con páginas para cada destino</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-accent-700 text-sm font-bold">✓</span>
                  </div>
                  <p>App móvil para registrar y compartir experiencias</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-accent-700 text-sm font-bold">✓</span>
                  </div>
                  <p>Colección de souvenirs exclusivos de cada lugar</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-accent-700 text-sm font-bold">✓</span>
                  </div>
                  <p>Sistema de recompensas por completar rutas</p>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="relative">
                <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/3243027/pexels-photo-3243027.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="BoliPass en uso" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-500/10 rounded-full"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-500/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;