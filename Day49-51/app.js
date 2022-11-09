const fs = require("fs");
const path = require("path");

const express = require("express");
const uuid = require("uuid");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res, next) {
  res.render("index");
});

app.get("/restaurants", function (req, res, next) {
  const storedRestaurants = getStoredRestaurants();

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

app.get("/restaurants/:id", function (req, res, next) {
  const restaurantId = req.params.id;
  const filePath = path.join(__dirname, "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurant-detail", { restaurant: restaurant });
    }
  }

  return res.status(404).render("404");
});

app.get("/recommend", function (req, res, next) {
  res.render("recommend");
});

app.post("/recommend", function (req, res, next) {
  const restaurant = req.body;
  restaurant.id = uuid.v4(); //generate a random unique ID
  const restaurants = getStoredRestaurants();

  restaurants.push(restaurant);

  storeRestaurants(restaurants);

  res.redirect("/confirm");
});

app.get("/confirm", function (req, res, next) {
  res.render("confirm");
});

app.get("/about", function (req, res, next) {
  res.render("about");
});

app.use(function (req, res, next) {
  res.status(404).render("404");
});

app.use(function (error, req, res, next) {
  res.status(500).render("500");
});

app.listen(3000);
