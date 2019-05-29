import passport from 'passport';
import session from 'express-session';
import redis from 'connect-redis';

import localStrategy from './localStrategy';
import {
  serializer,
  deserializer,
} from './userSerialization';
import {
  sessionIdCookieKey,
  oneDayInMs,
} from '../constants';

const RedisStore = redis(session);

passport.serializeUser(serializer);
passport.deserializeUser(deserializer);
passport.use(localStrategy);

// session configuration
export default (app) => {
  app.use(session({
    store: new RedisStore(),
    proxy: true,
    key: sessionIdCookieKey,
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_STORE_SECRET,
    cookie: {
      // allow cookie to be read by client
      httpOnly: false,
      maxAge: oneDayInMs,
    },
  }));

  app.use(passport.initialize());
  app.use(passport.session());
};
