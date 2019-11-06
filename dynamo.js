const aws = require('aws-sdk');

/**
 * Create the DynamoDB table
 * @param {aws.DynamoDB} dynamodb 
 */
async function createTableTest(dynamodb){
    var params = {
        AttributeDefinitions: [
           {
               AttributeName: 'id',
               AttributeType: 'S'
           }
        ],
        KeySchema: [
           {
               AttributeName: 'id',
               KeyType: 'HASH'
           },
        ],
        TableName: 'test',
        BillingMode: 'PAY_PER_REQUEST'
    };
   
   try {
       await dynamodb.createTable(params).promise()
   } catch (error) {
       console.error(error)
   }
}

/**
 * List the table we created
 * @param {aws.DynamoDB} dynamodb 
 */
async function listTableTest(dynamodb){
    try {
        let response = await dynamodb.listTables().promise();
        console.log(response.TableNames);
    } catch (error) {
        console.error(error)
    }
}

/**
 * Put a new item in the table
 * @param {aws.DynamoDB.DocumentClient} documentClient 
 */
async function writeTest(documentClient){
    let params = {
        TableName: 'test',
        Item: {
            'id': 'foo',
            'name': 'bar'
        }
    };

    try {
        await documentClient.put(params).promise();
    } catch (error) {
        console.error(error)
    }

}

/**
 * Get an item from the table
 * @param {aws.DynamoDB.DocumentClient} documentClient 
 */
async function readTest(documentClient){
    let params = {
        TableName: 'test',
        Key: {
            id: 'foo'
        }
    };

    try {
        let response = await documentClient.get(params).promise();
        console.log(response.Item);
    } catch (error) {
        console.error(error);
    }
}


async function main(){
    var options = {
        region: 'us-east-1',
        endpoint: 'http://localhost:4569'
    };
    
    var dynamodb = new aws.DynamoDB(options);
    var documentClient = new aws.DynamoDB.DocumentClient(options);

    await createTableTest(dynamodb);
    await listTableTest(dynamodb);
    await writeTest(documentClient);
    await readTest(documentClient);
}

main();