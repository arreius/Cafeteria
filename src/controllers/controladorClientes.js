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

controller.save=(req,res)=>{
console.log(req.body);
res.send("works");
};


  module.exports=controller;