// Un modèle c'est une classe qui correspond à une table dans la base des données
// le package mongoose va faciliter tous le traitement qui concerne l'accès à mongodb
// la base de données n'est pas local car elle est dans le cloud
const mongoose= require("mongoose") // Importer mongoose
// on va créer un schéma et à partir de ce schéma on va créer le modèle
// le modèle est généré automatiquement par mongoose
const productSchema= new mongoose.Schema(
    {
    name:String,
    description:String,
    price:Number
    }
)

const Product= mongoose.model("Product",productSchema) // le modèle Product va être généré à partir du schéma productSchema
module.exports= Product // On exporte le modèle pour l'utiliser dans le controlleur