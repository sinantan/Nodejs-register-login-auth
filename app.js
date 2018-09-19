const express = require('express');
const app = express();
const pug = require('pug');
const mongoose=require('mongoose');

//routes
let indexRouter = require('./routes/index');
let registerRouter = require('./routes/register');
let loginRouter = require('./routes/login');
let adminRouter = require('./routes/admin');


//db connect
mongoose.connect('mongodb://localhost/loginsystem', { useNewUrlParser: true });
mongoose.connection.on('open',()=>{
  console.log('connected to mongodb');
});

//view engine
app.set('view engine','pug');


app.use('/',indexRouter);
app.use('/register',registerRouter);
app.use('/login',loginRouter);
app.use('/admin',adminRouter);


app.listen(3000,()=>{
    console.log('express server is running..');
});

module.exports=app;