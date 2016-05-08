
let vimrc=expand('~/.vimrc')

if filereadable( vimrc )
   exec 'source'  vimrc
endif
