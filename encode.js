#!/usr/bin/env node

const jwt = require('jsonwebtoken');

const args = process.argv.slice(2);
if (args.length !== 2) {
    console.error('Usage: encode.js <payload_json> <secret_key>');
    process.exit(1);
}

const payload = JSON.parse(args[0]);
const secretKey = args[1];

const options = {
    expiresIn: '1h'
};

const token = jwt.sign(payload, secretKey, options);

console.log('Generated JWT:', token);

