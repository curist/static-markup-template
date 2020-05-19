#!/bin/sh

rm -rf public/*
mkdir -p public
node build.js
cp -r assets/* public
echo site built at `date`
