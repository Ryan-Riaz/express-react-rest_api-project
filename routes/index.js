// call the only route from express

const router = require("express").Router();

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

// export router

module.exports = router;
