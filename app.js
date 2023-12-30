var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');
require ('dotenv').config();
 const mongoose = require ('mongoose')
var indexRouter = require('./routes/index');
mongoose.set('strictQuery', true)
const passport = require('passport')
var cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*passport */
app.use(passport.initialize())
require ('./security/passport')(passport);

app.listen(port,()=>{
    console.log(`http//localhost:${port}`)
})

app.use('/api', indexRouter);
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("connected to db"))
.catch(err=>console.log(err.message))

module.exports = app;