/**  .env => un fichier de configuration, c'est là où on précis l'url 
 * **   pour se connecter à la BD en indiquant le nom de la BD **/
// Pour charger les données qui sont stockées dans .env on doit installer le package dotenv
const express= require("express") // Importer express
const app= express() // Va représenter notre application express
const mongoose= require("mongoose") //On importe le package mongoose 
const router= require("./routes/productRoutes")
const cors=require("cors")

app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use(router) // app.use("/",router) 

require("dotenv").config() // On va importer le package dotenv et la méthode config va charger l'url depuis le fichier .env et le stocker dans un objet qui s'appelle process 

mongoose.connect(process.env.MONGO_URL) // permet de se connecter à la base de données 
    .then(result=>console.log("connexion bien établi"))
    .catch(error=>console.log("la connexion est échoué"))



app.get("/",(req,res)=>{
   res.send("<h2> Bienvenue dans notre application Express </h2>")
})
  
//app.listen(4000,()=>console.log("Server is running"))
app.listen(process.env.PORT,()=>{
   console.log("Server is running")
})