import { Strategy as LocalStrategy } from 'passport-local';

function validateUser(username, password, done) {
  // TODO replace this with our own ORM stuff
  /*
  User.findOne({ username: username }, function (err, user) {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  });
  */

  const user = {
    username,
  };
  if (password === 'password') {
    return done(null, { username });
  } else {
    return done(null, false);
  }

  // return done(new Error('forced error'));

  // return done(null, false);
}

const localStrategy = new LocalStrategy(validateUser);

export default localStrategy;
