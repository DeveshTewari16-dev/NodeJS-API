const os =require('os');


function logMessages (log){
    console.log(log + ' on Platform ' + os.platform());

}

let message= 'Current Data';
let message2='Latest current data added to test';

module.exports.logMessages=logMessages;
module.exports.message=message;