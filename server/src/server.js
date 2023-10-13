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

async function populatedCartId(ids) {
  return ids.map((id) => products.find((item) => item.id === id));
}

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
  const populatedCart = populatedCartId(cartItems);
  res.json(populatedCart);
});

app.post("/cart", (req, res) => {
  const productId = req.body.id;
  cartItems.push(productId);
  const populatedCart = populatedCartId(cartItems);
  res.json(populatedCart);
});

app.delete("/cart/:productId", (req, res) => {
  const productId = req.params.productId;
  cartItems = cartItems.filter((id) => id !== productId);
  const populatedCart = populatedCartId(cartItems);
  res.json(populatedCart);
});

app.listen(8000, () => {
  console.log(`Server is running on http://localhost:${8000}`);
});
