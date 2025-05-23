import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center';
  textColor?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  textColor = 'text-gray-800'
}) => {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>{title}</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      <div className={`mt-6 w-24 h-1 bg-primary-500 ${alignment === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;