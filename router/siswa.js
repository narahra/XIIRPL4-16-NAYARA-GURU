const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/siswa')

router.get('/siswa', usercontroller.index)

router.get('/siswa/:id', usercontroller.show)

  router.post('/add', usercontroller.store)

  router.put('/update/:id', usercontroller.update)

  router.delete('/delete/:id', usercontroller.delete)

  module.exports = router