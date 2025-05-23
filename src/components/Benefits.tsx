import React from 'react';
import { MapPinned, Star, Users, Clock, HandCoins, Compass } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle 
          title="Beneficios de BoliPass" 
          subtitle="Descubre por qué BoliPass es la manera perfecta de explorar Bolivia"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <BenefitCard 
            icon={<MapPinned />} 
            title="Experiencias Auténticas"
            description="Descubre destinos y negocios locales seleccionados por su autenticidad y calidad."
          />
          <BenefitCard 
            icon={<Star />} 
            title="Recuerdos Exclusivos"
            description="Colecciona souvenirs, sellos y stickers únicos que no encontrarás en ningún otro lugar."
          />
          <BenefitCard 
            icon={<Users />} 
            title="Perfecto para Grupos"
            description="Compara progresos, comparte experiencias y motívense mutuamente mientras exploran."
          />
          <BenefitCard 
            icon={<HandCoins />} 
            title="Recompensas Valiosas"
            description="Gana descuentos, experiencias VIP y productos exclusivos al completar tu pasaporte."
          />
          <BenefitCard 
            icon={<Clock />} 
            title="Flexibilidad Total"
            description="Explora a tu ritmo, sin horarios fijos ni rutas obligatorias."
          />
          <BenefitCard 
            icon={<Compass />} 
            title="Descubrimientos Sorprendentes"
            description="Encuentra joyas escondidas y experiencias fuera de las rutas turísticas convencionales."
          />
        </div>
        
        <div className="mt-20 bg-primary-50 rounded-xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
              <h3 className="text-2xl font-bold mb-6">Para Negocios y Comunidades</h3>
              <p className="text-gray-600 mb-8">
                BoliPass beneficia directamente a la economía local al incluir negocios auténticos 
                en nuestra red de socios, aumentando su visibilidad y atrayendo turistas de calidad.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mr-4">
                    <div className="text-primary-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L14.4 9.6H22.4L16 14.4L18.4 22L12 17.2L5.6 22L8 14.4L1.6 9.6H9.6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Mayor visibilidad</h4>
                    <p className="text-gray-600">Promoción directa a turistas interesados en experiencias auténticas</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mr-4">
                    <div className="text-primary-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L14.4 9.6H22.4L16 14.4L18.4 22L12 17.2L5.6 22L8 14.4L1.6 9.6H9.6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Clientes recurrentes</h4>
                    <p className="text-gray-600">Sistema de recompensas que fomenta múltiples visitas</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mr-4">
                    <div className="text-primary-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L14.4 9.6H22.4L16 14.4L18.4 22L12 17.2L5.6 22L8 14.4L1.6 9.6H9.6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Promoción cultural</h4>
                    <p className="text-gray-600">Valorización y difusión del patrimonio local</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative h-80 md:h-full rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2387608/pexels-photo-2387608.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Comercio local en Bolivia" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-white text-xl font-bold mb-2">Únete a nuestra red</h4>
                  <p className="text-white/80 mb-4">Forma parte de la comunidad BoliPass</p>
                  <a 
                    href="#contacto" 
                    className="inline-block bg-white text-primary-500 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
                  >
                    Más información
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

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-primary-100">
      <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-4 text-primary-500">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Benefits;