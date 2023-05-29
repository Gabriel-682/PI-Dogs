const axios = require("axios");
const { Dog } = require("../db");
const { Temperament } = require("../db");

const getDogById = async (idRaza) => {
  const { data } = await axios("https://api.thedogapi.com/v1/breeds");
  const filterId = data.filter((dog) => dog.id === Number(idRaza));

  const dataFixed = filterId.map((dog) => {
    dog.weight = dog.weight.metric;
    dog.height = dog.height.metric;
    dog.image = dog.image.url;
    const temperamentsArray = dog.temperament?.split(", ").sort();
    dog.Temperaments = temperamentsArray?.map((temp) => {
      return { name: temp };
    });
    return dog;
  });

  let result = dataFixed[0];

  if (idRaza.length === 36 && !result) {
    result = await Dog.findByPk(idRaza, {
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
  }

  if (result) {
    return result;
  } else {
    throw Error(`El id ${idRaza} no existe`);
  }
};

module.exports = getDogById;
