export default (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  // TODO
}
