const { Dog } = require("../db");

const postDog = async ({
  image,
  name,
  height,
  weight,
  life_span,
  temperaments,
}) => {
  newDog = await Dog.create({
    image,
    name,
    height,
    weight,
    life_span,
  });

  newDog.addTemperaments(temperaments);
  
  return newDog;
};

module.exports = postDog;
