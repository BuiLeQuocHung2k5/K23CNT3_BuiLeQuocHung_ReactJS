import React, { useState } from "react";

const BlqhProductAdd = ({ addProduct }) => {
  const [product, setProduct] = useState({
    pName: "",
    pQuantity: "",
    pPrice: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.pName && product.pQuantity && product.pPrice) {
      addProduct({
        ...product,
        pQuantity: Number(product.pQuantity),
        pPrice: Number(product.pPrice) * 1000, // Nhân với 1.000
      });
      setProduct({ pName: "", pQuantity: "", pPrice: "" });
    }
  };

  return (
    <div>
      <h2>Thêm sản phẩm</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="pName" placeholder="Tên sản phẩm" value={product.pName} onChange={handleChange} required />
        <input type="number" name="pQuantity" placeholder="Số lượng" value={product.pQuantity} onChange={handleChange} required />
        <input type="number" name="pPrice" placeholder="Giá (nghìn VND)" value={product.pPrice} onChange={handleChange} required />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default BlqhProductAdd;