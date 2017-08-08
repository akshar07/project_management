var express = require('express');
var router = express.Router();
var User=require('../models/users');

router.get('/', function (req, res, next) {
    User.findOne({},(err,doc)=>{
        if(err){
            return res.send('Error');
        }
        res.render('node',{user:doc});
    })
    
});

router.get('/message/:msg', function (req, res, next) {
    res.render('node');
});

router.post('/', function(req, res, next) {
    var email=req.body.email;
    var displayName=req.body.username;
    var user=new User({
        displayName:displayName,
        email:email
    });
    user.save();
   
    res.redirect('/');
});

module.exports = router;
