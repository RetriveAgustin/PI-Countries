const axios = require("axios");
const { Country, Activity } = require("../db");

const loadCountries = async () => {
  apiResults = await axios.get("https://restcountries.com/v3/all");
  const countries = apiResults.data.map((country) => {
    return {
      id: country.cca3,
      name: country.name.common,
      official_name: country.name.official,
      flag: country.flags[0],
      continent: country.continents,
      capital: country.capital,
      subregion: country.subregion,
      area: country.area,
      population: country.population,
      origin: "db",
    };
  });

  countries.map(
    ({
      id,
      name,
      official_name,
      flag,
      continent,
      capital,
      subregion,
      area,
      population,
      origin,
    }) =>
      Country.create({
        id,
        name,
        official_name,
        flag,
        continent,
        capital,
        subregion,
        area,
        population,
        origin,
      })
  );
};

const getAllCountries = async () => {
  const dbCountries = await Country.findAll();
  return dbCountries;
};

const findCountries = async (name) => {
  try{
    apiResults = await axios.get(`https://restcountries.com/v3/name/${name}`);
    const apiCountries = apiResults.data.map((country) => {
      return {
        id: country.cca3,
        name: country.name.common,
        official_name: country.name.official,
        flag: country.flags[0],
        continent: country.continents,
        capital: country.capital,
        subregion: country.subregion,
        area: country.area,
        population: country.population,
        origin: "api",
      };
    });
    return apiCountries;
  } catch (err) {
    return "this country does not exist";
  }
};

const findCountry = async (id) => {
  const country = await Country.findAll({
    where: { id },
    include: [
      {
        model: Activity,
        attributes: ["id", "name", "difficulty", "duration"],
      },
    ],
  });
  return country;
};

const getAllActivities = async () => {
  const dbActivities = await Activity.findAll();
  return dbActivities;
};

const findActivities = async (name) => {
  const dbActivities = await Activity.findAll({
    where: {
      name,
    },
  });
  return dbActivities;
};

module.exports = {
  loadCountries,
  getAllCountries,
  findCountries,
  findCountry,
  getAllActivities,
  findActivities,
};
