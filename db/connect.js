const mongoose = require('mongoose')


const connectToDb = (uri) => {
    console.log('connected to db');
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectToDb;