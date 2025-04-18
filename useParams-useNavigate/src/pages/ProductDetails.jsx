import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data.json";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      {products.map(
        (product) =>
          product.id == id && (
            <div className="product" key={product.id}>
              <div className="product-img">
                <img src={product.url} alt="" />
              </div>
              <div className="product-texts">
                {product.name} - {product.price}
                <br />
                <span>Product ID: {product.id}</span>
              </div>
              <button>BUY</button>
            </div>
          )
      )}
    </div>
  );
}

export default ProductDetails;
