const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Enable JSON body parsing

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",  // Change if MySQL is on another server
    user: "root",       // Your MySQL username
    password: "",       // Your MySQL password
    database: "testdb", // Your database name
    port: 3306          // Default MySQL port
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL!");
});

// Create API Endpoint to Fetch Data
app.get("/users", (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// Start Server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
