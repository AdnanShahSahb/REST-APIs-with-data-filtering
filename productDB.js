require('dotenv').config();

const connectdb = require("./db/connect")

const prodModel = require('./model/productSchema')

const prodData = require('./products.json')

const start = async () => {
    try {
        await connectdb(`${process.env.MONGODB_URL}`)
        // await prodModel.deleteMany()
        await prodModel.create(prodData)
        console.log('successfully added in db');
    } catch (error) {
        console.log(error);
    }
}

start();