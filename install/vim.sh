#!/bin/bash

echo "################################"
echo "## Download vim plugin ##"

if [ ! -e "$HOME"/.vim/autoload/plug.vim ] then
    curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
        https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
fi
vim +PlugInstall +PlugClean! +qall

