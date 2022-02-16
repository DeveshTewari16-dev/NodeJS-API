//Used express as middleware.

const express = require('express');
const route = express.Router();
const constant=require('../constants/Constant.js');
const Data= require('../Data/Data');
const Joi = require('@hapi/joi');

const INVENTORY_ITEMS=Data.INVENTORY;

const API_PATH =constant.API;

const LAST_ID =Data.length;

const PRICE=constant.PRICE;

const QUANTITY=constant.QUANTITY;

route.get(`${API_PATH}`,(req,res)=>{
    console.log('Routed to Inventory');
    res.send(INVENTORY_ITEMS);
})


//One more functionality to handle API filtering

route.get(`${API_PATH}/:id`, (req,res) =>{
         let INVENTORY_FITERD_ITEMS = INVENTORY_ITEMS.find(item => item.id == req.params.id ) 

         if(!INVENTORY_FITERD_ITEMS) res.send(`No Medicine found for ID : ${req.params.id}`);

         res.send(INVENTORY_FITERD_ITEMS);
     })


// One api to handle addition of medicine

route.post(`${API_PATH}/add`, (req,res) => {
    const schema = Joi.object({
        name : Joi.string().min(3).required(),
    });

    const result = schema.validate(req.body);
    
    if(result.error)
    {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    let medicine_data = {
        id : LAST_ID + 1,
        name : req.body.name,
        price:PRICE,
        quantity:QUANTITY
    }
    data.push(medicine_data);
    res.send(medicine_data);
})


module.exports = route;