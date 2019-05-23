import passport from 'passport';
import session from 'express-session';

import localStrategy from './localStrategy';
import {
  serializer,
  deserializer,
} from './userSerialization';

passport.serializeUser(serializer);
passport.deserializeUser(deserializer);
passport.use(localStrategy);

// session configuration
export default (app) => {
  app.use(session({
    key: 'connect.sid',
    resave: false,
    saveUninitialized: false,
    secret: 'secret',
  }));

  app.use(passport.initialize());
  app.use(passport.session());
};
