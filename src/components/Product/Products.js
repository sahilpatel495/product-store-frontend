import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Product.css";

const URL =
  "https://product-store-backend-18dcvjucr-sahilpatel495.vercel.app/products";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Products = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setProducts(data.products));
  }, []);
  console.log(products);

  return (
    <div>
      <ul>
        {products &&
          products.map((product, i) => (
            <li className="product" key={i}>
              <Product product={product} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Products;
