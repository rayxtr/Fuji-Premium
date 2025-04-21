import { Link } from 'react-router-dom';
import { ShoppingCart, Mail, MessageCircle } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleEmailShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const subject = `Inquiry about ${product.name}`;
    const body = `Hello Fuji Premium,\n\nI am interested in getting more information about the ${product.name} (ID: ${product.id}).\n\nPlease contact me with details.\n\nThank you.`;
    
    window.location.href = `mailto:info@fujipremium.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsAppShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const text = `Hello Fuji Premium, I am interested in getting more information about the ${product.name} (ID: ${product.id}). Please contact me with details.`;
    
    window.open(`https://wa.me/+8131234567?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <Link to={`/products/${product.category}/${product.id}`} className="block h-full">
      <div className="card card-hover h-full flex flex-col">
        <div className="relative overflow-hidden h-48 md:h-64">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold mb-2 text-primary-900">{product.name}</h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">{product.description}</p>
          <div className="mt-auto">
            <div className="flex justify-between items-center">
              <span className="text-gold-600 font-bold">${product.price.toLocaleString()}</span>
              <div className="flex space-x-2">
                <button 
                  onClick={handleEmailShare}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Email inquiry"
                >
                  <Mail size={16} className="text-primary-700" />
                </button>
                <button 
                  onClick={handleWhatsAppShare}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="WhatsApp inquiry"
                >
                  <MessageCircle size={16} className="text-primary-700" />
                </button>
                <button 
                  onClick={handleAddToCart}
                  className="p-2 rounded-full bg-primary-100 hover:bg-primary-200 transition-colors"
                  aria-label="Add to cart"
                >
                  <ShoppingCart size={16} className="text-primary-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;