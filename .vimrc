"TODO : Move above to vim-sensible
let &runtimepath.=','.expand("~/.vim")

so $HOME/dotfiles/.vim/expose.vim
so $HOME/dotfiles/.vim/Bundle.vim

if filereadable(expand("~/.local_vimrc"))
	source ~/.vimrc_local
endif
