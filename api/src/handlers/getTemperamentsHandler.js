const { getTemperaments } = require("../controllers/index");

const getTemperamentsHandler = async (req, res) => {
  try {
    const dogs = await getTemperaments();
    res.status(200).json(dogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getTemperamentsHandler;
