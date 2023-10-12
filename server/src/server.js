import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello It's Efe");
});

app.listen(8000, () => {
  console.log("Server is listening at port 8000");
});
