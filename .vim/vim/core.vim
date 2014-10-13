"Setter"{{{

set nocompatible 
set relativenumber
call pathogen#infect()
filetype plugin indent on
syntax on 


set t_Co=256 
set t_ut= 
"Easy Indent 
nnoremap > >>
nnoremap < <<
vnoremap > >gv
vnoremap < <gv

set tabstop=2
set shiftwidth=2
set softtabstop=2
set expandtab
            
set showbreak=↪
set listchars=tab:>-,eol:¬,extends:❯,precedes:❮

set autowrite
set autoread

"Settings for Searching and Moving
nnoremap / /\v
vnoremap / /\v
set ignorecase
set smartcase
set gdefault
set incsearch
set showmatch
set hlsearch

let mapleader=","
let maplocalleader=";"

set backup                        " enable backups
set noswapfile                    " it's 2013, Vim.

set undodir=~/.vim/tmp/undo//     " undo files
set backupdir=~/.vim/tmp/backup// " backups
set directory=~/.vim/tmp/swap//   " swap files
" Make those folders automatically if they don't already exist.
if !isdirectory(expand(&undodir))
    call mkdir(expand(&undodir), "p")
endif
if !isdirectory(expand(&backupdir))
    call mkdir(expand(&backupdir), "p")
endif
if !isdirectory(expand(&directory))
    call mkdir(expand(&directory), "p")
endif
"}}}

"">>>>>Hack to Save Fold view<<<<<<  "{{{
autocmd BufWrite * mkview
autocmd BufRead * silent loadview
nnoremap <Space> za
vnoremap <Space> za
"}}}
"{ Make Alt-key work sanely }"{{{
set timeout ttimeoutlen=10
let c='a'
while c <= 'z'
 exec "set <A-".c.">=\e".c
"Trick to make Alt key work properly  
exec "imap \e".c." <A-".c.">"
 let c = nr2char(1+char2nr(c))
endw
"}}}

" Ref: https://github.com/cohama/.vim/blob/master/.vimrc"{{{
function! NotMoveWhenLeavingFromInsertMode()
	let cursorPos = col(".")
	let maxColumn = col("$")
	if cursorPos < maxColumn && cursorPos != 1
		return "\<Esc>l"
	else
		return "\<Esc>"
	endif
endfunction
imap <silent><expr> <Esc> NotMoveWhenLeavingFromInsertMode()
"imap <silent><expr>jk NotMoveWhenLeavingFromInsertMode()
" Ref: http://d.hatena.ne.jp/osyo-manga/20130424/1366800441
function! s:move_cursor_pos_mapping(str, ...)
        let left = get(a:, 1, '<Left>')
        let lefts = join(map(split(matchstr(a:str, '.*<Cursor>\zs.*\ze'), '.\zs'), 'left'), '')
        return substitute(a:str, '<Cursor>', '', '') . lefts
endfunction
function! _(str)
        return s:move_cursor_pos_mapping(a:str, "\<Left>")
endfunction
nnoremap <expr> [prefix]s _(":%s/<Cursor>//g")
vnoremap <expr> [prefix]s _(":S/<Cursor>//g")
nnoremap <expr> [prefix]S _(":%S/<Cursor>//g")
vnoremap <expr> [prefix]S _(":S/<Cursor>//g")
"}}}

"Moving Line up and down "{{{
nnoremap <silent><A-j> :m .+1<CR>==
nnoremap <silent><A-k> :m .-2<CR>==
inoremap <silent><A-j> <Esc>:m .+1<CR>==gi
inoremap <silent><A-k> <Esc>:m .-2<CR>==gi
vnoremap <silent><A-j> :m '>+1<CR>gv=gv
vnoremap <silent><A-k> :m '<-2<CR>gv=gv
"}}}

"}}}
"2. Upper/Lower word"{{{
nmap <leader>u mQviwU`Q
nmap <leader>l mQviwu`Q

"3. Upper/Lower the first char of word 
nmap <leader>U mQgewvU`Q
nmap <leader>L mQgewvu`Q
"}}}

"Ignore Files {{{ "{{{"{{{"{{{
set wildignore+=.hg,.git,.svn                    " Version control"{{{
set wildignore+=*.aux,*.out,*.toc                " LaTeX intermediate files"}}}
set wildignore+=*.jpg,*.bmp,*.gif,*.png,*.jpeg   " binary images
set wildignore+=*.o,*.obj,*.exe,*.dll,*.manifest " compiled object files
set wildignore+=*.spl                            " compiled spelling word lists
set wildignore+=*.sw?                            " Vim swap files
set wildignore+=*.DS_Store                       " OSX bullshit

set wildignore+=*.luac                           " Lua byte code

set wildignore+=migrations                       " Django migrations
set wildignore+=*.pyc                            " Python byte code

set wildignore+=*.orig                           " Merge resolution files

" Clojure/Leiningen
set wildignore+=classes
set wildignore+=lib
"}}}"}}}"}}}"}}}

set encoding=utf-8
set showcmd                     "sc:    shows typed commands
set ttyfast                     "tf:    improves redrawing for newer computers
set history=200                 "hi:    number of search patterns and ex commands to remember
set viminfo='200                "vi:    For a nice, huuuuuge viminfo file


set switchbuf=usetab            "swb:   Jumps to first tab or window that contains specified buffer instead of duplicating an open window
set hidden                      "hid:   allows opening a new buffer in place of an existing one without first saving the existing one

" Menu completion {{{
set suffixes+=.pyc,.pyo         " Don't autocomplete these filetypes
set wildmenu                    "wmnu:  enhanced ex command completion
set wildmode=longest:full,list:full  "wim:   helps wildmenu auto-completion
" }}}


"Basic {{{
nnoremap<nowait> j gj
nnoremap<nowait> k gk
xnoremap<nowait> j gj
xnoremap<nowait> k gk
nmap J 5j
nmap K 5k
xmap J 5j
xmap K 5k
nnoremap QQ :QuitTab<cr>
command! QuitTab call s:QuitTab()
function! s:QuitTab()
  try
    tabclose
  catch /E784/ " Can't close last tab
    qall
  endtry
endfunction
"}}}
" Scripting helpers {{{1
command -nargs=1 Warn echohl WarningMsg | echo <args> | echohl None
" }}}



