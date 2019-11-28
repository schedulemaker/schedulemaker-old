'use strict';

/**
 * @module Cache 
 * Controls the state of global objects representing connections to AWS services that can be reused throughout invokations. 
 * If the variable does not exist in the namespace, it is instantiated and then reused upon subsequent executions in the same container.
 */
module.exports = function(){

    if (!documentclient){
        var AWS = require('aws-sdk');
        var documentclient = new AWS.DynamoDB.DocumentClient();
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
        BannerToDB: conversions.BannerToDB
    }

}();