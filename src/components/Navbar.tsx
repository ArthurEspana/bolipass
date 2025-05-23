import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('es');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLang = () => setLang(lang === 'es' ? 'en' : 'es');

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#como-funciona" className="font-medium hover:text-primary-500 transition-colors">
            {lang === 'es' ? 'Cómo Funciona' : 'How It Works'}
          </a>
          <a href="#beneficios" className="font-medium hover:text-primary-500 transition-colors">
            {lang === 'es' ? 'Beneficios' : 'Benefits'}
          </a>
          <a href="#destinos" className="font-medium hover:text-primary-500 transition-colors">
            {lang === 'es' ? 'Destinos' : 'Destinations'}
          </a>
          <a href="#contacto" className="font-medium hover:text-primary-500 transition-colors">
            {lang === 'es' ? 'Contacto' : 'Contact'}
          </a>
          <button 
            className="flex items-center space-x-1 text-sm font-medium"
            onClick={toggleLang}
          >
            <Globe size={18} />
            <span>{lang === 'es' ? 'ES' : 'EN'}</span>
          </button>
          <a 
            href="#comprar" 
            className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
          >
            {lang === 'es' ? 'Comprar' : 'Buy Now'}
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleLang} className="mr-4">
            <Globe size={20} />
          </button>
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-4 space-y-4">
          <a 
            href="#como-funciona" 
            className="block font-medium py-2 hover:text-primary-500"
            onClick={() => setIsOpen(false)}
          >
            {lang === 'es' ? 'Cómo Funciona' : 'How It Works'}
          </a>
          <a 
            href="#beneficios" 
            className="block font-medium py-2 hover:text-primary-500"
            onClick={() => setIsOpen(false)}
          >
            {lang === 'es' ? 'Beneficios' : 'Benefits'}
          </a>
          <a 
            href="#destinos" 
            className="block font-medium py-2 hover:text-primary-500"
            onClick={() => setIsOpen(false)}
          >
            {lang === 'es' ? 'Destinos' : 'Destinations'}
          </a>
          <a 
            href="#contacto" 
            className="block font-medium py-2 hover:text-primary-500"
            onClick={() => setIsOpen(false)}
          >
            {lang === 'es' ? 'Contacto' : 'Contact'}
          </a>
          <a 
            href="#comprar" 
            className="block w-full text-center bg-secondary-500 text-white px-6 py-2 rounded-full font-medium"
            onClick={() => setIsOpen(false)}
          >
            {lang === 'es' ? 'Comprar' : 'Buy Now'}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;