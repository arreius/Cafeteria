const express=require("express");
const path=require("path");
const app=express();
const morgan=require("morgan");
const mysql=require("mysql");
const myConnection=require("express-myconnection");
const bodyParser = require('body-parser')
//importando rutas
const rutasClientes=require("./routes/clientes");
const { urlencoded } = require("express");
//settings
app.set("port",process.env.PORT||3000);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
//middlewares
app.use(morgan("dev"));
app.use(myConnection(mysql, {
  host:"localhost",
  user:"luis",
  password:"luis",
  port: 3306,
  database:"cafeteriamarron",

}, "single"));
app.use(express.urlencoded({extended:true}))


//routes
app.use("/", rutasClientes);

//archivos estaticos 
app.use(express.static(path.join(__dirname,"public")));


//empezar servidor

app.listen(app.get("port"),()=>{

console.log("server on port 3000");

})