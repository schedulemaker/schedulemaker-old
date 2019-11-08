var aws = require('aws-sdk');

var doc = new aws.DynamoDB.DocumentClient({endpoint: 'http://localhost:4569', region: 'us-east-1'});

async function main(){
    response = await doc.query({
        TableName: 'test',
        KeyConditionExpression: 'id = :hkey',
        ExpressionAttributeValues: {
            ':hkey': 'foo'
        }
    }).promise();

    console.log(response.Items);
}

main();