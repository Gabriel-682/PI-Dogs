const axios = require("axios");
const { Temperament } = require("../db");

const getTemperaments = async () => {
  let temperaments = [];
  let bulk = [];
  const { data } = await axios("https://api.thedogapi.com/v1/breeds");

  data.forEach((element) => {
    element.temperament
      ? (temperaments = [...temperaments, ...element.temperament.split(", ")])
      : null;
  });

  let filter = new Set(temperaments);
  let filtered = [...filter].sort();

  filtered.forEach((elem) => bulk.push({ name: elem }));

  const created = await Temperament.bulkCreate(bulk);

  return created;
};

module.exports = getTemperaments;
