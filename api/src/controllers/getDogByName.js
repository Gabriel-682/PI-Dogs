const axios = require("axios");

const getDogByName = async (name) => {
    const dog = await axios(`http://localhost:3001/dogs/name?name=${name}`)
  return "Hola";
};

module.exports = getDogByName;
