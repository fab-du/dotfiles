#!/bin/bash
clear
set -e
set -x

setup_shell(){ chsh -s $(which zsh) }
install_require_package(){exec $HOME/dotfiles/install/package.sh }
create_local_profile( installation_option ){ echo "EXPORT=$installation_option" >> $HOME/.local_profile }

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
for dotfile in `ls -A $HOME/dotfiles`; do; [ -d $HOME/$dotfile || -s $HOME/$dotfile ] && mv $HOME/$dotfile $dot_backup 
case $dotfile in .gitignore);; .git);; install.sh);; README.md);; ) ln -s $PWD/$dotfile $HOME/$dotfile  esac
done
}

[ "$1" == "min" || "$1" == "minimal" ] 		  && installation_option="FAB_DU_DOT_MINIMAL"
[ "$1" == "min" || "$1" == "server" ]  		  && installation_option="FAB_DU_DOT_SERVER"
[ "$1" == "full" || "$1" == "full_installation" ] && installation_option="FAB_DU_DOT_EXTENDED"

setup_shell()
create_local_profile( $installation_option )
install_require_package()
install_additional_package()

# end of script
uptime
