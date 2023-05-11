const { getDogById } = require("../controllers/index");

const getDogByIdHandler = async (req, res) => {
  try {
    const { idRaza, isApi } = req.params;
    const dog = await getDogById(idRaza, isApi);
    res.status(200).json(dog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getDogByIdHandler;
