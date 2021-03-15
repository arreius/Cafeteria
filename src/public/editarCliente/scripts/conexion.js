const mysql= require("mysql");


  const conection=mysql.createConnection({
hots:"localhost",
user:"luis",
password:"luis",
database:"cafeteriamarron",

})


  conection.connect((err)=>{
    if(err) throw err
 console.log("uwu")
   })

module.exports={conection};