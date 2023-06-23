const mongoose = require('mongoose');
const dbName = 'FlexSpace';

const url = 'mongodb+srv://madheshiyakajal:Kajal123@cluster0.upiopis.mongodb.net/FlexSpace?retryWrites=true&w=majority';

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.error(err);
});
module.exports = mongoose;
