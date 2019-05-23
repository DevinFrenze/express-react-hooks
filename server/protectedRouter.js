import { Router } from 'express';

const protectedRouter  = Router();

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}

protectedRouter.use(isAuthenticated);

protectedRouter.get('/greeting', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const { username = 'World' } = req;
  const hello = `Hello ${username}!`;
  const authString = `You are authenticated.`;
  res.send(JSON.stringify({ greeting: `${hello} ${authString}` }));
});

export default protectedRouter;
