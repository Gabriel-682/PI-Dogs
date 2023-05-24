const { postDog } = require("../controllers/index");

const postDogHandler = async (req, res) => {
  try {
    const { image, name, height, weight, life_span, temperaments } = req.body;
    const newDog = await postDog({
      image,
      name,
      height,
      weight,
      life_span,
      temperaments,
    });
    res.status(200).json(newDog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postDogHandler;
