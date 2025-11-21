const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

// ✅ CORS FIX — allow local frontend ONLY
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Middleware
app.use(express.json());

// Connect to MongoDB
require("./db")(); 

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// Start the server
app.listen(port, () => {
  console.log(`Notebox-backend listening on port ${port}`);
});
