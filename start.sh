#!/usr/bin/env bash

echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
./node_modules/.bin/node-pg-migrate up
nodemon server
exec "$@"
