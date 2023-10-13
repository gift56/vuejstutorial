import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/hello", (req, res) => {
  res.send("Eat a dick");
});
app.get("/products", (req, res) => {
  res.send("Product");
});
app.get("/products/:productId", (req, res) => {
  res.send("Product Detail");
});
app.get("/cart", (req, res) => {
  res.send("cart");
});

app.listen(8000, () => {
  console.log(`Server is running on http://localhost:${8000}`);
});
