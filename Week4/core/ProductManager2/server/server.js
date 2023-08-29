const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json(),express.urlencoded({ extended:true }))
require("dotenv").config()
const port = process.env.PORT 
require("./config/mongoose.config")
require('./routes/product.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}🎈🎈🎈🎈`) );
