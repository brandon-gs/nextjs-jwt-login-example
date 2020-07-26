/*
  @url: /
*/

const { Router } = require('express');
const router = Router();
const { returnToPublicPage } = require('../controllers/pagesController');

router.get('/', returnToPublicPage);
router.get('/login', returnToPublicPage);
router.get('/register', returnToPublicPage);

module.exports = router;
