import { Strategy as LocalStrategy } from 'passport-local';

function validateUser(username, password, done) {
  // TODO replace this with our own ORM stuff
  const user = { username, id: username };

  // TODO actually validate password
  if (password === 'password') {
    return done(null, user);
  } else {
    return done(null, false);
  }

  // Error
  // return done(new Error('forced error'));
  // Failure
  // return done(null, false);
}

const localStrategy = new LocalStrategy(validateUser);

export default localStrategy;
