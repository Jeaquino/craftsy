const path = require('path')
const userController = {
    login:(req,res) => {res.sendFile(path.join(__dirname, '../' , 'views','login.html'))},
    
    logeo:(req,res)=> {
        console.log(req.body);
        res.redirect("/")
    },
    register:(req,res)=> res.sendFile(path.join(__dirname, '../','views','registro.html')),
    
    createUser:(req,res)=> {
        console.log(req.body);
        res.redirect("/")
    }
}

module.exports = userController;