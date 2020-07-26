/*
  @url: api/
*/
const { Router } = require('express');
const router = Router();
const { requireAuth } = require('../middlewares/authentication');
const { getName } = require('../controllers/userController');

router.route('/user').get(requireAuth, getName);

module.exports = router;
