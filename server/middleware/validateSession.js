import { login } from '../routes';

export default (req, res, next) => {
  if (req.isAuthenticated() && req.user) {
    return next();
  } else {
    res.redirect(login);
  }
}
