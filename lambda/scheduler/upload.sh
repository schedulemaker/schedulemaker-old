#!/bin/bash

zip -u function.zip index.js cache.js
aws lambda update-function-code --function-name scheduler --zip-file fileb://function.zip