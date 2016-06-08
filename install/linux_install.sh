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

<<<<<<< HEAD:install/linux_install.sh
=======

# For vim 

curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
vim +PlugInstall +qall

# bin_external folder
wget -P ~/bin_external -qO- https://raw.githubusercontent/bat-lab/dotfiles/install_bin_external.sh | bash

# Install java repl 
wget -p ~/bin_external/java_repl -qO- http://albertlatacz.published.s3.amazonaws.com/javarepl/javarepl.jar

# install nvm and node
git clone https://github.com/creationix/nvm.git ~/bin_external/.nvm && cd ~/bin_external/.nvm && git checkout `git describe --abbrev=0 --tags`
>>>>>>> 2896c595f530d7c3c2c8a8de2a3ca8b447dee3e9:linux_install.sh
