const express = require("express");
const CategoryService = require("../services/category.service");
const router = express.Router();
const service = new CategoryService();
router.get("/", (req, res)=>{
    const rta = service.getAll();
    res.json({
        message: rta
    }).status(200)
})
module.exports =router;