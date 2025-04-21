import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ShoppingCart, Mail, MessageCircle, ArrowLeft, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getProductById } from '../data/products';
import { Product } from '../types';

const ProductDetail = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      if (foundProduct) {
        setProduct(foundProduct);
        // Reset quantity when product changes
        setQuantity(1);
      }
    }
  }, [id]);
  
  if (!product) {
    return (
      <div className="container-custom py-32 text-center">
        <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
        <Link to="/products" className="text-primary-600 hover:text-primary-700">
          &larr; Back to Products
        </Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const handleEmailShare = () => {
    const subject = `Inquiry about ${product.name}`;
    const body = `Hello Fuji Premium,\n\nI am interested in getting more information about the ${product.name} (ID: ${product.id}).\n\nPlease contact me with details.\n\nThank you.`;
    
    window.location.href = `mailto:info@fujipremium.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  
  const handleWhatsAppShare = () => {
    const text = `Hello Fuji Premium, I am interested in getting more information about the ${product.name} (ID: ${product.id}). Please contact me with details.`;
    
    window.open(`https://wa.me/+8131234567?text=${encodeURIComponent(text)}`, '_blank');
  };
  
  return (
    <div className="pt-24">
      <div className="container-custom py-12">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary-600">Home</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link to="/products" className="hover:text-primary-600">Products</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link to="/products" className="hover:text-primary-600">
            {product.type === 'elevator' ? 'Elevators' : 'Escalators'}
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-primary-600">{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto rounded"
            />
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">{product.name}</h1>
            
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)} {product.type.charAt(0).toUpperCase() + product.type.slice(1)}
              </span>
            </div>
            
            <p className="text-gray-700 mb-6 text-lg">{product.description}</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-primary-900">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="text-primary-600 mr-2 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {product.specs && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-primary-900">Specifications</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <table className="w-full">
                    <tbody>
                      {Object.entries(product.specs).map(([key, value]) => (
                        <tr key={key} className="border-b border-gray-200 last:border-0">
                          <td className="py-3 font-medium text-gray-700">{key}</td>
                          <td className="py-3 text-gray-600">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gold-600">${product.price.toLocaleString()}</h3>
              <p className="text-gray-500 text-sm">*Price is an estimate. Contact us for a detailed quote.</p>
            </div>
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded-md w-32">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full text-center border-0 focus:ring-0"
                  min="1"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="btn-primary flex items-center"
              >
                <ShoppingCart size={18} className="mr-2" />
                <span>Add to Cart</span>
              </button>
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={handleEmailShare}
                className="flex items-center justify-center space-x-2 border border-primary-600 text-primary-600 rounded-md px-4 py-2 hover:bg-primary-50 transition-colors"
              >
                <Mail size={18} />
                <span>Email Inquiry</span>
              </button>
              
              <button 
                onClick={handleWhatsAppShare}
                className="flex items-center justify-center space-x-2 border border-green-600 text-green-600 rounded-md px-4 py-2 hover:bg-green-50 transition-colors"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <Link to="/products" className="inline-flex items-center text-primary-600 hover:text-primary-700">
            <ArrowLeft size={16} className="mr-2" />
            <span>Back to Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;