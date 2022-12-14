const {
  getAllCountries,
  findCountries,
  findCountry,
} = require("../utils/index");

const getCountries = async (req, res) => {
  try {
    const { name } = req.query;
    let results = name ? await findCountries(name) : await getAllCountries();
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getCountry = async (req, res) => {
  try {
    const { id } = req.params;
    let results = await findCountry(id);
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getCountries,
  getCountry,
};
