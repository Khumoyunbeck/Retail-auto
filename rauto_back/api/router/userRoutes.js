const express = require('express')

const router = express.Router();

const {CreateUser, GetByIdUser, GetUser, EditUser, DeleteUser, login} = require('../controller/userController')

router.post('/add',  CreateUser)
router.post('/login',  login)
router.get('/all', GetUser)
router.get('/:id', GetByIdUser)
router.put('/:id', EditUser)
router.delete('/:id', DeleteUser)


module.exports = router
