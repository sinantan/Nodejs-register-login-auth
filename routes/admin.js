const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const userModel=require('../models/user');

router.use(bodyParser.urlencoded({ extended: true }));


router.get('/',(req,res,error)=>{
        
        userModel.find((err,results)=>{
        res.render('adminpage',{kullanicilar:results});
    });
});


router.get('/deleteUser/:userName',(req,res,error)=>{

    userModel.findOneAndRemove({nickname:req.params.userName},(err)=>{
        if(err){
            console.log('Remove failed.');
        }
        res.redirect('/admin');
    });

});


module.exports=router;