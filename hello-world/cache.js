/*jshint esversion: 8 */

/**
 * @module Cache
 * Controls the state of global objects representing connections to AWS services that can be reused throughout invokations.
 * If the variable does not exist in the namespace, it is instantiated and then reused upon subsequent executions in the same container.
 */
var PARAMS = {S3: {endpoint: 'http://localhost:4572', s3ForcePathStyle: true, credentials: {accessKeyId: 'foo', secretAccessKey: 'bar'}},
        DocumentClient: {endpoint: 'http://localhost:4569'}, region: 'us-east-1'};

module.exports = (params = PARAMS) => {
    var aws = null;
    if (!aws){
        aws = require('aws-sdk');
    }

    var documentclient = null;
    if (!documentclient){
        documentclient = new aws.DynamoDB.DocumentClient(params.DocumentClient);
    }

    var s3 = null;
    if (!s3){
        s3 = new aws.S3(params.S3);
    }

  return {
      S3: s3,
      DocumentClient: documentclient
    };
};
