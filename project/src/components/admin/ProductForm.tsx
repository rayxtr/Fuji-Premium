import { useState, FormEvent } from "react";

interface ProductFormProps {
  onSubmit: (formData: FormData) => void;
  initialData?: {
    name: string;
    price: string;
    type: string;
    category: string;
    image?: string;
  };
}

const categoriesMap: Record<string, string[]> = {
  elevators: ["home", "car", "passenger", "freight", "hospital", "dumbwaiter"],
  escalators: ["indoor", "outdoor", "movingwalk"],
};

const ProductForm = ({ onSubmit, initialData }: ProductFormProps) => {
  const [name, setName] = useState(initialData?.name || "");
  const [price, setPrice] = useState(initialData?.price || "");
  const [type, setType] = useState(initialData?.type || "elevators");
  const [category, setCategory] = useState(initialData?.category || "");
  const [image, setImage] = useState<File | null>(null);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("type", type);
    formData.append("category", category);
    if (image) formData.append("image", image);

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-xl space-y-4">
      <input
        type="text"
        placeholder="Product Name"
        className="w-full border p-2 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Price"
        className="w-full border p-2 rounded"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <select
        className="w-full border p-2 rounded"
        value={type}
        onChange={(e) => {
          setType(e.target.value);
          setCategory(""); // reset category
        }}
        required
      >
        <option value="elevators">Elevators</option>
        <option value="escalators">Escalators</option>
      </select>

      <select
        className="w-full border p-2 rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="" disabled>Select category</option>
        {categoriesMap[type].map((cat) => (
          <option key={cat} value={cat}>
            {cat[0].toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        {initialData ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm;
