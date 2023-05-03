const mongoose = require('mongoose');

const url = 'mongodb+srv://madheshiyakajal:Kajal123@cluster0.upiopis.mongodb.net/mydatabase?retryWrites=true&w=majority';

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.error(err);
});
module.exports = mongoose;
