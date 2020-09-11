const express = require('express')
const router = express.Router()
const indexController = require('./../controllers/indexController')

router.post('/', indexController.getInfo)

module.exports = router
