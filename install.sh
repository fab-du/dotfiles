#!/bin/bash
clear
set -e
#set -x

dot_option=$1
parent_path=$( cd "$(dirname "${BASH_SOURCE}")" ; pwd -P )

setup_shell(){ 
	echo "\n################################### \n"
	echo "Changing shell to zsh \n"
	echo "################################### \n"
	chsh -s $(which zsh) 
}

install_package()
{
	echo "########################################"
	echo "Installing required Packages: $1"
	echo "#######################################"
	bash "$parent_path""/install/package" "$1"
}

set_installation_option( )
{ 
	echo "###########################################"
	echo "Setting installation option"
	echo "###########################################"
	[[ ! -f "$HOME/.profile_local" ]] && touch $HOME/.profile_local 
	echo "EXPORT DOT_INSTALLATION_OPTION=\"$installation_option\"" >> $HOME/.profile_local
}

install_additional_package()
{
	additional_packages=$(ls $HOME/dotfiles/install/)
	for option in $#; do
	   for _option in $additional_packages; do
		   [[ "$option" == "$_option" ]] && exec "$HOME/dotfiles/install/""$option"
	   done
	done 
}

deploy(){
	dot_backup="$HOME/dotfiles_backup_"`date`
	mkdir "$dot_backup"
	for dotfile in `ls -A $HOME/dotfiles`; do
		[[ -d "$HOME/$dotfile" || -s "$HOME/$dotfile" ]] && mv $HOME/$dotfile $dot_backup 
		[[ $dotfile != ".gitignore" && $dotfile != "install.sh" && $dotfile != "README.md" && $dotfile != ".git" ]] &&  ln -s $PWD/$dotfile $HOME/$dotfile 
	done
}

[[ "$1" == "server" ]]  		  		  && installation_option="FAB_DU_DOT_SERVER"
[[ "$1" == "min" || "$1" == "minimal" ]] 		  && installation_option="FAB_DU_DOT_MINIMAL"
[[ "$1" == "full" || "$1" == "full_installation" ]] && installation_option="FAB_DU_DOT_EXTENDED"

#setup_shell
#set_installation_option
install_package "minimal"
install_package "$1"
#install_additional_package()

# end of script
eval "uptime"
