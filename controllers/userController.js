const conn = require("../model/connection");
class userController 
{
    static  index(req,res)
    {
        res.render("index",{
            message : false
        });
    }
    static login(req,res)
    {
        let email = req.body.email
        let password = req.body.password
        let qry = `SELECT * FROM users WHERE email='${email}' AND password=${password}`;
        conn.query(qry,function(err,result){            
            if(result.length == 1){
                req.session.login = true; 
                res.redirect("/private");
            }else 
            {
                res.render("index",{
                    message : true
                });
            }
        })
    }
    static createAccount(req,res)
    {
        let email = req.body.email;
        let password = req.body.password;
        let sql = `INSERT INTO users (email,password) VALUES ('${email}','${password}')`;
        conn.query(sql,function(err,result){
            console.log(err);
        })
        res.render("regester",{
            message : true
        });
    }
    static viewCreateAccount(req,res)
    {
        res.render("regester",{
            message : false
        });
    }
    static private(req,res)
    {
        res.render("private");
    }
    static logout(req,res)
    {
        req.session.destroy(function(){
            res.redirect("/");
        });
    }
}
module.exports = userController;
