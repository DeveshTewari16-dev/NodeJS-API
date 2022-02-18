const os =require('os');


function logMessages (log){
    console.log(log + ' on Platform ' + os.platform());

}

let message= 'Current Data';

module.exports.logMessages=logMessages;
module.exports.message=message;