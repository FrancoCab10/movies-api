const authManager = require('../config/auth');

const optionalAuth = (req, res, next) => {
  if (req.header('Authorization')) {
    const authHeader = req.header('Authorization').split(' ');
    const token = authHeader[0] === 'Bearer' ? authHeader[1] : null;
    if (token) {
      const { isValid, decodedToken } = authManager.validateToken(token);
      if (isValid) {
        req.sessionInfo = decodedToken;
      }
    }
  }
  next();  
}

module.exports = optionalAuth;