const {Schema, model, Types} = require('../connection');  
const mySchema = new Schema({
    space : {type : Types.ObjectId, ref: 'addSpaces'},
    user : {type : Types.ObjectId, ref: 'users'},
    amount : Number,
    paymentDetails : String,
    createdAt: Date,
})

module.exports = model('book', mySchema);