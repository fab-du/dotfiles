#!/bin/bash

packages=$(cat package.list)

sudo apt-get update

for package in $packages 
do 
	sudo apt-get install $package
done

