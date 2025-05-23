import React from 'react';
import { Compass } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a href="#" className="flex items-center">
      <Compass size={32} className="text-primary-500" />
      <span className="ml-2 text-2xl font-bold">
        <span className="text-primary-500">Boli</span>
        <span className="text-secondary-500">Pass</span>
      </span>
    </a>
  );
};

export default Logo;