import express from "express"
import userRoutes from "./routes/userRoutes.js"
import postRoutes from "./routes/postRoutes.js"
import cors from "cors"
import dotenv from "dotenv"
import { connectDb } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

connectDb();
app.use(cors({
    origin: "http://localhost:5173"
}));
app.listen(PORT, () => {
    console.log("SEVER STARTED ON PORT", PORT);
});

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);