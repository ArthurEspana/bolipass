import React from 'react';
import Logo from './Logo';
import { MapPin, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-gray-900 text-white pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">
              Transformando cada viaje en una aventura coleccionable. 
              Descubre Bolivia de una manera única y auténtica.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">Cómo funciona</a>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-400 hover:text-white transition-colors">Beneficios</a>
              </li>
              <li>
                <a href="#destinos" className="text-gray-400 hover:text-white transition-colors">Destinos</a>
              </li>
              <li>
                <a href="#comprar" className="text-gray-400 hover:text-white transition-colors">Comprar BoliPass</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog de viajes</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Información</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre nosotros</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Términos y condiciones</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de privacidad</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Preguntas frecuentes</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Trabaja con nosotros</a>
              </li>
            </ul>
          </div>
          
          <div id="contacto">
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Calle Ingavi #123, Tarija, Bolivia</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary-500 mr-2 flex-shrink-0" />
                <a href="mailto:info@bolipass.com" className="text-gray-400 hover:text-white transition-colors">
                  info@bolipass.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-500 mr-2 flex-shrink-0" />
                <a href="tel:+59176543210" className="text-gray-400 hover:text-white transition-colors">
                  +591 76543210
                </a>
              </li>
            </ul>
            
            <form className="mt-6">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-full px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button 
                  type="submit"
                  className="absolute right-1 top-1 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-primary-600 transition-colors"
                >
                  Suscribir
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BoliPass. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <img 
              src="https://images.pexels.com/photos/66100/pexels-photo-66100.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Métodos de pago" 
              className="h-8"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;