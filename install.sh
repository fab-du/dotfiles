#!/bin/sh

dotfiles=$( ls -A )

dot_backup=$HOME/tmp/"dotfiles_backup"
mkdir $dot_backup 


#git update 

echo $PWD/$dotfiles 

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


