import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ProductForm from "../../components/admin/ProductForm";

const EditProduct = () => {
  const { type, category, name } = useParams();
  const [product, setProduct] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/products/${type}/${category}`,
          { withCredentials: true }
        );
        const found = res.data.find((p: any) => p.name === name);
        if (found) setProduct(found);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    fetchProduct();
  }, [type, category, name]);

  const handleSubmit = async (formData: FormData) => {
    try {
      await axios.put(
        `http://localhost:5000/api/products/${type}/${category}/${name}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/fj-admin/Dashboard");
    } catch (err) {
      console.error("Failed to update product:", err);
    }
  };

  if (!product) return <div className="p-4">Loading product...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <ProductForm
        initialData={{
          name: product.name,
          price: product.price,
          type: product.type,
          category: product.category,
          image: product.image,
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditProduct;
