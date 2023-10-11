const express = require('express')
const controller = require('../controller/controller')
const router = express.Router()

router.get('/QAs', controller.findAllQA)

module.exports = router;