require('dotenv').config();

const express = require('express')

const app = express();

const connectToDb = require('./db/connect')

const PORT = process.env.PORT || 8080

const product_routers = require("./routes/getProducts")

app.get('/', (req, res) => {

    res.send('good, you are at home route')

})

app.use("/", product_routers)

const start = async () => {
    try {
        await app.listen(PORT, () => {
            console.log(PORT, " server created successfully ");
        })
        await connectToDb(process.env.MONGODB_URL);
    }
    catch (err) {
        console.log(err);
    }
}

start();
