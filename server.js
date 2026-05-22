const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS
app.set("view engine", "ejs");

// Home Route
app.get("/", (req, res) => {
    res.render("index", { message: "" });
});

// Form Submit Route
app.post("/submit", (req, res) => {

    const username = req.body.username;
    const email = req.body.email;

    const msg = `Welcome ${username}! Your email is ${email}`;

    res.render("index", { message: msg });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});