source $HOME/dotfiles/.vim/expose.vim

if filereadable(expand("~/.local_vimrc"))
	source ~/.vimrc_local
endif

let g:deoplete#enable_at_startup = 1
if !exists('g:deoplete#omni#input_patterns')
  let g:deoplete#omni#input_patterns = {}
endif
" let g:deoplete#disable_auto_complete = 1
autocmd InsertLeave,CompleteDone * if pumvisible() == 0 | pclose | endif

let g:livepreview_previewer = 'mupdf'

let g:monster#completion#rcodetools#backend = "async_rct_complete"

" With deoplete.nvim
let g:monster#completion#rcodetools#backend = "async_rct_complete"
let g:deoplete#sources#omni#input_patterns = {
\   "ruby" : '[^. *\t]\.\w*\|\h\w*::',
\}


" neocomplete like
"set completeopt+=noinsert
" deoplete.nvim recommend
set completeopt+=noselect


" Run deoplete.nvim automatically
let g:deoplete#enable_at_startup = 1
" deoplete-go settings
let g:deoplete#sources#go#gocode_binary = $GOPATH.'/bin/gocode'
let g:deoplete#sources#go#sort_class = ['package', 'func', 'type', 'var', 'const']
let g:deoplete#sources#go#use_cache = 1
call deoplete#custom#set('_', 'matchers', ['matcher_fuzzy'])
"let g:deoplete#sources#go#json_directory = '/path/to/data_dir'
