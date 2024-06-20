import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

//Routes
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"; // Import the message routes
import userRoutes from "./routes/user.routes.js"; // Import the user routes


dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

//Middlewares
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)

app.use(cookieParser());

//We will use middle ware to refrain from making this file too long
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
