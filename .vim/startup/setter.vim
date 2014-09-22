set nocompatible  
scriptencoding utf-8
set encoding=utf-8
set term=xterm-256color
set t_Co=256 
set t_ut=
syntax on 
filetype on 
filetype indent on 
filetype plugin on 
"set modelines=0
set autoindent
set showmode
set showcmd
set hidden
set visualbell
set ttyfast
set ruler
set backspace=indent,eol,start
" Indent
" ---------------------------------------------------------------------------------------------------
nnoremap > >>
nnoremap < <<
vnoremap > >gv
vnoremap < <gv
set laststatus=2
set history=1000
set undofile
set undoreload=10000
set listchars=tab:▸\ ,eol:¬,extends:❯,precedes:❮
set list
set lazyredraw
set matchtime=3
set showbreak=↪
set splitbelow
set splitright
set autowrite
set autoread
set shiftround
set title
set linebreak
"set complete=.,w,b,u,t
set completeopt=longest,menuone,preview
let mapleader = ","
let maplocalleader = ";"

augroup trailing
    au!
    au InsertEnter * :set listchars-=trail:⌴
    au InsertLeave * :set listchars+=trail:⌴
augroup END


set wildmenu
set wildmode=list:longest

" Make sure Vim returns to the same line when you reopen a file.
" Thanks, Amit
augroup line_return
    au!
    au BufReadPost *
        \ if line("'\"") > 0 && line("'\"") <= line("$") |
        \     execute 'normal! g`"zvzz' |
        \ endif
augroup END
" }}}
" Tabs, spaces, wrapping {{{

set tabstop=8
set shiftwidth=4
set softtabstop=4
set expandtab
set wrap
set textwidth=80
set formatoptions=qrn1j
set colorcolumn=+1

set fillchars+=vert:\|

" }}}
" Backups {{{

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

set number 
set norelativenumber 

set ignorecase
set smartcase
set incsearch
set showmatch
set hlsearch
set gdefault
set scrolloff=3
set sidescroll=1
set sidescrolloff=10
set virtualedit+=block
">>>>>Hack to Save Fold view<<<<<<  
autocmd BufWrite * mkview
autocmd BufRead * silent loadview
nnoremap <Space> za
vnoremap <Space> za
"{ Make Alt-key work sanely }
set timeout ttimeoutlen=10
let c='a'
while c <= 'z'
 exec "set <A-".c.">=\e".c
"Trick to make Alt key work properly  
exec "imap \e".c." <A-".c.">"
 let c = nr2char(1+char2nr(c))
endw
" Ref: https://github.com/cohama/.vim/blob/master/.vimrc
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
imap <silent><expr>jk NotMoveWhenLeavingFromInsertMode()
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