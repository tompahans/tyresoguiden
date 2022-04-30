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
  const restauranger = require("./restauranger.json");
  res.locals.title = "Restauranger";
  res.render("pages/restauranger", {
    page_name: "restauranger",
    restaurants: restauranger,
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
app.get("/aktiviteter", function (req, res) {
  res.locals.title = "Paket";
  res.render("pages/aktiviteter", {
    page_name: "aktiviteter",
  });
});

//Annas
app.get("/historia/annas", function (req, res) {
  res.locals.title = "Historia: Annaspepparkakor";
  res.render("pages/annas", {
    page_name: "historia",
  });
});

//Fontana
app.get("/historia/fontana", function (req, res) {
  res.locals.title = "Historia: Fontana";
  res.render("pages/fontana", {
    page_name: "historia",
  });
});

//Tyresö slott
app.get("/historia/slottet", function (req, res) {
  res.locals.title = "Historia: Tyresöslott";
  res.render("pages/tyresoslott", {
    page_name: "historia",
  });
});

//404-notfound
app.get("/*", function (req, res) {
  res.locals.title = "Sidan du söker finns ej";
  res.render("pages/404", {
    page_name: "404",
  });
});

app.listen(3000);
console.log("Servern hostad på port 3000");
