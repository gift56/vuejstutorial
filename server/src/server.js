import express from "express";
import dotenv from "dotenv";
import { products } from "./constant";

const app = express();
dotenv.config();

app.get("/hello", (req, res) => {
  res.send("Eat a dick");
});
app.get("/products", (req, res) => {
  res.json(products);
});
app.get("/products/:productId", (req, res) => {
  const paramId = req.params.productId;
  const product = products.find((item) => item.id === paramId);

  res.json(product);
});
app.get("/cart", (req, res) => {
  res.send("cart");
});

app.listen(8000, () => {
  console.log(`Server is running on http://localhost:${8000}`);
});
