const express = require("express");
const CategoryService = require("../services/category.service");
const router = express.Router();
const service = new CategoryService();
router.get("/products",async (req, res)=>{
    const {country, category} = req.query;
    console.log(country,category)
    // const country = 'MCO';//colombia
    // const category = 'MCO1051';//categorias
    const rta = await service.getProductsByCategory(category,country);
    res.json(rta).status(200)
})
router.get("/",async (req, res,next)=>{
    try{
        const {country} = req.query
        
        const rta = await service.allCategories(country)
        res.json(rta).status(200)
    }catch(err){
        next(err)
    }
})

module.exports =router;