/**
 * Load the services module if it doesn't exist in the namespace
 */
if (!services){
    var services = require('./services');
}

/**
 * This Lambda function creates an S3 bucket, puts a JSON file in it with the values passed to the execution
 */
exports.handler = async function(event, context){
    
}

