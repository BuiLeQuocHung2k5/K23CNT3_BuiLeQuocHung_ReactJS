import React, { useState } from "react";
import BlqhProductList from "./components/BlqhProductList";
import BlqhProductAdd from "./components/BlqhProductAdd";

const App = () => {
  const [products, setProducts] = useState([
    { pid: 1, pName: "Bát súp dơi Vũ Hán", pQuantity: 10, pPrice: 11000 },
    { pid: 2, pName: "Tôm Hùm Alaska", pQuantity: 2, pPrice: 1888 },
    { pid: 3, pName: "Gà", pQuantity: 5, pPrice: 200000 },
  ]);

  const [nextId, setNextId] = useState(products.length ? products[products.length - 1].pid + 1 : 1);

  const addProduct = (newProduct) => {
    const productWithId = { ...newProduct, pid: nextId };
    setProducts([...products, productWithId]);
    setNextId(nextId + 1); 
  };

  return (
    <div className="container">
      <h1>Quản lý sản phẩm</h1>
      <BlqhProductAdd addProduct={addProduct} />
      <BlqhProductList products={products} />
    </div>
  );
};

export default App;