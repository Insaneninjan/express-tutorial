const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const customerRouter = require("./routes/customer");
const router = require("./routes/user");

// app.use(mylogger);
// app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res)  => {
    // console.log("hello express");
    // res.send("hello");
    // res.sendStatus(404);
    // res.status(404).send("error");
    // res.status(404).json({ msg: "error" });
    res.render("index", {text: "hoge"});

});
// app.get("/user", (req, res) => {
//     res.send("User");
// });
// app.get("/user/info", (req, res) => {
//     res.send("User info");
// });

// Routing
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/customer", customerRouter);

app.listen(PORT, () => {
    console.log("Running Server");
});


