var express = require('express');
var {user_register, user_login, user_update, user_delete, get_user} = require('../controller/LoginController')
var router = express.Router();

/* CRUD operation. */
router.get('/register', user_register);
router.get('/', user_login);
router.post('/update/:id', user_update);
router.get('/delete/:id', user_delete);

/*  Pagination  */
router.get('/get_user/:page_no', get_user);

module.exports = router;
