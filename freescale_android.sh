#!/bin/sh 
#package to install for android 
#http://paste.ubuntu.com/7696742/ 

sudo su 
sudo apt-get install -y openjdk-7-jdk 
sudo apt-get install -y gnupg git 
sudo apt-get install -y gnupg flex bison gperf build-essential g++-multilib mingw32 
sudo apt-get install -y zip curl libc6-dev libncurses5-dev:i386 

#Da libgl1-mesa-glx:i386 haengt von libglapi-mesa:i386 , muss die letze erst mal installiert werden 
sudo apt-get install -y libglapi-mesa:i386 
sudo apt-get install -y libgl1-mesa-glx:i386 
sudo apt-get install -y x11proto-core-dev 
sudo apt-get install -y libx11-dev:i386 libreadline6-dev:i386 python-markdown libxml2-utils xsltproc zlib1g-dev:i386 
sudo apt-get install -y libgl1-mesa-dev tofrodos

#solve some typo 
sudo ln -s /usr/lib/i386-linux-gnu/mesa/libGL.so.1 /usr/lib/i386-linux-gnu/libGL.so

exit 
