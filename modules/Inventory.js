
const express = require('express');
const route = express.Router();
const constant=require('../constants/Constant.js');
const Data= require('../Data/Data');
const Joi = require('@hapi/joi');

const INVENTORY_ITEMS=Data.INVENTORY;

const API_PATH =constant.API;

const LAST_ID =data.length;

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

// route.post('/api/movies', (req,res) => {
//     const schema = Joi.object({
//         name : Joi.string().min(3).required()
//     });

//     const result = schema.validate(req.body);
//     console.log(result);
//     if(result.error)
//     {
//         res.status(400).send(result.error.details[0].message);
//         return;
//     }

//     let movie = {
//         id : movies.length + 1,
//         name : req.body.name
//     }
//     movies.push(movie);
//     res.send(movie);
// })

// route.put('/api/movies/:id', (req,res) => {

//     let movie = movies.find(c => c.id === parseInt(req.params.id) )
//     if(!movie) res.send(`No movie found for the Id : ${req.params.id}`);
    

//     const schema = Joi.object({
//         name : Joi.string().min(3).required()
//     });

//     const result = schema.validate(req.body);
//     console.log(result);
//     if(result.error)
//     {
//         res.status(400).send(result.error.details[0].message);
//         return;
//     }

//     movie.name = req.body.name;
//     res.send(movie);
// })


// route.use('/api/movies',(req,res,next) => {
//     console.log(req.url, req.method)
//     next();
// })

// route.delete('/api/movies/:id', (req,res) => {

//     let movie = movies.find(c => c.id === parseInt(req.params.id) )
//     if(!movie) res.send(`No movie found for the Id : ${req.params.id}`);

//     const index = movies.indexOf(movie);
//     movies.splice(index,1);

//     res.send(movie);
// })


// module.exports = route;