const { postDog } = require("../controllers/index");

const postDogHandler = async (req, res) => {
  try {
    const { reference_image_id, name, height, weight, life_span } = req.body;
    const newDog = await postDog({
      reference_image_id,
      name,
      height,
      weight,
      life_span,
    });
    res.status(200).json(newDog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postDogHandler;
