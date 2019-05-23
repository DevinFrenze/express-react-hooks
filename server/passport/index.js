import passport from 'passport';

import localStrategy from './localStrategy';
import {
  serializer,
  deserializer,
} from './userSerialization';

passport.serializeUser(serializer);
passport.deserializeUser(deserializer);
passport.use(localStrategy);
