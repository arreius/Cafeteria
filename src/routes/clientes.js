const express=require("express");
const router= express.Router();

const controladorCliente=require("../controllers/controladorClientes")
router.get("/", controladorCliente.iniciar);

router.get('/horario', function(req, res, next) {
  res.render('horario');
});

router.get('/registro', function(req, res, next) {
  res.render('registro');
});
router.get('/index', function(req, res, next) {
  res.render('index');
});

router.get("/menu", controladorCliente.crearMenu);
router.post("/add", controladorCliente.save);

module.exports=router;