const productControllers = {
    detailProduct:(req,res)=>{
        const televisor = {
            marca:"Samsung",
            precio:150000,
            pulgadas:32
        }

        const celular = {
            marca:"Samsung",
            precio:110000,
            pulgadas:8
        }

        const eleccion = req.params.id
        if (eleccion == 1) {
            res.send(celular);
        }else{
            res.send(televisor);
        }
    }
}

module.exports = productControllers;