import React from "react";
import { Button } from "@mui/material";
import "./Product.css";

const Product = (props) => {
  const { _id, name, description, price, quantity, image } = props.product;
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3> {name} </h3>
      <p>{description}</p>
      <h3> Rs. {price}</h3>
      <h3> {quantity}</h3>
      <Button variant="contained">Buy</Button>
    </div>
  );
};

export default Product;
