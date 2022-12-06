require('dotenv').config()
const express = require('express');
const routerApi = require('./routes')
// const cors = require('cors')
// const  { logErrors,boomErrorHandler } = require('./middlewares/error.handler');
const app = express();
const port = process.env.PORT_SERV;
const bodyParser = require('body-parser')

// app.use(cors())
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
routerApi(app);
// app.use(boomErrorHandler)
// app.use(logErrors);>
app.listen(port,()=>{
    console.log(`Escuchando en el puerto ${port}`)
})