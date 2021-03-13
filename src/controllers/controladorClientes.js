const controller ={};
var usuario ={};
var tipo ={};
const pdf = require('html-pdf');
const fs = require('fs');
const { sign } = require('crypto');
controller.iniciar=controller.list = (req, res) => {

 res.render("index");
};


controller.index=(req, res) => {
 
     res.render('index', {
   
        enLinea : true,
        usaurio: req.session.usuario,
        tipo:tipo
     });
  
 
};
controller.horario=(req, res) => {
 
  res.render('horario', {

     enLinea : true,
     usaurio: req.session.usuario,
     tipo:tipo
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
        tipo:tipo

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
controller.guardarCliente = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    connection.query('INSERT INTO `usuarios` (`nombrePersonal`, `nombreUsuario`, `contraseña`, `direccion`, `tipoUsuario`, `telefono`, `email`) VALUES(?, ?, ?,?,?,?,?)', [data.nombrePersonal,data.nombreUsuario,data.contraseña,data.direccion,data.tipo,data.telefono,data.email], (err, customer) => {
      
 res.redirect("/manejoUsuarios");
    })
  })
};
controller.guardarPlatillo = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    connection.query('INSERT INTO `producto` (`nombreProducto`, `descripcion`, `precio`, `stock`, `idCategoria`) VALUES(?, ?, ?,?,?)', [data.nombreProducto,data.descripcion,data.precio,data.stock,data.idCategoria], (err, customer) => {
      
 res.redirect("/manejoProductos");
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
  tipo= resultados[0].tipoUsuario;
   res.render("index",{
     idUsuario: resultados[0].idUsuario,
     enLinea : true,
     usaurio: req.session.usuario,
     tipo:tipo

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
  connection.query('INSERT INTO `factura` (`idUsuario`,`fechaCompra`) VALUES(?,SYSDATE())', [usuario]);

  connection.query('SELECT last_insert_id() as ID', (err, lastID) => {
  idFactura=lastID[0].ID;
  crearPDF(dataParseada,usuario,idFactura);
  for (let i = 0; i < dataParseada.length; i++) {
  connection.query('INSERT INTO `detalle` (`idDetalle`, `numFactura`, `idProducto`, `cantidad`, `precio`) VALUES (?,? , ?, ?, ?)',[i+1, idFactura, dataParseada[i].id, dataParseada[i].cantidad,dataParseada[i].precio]);
  }
  
})
res.render("index");

});

  
  
};


function crearPDF(data,user,idFac){
  var tablas="";
  var footer="";
  var costoTotal=0.00;
  var hoy=new Date();
  var fecha= hoy.getDate()+"-"+(hoy.getMonth()+1)+"-"+hoy.getFullYear();
  var hora=hoy.getHours()+":"+hoy.getMinutes()+":"+hoy.getSeconds();
  var fechaHora=fecha+"-"+hora;

  for (let i = 0; i < data.length; i++) {
    var num = data[i].precio*data[i].cantidad;
      num = (Math.round(num * 100) / 100).toFixed(2);
    var fila="<tr><td>"+(i+1)+"</td><td>"+data[i].id+"</td> <td>"+data[i].nombre+"</td><td>"+data[i].cantidad+"</td> <td>Q."+num+"</td> </tr>"


    tablas=tablas+fila;
    costoTotal=costoTotal+(data[i].precio*data[i].cantidad);
    }
    costoTotal=(Math.round(costoTotal * 100) / 100).toFixed(2);

  var content = `

  <h1>   <span class="site-heading-lower"><center>Cafeteria Marron</center></span></h1>
  <h3> <center>Factura No.`+idFac+`</center></h3>
  <h3> <center>ID de Usuario: `+user+`</center></h3>
        <hr>
        <div class="my-5">
          <table class="table" >
            <thead>
              <tr>
              <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody > `
+
 tablas           
+

            `
            </tbody>
            <tfoot>
            <td>Total</td><td></td><td></td><td></td><td> Q.`+costoTotal+`</td>
            </tfoot>
            </table>
            <hr>
            <h3> <center>Fecha: `+fechaHora+`</center></h3>
  `;
var formato={
  "height": '23cm',
  "width": '11cm'
};

  pdf.create(content,formato).toFile("./Factura-No."+idFac+".pdf", function(err, res) {
    if (err){
        console.log(err);
    } else {
      
      siguiente();
      
    }
  });
 
}
function siguiente() {
  
  
}


controller.manejoUsuarios=(req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM usuarios', (err, usuarios) => {
     if (err) {
      res.json(err);
     }
     res.render('manejoUsuarios', {
       usr :usuario,
       data:usuarios,
        enLinea : true,
        tipo:tipo

     });
    });
  });
};
controller.manejoProductos=(req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM producto', (err, productos) => {
     if (err) {
      res.json(err);
     }
     res.render('manejoProductos', {
       usr :usuario,
       data:productos,
        enLinea : true,
        tipo:tipo

     });
    });
  });
};
controller.manejoPendientes=(req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM contacto', (err, pendiente) => {
     if (err) {
      res.json(err);
     }
     res.render('manejoPendientes', {
       usr :usuario,
       data:pendiente,
        enLinea : true,
        tipo:tipo,
       
     });
    });
  });
};





  module.exports=controller;