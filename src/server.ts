import express from "express";
import userRoutes from "./infrastructure/routes/userRoutes";
import "reflect-metadata";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
