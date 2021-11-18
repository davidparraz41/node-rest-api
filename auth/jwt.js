const _jwt = require('jsonwebtoken'),
    config = require('../config');


const generateToken = async () => {
    const payload = {
        check: true
    };
    return _jwt.sign(payload, config.key, {
        expiresIn: 1440
    });
}

const verify = async (token) => {
    _jwt.verify(token, config.key, (err, decoded) => {
        if (err) {
            throw err;
        } else
            return decoded;
    })
}


const jwt = {
    generateToken,
    verify
}

module.exports = jwt;
