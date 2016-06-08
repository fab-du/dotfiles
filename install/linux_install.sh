#!/bin/sh


dotfiles=$( ls -A )
ignoredfiles=[".gitignore", ".git", "linux_install.sh", "linux_uninstall.sh", "README.md"]
echo $dotfiles

dot_backup=$HOME/"dotfiles_backup"
mkdir $dot_backup 


for dotfile in $dotfiles
do
if [ -d $HOME/$dotfile ] 
then 
  mv $HOME/$dotfile $dot_backup 
fi 

if [ -s $HOME/$dotfile ] 
then 
  mv $HOME/$dotfile $dot_backup 
fi 

case $dotfile in
	.gitignore);;
	.git);;
	install);;
	README.md);;
		) ln -s $PWD/$dotfile $HOME/$dotfile 
	esac
done

