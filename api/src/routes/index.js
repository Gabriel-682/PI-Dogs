const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllDogsHandler = require("../handlers/getAllDogsHandler");
const getDogByIdHandler = require("../handlers/getDogByIdHandler");
const getDogByNameHandler = require("../handlers/getDogByNameHandler");
const postDogHandler = require("../handlers/postDogHandler");
const getTemperamentsHandler = require("../handlers/getTemperamentsHandler");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.get("/dogs", (req, res) => {
//   res.status(200).json("Estás en dogs");
// });
router.get("/dogs", getAllDogsHandler);
router.get("/dogs/:idRaza", getDogByIdHandler);
router.get("/dogs/name", getDogByNameHandler);
router.post("/dogs", postDogHandler);
router.get("/temperaments", getTemperamentsHandler);

module.exports = router;
