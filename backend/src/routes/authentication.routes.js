/*
  @url: /
*/

const { Router } = require('express');
const router = Router();
const { login, register } = require('../controllers/authenticationController');

router.route('/register').post(register);
router.route('/login').post(login);

module.exports = router;
