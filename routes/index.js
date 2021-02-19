// call the only route from express

const router = require("express").Router();

// use apiKey middleware
const apiKeyMiddleware = require("../middlewares/apiKey");

router.get("/", (req, res) => {
    res.render("index", {
        title: "My Home Page",
    });
});

router.get("/about", (req, res) => {
    res.render("about", {
        title: "My About Page",
    });
});

router.get("/api/products", apiKeyMiddleware, (req, res) => {
    res.json([
        {
            id: "123",
            name: "google",
        },
        {
            id: "123",
            name: "apple",
        },
    ]);
});

// export router

module.exports = router;
