const router = require("express").Router();
let products = require("../productData");

router.get("/products", (req, res) => {
    res.render("products", {
        title: "My Products Page",
    });
});

router.get("/api/products", (req, res) => {
    res.json(products);
});

router.post("/api/products", (req, res) => {
    // for supporting req.body, use express.json() static middleware
    console.log(req.body);
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(422).json({ message: "no data found" });
    }

    const product = {
        id: new Date().getTime().toString(),
        name,
        price,
    };
    products.push(product);
    res.json(product);
});

router.delete("/api/products/:productId", (req, res) => {
    products = products.filter(
        (product) => req.params.productId !== product.id
    );
    res.status({ status: "OK" });
});

module.exports = router;
