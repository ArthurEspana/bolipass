import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="comprar" className="py-20 px-4 bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comienza tu aventura con BoliPass
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Adquiere tu pasaporte de aventuras y desbloquea experiencias únicas, 
                recuerdos exclusivos y recompensas especiales mientras exploras Bolivia.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-white/90">Pasaporte físico de alta calidad con 50+ páginas para sellos</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-white/90">Acceso a la app digital para registrar y compartir experiencias</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-white/90">Pack de bienvenida con 5 stickers coleccionables</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-white/90">Guía completa de destinos con consejos exclusivos</p>
                </div>
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                Comprar ahora
                <ArrowRight size={18} className="ml-2" />
              </a>
              
              <p className="text-white/70 text-sm mt-4">
                Lanzamiento disponible inicialmente en Tarija. Próximamente en toda Bolivia.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 -m-4 bg-white/5 rounded-xl"></div>
              
              <div className="relative bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Planes BoliPass</h3>
                
                <div className="space-y-4">
                  <PricingCard 
                    title="Individual" 
                    price={199}
                    features={[
                      '1 Pasaporte BoliPass', 
                      'Acceso a la app digital', 
                      'Pack de bienvenida', 
                      'Descuentos en destinos asociados'
                    ]}
                    highlight={false}
                  />
                  
                  <PricingCard 
                    title="Familiar" 
                    price={499}
                    features={[
                      '3 Pasaportes BoliPass', 
                      'Acceso a la app digital para todos', 
                      'Pack de bienvenida familiar', 
                      'Descuentos exclusivos en destinos asociados',
                      'Ruta especial para familias'
                    ]}
                    highlight={true}
                  />
                  
                  <PricingCard 
                    title="Grupo" 
                    price={899}
                    features={[
                      '6 Pasaportes BoliPass', 
                      'Acceso a la app digital para todos', 
                      'Pack de bienvenida premium', 
                      'Descuentos exclusivos en destinos asociados',
                      'Experiencia especial gratuita'
                    ]}
                    highlight={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  highlight: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, highlight }) => {
  return (
    <div className={`rounded-lg p-5 border transition-all ${
      highlight 
        ? 'bg-primary-50 border-primary-300 shadow-md' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-lg">{title}</h4>
        {highlight && (
          <span className="text-xs font-medium bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>
      
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-gray-600 ml-1">Bs.</span>
      </div>
      
      <ul className="space-y-2 mb-5">
        {features.map((feature, index) => (
          <li key={index} className="flex text-sm">
            <span className="text-success-500 mr-2">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button 
        className={`w-full py-2 rounded-lg font-medium transition-colors ${
          highlight 
            ? 'bg-secondary-500 hover:bg-secondary-600 text-white' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
        }`}
      >
        Seleccionar
      </button>
    </div>
  );
};

export default CTA;