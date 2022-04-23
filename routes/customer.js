const express = require("express");
const app = express();
const router = express.Router();

app.get("/customer", (req, res) => {
    res.send("customer");
});

module.exports = router;
