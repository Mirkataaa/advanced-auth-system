import express from "express";
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';

import { connectDB } from "./db/connectDB.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use('/api/auth' , authRoutes );

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port:" , PORT);
});
