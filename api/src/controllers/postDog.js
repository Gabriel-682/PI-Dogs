const { Dog } = require("../db");

const postDog = async ({
  reference_image_id,
  name,
  height,
  weight,
  life_span,
}) => {
  newDog = await Dog.create({
    reference_image_id,
    name,
    height,
    weight,
    life_span,
  });
  return newDog;
};

module.exports = postDog;
