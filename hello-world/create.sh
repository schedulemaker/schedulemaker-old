#!/bin/bash

#create s3 bucket
awslocal s3api create-bucket --bucket test

#create a dynamodb table. This table contains a single hashkey called "id"
awslocal dynamodb create-table --table-name test --attribute-definitions AttributeName=id,AttributeType=S --key-schema AttributeName=id,KeyType=HASH --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1

#zip the function code to upload to lambda
zip function.zip index.js cache.js

#create the lambda function
awslocal lambda create-function --function-name test --runtime nodejs10.x --handler index.handler --role fakerole --zip-file fileb://function.zip
