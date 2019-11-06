#!/bin/bash

rm out.json
rm function.zip
zip function.zip index.js cache.js
awslocal lambda update-function-code --function-name test --zip-file fileb://function.zip
