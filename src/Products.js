import React from "react";
import axios from "axios";
import { PRODUCTS } from "./constants";

const Products = () => {
  return (
    <ul>
      {PRODUCTS.map((product) => (
        <div>
          <img src={`${product.image}`} />
          <li>{product.title}</li>
          <li>{product.price}</li>
          <li>{product.description}</li>
        </div>
      ))}
    </ul>
  );
};

export default Products;
