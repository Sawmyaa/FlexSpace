// const express = require('express');       

const {Router} = require('express');       // importing Router from express

const Model = require('../models/adminModel')  //importing model from userModel


//initilizing express
// const router = express.Router();

const router = Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()      //saving data in database

    .then((result) => {
        res.json(result)   //converting result into json
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });

    // res.send('response from /add in user router')
});


//Reading Data
//reading mostly use get method
router.get('/getall', (req,res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})


router.get('/getbyemail/:adminemail', (req,res) => {
    Model.find({email : req.params.adminemail})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
//using colon means it is url parameter.
//post use body, get use params


router.post('/authenticate', (req, res) => {
    console.log(req.body)

    Model.findOne(req.body)
    .then((result) => {
        if(result){
            res.status(200).json(result);          //if credential match
        }
        else{
            res.status(401).json({status : 'failed'})     //if any credential did not match
        }
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})



//delete data from database
//here delete method is used

router.delete('/delete/:adminid', (req,res) => {
    Model.findByIdAndDelete(req.params.adminid)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.get('/getbyid/:adminid', (req, res) => {
    Model.findById(req.params.adminid)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})


router.put('/update/:adminid', (req, res) => {

    Model.findByIdAndUpdate(req.params.adminid, req.body)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

})





module.exports = router;                   //exporting router
