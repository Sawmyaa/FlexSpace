const { Types } = require('mongoose');
const {Schema, model} = require('../connection');  
const mySchema = new Schema({
    providerName : String,
    providerContact : Number,
    providerEmail : String,
    name : String,
    size : Number,
    rate : Number,
    facilities : String,
    city : String,
    state: String,
    location : String,
    image : String,
    vendor : {type : Types.ObjectId, ref: 'vendor'}
})

module.exports = model('addSpaces', mySchema);