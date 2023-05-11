const axios = require("axios");
const getAllDogs = require("./getAllDogs");
const { Temperament } = require("../db");

const getTemperaments = async () => {
  let temperaments = [];
  let bulk = [];
  // const { data } = await axios("https://api.thedogapi.com/v1/breeds");
  const data = await getAllDogs();

  data.forEach((element) => {
    element.temperament
      ? (temperaments = [...temperaments, ...element.temperament.split(", ")])
      : null;
  });

  let filter = new Set(temperaments);
  let filtered = [...filter].sort();

  console.log("Filtered", filtered.length); // Eliminar.-

  filtered.forEach((elem) => bulk.push({ name: elem }));

  const created = await Temperament.bulkCreate(bulk);

  console.log("Bulk", bulk.length); // Eliminar.-

  return created;
};

module.exports = getTemperaments;
