const inventory =[
    {
        id :'1' ,Name :'Medicine 1' ,price:1000 ,quantity:10
    },
    {
        id :'2' ,Name :'Medicine 2' ,price:700 ,quantity:10,
    },
    {
        id :'3' ,Name :'Medicine 3' ,price:430 ,quantity:10,
    },
    {
        id :'4' ,Name :'Medicine 4' ,price:260 ,quantity:10,
    },{
        id :'5' ,Name :'Medicine 5' ,price:340 ,quantity:10,
    },
    {
        id :'6' ,Name :'Medicine 6' ,price:140 ,quantity:10,
    },{
        id :'7' ,Name :'Medicine 7' ,price:50 ,quantity:10,
    },{
        id :'8' ,Name :'Medicine 8' ,price:700 ,quantity:10,
    },{
        id :'9' ,Name :'Medicine 9' ,price:1200 ,quantity:10,
    },
    {
        id :'10' ,Name :'Medicine 10' ,price:100 ,quantity:10,
    },
    {
        id :'11' ,Name :'Medicine 11' ,price:10 ,quantity:10,
    }
]


const cost=[{id:'1', discount: '10%'}]

//expoting multipling files in one file

const pricing_module=[{id:'1', pricing_season: 'A'}]

module.exports.INVENTORY=inventory;
module.exports.cost=cost;
module.exports.pricing_module=pricing_module;