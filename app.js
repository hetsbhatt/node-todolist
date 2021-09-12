//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

let items = [];

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    //res.send("Hello");
    const day = date.getDate();
    res.render("list", { kindOfDay: day, newItems: items });
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.post("/", (req, res) => {

    const newToDoEntry = req.body.toDoItem;
    items.push(newToDoEntry);
    res.redirect("/");
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port 3000");
});