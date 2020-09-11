const express = require('express')
const router = express.Router()
const privateController = require('./../controllers/privateController')

router.post('/', privateController.getInfoService)

module.exports = router
