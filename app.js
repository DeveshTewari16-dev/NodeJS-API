const logger=require('./logging');
const express= require('express');
const constant= require('./constants/Constant');
const Inventory=require('./modules/Inventory.js')
const Cost=require('./modules/Cost.js')
const cors=require('cors');

const app= express();

app.use(cors());

app.use(express.json()); //adding middleware


const port =constant.PORT; //constants from constant file

app.use('/routeinv',Inventory); //Router added for Inventory handling.

app.use('/routecost',Cost);

console.log('Data added');

app.use((req,res,next)=>{
    console.log(req.url, req.method);
    next();
});


//Home Route

app.get('/',(req,res)=>{
    res.send('Home Page ')
})

const user =constant.USER;

logger.logMessages(`User ${user} logged in`);

app.listen(port,()=>{
console.log(`Listening to Port ${port}`);
})

