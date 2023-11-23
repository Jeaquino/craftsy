const path = require('path');
const fs = require('fs');

const userController = {
    login:(req,res) => {res.sendFile(path.join(__dirname, '../' , 'views','login.html'))},
    
    logeo:(req,res)=> {
        console.log(req.body);
        res.redirect("/")
    },
    register:(req,res)=> res.sendFile(path.join(__dirname, '../','views','registro.html')),
    
    createUser:(req,res)=> {
        console.log(req.body);
        const dir = path.join(__dirname, '../','data','users.json')
        let products = JSON.parse(fs.readFileSync(dir,'utf-8'));
        console.log(products);
        products.push(req.body);
        let nuevoArray = JSON.stringify(products);
        console.log("nuevoArray:",nuevoArray);
        fs.writeFileSync(dir,nuevoArray,"utf-8");
        res.redirect("/")
    },
    saludo:(req,res)=>{
        res.send("Hola")
    }
}

module.exports = userController;