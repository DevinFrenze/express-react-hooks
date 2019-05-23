import { Router } from 'express';
import passport from 'passport';

const authRouter = Router();

authRouter.post('/login', passport.authenticate('local'), (req, res) => {
  res.send(JSON.stringify(`Logged in ${req.user.username}`));
});

authRouter.get('/logout', (req, res) => {
  // TODO this only removes the cookie ! need to update when storing session
  // data somewhere
  req.logout();
  res.send(null);
});

export default authRouter;
