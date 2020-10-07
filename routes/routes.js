const express = require('express');
const router = express.Router();
let getArticles = require('../http').getArticles;

router.get('/', async (req,res)=>{
    console.log("test");
    try {
        const articles = await getArticles();
        // console.log(articles);
        res.render('pages/index', {
            timestamp: "fdsa",
            arts: articles.arts
        });  
    } catch (error) {
     console.log("err", error);   
    }
})
router.get('/results', async (req,res)=>{
    try {
        res.render('pages/results');  
    } catch (error) {
     console.log("err", error);   
    }
})

router.get('/article/:articleId', async (req, res)=>{
    try {
        const articles = await getArticles();
        const getArticle = articles.arts.find((art)=> art.id == req.params.articleId)
        //console.log(getArticle);
        res.render('pages/article', {
             art: getArticle,
            arts: articles.arts
        });  
        // res.render('pages/article', {
        //     art: getArticle[0]
        // });  
    } catch (error) {
     console.log("err", error);   
    }
})

module.exports = router;