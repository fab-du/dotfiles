#!/bin/sh

dotfiles="$HOME/.vimrc $HOME/.vimshrc $HOME/.gvimrc $HOME/.bashrc $HOME/.zshrc $HOME/.emacs.d/init.el $HOME/.gemrc $HOME/.bash_profile $HOME/.tmux.conf $HOME/.ycm_extra_conf.py $HOME/.ycm_extra_conf.pyc $HOME/.bash_aliases /home/batlab/.gitconfig"
directories=""

for dotfile in $dotfiles
do
dotfile_name=${dotfile##*/}
    case "$dotfile_name" in
    .* )
        dotfile_name=${dotfile##*.}
        ;;
    esac
cp $dotfile $dotfile_name
done

for directory in $directories
do
cp -r $directory .
done

git add -A
git commit -m "updated at `date`"
git push origin master
