import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello It's Efe");
});

app.get("/products", (req, res) => {
    
});

app.get("/products/:productId", (req, res) => {});

app.get("/cart", (req, res) => {});

app.listen(8000, () => {
  console.log("Server is listening at port 8000");
});
