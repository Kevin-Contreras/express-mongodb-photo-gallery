var express = require("express");
var router = require("./src/router/router");
const path = require('path');
var app = express();
var bodyParser = require("body-parser");
app.set("port",3000)
var  multer   = require ('multer') 
app.set("view engiener","ejs");
app.listen(app.get("port"),function(){
  console.log("el servidor funciona en el puerto:"+ app.get("port"))
})

var storage = multer.diskStorage({

  destination: __dirname+"/public/img",
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+".jpg")
  }
})

app.use(multer({storage}).single("envio"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)
app.use(express.static(path.join(__dirname,"public")))