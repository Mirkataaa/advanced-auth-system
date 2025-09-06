import express from "express";
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';

import { connectDB } from "./db/connectDB.js";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.use('/api/auth' , authRoutes );

app.listen(3030, () => {
  connectDB();
  console.log("Server is running on port 3030");
});
