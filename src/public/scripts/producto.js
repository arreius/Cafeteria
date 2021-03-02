const { conection } = require('./conexion');
document.write("LEADSADDDDDDD");

conection.query("SELECT * from producto", (err, rows)=>{
  if(err) throw err
 const producto =rows;
 console.log(producto)

 document.write(producto);


 })
 conection.end()

