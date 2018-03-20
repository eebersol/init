#!/bin/sh
exec >> /var/log/update_script.log
apt-get update -y &
exec apt-get upgrade -y

