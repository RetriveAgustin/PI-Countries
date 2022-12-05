const { Router } = require("express");
const activitiesRouter = Router();

activitiesRouter.get("/", (req, res) => {
    res.status("200").send("NOT IMPLEMENTED YET: get all activities / get activities by name");
})

module.exports = activitiesRouter;
