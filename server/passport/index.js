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
    // TODO set max age AND deal with expired client tokens
    proxy: true,
    key: 'connect.sid',
    resave: false,
    saveUninitialized: false,
    secret: 'secret', // TODO change this
    cookie: {
      httpOnly: false, // allow cookie to be read by client
    },
  }));

  app.use(passport.initialize());
  app.use(passport.session());
};
