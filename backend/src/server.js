import express from "express"
import userRoutes from "./routes/userRoutes.js"
import postRoutes from "./routes/postRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import cors from "cors"
import dotenv from "dotenv"
import morgan from "morgan"
import path from "path"
import { connectDb } from "./config/db.js";
import cookieParser from "cookie-parser"

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

connectDb();

const allowedOrigins = [
    "http://localhost:5173", 
    process.env.CLIENT_URL,  
].filter(Boolean); 

app.use(cors({

    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.log(`CORS Policy: Origin ${origin} not allowed.`);
            callback(new Error('Not allowed by CORS'), false);
        }
    },
    credentials: true,
    optionsSuccessStatus: 200 
}));


app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser()); 

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);

const __dirname = path.resolve(); 

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get(/.*/, (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log("SEVER STARTED ON PORT", PORT);
});
