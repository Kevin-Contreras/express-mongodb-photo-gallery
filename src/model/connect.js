module.exports = function (){
  var db;
  var mongoose = require("mongoose");
  db = mongoose.createConnection("mongodb://localhost/archivos",{ 
    useUnifiedTopology: true,
    useNewUrlParser: true });
  return db;
}

