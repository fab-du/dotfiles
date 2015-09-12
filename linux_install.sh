#!/bin/sh


dotfiles=$( ls -A )

dot_backup=$HOME/"dotfiles_backup"
mkdir $dot_backup 


for dotfile in $dotfiles
do
if [ -d $HOME/$dotfile ] 
then 
  echo "dir exists"
  mv $HOME/$dotfile $dot_backup 
fi 

if [ -s $HOME/$dotfile ] 
then 
  echo "file exists"
  mv $HOME/$dotfile $dot_backup 
fi 

  ln -s $PWD/$dotfile $HOME/$dotfile 
done


# For vim 

curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
vim +PlugInstall +qall
