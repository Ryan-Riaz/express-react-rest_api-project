function apiKey(req, res, next) {
    const API_KEY = "123456";

    // when post method invoked
    console.log(req.body);

    // when url query invoked
    console.log(req.query);
    const key = req.query.key;

    if (key && key === API_KEY) {
        next();
    } else {
        res.json({ message: "invalid api request" });
    }
}

module.exports = apiKey;
