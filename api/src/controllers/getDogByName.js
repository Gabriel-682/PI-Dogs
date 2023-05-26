const axios = require("axios");
const { Op } = require("sequelize");
const { Dog } = require("../db");
const { Temperament } = require("../db");

const getDogByName = async (name) => {
  let result = [];

  const { data } = await axios(
    `https://api.thedogapi.com/v1/breeds/search?q=${name}`
  );

  result = data.map((dog) => dog.id);

  const dog = await Dog.findOne({
    where: { name: { [Op.iLike]: `%${name}%` } },
    // include: {
    //   model: Temperament,
    //   attributes: ["name"],
    //   through: {
    //     attributes: [],
    //   },
    // },
  });

  if (dog) result = [...result, dog.id];

  if (result.length === 0)
    throw Error(`La raza '${name}' no existe, puede crearla.`);

  return result;
};

module.exports = getDogByName;
