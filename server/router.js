import { Router } from 'express';
import passport from 'passport';

import { login, logout, greeting } from './routes';
import validateSession from './middleware/validateSession';

const router = Router();

router.post(login, passport.authenticate('local'), (req, res) => {
  res.send(JSON.stringify(`Logged in ${req.user.username}`));
});

router.get(logout, validateSession, (req, res) => {
  req.logout();
  return res.redirect(login);
});

router.get(greeting, validateSession, (req, res) => {
  const greeting = `Hello ${req.user.username}!`;
  res.send(JSON.stringify({ greeting }));
});

export default router;
