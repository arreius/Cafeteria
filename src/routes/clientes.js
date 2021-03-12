const express=require("express");
const router= express.Router();

const controladorCliente=require("../controllers/controladorClientes")
router.get("/", controladorCliente.iniciar);


router.get('/registro', function(req, res, next) {
  res.render('registro');
});
router.get('/index', controladorCliente.index);
router.get('/horario', controladorCliente.horario);

router.get("/logout", controladorCliente.logout);

router.get("/menu", controladorCliente.crearMenu);
router.post("/addUsuario", controladorCliente.guardarUsuarios);
router.post("/addContacto", controladorCliente.guardarContacto);
router.post("/login", controladorCliente.login);
router.post("/carrito",controladorCliente.carrito);

module.exports=router;