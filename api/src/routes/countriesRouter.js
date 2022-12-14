const { Router } = require("express");
const countriesRouter = Router();
const { getCountries, getCountry } = require("../controllers/countriesController");

countriesRouter.get("/", getCountries);

countriesRouter.get("/:id", getCountry);

module.exports = countriesRouter;