const {Schema, model, Types} = require('../connection');


const mySchema = new Schema({
    user : {type : Types.ObjectId, ref: 'users'},
    feedback : String,
    createdAt : Date
})


module.exports = model('feedback', mySchema);      