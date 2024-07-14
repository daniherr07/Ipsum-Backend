const express = require('express')
const router = express.Router()
const mainController = require('../controller/mainController')


router.get('/', mainController.getInfo)
router.post('/', mainController.saveInfo)



module.exports = router;