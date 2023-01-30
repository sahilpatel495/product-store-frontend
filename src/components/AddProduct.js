import { Box, Button, FormLabel, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Products from "./Product/Products";

const AddProduct = (e) => {
  const history = useNavigate();

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productImage, setProductImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://product-store-backend-18dcvjucr-sahilpatel495.vercel.app/products",
        {
          name: String(productName),
          description: String(productDescription),
          price: Number(productPrice),
          quantity: Number(productQuantity),
          image: String(productImage),
        }
      )
      .then((res) => history("/"));
    history.push("/");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
        <FormLabel> Name</FormLabel>
        <TextField
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          margin="normal"
          fullWidth
          variant="outlined"
          required
          name="name"
        />

        <FormLabel> Description</FormLabel>
        <TextField
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          margin="normal"
          fullWidth
          required
          variant="outlined"
          name="description"
        />

        <FormLabel> Price </FormLabel>
        <TextField
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          required
          name="price"
        />

        <FormLabel> Quantity</FormLabel>
        <TextField
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          required
          name="quantity"
        />

        <FormLabel> Image(URL)</FormLabel>
        <TextField
          value={productImage}
          onChange={(e) => setProductImage(e.target.value)}
          margin="normal"
          fullWidth
          variant="outlined"
          required
          name="image"
        />
        <Button
          onClick={(e) => handleSubmit(e)}
          type="submit"
          variant="contained"
        >
          {" "}
          Add Product
        </Button>
      </Box>
    </form>
  );
};

export default AddProduct;
