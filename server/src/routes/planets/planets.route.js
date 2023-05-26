const express = require("express");
const getAllPlanets = require("./planets.controller");

const planetsRouter = express.Router();

planetsRouter.get("/planets", function (req, res) {
  // Call the getAllPlanets function here, and send the response back to the client
  const planets = getAllPlanets();
  res.send(planets);
});

module.exports = planetsRouter;
