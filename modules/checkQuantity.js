const cost=require('../Data/Data.js').cost;
const express = require('express');
const route = express.Router();

console.log(cost); //to calculate the cost model
route.get('/api/quantity',(req,res)=>{

res.send(cost);
})


module.exports = route;