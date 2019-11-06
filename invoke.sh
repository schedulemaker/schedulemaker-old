#!/bin/bash

awslocal lambda invoke --function-name test --log-type Tail --payload file://payload.json out.json
