import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProductTable from "../../components/admin/ProductTable";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  type: "elevators" | "escalators";
  category: string;
}

const Dashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products", {
        withCredentials: true,
      });
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/logout", {}, { withCredentials: true });
      navigate("/fj-admin");
    } catch (err) {
      console.error("Logout failed");
    }
  };

  const handleDelete = async (id: string, type: string, category: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${type}/${category}/${id}`, {
        withCredentials: true,
      });
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="space-x-4">
          <button
            onClick={() => navigate("/fj-admin/AddProduct")}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add Product
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
      <ProductTable products={products} onDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;
