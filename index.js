const express  = require("express");
const path = require("path");
const app = express();
const router = require("./router/web");
const bodyParser = require("body-parser");
var session = require('express-session')
require("./model/connection");
app.set("view engine","hbs");
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(session({
    secret: 'haideraliamjadsecretkey',
    resave: false,
    saveUninitialized: true
}));
app.use(router);
app.listen(3000,function(){
    console.log("Server is listining on 3000")
});
