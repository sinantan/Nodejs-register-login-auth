/**
 - nickname
 - email
 - password
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true); //required ve unique özelliğinden dolayı warning verdiği için bunu koydum. Koymasamda kod çalışır.

 let userSchema = new Schema({
    nickname: { type:String, required:true, unique:true},
    email: { type:String, required:true},
    password:{ type:String, required:true}
 });


 let userModel=mongoose.model('userModel',userSchema);
 module.exports=userModel;
