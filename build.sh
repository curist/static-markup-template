#!/bin/sh

rm -rf public/*
mkdir -p public
qjs index.js > public/index.html
cp -r assets/* public
echo site built at `date`
