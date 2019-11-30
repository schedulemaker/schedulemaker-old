#!/bin/bash

zip -u function.zip index.js cache.js
cd ../
zip -u update-delegate/function.zip node_modules/banner/*
cd update-delegate
aws lambda update-function-code --function-name update_delegate --zip-file fileb://function.zip