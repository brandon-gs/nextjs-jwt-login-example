const passport = require('passport');

// USER AUTH
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = {
  requireAuth,
};
