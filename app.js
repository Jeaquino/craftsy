const express = require('express');
const path = require ('path');
const bodyParser = require('body-parser')

const app = express()
const PORT = 3030;

app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRouter = require("./routes/indexRouter.js");
const productsRouter = require("./routes/productsRouter.js");
const usersRouter = require("./routes/usersRouter.js");

app.use("/",indexRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);


app.listen(PORT,() => console.log(`server running http://localhost:${PORT}`));