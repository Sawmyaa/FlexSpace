const { Schema, model } = require('../connection');

const myschema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    createdAt: Date,
    verified: { type: Boolean, default: false },
});

module.exports = model('user', myschema);
