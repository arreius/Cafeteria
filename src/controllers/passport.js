const passport=require("passport");
const LocalStrategy =require("passport-local").Strategy;

passport.use("local.singup", new LocalStrategy({
usernameField: "nombreUsuario",
passwordField: "contraseña",

passReqToCallback:true


},async(req,nombreUsuario,contraseña,done)=>{

console.log(req.body);

}));

passport.serializeUser((user,done)=>{});