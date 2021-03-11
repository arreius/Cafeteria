const controller ={};
var usuario ={};

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
       usr :usuario,
       data:productos,
        enLinea : true,
       

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
  usuario= resultados[0].idUsuario;
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

controller.carrito = (req, res) => {
  const data= req.body.carrito;
  const dataParseada = JSON.parse(data);
  var idFactura=0;


req.getConnection((err, connection) => {
  connection.query('INSERT INTO `factura` (`idUsuario`,`fechaCompra`) VALUES(?,SYSDATE())', [usuario], (err, factura) => {
  

  })

  connection.query('SELECT last_insert_id() as ID', (err, lastID) => {
  idFactura=lastID[0].ID;
 

  for (let i = 0; i < dataParseada.length; i++) {
  connection.query('INSERT INTO `detalle` (`idDetalle`, `numFactura`, `idProducto`, `cantidad`, `precio`) VALUES (?,? , ?, ?, ?)',[i+1, idFactura, dataParseada[i].id, dataParseada[i].cantidad,dataParseada[i].precio], (err, registro) => {
   console.log(err);
    })
  }
})

})






  res.end("ok");
 
 
  
};







  module.exports=controller;