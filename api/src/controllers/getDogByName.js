const axios = require("axios");
const { Op } = require("sequelize");
const { Dog } = require("../db");
const getAllDogs = require("./getAllDogs");

const getDogByName = async (name) => {
  const allDogs = await getAllDogs();

  const { data } = await axios(
    `https://api.thedogapi.com/v1/breeds/search?q=${name}`
  );

  let result = data.map((dog) => dog.id);

  const dog = await Dog.findOne({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });

  if (dog) result = [...result, dog.id];

  let finalResult = allDogs.filter((dog) =>
    result.includes(dog.id) ? dog : null
  );

  if (finalResult.length === 0)
    throw Error(`La raza '${name}' no existe, puede crearla.`);

  return finalResult;
};

module.exports = getDogByName;
