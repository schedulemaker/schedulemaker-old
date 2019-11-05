/**
 * @module Services 
 * Controls the state of global objects representing connections to AWS services that can be reused throughout invokations. 
 * If the variable does not exist in the namespace, it is instantiated and then reused upon subsequent executions in the same container.
 */
module.exports = (params) => {

    if (!aws){
        var aws = require('aws-sdk');
    }

    if (!dynamodb){
        var dynamodb = new aws.DynamoDB(params.DynamoDB);
    }

    if (!documentclient){
        var documentclient = new aws.DynamoDB.DocumentClient(params.DocumentClient);
    }

    if (!s3){
        var s3 = new aws.S3(params.S3);
    }

}