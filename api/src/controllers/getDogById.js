const axios = require("axios");
const { Dog } = require("../db");
const { Temperament } = require("../db");

const getDogById = async (id, isApi) => {
  if (isApi === "api") {
    const { data } = await axios(`https://api.thedogapi.com/v1/breeds/${id}`);
    return data;
  }
  if (isApi === "db") {
    const dog = await Dog.findByPk(id, {
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    if (!dog) throw Error("El ID no existe, ingrese otro.");
    return dog;
  }
  throw Error("Debe indicar si la consulta es para DB o API.");
};

module.exports = getDogById;
