const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//models
const userModel=require('../models/user');


router.use(bodyParser.urlencoded({ extended: true }));

router.get('/',(req,res,error)=>{
    res.render('login');
});

router.post('/',(req,res,next)=>{
    userModel.find((err,results)=>{
        var isLogin=false;
        for (let i = 0; i < results.length; i++){
            if (results[i].nickname==req.body.nickname && results[i].password==req.body.password){
                console.log('Successfully login.');
                res.redirect('/user/'+req.body.nickname);
                isLogin=true;
            }
        }
        if(isLogin==false){ 
            console.log('login failed.');
            res.render('login',{alert:'try again'});
        }
  }); 
});
 module.exports=router;