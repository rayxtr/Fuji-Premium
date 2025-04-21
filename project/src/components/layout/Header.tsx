import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Logo from './Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartItemsCount } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinkClasses = `relative font-medium transition-colors duration-300 hover:text-primary-600 
    after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:scale-x-0 
    after:bg-primary-600 after:transition-transform after:duration-300 
    hover:after:scale-x-100`;

  const activeLinkClasses = `text-primary-600 after:scale-x-100`;

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 
    ${isScrolled || !isHomePage ? 'navbar-solid' : 'navbar-transparent'} ${isMenuOpen ? 'bg-white' : ''}`;

  return (
    <header className={navbarClasses}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="z-20 flex items-center">
          <Logo color={isScrolled || !isHomePage || isMenuOpen ? '#0c4a6e' : '#ffffff'} />
          <span className={`ml-2 text-xl font-bold ${isScrolled || !isHomePage || isMenuOpen ? 'text-primary-900' : 'text-white'}`}>
            Fuji Premium
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`${navLinkClasses} ${location.pathname === '/' ? activeLinkClasses : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`${navLinkClasses} ${location.pathname === '/about' ? activeLinkClasses : ''}`}>
            About
          </Link>
          <Link to="/products" className={`${navLinkClasses} ${location.pathname.includes('/products') ? activeLinkClasses : ''}`}>
            Products
          </Link>
          <Link to="/gallery" className={`${navLinkClasses} ${location.pathname === '/gallery' ? activeLinkClasses : ''}`}>
            Gallery
          </Link>
          <Link to="/projects" className={`${navLinkClasses} ${location.pathname === '/projects' ? activeLinkClasses : ''}`}>
            Projects
          </Link>
          <Link to="/contact" className={`${navLinkClasses} ${location.pathname === '/contact' ? activeLinkClasses : ''}`}>
            Contact
          </Link>
          <Link to="/cart" className="relative ml-2">
            <ShoppingCart size={24} className={isScrolled || !isHomePage ? 'text-primary-900' : 'text-white'} />
            {getCartItemsCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getCartItemsCount()}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <Link to="/cart" className="relative mr-4">
            <ShoppingCart size={24} className={isScrolled || !isHomePage ? 'text-primary-900' : 'text-white'} />
            {getCartItemsCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getCartItemsCount()}
              </span>
            )}
          </Link>
          <button onClick={toggleMenu} className="z-20">
            {isMenuOpen ? (
              <X size={24} className="text-primary-900" />
            ) : (
              <Menu size={24} className={isScrolled || !isHomePage ? 'text-primary-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-10 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link to="/" className="text-lg font-medium text-primary-900">Home</Link>
            <Link to="/about" className="text-lg font-medium text-primary-900">About</Link>
            <Link to="/products" className="text-lg font-medium text-primary-900">Products</Link>
            <Link to="/gallery" className="text-lg font-medium text-primary-900">Gallery</Link>
            <Link to="/projects" className="text-lg font-medium text-primary-900">Projects</Link>
            <Link to="/contact" className="text-lg font-medium text-primary-900">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;