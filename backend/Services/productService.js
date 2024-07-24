/** Si la couche service a besoin des données on fait appel au modèle  */

const Product= require("../Models/Product") // On importe le modèle 

const getProducts=async()=>{
       return await Product.find();  // les produits récupérés par la méthode find vont être retourner vers la couche Controller
}

const getProductById=async(id)=>{ 
    return await Product.findOne({_id:id}); // await -> tant qu'il n'est pas un résultat, on attend
}

const addProduct=async(product)=>{
    return await Product.create(product);
}

const deleteProduct=async(id)=>{
    return await Product.findByIdAndDelete({_id:id}); 
}
module.exports={
    getProducts,
    getProductById,
    addProduct,
    deleteProduct
}

// find c'est une méthode asynchrone , await travaille juste à l'interieur des fct async-> on attend jusque la fct termine le traitement