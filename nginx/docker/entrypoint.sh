#!/bin/bash

set -e

crontab /app/cron.d/nginx-rotate.cron
crond

exec /usr/bin/openresty -g "daemon off;"
