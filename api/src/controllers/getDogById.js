const axios = require("axios");

const getDogById = async (id) => {
  const { data } = await axios(`https://api.thedogapi.com/v1/breeds/${id}`);
  return data;
};

module.exports = getDogById;
