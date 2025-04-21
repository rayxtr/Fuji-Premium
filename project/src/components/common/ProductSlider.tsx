import { useState } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../../types';

interface ProductSliderProps {
  products: Product[];
  title: string;
}

const ProductSlider = ({ products, title }: ProductSliderProps) => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="relative py-8">
      <h3 className="text-2xl font-semibold mb-6 text-primary-900">{title}</h3>
      
      <div className="relative">
        <Slider ref={slider => setSliderRef(slider)} {...settings}>
          {products.map(product => (
            <div key={product.id} className="px-2">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
        
        <button 
          onClick={() => sliderRef?.slickPrev()}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="text-primary-700" />
        </button>
        
        <button 
          onClick={() => sliderRef?.slickNext()}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          aria-label="Next slide"
        >
          <ChevronRight size={24} className="text-primary-700" />
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;