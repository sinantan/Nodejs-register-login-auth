var express = require('express');
var router = express.Router();


router.get('/',(req,res,error)=>{
    res.render('index');
});

router.get('/user/:username',(req,res,error)=>{
    res.render('index',{name:req.params.username});
});
module.exports=router;