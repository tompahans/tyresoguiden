const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

//index
app.get("/", function (req, res) {
  res.locals.title = "Hem";
  res.render("pages/index", {
    page_name: "hem",
  });
});

//badplatser
app.get("/badplatser", function (req, res) {
  res.locals.title = "Badplatser";
  res.render("pages/badplatser", {
    page_name: "badplatser",
  });
});

//restauranger
app.get("/restauranger", function (req, res) {
  res.locals.title = "Restauranger";
  res.render("pages/restauranger", {
    page_name: "restauranger",
  });
});

//historia
app.get("/historia", function (req, res) {
  res.locals.title = "Historia";
  res.render("pages/historia", {
    page_name: "historia",
  });
});

//paket
app.get("/paket", function (req, res) {
  res.locals.title = "Paket";
  res.render("pages/paket", {
    page_name: "paket",
  });
});

app.listen(3000);
console.log("Servern hostad på port 3000");
