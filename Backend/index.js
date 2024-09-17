import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import cors from "cors";
import BookRoutes from "./Routes/book.js";
import userRoutes from "./Routes/user.js"
import path from "path";

const app = express();
dotenv.config();

const __dirname = path.resolve();
// console.log(__dirname)
const corsOptions = {
  origin: "http://localhost:5173", 
  credentials: true, 
};
app.use(cors(corsOptions));

app.use(express.json());
const PORT = process.env.PORT || 3001;



// Routes
app.use("/api/v1/book", BookRoutes);
app.use("/api/v1/user", userRoutes);

app.use(express.static(path.join(__dirname , "/Frontend/dist")))
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname , "Frontend" , "dist" ,"index.html"))
})
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
