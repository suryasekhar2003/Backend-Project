const express = require('express')
const router = express();
const ownerModel = require("../models/owners-model")
// const dotenv = require('dotenv')
// dotenv.config()

router.get('/', function(req, res){
    res.send('hey');
})
// 

if(process.env.NODE === "development") {
router.post("/create", function(req,res){
    res.send("hey it's working")
})
}


module.exports = router;