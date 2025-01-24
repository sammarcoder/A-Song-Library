// const express = require("express");
// const app = express();

// const PORT = process.env.PORT || 8082;

// const funn = require("../src/controllers/api");

// app
//   .get("/", (req, res) => {
//     res.send({
//         isRuning : true
//     })
//   })
//   .listen(PORT, () => {
//     console.log(`app is runing on http://localhost:${PORT}`);
//   });


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const config = require('./config/config');
const {sequelize} = require('./models');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

console.log(config)

require('./routes')(app);
require('dotenv').config()
sequelize.sync(({force:false}))
.then(()=>{
    app.listen(config.port,()=>{
        console.log(`app runing on http://localhost:${config.port}`)
    })
})
