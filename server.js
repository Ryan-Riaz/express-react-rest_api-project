// 1. firstly initialize the express
const express = require("express");

// 2. open all express's method & props
const app = express();

// path resolving
const path = require("path");

// 3. set the port
const PORT = process.env.PORT || 3000;

// routing
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname) + "/public/index.html");
});

app.get("/about", (req, res) => {
    res.sendFile(path.resolve(__dirname) + "/public/about.html");
});

// 4. start the server
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
