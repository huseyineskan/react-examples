import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data.json";

function Products() {
  const navigate = useNavigate();

  return (
    <div>
      {products &&
        products.map((product) => (
          <div className="product" key={product.id}>
            <div className="product-img">
              <img src={product.url} alt="" />
            </div>
            <div className="product-texts">
              {product.name} - {product.price}
            </div>
            <button
              onClick={() => {
                navigate("product/" + product.id);
              }}
            >
              Detail
            </button>
          </div>
        ))}
    </div>
  );
}

export default Products;
