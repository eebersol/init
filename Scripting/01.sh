#!/bin/bash

exec awk -F ":" '{print $1,$3,$6}' /etc/passwd
