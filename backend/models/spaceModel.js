const {Schema, model} = require('../connection');

const myschema = new Schema({
    providerName : String,
    providerContact : Number,
    providerEmail : String,
    name : String,
    size : String,
    rate : String,
    facilities : String,
    location : String,
    image : String,
    // user : {type : Types.ObjectId, ref: 'users'}
});

module.exports = model('space', myschema);