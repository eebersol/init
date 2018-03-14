#!/bin/sh
exec >> /var/log/update_script.log
apt-get update -y &
exec apt-get install -y



# Pour Cron
# apt-get install cron
# crontab -e 
# chmod 777 02.sh
# mettre chmod /root/
# * 4 * * * * /bin/sh /root/02.sh