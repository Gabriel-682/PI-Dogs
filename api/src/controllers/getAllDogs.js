const axios = require("axios");

const getAllDogs = async () => {
  const { data } = await axios.get("https://api.thedogapi.com/v1/breeds");
  return data;
};

module.exports = getAllDogs;
