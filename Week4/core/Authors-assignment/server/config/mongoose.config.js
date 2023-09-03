const mongoose = require('mongoose');
const db = process.env.DB 

mongoose.connect("mongodb://127.0.0.1:27017/", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log(`Established a connection to ${db}`))
    .catch(err => console.log('something went wrong when connection  to the database',err))