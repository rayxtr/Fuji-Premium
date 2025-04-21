import { Calculator as Elevator } from 'lucide-react';

interface LogoProps {
  color?: string;
  size?: number;
}

const Logo = ({ color = '#0c4a6e', size = 32 }: LogoProps) => {
  return (
    <div className="relative">
      <Elevator size={size} color={color} />
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold-500 rounded-full" />
    </div>
  );
};

export default Logo;