#!/bin/sh

FILE=instantclient-basiclite-linux.x64-21.12.0.0.0dbru.zip

set -e

rm -rf ~/opt/oracle/instantclient_21_12
mkdir -p ~/opt/oracle
cd ~/opt/oracle
wget https://download.oracle.com/otn_software/linux/instantclient/2112000/$FILE
unzip $FILE
rm $FILE

