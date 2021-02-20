// 1. firstly initialize the express
const express = require("express");

// 2. open all express's method & props
const app = express();

// 3. set the port
const PORT = process.env.PORT || 3000;

// path resolving
// const path = require("path");

// set up view engine
app.set("view engine", "ejs");

// import router
const webRouter = require("./routes");
const productsRouter = require("./routes/products");

// use prefix in routing

// app.use("/api", webRouter);

// rendering views

// app.get("/", (req, res) => {
//     res.render("index", {
//         title: "My Home Page",
//     });
// });

// static file serving

app.use(express.static("public"));

// for getting json data from client-side
app.use(express.json());

// coming from router
app.use(webRouter);
app.use(productsRouter);

//routing

// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname) + "/public/index.html");
// });

// app.get("/about", (req, res) => {
//     res.sendFile(path.resolve(__dirname) + "/public/about.html");
// });

// download a file

// app.get("/download", (req, res) => {
//     res.download(path.resolve(__dirname) + "/public/about.html");
// });

// 4. start the server
app.listen(PORT, () =>
    console.log(`Server is listening on http://localhost:${PORT}`)
);
