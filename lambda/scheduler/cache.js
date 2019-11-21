/**
 * @module Cache 
 * Controls the state of global objects representing connections to AWS services that can be reused throughout invokations. 
 * If the variable does not exist in the namespace, it is instantiated and then reused upon subsequent executions in the same container.
 */
module.exports = function(){

    if (!aws){
        var aws = require('aws-sdk');
    }

    if (!documentclient){
        var documentclient = new aws.DynamoDB.DocumentClient();
    }

    return {
        DocumentClient: documentclient
    }

}();