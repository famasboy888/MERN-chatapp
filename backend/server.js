import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

import path from "path";
import fs from "fs";

dotenv.config();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

console.log("this is the dir", __dirname);

function displayFiles(dir) {
  fs.readdir(dir, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }

    files.forEach((file) => {
      const fullPath = path.join(dir, file.name);

      if (file.isDirectory()) {
        console.log("Directory:", fullPath);
        displayFiles(fullPath); // Recursively list files in subdirectory
      } else {
        console.log("File:", fullPath);
      }
    });
  });
}

displayFiles(__dirname);

// //Middlewares

// app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
// app.use(cookieParser());

// //We will use middle ware to refrain from making this file too long
// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);
// app.use("/api/users", userRoutes);

// // app.use(express.static(path.join(__dirname, "/frontend/dist")));

// // app.get("*", (req, res) => {
// //   res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// // });

// server.listen(PORT, () => {
//   connectToMongoDB();
//   console.log(`Server Running on port ${PORT}`);
// });
