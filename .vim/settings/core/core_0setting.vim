let g:is_win = has('win32') || has('win64')
let g:is_mac = has('mac') || system('uname') =~? '^darwin'
let g:is_linux = !g:is_mac && has('unix')

let g:is_gui = has('gui_running') || has('gui_macvim') 
let g:is_vim = g:is_linux && !g:is_gui


if g:is_linux 
  let g:python_host_prog='/usr/bin/python'
endif

if g:is_mac 
    let g:python_host_prog='/usr/local/bin/python' # found via `which python`
endif


if has('nvim')
    let g:editor_root=expand("~/.nvim")
elseif g:is_vim 
    let g:editor_root=expand("~/.vim")
    set term=screen-256color
elseif g:is_win && g:is_gui
    let g:editor_root=expand("$HOME/vimfiles")
    let s:win_bin_dir = expand("$HOME/vim_bin")
endif

set nocompatible              " be iMproved, required
    filetype off                  " required
    set rtp+="" . g:editor_root . "/bundle/Vundle.vim"
    call vundle#begin()
    Plugin 'VundleVim/Vundle.vim'
    source $HOME/dotfiles/.vim/Bundle.vim
call vundle#end()            " required

filetype plugin indent on
syntax on


" for rooter plugin to work properly
" Change to current file directory 
" will denn been control with Rooter Plugin
set noautochdir 

"Completions 
set completefunc=syntaxcomplete#Complete

set complete=.,w,b,k,u,i,t 
    "w  scan the current buffer ( 'wrapscan' is ignored) 
    "b	scan other loaded buffers that are in the buffer list
    "k	scan the files given with the 'dictionary' option
	"u	scan the unloaded buffers that are in the buffer list
	"i	scan current and included files
	"t	scan tag file
    
set completeopt=longest,menuone,menu
set omnifunc=syntaxcomplete#Complete
set wildmenu
set wildmode=longest,full
set formatoptions=croqn 
set nojoinspaces

set autochdir

set laststatus=2
set noshowmode
let mapleader=","
let g:mapleader=","

syntax enable 

" save file as root
command W w !sudo tee % > /dev/null
"buffer becomes hidden when it is abandoned
set hid
" Configure backspace so it acts as it should act
set backspace=eol,start,indent
set whichwrap+=<,>,h,l
" Don't redraw while executing macros (good performance config)
set lazyredraw 
" For regular expressions turn magic on
set magic
" How many tenths of a second to blink when matching brackets
set mat=2
" DISPLAY SETTINGS
set scrolloff=2         " 2 lines above/below cursor when scrolling
set showmatch           " show matching bracket (briefly jump)
set matchtime=2         " reduces matching paren blink time from the 5[00]ms
set showmode            " show mode in status bar (insert/replace/...)
set showcmd             " show typed command in status bar
set ruler               " show cursor position in status bar
set title               " show file in titlebar
set number

set noswapfile
set backup " enable backups
set undodir=$HOME/.vim/tmp/undo// " undo files
set backupdir=$HOME/.vim/tmp/backup// " backups
set directory=$HOME/.vim/tmp/swap// " swap files

"TODO
"set undodir="" . g:editor_root . "/tmp/undo//" 
"set backupdir="" . g:editor_root . "/tmp/backup//"
"set directory="". g:editor_root . "/tmp/swap//"


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

set timeoutlen=1000
set ttimeoutlen=0

set encoding=utf8
set fileformats="unix,dos,mac"
set modeline
set ttyfast
set t_Co=256
set background=dark
colorscheme ion
set startofline
set switchbuf=useopen,usetab

set noerrorbells
set visualbell
set t_vb=

set autoread

set sessionoptions+=tabpages,globals
set viminfo=!,'100,h,n~/.viminfo
set history=1000

set undolevels=10000
set undofile
set undoreload=1000

set nobackup

"set formatoptions=qn1c
set nrformats-=octal


"set nocursorline
"call matchadd("SpellRare", "\\%101v.", -1)
set virtualedit=all
set titlelen=100
set tabpagemax=19
set showtabline=1

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

set cmdheight=1
set report=0
set shortmess=IaA
set sidescrolloff=1

set smarttab
set expandtab
set softtabstop=4
set tabstop=4
set shiftwidth=4
set shiftround
set smartindent
set splitbelow
set splitright
set nowrap
set nolist
set fillchars=vert:\|
set listchars=tab:\|\ ,trail:·,precedes:…,extends:…
set textwidth=100
set showbreak=..
set linebreak
set ignorecase
set smartcase
set incsearch
set hlsearch
set gdefault
set nofoldenable
set foldopen=block,hor,insert,jump,mark,percent,quickfix,search,tag,undo
set foldtext=MyFoldText()
set foldmethod=marker "fdm: looks for patterns of triple-braces in a file
set foldcolumn=4 "fdc: creates a small left-hand gutter for displaying fold info
function MyFoldText()
  let line = getline(v:foldstart)
  let sub = substitute(line, '/\*\|\*/\|{{{\d\=', '', 'g')
  return v:folddashes . sub
endfunction
set columns=87 
set cc=80

hi clear FoldColumn | hi link FoldColumn Hidden
augroup hide_foldcolumn_signs
    au!
    au Colorscheme * hi clear FoldColumn | hi link FoldColumn Hidden
augroup END


if g:is_gui 
   "set guifont=Consolas\ For\ Powerline\ 11
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

 if executable('zsh')
	set shell=zsh\ -l
 endif

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
"au VimResized * :wincmd=
au VimResized * exe "normal! \<c-w>=" 


autocmd WinEnter * if &diff | call s:DiffTweaks() | endif
 
 function s:DiffTweaks()
   " I don't like the diff colors used by most color schemes…
   let diff_colors = 'default'
   if g:colors_name != diff_colors
     execute 'colorscheme' fnameescape(diff_colors)
   endif
   " I use automatic text folding which kind of breaks diff mode.
   setlocal nofoldenable
 endfunction


autocmd BufEnter * call s:CloseEmptyBuffer()

function s:CloseEmptyBuffer()
    if winnr('$') == 2 && &bt == 'help'
      let bufnr = tabpagebuflist()[1]
      let modified = getwinvar(2, '&modified')
      if bufname(bufnr) == '' && !modified
        only
      endif
    endif
endfunction
