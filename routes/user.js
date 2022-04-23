const express = require("express");
const router = express.Router();

router.use(mylogger);
router.get("/user", (req, res) => {
    res.send("User");
});

router.get("/user/info", (req, res) => {
    res.send("User info");
});

router.get("/:id", (req, res) => {
    res.send(`${req.params.id} User id`)
})

// middle ware
function mylogger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

module.exports = router;
