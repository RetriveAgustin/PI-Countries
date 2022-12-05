const { Router } = require("express");

const countriesRouter = Router();
countriesRouter.get("/", (req, res) => {
  res
    .status(200)
    .send("NOT IMPLEMENTED YET: Get all countries / get countries by name");
});

countriesRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send(`NOT IMPLMENTED YET: get country by ID: ${id}`);
});

module.exports = countriesRouter;
