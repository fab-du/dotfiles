#!/bin/bash 


mkdir $HOME/dotfile_orig

#actuel dir 
#DOT_DIR=$PWD 
#We can use $PWD for this purpose since $PWD give the hole path 



DOTFILES=(
    '$HOME/.bash_aliases' 
    '$HOME/.bash_profile'
    '$HOME/.bashrc' 
    '$HOME/.zshrc' 
    '$HOME/.oh-my-zsh' 
    '$HOME/.profile' 
    '$HOME/.tmux.conf' 
    '$HOME/.ctags' 
    '$HOME/.fonts' 
    '$HOME/.gitconfig' 
    '$HOME/.gitconfiglocal' 
    '$HOME/.gitignore' 
    '$HOME/.ncmpcpp' 
    '$HOME/.vim' 
    '$HOME/.vimperator' 
    '$HOME/.vimrc' 
    '$HOME/.xinitrc' 
    '$HOME/.xmodmaprc' 
    '$HOME/.Xresources' 
    '$HOME/.ycm_extra_conf.py' 
    '$HOME/.ycm_extra_conf.pyc' 
)

ls -A . | xargs -0 -I file ln -s "$PWD/file" "$HOME/file"


#first check if the home dir , already contains those dot file


#if the home contains the dotfile , mv those files to dotfile_orig, 
#So it can be reuese, (backup) 


#second make a symlink from the dotfiles dir to the home dir 

