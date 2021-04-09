const express = require("express");
const router = express.Router();

const controladorCliente = require("../controllers/controladorClientes");
router.get("/", controladorCliente.iniciar);

router.get("/registro", function (req, res, next) {
  res.render("registro");
});
router.get("/index", controladorCliente.index);
router.get("/horario", controladorCliente.horario);

router.get("/logout", controladorCliente.logout);

router.get("/menu", controladorCliente.crearMenu);
router.post("/addUsuario", controladorCliente.guardarUsuarios);
router.post("/addCliente", controladorCliente.guardarCliente);
router.post("/addPlatillo", controladorCliente.guardarPlatillo);
router.post("/addContacto", controladorCliente.guardarContacto);
router.post("/login", controladorCliente.login);
router.post("/carrito", controladorCliente.carrito);

router.get("/manejoUsuarios", controladorCliente.manejoUsuarios);
router.get("/manejoProductos", controladorCliente.manejoProductos);
router.get("/manejoPendientes", controladorCliente.manejoPendientes);
router.get("/facturas", controladorCliente.listarFacturas);
router.get("/verFactura/:id", controladorCliente.verFactura);
router.get("/editarCliente/:id", controladorCliente.editarCliente);
router.get("/editarPlatillo/:id", controladorCliente.editarPlatillo);
router.get("/deleteUsuario/:id", controladorCliente.deleteUsuario);
router.get("/deleteProducto/:id", controladorCliente.deleteProducto);
router.post("/editCliente/:id", controladorCliente.updateUsuario);
router.post("/editPlatillo/:id", controladorCliente.updateProducto);

router.get("/updatePendiente/:id", controladorCliente.updatePendiente);

module.exports = router;
