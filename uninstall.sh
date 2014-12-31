#!/bin/sh

dotfiles=$( ls -A )

dot_backup=$HOME/tmp/"dotfiles_backup"
mkdir $dot_backup 
home_dotefiles=$( ls -A $HOME )


for dotfile in $dotfiles
do
  for dotfile_home in $home_dotefiles 
  do
      if [ "$dotfile" = "$dotfile_home" ]
      then
       mv $HOME/$dotfile_home $dot_backup  
      fi 
  done 
done 
