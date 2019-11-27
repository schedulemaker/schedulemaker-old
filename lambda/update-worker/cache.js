'use strict';

/**
 * @module Cache 
 * Controls the state of global objects representing connections to AWS services that can be reused throughout invokations. 
 * If the variable does not exist in the namespace, it is instantiated and then reused upon subsequent executions in the same container.
 */
module.exports = function(){
    if (!AWS){
        var AWS = require('aws-sdk');
    }

    if (!documentclient){
        
        var documentclient = new AWS.DynamoDB.DocumentClient();
    }

    if (!s3){
        var s3 = new AWS.S3();
    }

    if (!banner){
        var Banner = require('banner');
        var banner = new Banner(process.env.TERM);
    }

    if (!conversions){
        var conversions = require('conversions');
    }

    return {
        DocumentClient: documentclient,
        Banner: banner,
        BannerToDB: conversions.BannerToDB,
        S3: s3
    }

}();