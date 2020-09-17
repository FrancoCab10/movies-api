const jwt = require('jsonwebtoken');
const moment = require('moment');

const auth = {
  key: Buffer.from(process.env.SECRET_KEY || 'testkey', 'utf-8').toString('base64'),
  expiration: { days: 0, hours: 3, minutes: 0 },
  algorithm: 'HS256',

  generateToken(user) {
    const body = {
      sub: user,
      iat: moment().unix(),
      exp: moment().add(this.expiration).unix(),
    };
    return jwt.sign(body, this.key, { algorithm: this.algorithm })
  },

  validateToken(token) {
    let isValid = false;
    let decodedToken = null;

    jwt.verify(token, this.key, (err, decoded) => {
      if (!err && +decoded.exp > moment().unix()) {
        isValid = true;
        decodedToken = decoded;
      }
    });

    return { isValid, decodedToken };
  }
}

module.exports = auth;