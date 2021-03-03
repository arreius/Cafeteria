const controller ={};

controller.iniciar=controller.list = (req, res) => {
 res.render("index");
};

controller.crearMenu=controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM producto', (err, productos) => {
     if (err) {
      res.json(err);
     }
     res.render('menu', {
        data: productos
     });
    });
  });
};

controller.guardarUsuarios = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    connection.query('INSERT INTO `usuarios` (`nombrePersonal`, `nombreUsuario`, `contraseña`, `direccion`, `tipoUsuario`, `telefono`, `email`) VALUES(?, ?, ?,?,?,?,?)', [data.nombrePersonal,data.nombreUsuario,data.contraseña,data.direccion,data.tipo,data.telefono,data.email], (err, customer) => {
      
      res.redirect('/');
    })
  })
};

controller.guardarContacto = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    connection.query('INSERT INTO `contacto` (`nombreContacto`,`numeroContacto`, `mailContacto`, `mensajeContacto`, `contactado`) VALUES(?,?, ?, ?,?)', [data.nombre,data.telefono,data.mail,data.mensaje,0], (err, customer) => {
      
      res.redirect('/');
    })
  })
};


  module.exports=controller;