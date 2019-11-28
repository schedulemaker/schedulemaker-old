'use strict';

if (!cache){
    var cache = require('./cache');
}

exports.handler = async (event, context) => {
    const banner = cache.Banner;
    try {
        var subjects = await banner.getSubjects();
        await Promise.all(subjects.map(subject => delegate(subject.code)));
    } catch (error) {
        console.log(`Failed to fetch subjects from Banner: ${error}`);
    }
}

/**
 * @async
 * @function delegate - Invokes the worker lambda to process process the given subject
 * @param {string} subject 
 */
async function delegate(subject){
    const lambda = cache.Lambda;
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