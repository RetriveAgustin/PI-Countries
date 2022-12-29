const { Activity, Country } = require("../db");
const { getAllActivities, findActivities } = require("../utils");

const createActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, country } = req.body;
    const newActivity = await Activity.create({ name, difficulty, duration, season });
    if (country) await newActivity.addCountry(country);
    res.status(200).json(newActivity);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getActivities = async (req, res) => {
  try {
    const { name } = req.query;
    let results = name ? await findActivities(name) : await getAllActivities();
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const findActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const activity = await Activity.findAll({
      where: { id },
      include: [
        {
          model: Country,
          attributes: ["id", "name", "continent"],
        },
      ],
    });
    res.status(200).json(activity);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createActivity,
  getActivities,
  findActivity,
};
