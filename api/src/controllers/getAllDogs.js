const { Dog } = require("../db");
const { Temperament } = require("../db");
const axios = require("axios");

const getAllDogs = async () => {
  const { data } = await axios.get("https://api.thedogapi.com/v1/breeds");
  const dogs = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const dataFixed = await data.map((dog) => {
    dog.weight = dog.weight.metric;
    dog.height = dog.height.metric;
    dog.image = dog.image.url;
    const temperamentsArray = dog.temperament?.split(", ").sort();
    dog.Temperaments = temperamentsArray?.map((temp) => {
      return { name: temp };
    });
    return dog;
  });

  const result = [...dogs, ...dataFixed];
  return result;
};

module.exports = getAllDogs;
