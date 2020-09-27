const express = require('express');
const router = express.Router();
let getArticles = require('../http').getArticles;

router.get('/', async (req,res)=>{
    try {
        const articles = await getArticles();
        res.render('pages/index', {
            timestamp: "fdsa",
            arts: articles.arts
        });  
    } catch (error) {
     console.log("err", error);   
    }
})


module.exports = router;