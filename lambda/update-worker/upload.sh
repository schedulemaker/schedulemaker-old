#!/bin/bash

zip -u function.zip index.js cache.js
cd ../
zip -u update-worker/function.zip node_modules/conversions/* node_modules/banner/*
cd update-worker
aws lambda update-function-code --function-name update_worker --zip-file fileb://function.zip