#!/bin/bash

for f in $(find hello-world/ -name '*.js'); do
    jshint $f
done

for f in $(find lambda/ -name '*.js'); do
    jshint $f
done

for f in $(find s3/ -name '*.js'); do
    jshint $f
done

for f in $(find template/ -name '*.js'); do
    jshint $f
done
