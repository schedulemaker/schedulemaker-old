/**
 * Load the caching module if it doesn't exist in the namespace
 */
if (!cache){
    var cache = require('./cache')({S3:{endpoint: 'http://localhost:4572'}});
}

/**
 * This Lambda function writes a JSON file to an S3 bucket, reads it, puts the item into the DynamoDB table, and fetches the item from the table.
 */
exports.handler = async function(event, context){
    let s3 = cache.S3;
    let documentclient = cache.DocumentClient;
    
    try {
        /**
         * Write a JSON file to the S3 bucket
         */
        await s3.putObject({
            Bucket: event.Bucket,
            Key: event.Filename,
            Body: JSON.stringify(event.Object)
        }).promise();

        /**
         * Read the JSON file from the bucket
         */
        let response = await s3.getObject({
            Bucket: event.Bucket,
            Key: event.Filename
        }).promise();

        /**
         * Put the item into the DynamoDB table
         */
        await documentclient.put({
            TableName: event.Table,
            Item : response.data.Body
        }).promise();

        /**
         * Query the database for the item
         */
        response = documentclient.query({
                TableName: event.Table,
                KeyConditionExpression: 'myid = :hkey',
                ExpressionAttributeValues: {
                    ':hkey': 'foo'
                }
        }).promise();

        return 'success';

    } catch (error) {
        return error;
    }
    
}

