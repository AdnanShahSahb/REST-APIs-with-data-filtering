const prodSchema = require('../model/productSchema')



const getAllFunc = async (req, res) => {

    const { company, name, price, sort, select, page, limit } = req.query;
    let queryObject = {};

    if (company) {
        queryObject.company = { $regex: company, $options: "i" }
    }

    if (name) {
        queryObject.name = { $regex: name, $options: "i" }
    }

    if (price) {
        queryObject.price = price
    }

    let skipData = 0;
    if (page) {
        console.log(page, limit);
        skipData = (Number(page) - 1) * Number(limit)
    }

    let filteredData = prodSchema.find(queryObject).skip(skipData).limit(limit);

    if (sort) {
        // console.log(sort);
        filteredData = filteredData.sort(sort)
    }

    if (select) {
        // let filterSelect = select.replace(",", " ")//it only replaces first comma so we use another method
        let filterSelect = select.split(",").join(" ")
        console.log(filterSelect);
        filteredData = filteredData.select(filterSelect)
    }

    // console.log(queryObject,req.query);
    // console.log(req.query);
    // if (company==undefined && name==undefined) {
    //     // console.log(company,name);
    //     queryObject = req.query
    // }

    const getAllData = await filteredData

    res.status(200).json({ getAllData })
}

const getSpecFunc = (req, res) => {
    res.status(200).json({ msg: 'good get spec 👍🏿' })
}

module.exports = { getAllFunc, getSpecFunc }