#!/bin/bash 

tmp="$HOME""/tmp_ag"

#sudo apt-get install -y automake pkg-config libpcre3-dev zlib1g-dev liblzma-dev

git clone https://github.com/ggreer/the_silver_searcher "$tmp"
cd $tmp
./build.sh
cd $tmp
sudo make install
