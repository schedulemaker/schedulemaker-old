/**
 * @module Cache 
 * Controls the state of global objects representing connections to AWS services that can be reused throughout invokations. 
 * If the variable does not exist in the namespace, it is instantiated and then reused upon subsequent executions in the same container.
 */
module.exports = (params={S3:{},
     DocumentClient:{}}) => {

    if (!aws){
        var aws = require('aws-sdk');
    }

    if (!documentclient){
        var documentclient = new aws.DynamoDB.DocumentClient(params.DocumentClient);
    }

    if (!s3){
        var s3 = new aws.S3(params.S3);
    }

    return {
        S3: s3,
        DocumentClient: documentclient
    }

}