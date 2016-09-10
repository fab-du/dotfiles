"TODO : Move above to vim-sensible
let &runtimepath.=','.expand("~/.vim")

so $HOME/dotfiles/.vim/Bundle.vim
so ~/dotfiles/.vim/mapping.vim

if filereadable(expand("~/.local_vimrc"))
	source ~/.vimrc_local
endif
