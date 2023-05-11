const { getDogByName } = require("../controllers/index");

const getDogByNameHandler = async (req, res) => {
  try {
    const { name, isApi } = req.query;
    const dog = await getDogByName(name, isApi);
    res.status(200).json(dog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getDogByNameHandler;
