import { Router } from 'express';
import passport from 'passport';

import { login, logout, greeting } from './routes';
import validateSession from './middleware/validateSession';
import { sessionIdCookieKey } from './constants';

const router = Router();

router.post(login, passport.authenticate('local'), (req, res) => {
  const message = `Logged in ${req.user.username}`;
  res.send(JSON.stringify({ message }));
});

router.get(logout, validateSession, (req, res) => {
  req.logout();
  req.session.destroy((err) => {
    res.clearCookie(sessionIdCookieKey, { path: '/' }).send();
  });
});

router.get(greeting, validateSession, (req, res) => {
  const message = `Hello ${req.user.username}!`;
  res.send(JSON.stringify({ message }));
});

export default router;
