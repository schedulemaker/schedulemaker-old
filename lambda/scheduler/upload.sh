#!/bin/bash

zip -u function.zip index.js cache.js
cd ../
zip -u scheduler/function.zip node_modules/conversions/* node_modules/scheduler/*
cd scheduler
aws lambda update-function-code --function-name scheduler --zip-file fileb://function.zip