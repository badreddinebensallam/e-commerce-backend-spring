const express= require("express")
const router=express.Router()
const productController= require("../Controllers/productController")

// On fait le mapping c-a-d associer un controlleur à une route
router.get("/products",productController.getAllProducts) // lorsqu'on recoit une req de type get voilà la fonction qu'elle va répondre à cette req
router.get("/products/:id",productController.getProductById)
router.post("/products",productController.addProduct) // route statique
router.delete("/products/:id",productController.deleteProduct) // c'est une route dynamique avec :id pour dire que c'est un paramètre


module.exports=router