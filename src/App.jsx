
import React, { useState } from "react";
import './index.css'

const App = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex === null) {
      setProducts([...products, formData]);
    } else {
      const updatedProducts = products.map((product, index) =>
        index === editingIndex ? formData : product
      );
      setProducts(updatedProducts);
      setEditingIndex(null);
    }
    setFormData({ name: "", category: "", price: "", stock: "", description: "" });
  };

  
 

  
  return (
    <div className="App bg-light shaddow transparent" >
      <h1 className="justify-content center align item center">Product Inventory System</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="stock"
          placeholder="Stock Quantity"
          value={formData.stock}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="About"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-success rounded">{editingIndex === null ? "Add Product" : "Update Product"}</button>
      </form>

      <table className="shaddow bg-warning justify-content align item">
        <thead className="shaddow">
          <tr >
            <th className="bg-danger">Name</th>
            <th className="bg-success">Category</th>
            <th className="bg-danger">Price</th>
            <th className="bg-success">Stock</th>
            <th className="bg-danger">About</th>
           
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.description}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;