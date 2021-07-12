#!/usr/bin/env bash

./node_modules/.bin/node-pg-migrate up
nodemon server
exec "$@"
