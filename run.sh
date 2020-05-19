#!/bin/sh

ls *.js | entr -cr ./build.sh &
serve public
