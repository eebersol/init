#!/bin/sh

if [ -f "/root/crontab" ]
	then
	#	echo "File exists"
		RESULT="$(diff /etc/crontab /root/crontab)"
		chrlen=${#RESULT}
	#	echo "LEN $chrlen"
		if [ $chrlen != 0 ]
			then
			{
			#	echo "Crontab change, send mail"
				rm /root/crontab
				cp /etc/crontab /root/crontab
			}
			fi
	else
	{
	#	echo "File don't exists"
		cp /etc/crontab /root/crontab
		chmod 444 /root/crontab
	}
	fi