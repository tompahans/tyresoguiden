const express = require("express");
require("dotenv").config();
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https")
      res.redirect(`https://${req.header("host")}${req.url}`);
    else next();
  });
}

//index
app.get("/", function (req, res) {
  res.locals.title = "Hem";
  res.render("pages/index", {
    page_name: "hem",
    subpage_name: null,
  });
});

//badplatser
app.get("/badplatser", function (req, res) {
  res.locals.title = "Badplatser";
  res.render("pages/badplatser", {
    page_name: "badplatser",
    subpage_name: null,
  });
});

//aktiviteter
app.get("/aktiviteter", function (req, res) {
  res.locals.title = "Aktiviteter";
  res.render("pages/aktiviteter", {
    page_name: "aktiviteter",
    subpage_name: null,
  });
});

//aktiviteter barnfamilj
app.get("/aktiviteter/barnfamilj", function (req, res) {
  res.locals.title = "Aktiviteter för barnfamiljen";
  res.render("pages/aktivitet_barnfamilj", {
    page_name: "aktiviteter",
    subpage_name: "barnfamilj",
  });
});

//aktivitet alby
app.get("/aktiviteter/alby", function (req, res) {
  res.locals.title = "Aktiviteter";
  res.render("pages/aktivitet_alby", {
    page_name: "aktiviteter",
    subpage_name: "alby",
  });
});

//aktivitet slottet
app.get("/aktiviteter/slottet", function (req, res) {
  res.locals.title = "Aktiviteter";
  res.render("pages/aktivitet_slottet", {
    page_name: "aktiviteter",
    subpage_name: "bslott",
  });
});

//restauranger
app.get("/restauranger", function (req, res) {
  const restauranger = require("./restauranger.json");
  res.locals.title = "Restauranger";
  res.render("pages/restauranger", {
    page_name: "restauranger",
    data: restauranger,
    subpage_name: null,
  });
});

//historia
app.get("/historia", function (req, res) {
  res.locals.title = "Historia";
  res.render("pages/historia", {
    page_name: "historia",
    subpage_name: null,
  });
});

//Annas
app.get("/historia/annas", function (req, res) {
  res.locals.title = "Historia: Annas pepparkakor";
  res.render("pages/annas", {
    page_name: "historia",
    subpage_name: "annas",
  });
});

//Fontana
app.get("/historia/fontana", function (req, res) {
  res.locals.title = "Historia: Fontana";
  res.render("pages/fontana", {
    page_name: "historia",
    subpage_name: "fontana",
  });
});
//Tyresö slott
app.get("/historia/slottet", function (req, res) {
  res.locals.title = "Historia: Tyresö slott";
  res.render("pages/slottet", {
    page_name: "historia",
    subpage_name: "slottet",
  });
});
//404-notfound
app.get("/*", function (req, res) {
  res.locals.title = "Sidan du söker finns ej";
  res.render("pages/404", {
    page_name: "404",
  });
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running.."));
