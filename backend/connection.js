const mongoose = require('mongoose');

const url = 'mongodb+srv://SaumyaMaurya:Saumya123@cluster0.eixwr95.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.error(err);
    
});

module.exports = mongoose;