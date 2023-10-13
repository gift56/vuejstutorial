import express from "express";
import dotenv from "dotenv";
import {
  cartItems as cartItemRaw,
  products as productItemRaw,
} from "./constant";

let cartItems = cartItemRaw;
let products = productItemRaw;

const app = express();
app.use(express.json());
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
  res.json(cartItems);
});

app.post("/cart", (req, res) => {
  const productId = req.body.id;
  const product = products.find((item) => item.id === productId);
  cartItems.push(product);
  res.json(cartItems);
});

app.delete("/cart/:productId", (req, res) => {
  const productId = req.params.productId;
  products = products.filter((item) => item.id !== productId);
  
});

app.listen(8000, () => {
  console.log(`Server is running on http://localhost:${8000}`);
});
