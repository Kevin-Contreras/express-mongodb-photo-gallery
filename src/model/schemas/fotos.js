module.exports = function (){
  var Schema = require("mongoose").Schema;
  var db = require("../connect")();
  var schema = Schema({
    titulo:String,
    Descripcion:String,
    path:String
  })
  var estructura = db.model("fotos",schema);
  return estructura;
}
