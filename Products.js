// Products.js

import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products,onAddProduct,onUpdateProduct,onDeleteProduct }) => {
  return (
    <div>
      <h1><u>PRODUCTS MANAGEMENT</u></h1><br/>
      <center>
      <table>
        <thead>
          <tr>
            <th>Name </th>
            <th>Category </th>
            <th>Price </th>
            <th>Stock Quantity </th>
            <th>Action </th>  
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stockQuantity}</td>
              <td>
              <button onClick={() => onAddProduct(product.id)}>Add</button>
              <button onClick={() => onUpdateProduct(product.id)}>Update</button>
              <button onClick={() => onDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table><br/>
      <Link to="/dashboard"><button>Back to Dashboard</button></Link>
      </center>
    </div>
  );
};

export default Products;
