const axios = require("axios");
// const { Temperament } = require("../db");

const getTemperaments = async () => {
  const { data } = await axios("https://api.thedogapi.com/v1/breeds");
  console.log("Dogs: ", data.length);
  const dogsNames = data.map((e) => e.name);
  console.log("Names: ", dogsNames.length);
  const dogsNamesNoRepeted = new Set(dogsNames);
  let result = [...dogsNamesNoRepeted];
  console.log("Result", result.length);
  return result;
};

module.exports = getTemperaments;
