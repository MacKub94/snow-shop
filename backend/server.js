import express from "express";
import products from "./data/products.js";

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  res.json(product);
});

const PORT = process.envPORT || 5000;

app.listen(PORT, console.log(`Server running on ${PORT}`));
