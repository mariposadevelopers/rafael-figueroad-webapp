import express from "express"
import userRoutes from "./routes/userRoutes.js"
import postRoutes from "./routes/postRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import cors from "cors"
import dotenv from "dotenv"
import morgan from "morgan"
import { connectDb } from "./config/db.js";
import cookieParser from "cookie-parser"
dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

connectDb();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.listen(PORT, () => {
    console.log("SEVER STARTED ON PORT", PORT);
});
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser()); 

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);