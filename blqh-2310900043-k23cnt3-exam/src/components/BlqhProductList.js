import React from "react";

const BlqhProductList = ({ products }) => {
  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá (Ngàn VND)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.pid}>
              <td>{product.pid}</td>
              <td>{product.pName}</td>
              <td>{product.pQuantity}</td>
              <td>{(product.pPrice / 1000).toLocaleString()}K</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlqhProductList;