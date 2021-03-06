const controller ={};

controller.iniciar=controller.list = (req, res) => {

 res.render("index");
};


controller.index=(req, res) => {
 
     res.render('index', {
   
        enLinea : true,
        usaurio: req.session.usuario

     });
  
 
};
controller.horario=(req, res) => {
 
  res.render('horario', {

     enLinea : true,
     usaurio: req.session.usuario

  });


};

controller.crearMenu=controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM producto', (err, productos) => {
     if (err) {
      res.json(err);
     }
     res.render('menu', {
       data:productos,
        enLinea : true,
        usaurio: req.session.usuario

     });
    });
  });
};

controller.guardarUsuarios = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    connection.query('INSERT INTO `usuarios` (`nombrePersonal`, `nombreUsuario`, `contraseña`, `direccion`, `tipoUsuario`, `telefono`, `email`) VALUES(?, ?, ?,?,?,?,?)', [data.nombrePersonal,data.nombreUsuario,data.contraseña,data.direccion,data.tipo,data.telefono,data.email], (err, customer) => {
      
 res.render("index",
 
 {registrado : "Registrado de manera adecuada, ahora puede ingresar!"

});
    })
  })
};

controller.guardarContacto = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    connection.query('INSERT INTO `contacto` (`nombreContacto`,`numeroContacto`, `mailContacto`, `mensajeContacto`, `contactado`) VALUES(?,?, ?, ?,?)', [data.nombre,data.telefono,data.mail,data.mensaje,0], (err, customer) => {
      
      res.render("index",
 
 {contactado : "Registrado de manera adecuada, ahora puede ingresar!",

        enLinea : true,
        usaurio: req.session.usuario

});
    })
  })
};


controller.logout = (req, res) => {

  req.session.destroy(function(err){
    if(err){
        console.log(err);
        res.send("Error")
    }else{
        res.render('index', { 
          enLinea :false
        })
    }
})
};

controller.login = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    connection.query('SELECT * FROM  `usuarios` WHERE email=? and contraseña=?', [data.mail,data.password], async(err, resultados) => {
if(resultados.length>0){
  req.session.loggedin = true;
  req.session.usuario = resultados;
   res.render("index",{
     idUsuario: resultados[0].idUsuario,
     enLinea : true,
     usaurio: req.session.usuario
   });
 

}else{

  console.log("nulo")
  res.redirect('/');
}
    
      
    })
  })
};

  module.exports=controller;