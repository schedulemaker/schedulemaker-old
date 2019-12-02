#!/bin/bash

directories="hello-world/ lambda/ s3/ templates/"

for directory in $directories; do
    for file in $(find $directory -name '*.js'); do
        jshint $file
    done
done
