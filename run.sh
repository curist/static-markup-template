#!/bin/sh

find src -iname '*.js' | entr -cr ./build.sh &
serve public
