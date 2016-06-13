#!/bin/sh
# 
# 
# 
set -e 
clear

dotfiles=$( ls -A )

date=$( date ) 
dot_backup="$HOME/dotfiles_backup_""$date"

mkdir "$dot_backup

for dotfile in $dotfiles
do
# backup target dotfile directory
if [ -d $HOME/$dotfile ] 
then 
  mv $HOME/$dotfile $dot_backup 
fi 

# backup target dotfile file
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

#wget -p ~/bin_external/java_repl -qO- http://albertlatacz.published.s3.amazonaws.com/javarepl/javarepl.jar

