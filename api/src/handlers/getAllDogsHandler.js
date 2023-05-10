const { getAllDogs } = require("../controllers/index");

const getAllDogsHandler = async (req, res) => {
  try {
    const dogs = await getAllDogs();
    res.status(200).json(dogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllDogsHandler;
