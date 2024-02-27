require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./db");
const usersRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// Database connection
dbConnect();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

// Run Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
