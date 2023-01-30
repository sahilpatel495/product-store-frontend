import { Button, FormLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./Product/Product.css";

const PurchaseProductPage = (props) => {
  const [product, setProduct] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productQuantity: "",
    total: "",
  });

  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setProduct({
      ...product,
      total: product.productPrice * product.productQuantity,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={600}
          alignContent={"center"}
          alignSelf="center"
          marginLeft="auto"
          marginRight="auto"
          marginTop={2}
        >
          <FormLabel> Product Name</FormLabel>
          <TextField
            required
            id="productName"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            variant="outlined"
          />

          <FormLabel> Description</FormLabel>
          <TextField
            required
            id="productDescription"
            name="productDescription"
            value={product.productDescription}
            onChange={handleChange}
            variant="outlined"
          />

          <FormLabel> Price :</FormLabel>
          <TextField
            required
            id="productPrice"
            name="productPrice"
            value={product.productPrice}
            onChange={handleChange}
            type="number"
            variant="outlined"
          />

          <FormLabel> Quantity</FormLabel>
          <TextField
            required
            id="productQuantity"
            name="productQuantity"
            value={product.productQuantity}
            onChange={handleChange}
            type="number"
            variant="outlined"
          />

          <Button
            sx={{ mt: "10px" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Purchase
          </Button>
        </Box>
      </form>

      <Typography
        level="h2"
        sx={{
          fontSize: "lg",
          mt: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>Total: {product.total}</div>
      </Typography>
    </>
  );
};

export default PurchaseProductPage;
