const passport = require('passport');
const User = require('../models/User');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');

// setting local strategy:
const localOptions = {
  usernameField: 'email',
  password: 'password',
};
const localLogin = new LocalStrategy(
  localOptions,
  async (email, password, done) => {
    const user = await User.findOne({ email: email });
    if (!user) {
      // eslint-disable-next-line quotes
      return done(null, false, { message: 'Incorrect email or password' });
    }
    const isMatch = await user.matchPassword(password);
    if (isMatch) {
      return done(null, user);
    }
    return done(null, false, { message: 'Incorrect email or password' });
  }
);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.JWT_SECRET,
};

const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await User.findById(payload._id);
    if (user) {
      done(null, user);
    } else {
      done(null, false, { message: 'Invalid token' });
    }
  } catch (error) {
    done(error, false, { message: 'Server error' });
  }
});

// tell passport to use defined strategies:
passport.use(jwtLogin);
passport.use(localLogin);
