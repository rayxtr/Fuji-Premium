import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ScrollToTop from './components/common/ScrollToTop';

// ✅ Admin pages
import Login from './pages/fj-admin/Login';
import Dashboard from './pages/fj-admin/Dashboard';
import AddProduct from './pages/fj-admin/AddProduct';
import EditProduct from './pages/fj-admin/EditProduct';

function AppWrapper() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/fj-admin');

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      {!isAdminRoute && <Header />}

      <main className="flex-grow">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category/:id" element={<ProductDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* ✅ Admin routes */}
          <Route path="/fj-admin" element={<Login />} />
          <Route path="/fj-admin/dashboard" element={<Dashboard />} />
          <Route path="/fj-admin/add-product" element={<AddProduct />} />
          <Route path="/fj-admin/edit-product/:type/:category/:name" element={<EditProduct />} />
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <AppWrapper />
      </CartProvider>
    </Router>
  );
}

export default App;
