const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//models
const userModel=require('../models/user');


router.use(bodyParser.urlencoded({ extended: true }));

router.get('/',(req,res,error)=>{
    res.render('register');
});

router.post('/',(req,res)=>{
    
    let newUser=new userModel({
        nickname:req.body.nickname,
        email:req.body.email,
        password:req.body.password
    });
    newUser.save((err,data)=>{  
        if(err){
            console.log(err);
        }
        else{
            console.log('User added.');
        }
    });
    setTimeout(() => {  //1 sn sonra login ekranına yönlendirme
        res.redirect('/login');   
    }, 1000);
    
});

module.exports=router;
