#!/bin/bash

awslocal s3api create-bucket --bucket test

awslocal dynamodb create-table --table-name test --attribute-definitions AttributeName=myid,AttributeType=S --key-schema AttributeName=myid,KeyType=HASH --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1

zip function.zip index.js cache.js

awslocal lambda create-function --function-name test --runtime nodejs10.x --handler index.handler --role fakerole --zip-file fileb://function.zip
