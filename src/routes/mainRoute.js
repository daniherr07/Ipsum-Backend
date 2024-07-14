const express = require('express')
const router = express.Router()
const mainController = require('../controller/mainController')
const cors  = require('cors')


router.get('/', cors(), mainController.getInfo)
router.post('/', cors(), mainController.saveInfo)



module.exports = router;