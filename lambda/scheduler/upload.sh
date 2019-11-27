#!/bin/bash

zip -u function.zip index.js cache.js node_modules/conversions node_modules/scheduler
aws lambda update-function-code --function-name scheduler --zip-file fileb://function.zip