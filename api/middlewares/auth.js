const authManager = require('../config/auth');

const auth = (req, res, next) => {
  if (req.header('Authorization')) {
    const authHeader = req.header('Authorization').split(' ');
    const token = authHeader[0] === 'Bearer' ? authHeader[1] : null;
    if (token) {
      const { isValid, decodedToken } = authManager.validateToken(token);
      if (isValid) {
        req.sessionInfo = decodedToken;
        next();
      } else {
        return res.status(401).json({ error: true, message: 'Invalid or expired token' });
      }
    } else {
      return res.status(401).json({ error: true, message: 'Not authorized' });
    }
  } else {
    return res.status(401).json({ error: true, message: 'Not authorized' });
  }  
}

module.exports = auth;