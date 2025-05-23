import React from 'react';
import { Building, Users, Map } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Partners: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle 
          title="Nuestros Aliados" 
          subtitle="Colaboramos con negocios locales para ofrecerte experiencias auténticas"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <PartnerCategory 
            icon={<Building />}
            title="Hospedaje"
            partners={['Hoteles boutique', 'Hostales familiares', 'Ecolodges', 'Alojamientos rurales']}
          />
          <PartnerCategory 
            icon={<Users />}
            title="Gastronomía"
            partners={['Restaurantes tradicionales', 'Cafeterías locales', 'Mercados gastronómicos', 'Viñedos y bodegas']}
          />
          <PartnerCategory 
            icon={<Map />}
            title="Experiencias"
            partners={['Artesanos locales', 'Guías turísticos', 'Centros culturales', 'Comunidades indígenas']}
          />
        </div>
        
        <div className="mt-16">
          <div className="bg-primary-500 rounded-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-6">¿Tienes un negocio turístico?</h3>
                <p className="text-white/90 text-lg mb-8">
                  Únete a nuestra red de socios y aumenta tu visibilidad ante turistas nacionales e internacionales. 
                  Ofrecemos beneficios exclusivos para negocios que valoran y promueven experiencias auténticas.
                </p>
                <a 
                  href="#contacto" 
                  className="inline-block bg-white text-primary-700 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  Únete como socio
                </a>
                
                <div className="mt-12 flex flex-wrap justify-center gap-8">
                  <div className="flex flex-col items-center">
                    <span className="text-white text-4xl font-bold">50+</span>
                    <span className="text-white/80">Negocios asociados</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-4xl font-bold">4</span>
                    <span className="text-white/80">Departamentos</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-4xl font-bold">500+</span>
                    <span className="text-white/80">Viajeros activos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface PartnerCategoryProps {
  icon: React.ReactNode;
  title: string;
  partners: string[];
}

const PartnerCategory: React.FC<PartnerCategoryProps> = ({ icon, title, partners }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-4 text-primary-500">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {partners.map((partner, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
            <span className="text-gray-700">{partner}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Partners;