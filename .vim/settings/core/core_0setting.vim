if g:is_linux 
  let g:python_host_prog='/usr/bin/python'
endif
if g:is_mac 
    let g:python_host_prog='/usr/local/bin/python' # found via `which python`
endif

if has('nvim')
    let g:editor_root=expand("~/.vim")
    let &runtimepath.=','.expand("~/.vim")
elseif g:is_vim 
    let g:editor_root=expand("~/.vim")
    "set term=screen-256color
elseif g:is_win && g:is_gui
    let g:editor_root=expand("$HOME/vimfiles")
    let s:win_bin_dir=expand("$HOME/vim_bin")
endif

filetype plugin indent on
syntax on

source ~/dotfiles/.vim/Bundle.vim

" for rooter plugin to work properly
" Change to current file directory 
" will denn been control with Rooter Plugin
"set noautochdir 
"Completions 
set completefunc=syntaxcomplete#Complete
set complete=.,w,b,k,u,i,t 
    
set completeopt=longest,menuone,menu
set wildmenu
set wildmode=longest,full
set nojoinspaces

let mapleader=','

syntax enable 

" save file as root
command W w !sudo tee % > /dev/null
"buffer becomes hidden when it is abandoned
set hid
"" Configure backspace so it acts as it should act
set whichwrap+=<,>,h,l
"set lazyredraw " Don't redraw while executing macros (good performance config)
"" How many tenths of a second to blink when matching brackets
"set mat=2
"" DISPLAY SETTINGS
"set scrolloff=2         " 2 lines above/below cursor when scrolling
set showmatch           " show matching bracket (briefly jump)
set matchtime=2         " reduces matching paren blink time from the 5[00]ms
set showmode            " show mode in status bar (insert/replace/...)
set showcmd             " show typed command in status bar
set ruler               " show cursor position in status bar
set title               " show file in titlebar
set number
"
set noswapfile
set backup " enable backups
set undodir=$HOME/.tmp_vim/undo// " undo files
set backupdir=$HOME/.tmp_vim/backup// " backups
set directory=$HOME/.tmp_vim/swap// " swap files
set viewdir=$HOME/.tmp_vim/view

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
if !isdirectory(expand(&viewdir))
    call mkdir(expand(&viewdir), "p")
endif

if g:is_vim
"    set timeoutlen=1000
"    set ttimeoutlen=0
endif

if g:is_vim
    set backspace=eol,start,indent
    set incsearch
    set background=dark
    set autoread
"   set viminfo=!,'100,h,n~/.viminfo
   set fillchars=vert:\|
   set history=10000
endif

set wildignore=*.o,*.so,*.pyc,*.class,*.fasl,tags
set wildignore+=*.swp,*.cache,*.jar,*.bat,*.dat,*.gif
set wildignore+=.hg,.git,.svn " Version control"{{{
set wildignore+=*.aux,*.out,*.toc " LaTeX intermediate files"}}}
set wildignore+=*.jpg,*.bmp,*.gif,*.png,*.jpeg " binary images
set wildignore+=*.o,*.obj,*.exe,*.dll,*.manifest " compiled object files
set wildignore+=*.spl " compiled spelling word lists
set wildignore+=*.sw? " Vim swap files
set wildignore+=*.DS_Store " OSX bullshit
set wildignore+=*.luac " Lua byte code
set wildignore+=migrations " Django migrations
set wildignore+=*.pyc " Python byte code
set wildignore+=*.orig " Merge resolution files
set wildignore+=classes
set wildignore+=lib

"set foldopen=block,hor,insert,jump,mark,percent,quickfix,search,tag,undo

if g:is_gui 
  set guioptions-=T
  set guioptions-=l
  set guioptions-=L
  set guioptions-=r
  set guioptions-=R
  set guioptions-=m
  set guioptions-=M
  set guioptions-=l
  set guioptions-=b
  set guioptions-=L
  set guioptions-=mc " remove 'e' for terminal-style tabs
endif

"if executable('zsh')
"   set shell=zsh\ -l
"endif

" When restoring a hidden buffer Vim doesn't always keep the same view (like
" when your view shows beyond the end of the file). (Vim tip 1375)
if ! &diff
  au BufLeave * let b:winview = winsaveview()
  au BufEnter * if(exists('b:winview')) | call winrestview(b:winview) | endif
endif

"hack to save fold view
autocmd BufWrite * mkview
autocmd BufRead * silent loadview

"Resize split when the window is resizecd
au VimResized * :wincmd=
au VimResized * exe "normal! \<c-w>=" 
autocmd BufEnter * call g:CloseEmptyBuffer()
