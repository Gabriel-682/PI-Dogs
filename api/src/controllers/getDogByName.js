const axios = require("axios");
const { Dog } = require("../db");
const { Temperament } = require("../db");

const getDogByName = async (name, isApi) => {
  if (isApi === "api") {
    const { data } = await axios(
      `https://api.thedogapi.com/v1/breeds/search?q=${name}`
    );
    return data;
  }
  if (isApi === "db") {
    const dog = await Dog.findOne({
      where: { name },
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    if (!dog) throw Error(`La raza ${name} no existe, puede crearla.`);

    return dog;
  }
  throw Error("Debe indicar si la consulta es para DB o API.");
};

module.exports = getDogByName;
