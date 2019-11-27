'use strict';

if (!cache){
    var cahce = require('./cache');
}

exports.handler = async (event, context) => {
    let 
}

/**
 * @async
 * @function delegate - Invokes the worker lambda to process process the given subject
 * @param {string} subject 
 */
async function delegate(subject){
    const params = {
        'FunctionName': process.env.FUNCTION_NAME,
        'InvocationType': 'Event',
        'Payload': JSON.stringify({
            'subject': subject
        })
    };
    try {
        //invoke worker lambda
        console.log(`Invoking worker for ${subject}`);
        return await lambda.invoke(params).promise();
    } catch (error) {
        console.log(`Failed to invoke worker Lambda for ${subject}: ${error}`);
    }
}