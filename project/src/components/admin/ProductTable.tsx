import { Product } from "../../pages/fj-admin/Dashboard";
import { useNavigate } from "react-router-dom";

interface Props {
  products: Product[];
  onDelete: (id: string, type: string, category: string) => void;
}

const ProductTable = ({ products, onDelete }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-auto bg-white rounded-lg shadow">
      <table className="w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left p-3">Image</th>
            <th className="text-left p-3">Name</th>
            <th className="text-left p-3">Price</th>
            <th className="text-left p-3">Type</th>
            <th className="text-left p-3">Category</th>
            <th className="text-left p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t">
              <td className="p-3">
                <img src={product.image} alt={product.name} className="h-12 rounded" />
              </td>
              <td className="p-3">{product.name}</td>
              <td className="p-3">₹{product.price}</td>
              <td className="p-3">{product.type}</td>
              <td className="p-3">{product.category}</td>
              <td className="p-3 space-x-2">
                <button
                  onClick={() =>
                    navigate(`/fj-admin/EditProduct`, {
                      state: product,
                    })
                  }
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(product.id, product.type, product.category)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center p-6 text-gray-500">
                No products available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
