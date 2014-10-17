#!/bin/sh 


cd $HOME

git clone https://github.com/dufilsfabrice1100/dotfiles 

ln -s dotfiles/.vimrc .vimrc 
ln -s dotfiles/.vim .vim 

