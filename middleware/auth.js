function auth(req,res,next){
    console.log(req.session.login);
    if(req.session.login){
        next();
    }
    else 
    {
        res.redirect("/")
    }
}
module.exports = auth