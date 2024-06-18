#!/usr/bin/env node

const jwt = require('jsonwebtoken');

const args = process.argv.slice(2);
if (args.length !== 1) {
    console.error('Usage: decode.js <token>');
    process.exit(1);
}

const token = args[0];

const [headerB64, payloadB64] = token.split('.', 2);

try {
    const header = JSON.parse(Buffer.from(headerB64, 'base64').toString('utf-8'));
    const payload = JSON.parse(Buffer.from(payloadB64, 'base64').toString('utf-8'));

    console.log('Decoded Header:', header);
    console.log('Decoded Payload:', payload);
} catch (error) {
    console.error('Error decoding JWT:', error.message);
}

