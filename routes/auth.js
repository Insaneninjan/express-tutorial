const express = require("express");
const app = express();
const router = express.Router();

app.get("/auth", (req, res) => {
    res.send("auth");
});

module.exports = router;
