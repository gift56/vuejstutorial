import express from "express";

const app = express();

app.get("/products", (req, res) => {
  res.send("Good job");
});

app.get("/products/:productId", (req, res) => {});

app.get("/cart", (req, res) => {});

app.listen(8000, () => {
  console.log("Server is listening at port 8000");
});
