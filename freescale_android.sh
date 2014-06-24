#!/bin/bash
#package to install for android 
#http://paste.ubuntu.com/7696742/ 

sudo su 
apt-get install -y openjdk-7-jdk 
apt-get install gnupg git 
apt-get install -y gnupg flex bison gperf build-essential g++-multilib mingw32 
apt-get install -y zip curl libc6-dev libncurses5-dev:i386 

#Da libgl1-mesa-glx:i386 haengt von libglapi-mesa:i386 , muss die letze erst mal installiert werden 
apt-get install -y libglapi-mesa:i386 
apt-get install -y libgl1-mesa-glx:i386 
apt-get install -y x11proto-core-dev 
apt-get install -y libx11-dev:i386 libreadline6-dev:i386 python-markdown libxml2-utils xsltproc zlib1g-dev:i386 
apt-get install -y libgl1-mesa-dev tofrodos

#solve some typo 
ln -s /usr/lib/i386-linux-gnu/mesa/libGL.so.1 /usr/lib/i386-linux-gnu/libGL.so

exit 
