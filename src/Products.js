import React from "react";
import axios from "axios";
import { PRODUCTS } from "./constants";

const Products = () => {
  return (
    <ul>
      {PRODUCTS.map((product, idx) => (
        <>
          <li>
            <h1>{idx}</h1>
          </li>
          <img width={300} height={200} src={`${product.image}`} />
          {/* <li>{product.title}</li>
          <li>{product.price}</li>
          <li>{product.description}</li> */}
        </>
      ))}
    </ul>
  );
};

export default Products;
