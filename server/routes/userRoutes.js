var express = require('express');
var UserHelper = require('../db/helpers/UserSqlHelper.js');


var router = express.Router();



//#USERS Routes
//#-------------------------------------------------------
// add user route
router.post('/', function (req, res) {
    UserHelper.addUser(req.body, function (err, rows) {
            if (err) {
                res.send(err);
            } else {
                res.send("user add test"); 
            }
            
        });
})
// define the get route
router.get('/', function (req, res) {
    UserHelper.getAllUsers(function (err, rows) {
        if (err) {
            res.send(err);
        } else {
            res.send(rows); 
        }
        
    });
})





module.exports = router
