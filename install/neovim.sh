#!/bin/bash

echo "#############################"
echo "  ### Installing NEOVIM ###  "
echo "#############################"
sudo add-apt-repository ppa:neovim-ppa/unstable
sudo apt-get update
sudo apt-get install neovim -y
