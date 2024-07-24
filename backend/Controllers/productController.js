// un controlleur c'est une fonction qui recoit une requette et il fait le traitement, il prend en paramètre response et request
// Pour s'intéragir avec la base de données mongodb, on doit installer le package mongoose

const prodService=require("../Services/productService") // On importe le service
const product = require("../Models/Product") // On importe le modèle 

const getAllProducts=async(req,res)=>{
    try{
        const result= await prodService.getProducts() // On fait appel à la fonction getProducts qui va récupérer tous les produits à travers la méthode find
         // avant de passer à l'instruction suivante on attend la récupération de resultat 
        res.status(200).json(result) // result va contenir le résultat récupéré, le résultat va être envoyer sous format json
    }
   catch(error){
         res.status(500).json(error) // code 500-> une erreur à l'intérieur du serveur
    }
}

const getProductById=async (req,res)=>{
    try{
        const result= await prodService.getProductById(req.params.id); // Récupérer un produit à partir d'id passé en paramètres d'url
        res.status(200).json(result)
    }
    catch(error){
        res.status(500).json(error)
    }
}

const addProduct=async (req,res)=>{
    try{
        const result= await prodService.addProduct(req.body) // on récupère les données d'un produit à ajouter depuis le corp de la req body 
        res.status(200).json(result) // on envoit une réponse à la partie frontend le client 
    }catch(error){
        res.status(500).json(error)
    }
}

const deleteProduct=async (req,res)=>{
    try{
        const result= await prodService.deleteProduct(req.params.id) // supprimer un produit en indiquant son id qui est passé en paramètre de l'url, la méthode deleteOne cherche le champ qui a la valeur _id puis il le supprime
        res.status(200).json(result)
    }catch(error){
        res.status(500).json(error)
    }
}

// On exporte les méthodes pour qu'on peut les utilisées dans les routes
module.exports={
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct
} 
// status 201=> la création a passé avec succès