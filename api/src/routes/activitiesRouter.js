const { Router } = require("express");
const activitiesRouter = Router();
const { createActivity, getActivities, findActivity } = require("../controllers/activitiesController");

activitiesRouter.get("/", getActivities);

activitiesRouter.post("/", createActivity);

activitiesRouter.get("/:id", findActivity);

module.exports = activitiesRouter;
