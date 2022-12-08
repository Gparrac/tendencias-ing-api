const express = require("express");
const SellerService = require("../services/seller.service");
const router = express.Router();
const service = new SellerService();
router.get("/best-seller",async (req, res,next)=>{
    const {country, category} = req.query;
    // const country = 'MCO';//colombia
    // const category = 'MCO1051';//categorias
    
    try{
        const rta = await service.bestSeller(country, category)
        res.json(rta).status(200)
    }catch(err){
        next(err)
    }
})
router.get("/worst-seller",async (req, res,next)=>{
    const {country, category} = req.query;
    // const country = 'MCO';//colombia
    // const category = 'MCO1051';//categorias
    
    try{
        const rta = await service.worstSeller(country, category)
        res.json(rta).status(200)
    }catch(err){
        next(err)
    }
})
router.get("/sellers-by-location",async (req, res,next)=>{
    const {country, category} = req.query;
    // const country = 'MCO';//colombia
    // const category = 'MCO1051';//categorias
    
    try{
        const rta = await service.groupByLocation(country, category)
        res.json(rta).status(200)
    }catch(err){
        next(err)
    }
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