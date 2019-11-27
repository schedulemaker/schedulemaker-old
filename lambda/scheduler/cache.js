'use strict';

/**
 * @module Cache 
 * Controls the state of global objects representing connections to AWS services that can be reused throughout invokations. 
 * If the variable does not exist in the namespace, it is instantiated and then reused upon subsequent executions in the same container.
 */
module.exports = function(){

    if (!documentclient){
        var aws = require('aws-sdk');
        var documentclient = new aws.DynamoDB.DocumentClient();
    }

    if (!scheduler){
        var Scheduler = require('scheduler');
        var scheduler = new Scheduler();
    }

    if(!conversions){
        var conversions = require('conversions');
    }

    return {
        DocumentClient: documentclient,
        Scheduler: scheduler,
        DBToScheduler: conversions.DBToScheduler,
        SchedulerToUI: conversions.SchedulerToUI
    }

}();