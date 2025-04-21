function requireAuth(req, res, next) {
    if (req.session.authenticated) {
      next();
    } else {
      res.status(403).json({ message: "Unauthorized" });
    }
  }
  
  module.exports = requireAuth;
  