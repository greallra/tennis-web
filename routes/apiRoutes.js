const express = require('express');
const router = express.Router();
let getProfile = require('../http').getProfile;

router.get('/api/profile/:id', async (req,res)=>{
    try {
        const profile = await getProfile(req.params.id);
        res.send({error: false, data: profile})
    } catch (error) {
        console.log("err", error); 
        res.send({error: true})
      
    }
})

module.exports = router;