const cost=require('../Data/Data.js').cost;
const express = require('express');
const route = express.Router();

route.get('/api/cost',(req,res)=>{
res.send(cost);
})

module.exports = route;