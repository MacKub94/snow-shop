import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

connectDB();

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
