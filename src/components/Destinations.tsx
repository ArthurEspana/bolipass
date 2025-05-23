import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';

const destinations = [
  {
    id: 1,
    name: 'Ruta del Vino y Singani',
    location: 'Tarija',
    description: 'Descubre las mejores bodegas y viñedos de Bolivia, degustando vinos y singanis premiados internacionalmente.',
    image: 'https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&w=1600',
    collectibles: ['Sello vintage de bodega', 'Mini botella decorativa', 'Sticker de uva tarijeña']
  },
  {
    id: 2,
    name: 'Casco Histórico Colonial',
    location: 'Tarija',
    description: 'Recorre las calles y plazas coloniales de Tarija, descubriendo su rica historia y arquitectura.',
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1600',
    collectibles: ['Sello de la plaza principal', 'Mapa antiguo en miniatura', 'Sticker del escudo de armas']
  },
  {
    id: 3,
    name: 'Ruta Gastronómica Chapaca',
    location: 'Tarija',
    description: 'Prueba los sabores auténticos de la cocina tarijeña, desde el saice hasta los tradicionales rosquetes.',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1600',
    collectibles: ['Sello gourmet tarijeño', 'Recetario en miniatura', 'Sticker de plato típico']
  },
  {
    id: 4,
    name: 'Reserva Biológica Cordillera de Sama',
    location: 'Tarija',
    description: 'Explora este ecosistema único donde podrás observar flora y fauna endémica de los valles andinos.',
    image: 'https://images.pexels.com/photos/16776159/pexels-photo-16776159/free-photo-of-paisaje-naturaleza-agua-montana.jpeg?auto=compress&cs=tinysrgb&w=1600',
    collectibles: ['Sello natural de la reserva', 'Guía de especies locales', 'Sticker de cóndor andino']
  }
];

const Destinations: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState(destinations[0]);
  
  return (
    <section id="destinos" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle 
          title="Destinos BoliPass" 
          subtitle="Comenzamos en Tarija con planes de expansión a toda Bolivia"
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{selectedDestination.name}</h3>
                <div className="flex items-center mb-6">
                  <MapPin size={18} className="text-secondary-500 mr-2" />
                  <span className="text-gray-600">{selectedDestination.location}</span>
                </div>
                <p className="text-gray-700 mb-6">{selectedDestination.description}</p>
                
                <div className="border-t border-gray-100 pt-6">
                  <h4 className="text-lg font-semibold mb-4">Coleccionables exclusivos:</h4>
                  <ul className="space-y-3">
                    {selectedDestination.collectibles.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center mr-3">
                          <span className="text-accent-500 text-sm">✓</span>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href="#comprar" 
                  className="mt-8 inline-block bg-primary-500 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-600 transition-colors"
                >
                  Explorar destino
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="relative h-80 lg:h-full rounded-xl overflow-hidden">
              <img 
                src={selectedDestination.image} 
                alt={selectedDestination.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white text-xl font-bold">{selectedDestination.name}</h3>
                    <div className="flex items-center">
                      <MapPin size={16} className="text-secondary-500 mr-1" />
                      <span className="text-white/80 text-sm">{selectedDestination.location}</span>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <span className="text-xs font-medium bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                      Disponible ahora
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {destinations.map(dest => (
                <div 
                  key={dest.id} 
                  className={`relative h-24 rounded-lg overflow-hidden cursor-pointer transition-all ${
                    selectedDestination.id === dest.id 
                      ? 'ring-2 ring-primary-500 ring-offset-2' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setSelectedDestination(dest)}
                >
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <p className="text-white text-xs font-medium truncate">{dest.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-6">Próximamente en toda Bolivia</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            <LocationBadge name="La Paz" />
            <LocationBadge name="Santa Cruz" />
            <LocationBadge name="Cochabamba" />
            <LocationBadge name="Sucre" />
            <LocationBadge name="Potosí" />
            <LocationBadge name="Oruro" />
            <LocationBadge name="Beni" />
            <LocationBadge name="Pando" />
            <LocationBadge name="Uyuni" />
          </div>
        </div>
      </div>
    </section>
  );
};

interface LocationBadgeProps {
  name: string;
}

const LocationBadge: React.FC<LocationBadgeProps> = ({ name }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm flex items-center justify-center">
      <div className="w-2 h-2 bg-accent-500 rounded-full mr-2"></div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export default Destinations;