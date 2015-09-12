#!/bin/sh

cd $HOME/dotfiles/.vim/
mkdir bundle
cd bundle
git clone https://github.com/VundleVim/Vundle.vim
cd $HOME/dotfiles/.vim/
mkdir autoload
cd autoload
git clone https://github.com/VundleVim/Vundle.vim

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
vim +PluginInstall +qall
