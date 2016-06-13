source $HOME/dotfiles/.vim/expose.vim

if filereadable(expand("~/.local_vimrc"))
	source local_vimrc
endif
