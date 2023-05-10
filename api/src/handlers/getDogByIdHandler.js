const { getDogById } = require("../controllers/index");

const getDogByIdHandler = async (req, res) => {
  try {
    const { idRaza } = req.params;
    console.log(idRaza);
    const dog = await getDogById(idRaza);
    res.status(200).json(dog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getDogByIdHandler;
