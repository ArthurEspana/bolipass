import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/12861018/pexels-photo-12861018.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Paisaje de Bolivia" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Descubre Bolivia, <br />
            <span className="text-accent-500">colecciona experiencias</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl">
            BoliPass transforma cada viaje en una aventura coleccionable. 
            Visita lugares increíbles, recolecta recuerdos únicos y 
            gana recompensas exclusivas mientras exploras lo mejor de Bolivia.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#comprar" 
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center"
            >
              Obtén tu BoliPass
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="#como-funciona" 
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/40 px-8 py-3 rounded-full font-medium transition-colors"
            >
              Cómo funciona
            </a>
          </div>
          
          <div className="mt-12 flex items-center">
            <div className="flex -space-x-4">
              <img 
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Usuario" 
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Usuario" 
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Usuario" 
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
            </div>
            <div className="ml-4">
              <div className="text-sm text-white/80">Más de 500 viajeros</div>
              <div className="flex items-center">
                <div className="flex">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="ml-1 text-white">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center">
          <div className="relative w-[280px] h-[380px] animate-float">
            <div className="absolute top-0 left-0 w-full h-full bg-primary-500 rounded-xl transform rotate-3"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-white border-2 border-accent-500 rounded-xl transform -rotate-3 overflow-hidden">
              <div className="w-full h-16 bg-accent-500 flex items-center justify-center">
                <h3 className="text-lg font-bold text-primary-800">BOLIPASS</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-primary-500 mr-2" size={18} />
                  <span className="text-sm">Tarija, Bolivia</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="w-full h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Sello coleccionable</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="w-full h-12 bg-gray-100 rounded-lg"></div>
                    <div className="w-full h-12 bg-gray-100 rounded-lg"></div>
                    <div className="w-full h-12 bg-gray-100 rounded-lg"></div>
                    <div className="w-full h-12 bg-gray-100 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-secondary-500 text-white rounded-full w-16 h-16 flex items-center justify-center transform rotate-12">
              <span className="font-bold text-sm">NEW!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;