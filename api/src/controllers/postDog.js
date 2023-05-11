const { Dog } = require("../db");

const postDog = async ({
  reference_image_id,
  name,
  height,
  weight,
  life_span,
  temperaments,
}) => {
  newDog = await Dog.create({
    reference_image_id,
    name,
    height,
    weight,
    life_span,
  });

  newDog.addTemperaments(temperaments);
  
  return newDog;
};

module.exports = postDog;
