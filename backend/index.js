const express = require("express");

const userRouter = require('./routers/userRouter');
const spaceRouter = require('./routers/spaceRouter');
const adminRouter = require('./routers/adminRouter');
const vendorRouter = require('./routers/vendorRouter');
const bookRouter = require('./routers/bookRouter');
const utilRouter = require('./routers/util');



const cors = require('cors'); //to allow request from frontend to backend 

const app = express(); //to initialise express
const port = 5000; //bcz we are working in local host, it will be diff for mac


app.use(cors( {
    origin : ['http://localhost:3000'],
}));

app.use(express.json());

// middleware
app.use('/user', userRouter);
app.use('/addSpace', spaceRouter);
app.use('/admin', adminRouter);
app.use('/vendor', vendorRouter);
app.use('/book', bookRouter);
app.use('/util', utilRouter);

app.use(express.static('./static/uploads'))

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

app.get('/update', (req, res) => {
    res.send('Response from update');
});
// update

app.listen( port, () => { console.log('express server started')} );

const stripe = require("stripe")('sk_test_51NBup2SEmL2cPMzTyB3n9BlbMookbpdISHItE5gFVEm9YaBA2pLyqsucjLNQboPvZ5ELafO1sTv7XuMdSNjytAKq00VP4Me1fI');
app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
  
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 10000,
      currency: "inr",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });