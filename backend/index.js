const express = require("express");
const app = express(); //to initialise
const port = 5000; //bcz we are working in local host, it will be diff for mac

const userRouter = require('./routers/userRouter');


const cors = require('cors');

app.use(cors( {
    origin : ['http://localhost:3000'],
}));

app.use(express.json());

// middleware
app.use('/user', userRouter);


app.get('/', (req, res) => {
    res.send('Working Perfectly');
});

app.get('/add', (req, res) => {
    res.send('Response from add');
});

app.get('/getall', (req, res) => {
    res.send('Response from getall');
});

// getall
// update

app.listen( port, () => { console.log('server started'); } );