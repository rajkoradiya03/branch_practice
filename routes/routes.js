const express = require("express");
const router = express.Router();

router.get('/posts', (req,res)=>{
    res.render('home');
})

router.get('/post-details/:id', (req,res)=>{
    res.render('details');
})

module.exports = router;