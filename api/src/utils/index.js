const axios = require("axios");
const { Country } = require("../db");

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
    }) => Country.create({
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
}

const findCountries = async (name) => {
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
}

const findCountry = async (id) => {
  const country = await Country.findAll({
    where: {
      id: id,
    }
  })
  return country
}

module.exports = {
  loadCountries,
  getAllCountries,
  findCountries,
  findCountry,
};
