const express = require("express");
const MarkService = require("../services/mark.service");
const router = express.Router();
const service = new MarkService();
router.get("/",async (req, res, next)=>{
    try{
        const {country, category} = req.query
        // const country = 'MCO';//colombia
        // const category = 'MCO1051';//categorias
        const rta = await service.totalMarks(country, category);
        
        res.json(rta).status(200)
    }catch(err){
        next(err)
    }
})
module.exports =router;