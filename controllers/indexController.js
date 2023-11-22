const path = require('path');

const indexControllers = {
    index: (req,res)=> res.sendFile(path.join(__dirname, '../', 'views','home.html'))
}

module.exports = indexControllers