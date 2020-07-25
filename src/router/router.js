var router = require("express").Router()
var modelo = require("../model/schemas/fotos")()
var global;
router.get("/",function(req,res){
 
  var  titulo = req.query.titulo
  global = req.url
 
  modelo.find({titulo},function(err,data){
    if(err){

    }else{
      if(data==""){
        modelo.find({},function(err,datos){
          res.render("../src/view/index.ejs",{
            titulo:"CARGA DE IMAGENES",
            imagenes:datos,
            url:global
          })
        })
      }else{
        res.render("../src/view/index.ejs",{
          titulo:"CARGA DE IMAGENES",
          imagenes:data,
        })
      } 
    }
    

  })

})

router.get("/subir",function(req,res){
  res.render("../src/view/insertar.ejs",{
    url:global
  })
})
router.post("/subir",function(req,res,next){
  modelo.create({
    path:"img/"+req.file.filename,
    titulo:req.body.titulo,
    Descripcion:req.body.area

},function(err,dato){
    if(err){
      console.log(err)
    }else{
      console.log(req.body)
      res.redirect(global)

    }
  })

})
router.get("/imagen/:id",(req,res)=>{
var id =  req.params.id;
modelo.findById(id,function(err,dato){
  if(err){
    console.log(err)
  }else{
    res.render("../src/view/imagen.ejs",{
      dato:dato,
      url:global
    })
  }
}) 
})
router.get("/delete/:id",function(req,res){
  var id = req.params.id
modelo.findById(id,function(err,dato){
if(err){
  console.log(err)
}else{
  modelo.remove(dato,function(err,dato){
   if(err){
   }else{
    res.redirect(global)
   } 
  })
  
}

})

})
router.get("/white",(req,res)=>{
  var  titulo = req.query.titulo
  global = req.url
  modelo.find({titulo},function(err,data){
    if(err){

    }else{
      if(data==""){
        modelo.find({},function(err,datos){
          res.render("../src/view/versionWhite.ejs",{
            titulo:"CARGA DE IMAGENES",
            imagenes:datos,
            url: req.url
          })
        })
      }else{
        res.render("../src/view/versionWhite.ejs",{
          titulo:"CARGA DE IMAGENES",
          imagenes:data,
          url:req.url
        })
      } 
    }
    

  })
})

module.exports = router