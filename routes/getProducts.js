const express = require('express')

const router = express.Router();

const { getAllFunc, getSpecFunc } = require('../controllers/getProducts')

router.route("/getAll").get(getAllFunc)
router.route("/getSpec").get(getSpecFunc)

module.exports = router