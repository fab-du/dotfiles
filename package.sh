#!/bin/sh 


packages = [ "tree", "git-all", "sshfs", "build-essential", "curl", "python", "python-dev", "python-pip" ]


sudo apt-get update

for package in $packages 
do 
	sudo apt-get install $package
done


# Bin External
mkdir ~/bin_external

# Install neovim
sudo add-apt-repository ppa:neovim-ppa/unstable
sudo apt-get update
sudo apt-get install neovim

