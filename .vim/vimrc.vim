"Documentation {{{
"
" BatLab
" Batie
" CodeFactory 
" Author : dufils fabrice 
"
" Documentation : 
" ---------------
"
"  Mappings : 
"
"  F1 : Search and Replace  
"       Nornmal Mode: 
"       F1 : search and replace word under the cursor
"       C-F1: ------------------||------------------- 
"       D-F1: ------------------||-------------------
"       Visual Mode: 
"       F1: Search and replace current selection
"       C-F1: ------------------||-------------------   
"       D-F1: ------------------||------------------- 
"  F2 : unimplemented 
"  F3 : Tagbar 
"  F4 : nerdTree 
"  F5 : Dispatch 
"  F6 : Run 
"  F7 : quickFix next 
"  F8 : quickFix previous 
"  F9 : Pastetoggle ( preserve indent )  
"  F10 : Toggle spell-checking
"  F11 : unimplemented  
"  F12 : unimplemented  

" Others Maps 
" Leader        =====>>> , 
" LocalLeader   =====>>> ; 

"Plugins : 
"
"1. Pathogen : pluginsverwaltung 
"
"Color-schemes
"-------------
"2.Lucius https://github.com/jonathanfilip/vim-lucius
"3.Blackboard https://github.com/vim-scripts/blackboard.vim 
"
"Syntax 
"------
"4. vim-qt https://github.com/Townk/vim-qt 
"5. javascript https://github.com/pangloss/vim-javascript
"
"Note : I have pretty much all the others syntax , i dont know how !! :-D 
"
"completion-engine 
"-----------------
"6. tern_for_vim    https://github.com/marijnh/tern_for_vim
"
"
"7. ycm             https://github.com/Valloric/YouCompleteMe
"
"8. emmet-vim       https://github.com/mattn/emmet-vim
"
"9. javacomplete    https://github.com/adragomir/javacomplete 
"Androidcomplete    https://github.com/yuratomo/java-api-android
"
"Very Special 
"------------
"10. Latex ( Syntax, compiler .... ) 
"
"Terminal Interaction 
"--------------------
"11. Vimux          https://github.com/benmills/vimux 
"
"Code Navigation 
"---------------
"12. Ack.vim        https://github.com/mileszs/ack.vim 
"
"
"13. Tagbar         https://github.com/majutsushi/tagbar
"
"
"14. EasyMotion     https://github.com/Lokaltog/vim-easymotion
"
"Beautify
"--------
"15. powerline ( I stop to use it because of 17. )  
"16. promptline.vim https://github.com/edkolev/promptline.vim
"                   https://github.com/edkolev/tmuxline.vim
"17. airline.vim    https://github.com/bling/vim-airline
"
"File Navigation 
"---------------
"18. Ctrl-P         https://github.com/kien/ctrlp.vim
"19. Ctrl-T         https://github.com/kien/ctrlp.vim
"20. FuzzyFinder    https://bitbucket.org/ns9tks/vim-fuzzyfinder
"21. Bufexplorer    https://github.com/jlanzarotta/bufexplorer
"22. MRU            https://github.com/yegappan/mru
"
"Debugging, Compilation, Make 
"----------------------------
"23. clewn          https://github.com/lekv/vim-clewn
"24. dispatch       https://github.com/tpope/vim-dispatch
"25. quickrun       https://github.com/vim-scripts/quickrun.vim
"26. errormarker    https://github.com/vim-scripts/errormarker.vim
"27. syntastic      https://github.com/scrooloose/syntastic
"
"MYSQL Integration 
"-----------------
"28. dbext 
"
"Snippet Engine 
"--------------
"29. Ultisnip       https://github.com/SirVer/ultisnips
"
"Various Utility 
"--------------- 
"30. Contextfiletype.vim 
"
"31. Delimitmate    https://github.com/Raimondi/delimitMate
"automatic closing of quotes, parenthesis, brackets, etc.,
"
"32. nerdcommenter https://github.com/scrooloose/nerdcommenter
"
"33. vim-rooter     https://github.com/airblade/vim-rooter
"The Plugin is easy enough to use , therefor dont need any mapping 
"just enter Cmd  :Rooter to go in root directory of the Project. 
"
"34. vim-textObject-user
"
"35. precious.vim 
"
"36. Doxygen.vim    https://github.com/vim-scripts/DoxygenToolkit.vim
"    
" }}}
" OS {{{
"====================================================================================================
let s:is_win   = has('win32') || has('win64')
let s:is_mac   = has('mac') || system('uname') =~? '^darwin'
let s:is_linux = !s:is_mac && has('unix')
" }}}
"{{{
set nocompatible                "cp:    turns off strct vi compatibility
filetype plugin indent on
call pathogen#infect()
"}}}
"Setter"{{{
set t_Co=256 
set t_ut= 
"Easy Indent 
nnoremap > >>
nnoremap < <<
vnoremap > >gv
vnoremap < <gv
            
set showbreak=↪
"set listchars=tab:>-,eol:¬,extends:❯,precedes:❮

set autowrite
set autoread

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
" Search {{{
set incsearch                   "is:    automatically begins searching as you type
set ignorecase                  "ic:    ignores case when pattern matching
set smartcase                   "scs:   ignores ignorecase when pattern contains uppercase characters
set hlsearch                    "hls:   highlights search results
" }}}
" Line Wrap {{{
set backspace=indent,eol,start  "bs:    allows you to backspace over the listed character types
set linebreak                   "lbr:   causes vim to not wrap text in the middle of a word
set wrap                        "wrap:  wraps lines by default
" Toggle line wrapping in normal mode:
"nmap <silent> <C-P> :set nowrap!<cr>:set nowrap?<cr>
" }}}
" Editing {{{
set showmatch                   "sm:    flashes matching brackets or parentheses
" Searches the current directory as well as subdirectories with commands like :find, :grep, etc.
set path=**

set cindent                     "cin:   enables the second-most configurable indentation (see :help C-indenting).
set cinoptions=l1,c4,(s,U1,w1,m1,j1,J1

set formatoptions+=j            "fo:    remove comment leader when joining lines

set expandtab                   "et:    uses spaces instead of tab characters
set smarttab                    "sta:   helps with backspacing because of expandtab
set softtabstop=4               "ts:    number of spaces that a tab counts for
set shiftwidth=4                "sw:    number of spaces to use for autoindent
set shiftround                  "sr:    rounds indent to a multiple of shiftwidth

set nojoinspaces                "nojs:  prevents inserting two spaces after punctuation on a join (it's not 1990 anymore)
set lazyredraw                  "lz:    will not redraw the screen while running macros (goes faster)
set pastetoggle=<F9>            "pt:    useful so auto-indenting doesn't mess up code when pasting

set complete=.,w,b,u            "cpt:   default insert completion minus tags and included files

set virtualedit=block           "ve:    let cursor move past the last char in <C-V> mode
set nostartofline               "sol:   avoid moving cursor to BOL when jumping around

set cryptmethod=blowfish        "cm:    use (much) stronger blowfish encryption

" Fix for legacy vi inconsistency
map Y y$

" Allow undoing insert-mode ctrl-u and ctrl-w
inoremap <C-U> <C-G>u<C-U>
inoremap <C-W> <C-G>u<C-W>


" Add a line without changing position or leaving mode
map <leader>o :set paste<cr>m`o<esc>``:set nopaste<cr>
map <leader>O :set paste<cr>m`O<esc>``:set nopaste<cr>

" A shortcut to show the numbered register contents
map <F2> :reg "0123456789-*+:/<cr>

" Toggle spell-checking
map <silent> <F10> :set nospell!<cr>:set nospell?<cr>

" Maps Omnicompletion to CTRL-space since ctrl-x ctrl-o is for Emacs-style RSI
inoremap <nul> <C-X><C-O>

" don't select first item, follow typing in autocomplete
set completeopt=longest,menuone,preview

" Edit a new file starting in the same dir as the current file
map <leader>ce :e <C-R>=expand("%:p:h") . "/" <cr>
map <leader>cs :sp <C-R>=expand("%:p:h") . "/" <cr>
map <leader>ct :tabnew <C-R>=expand("%:p:h") . "/" <cr>

" Highlight problem lines: more than 80 chars, trailing spaces, only whitespace
" Toggle with \l
nnoremap <silent> <leader>l
      \ :set nolist!<cr>:set nolist?<cr>
      \ :if exists('w:long_line_match') <bar>
      \   silent! call matchdelete(w:long_line_match) <bar>
      \   unlet w:long_line_match <bar>
      \ elseif &textwidth > 0 <bar>
      \   let w:long_line_match = matchadd('ErrorMsg', '\%>'.&tw.'v.\+', -1) <bar>
      \ else <bar>
      \   let w:long_line_match = matchadd('ErrorMsg', '\%>80v.\+', -1) <bar>
      \ endif<cr>

" Find merge conflict markers
map <leader>fc /\v^[<=>]{7}( .*\|$)<cr>

set dictionary=spell        " dict:     complete words from the spelling dict (when spell is on)
" set thesaurus             " tsr:      complete words from a thesaurus

" Use generic omnicompletion if something more specific isn't already set
if has("autocmd") && exists("+omnifunc")
    au Filetype *
        \ if &omnifunc == "" | setl omnifunc=syntaxcomplete#Complete | endif
endif

if has("autocmd")
    " Helps if you have to use another editor on the same file
    au FileChangedShell * Warn "File has been changed outside of Vim."
endif

" Restore last cursor position in file
autocmd BufReadPost *
    \ if line("'\"") > 0 && line("'\"") <= line("$") |
    \   exe "normal g`\"" |
    \ endif

" If a ftplugin has defined the b:ftskeleton variable, try to load the
" skeleton template.
au BufNewFile * silent! exe "0r ". b:ftskeleton

" Insert timestamps by calling out to date; override format by filetype
let b:dateformat = ''
nmap <silent> <leader>dts :exe ':r !date '. escape(b:dateformat, '%')<cr>

" }}}
" Folding (spacebar toggles) {{{
" Spacebar toggles a fold, zi toggles all folding, zM closes all folds
noremap  <silent>  <space> :exe 'silent! normal! za'.(foldlevel('.')?'':'l')<cr>
set foldmethod=marker           "fdm:   looks for patterns of triple-braces in a file
set foldcolumn=4                "fdc:   creates a small left-hand gutter for displaying fold info
" }}}
" Menu completion {{{
set suffixes+=.pyc,.pyo         " Don't autocomplete these filetypes
set wildmenu                    "wmnu:  enhanced ex command completion
set wildmode=longest:full,list:full  "wim:   helps wildmenu auto-completion
" }}}
" Window Layout {{{
set encoding=utf-8
"set relativenumber              "rnu:   show line numbers relative to the current line; <leader>u to toggle
"set number                      "nu:    show the actual line number for the current line in relativenumber
set showmode                    "smd:   shows current vi mode in lower left
set showcmd                     "sc:    shows typed commands
set ttyfast                     "tf:    improves redrawing for newer computers
set history=200                 "hi:    number of search patterns and ex commands to remember
set viminfo='200                "vi:    For a nice, huuuuuge viminfo file
" }}}
" Multi-buffer/window/tab editing {{{

set switchbuf=usetab            "swb:   Jumps to first tab or window that contains specified buffer instead of duplicating an open window
set hidden                      "hid:   allows opening a new buffer in place of an existing one without first saving the existing one


" Display a list of included files and quickly jump to one
"map <F4> [I:let nr = input("Which one: ")<bar>exe "normal " . nr ."[\t"<cr>

" When restoring a hidden buffer Vim doesn't always keep the same view (like
" when your view shows beyond the end of the file). (Vim tip 1375)
if ! &diff
    au BufLeave * let b:winview = winsaveview()
    au BufEnter * if(exists('b:winview')) | call winrestview(b:winview) | endif
endif


" Disable one diff window during a three-way diff allowing you to cut out the
" noise of a three-way diff and focus on just the changes between two versions
" at a time. Inspired by Steve Losh's Splice
function! DiffToggle(window)
    " Save the cursor position and turn on diff for all windows
    let l:save_cursor = getpos('.')
    windo :diffthis

    " Turn off diff for the specified window (but keep scrollbind) and move
    " the cursor to the left-most diff window
    exe a:window . "wincmd w"
    diffoff
    set scrollbind
    set cursorbind
    exe a:window . "wincmd " . (a:window == 1 ? "l" : "h")

    " Update the diff and restore the cursor position
    diffupdate
    call setpos('.', l:save_cursor)
endfunction
" Toggle diff view on the left, center, or right windows
nmap <silent> <leader>dl :call DiffToggle(1)<cr>
nmap <silent> <leader>dm :call DiffToggle(2)<cr>
nmap <silent> <leader>dr :call DiffToggle(3)<cr>
nmap <silent> <leader>du :diffupdate<cr>


" }}}
" X11 Integration {{{
" (I.e.: don't do any automatic integration, please :)
set mouse=                      "       Disable mouse control for console Vim (very annoying)
set clipboard=                  "       Disable automatic X11 clipboard crossover
" }}}

" Shorten the timeout when looking for a paren match to highlight
let g:matchparen_insert_timeout = 5
set synmaxcol=500               "smc:	Stop syntax highlighting on very long lines
syntax enable

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
" Plugin: Gundo "{{{
nnoremap <F11> :GundoToggle<cr>
"}}}
""" Syntastic settings"{{{
let g:syntastic_enable_highlighting = 0
let g:syntastic_check_on_wq = 0
let g:syntastic_error_symbol = 'E'
let g:syntastic_style_error_symbol = 'S'
let g:syntastic_warning_symbol = 'W'
let g:syntastic_style_warning_symbol = 'S'
let g:syntastic_always_populate_loc_list = 1
"jump to the first issue detected if error"
let g:syntastic_auto_jump = 2
nmap <silent> <F6> :SyntasticCheck<cr>

if ! &diff
    let g:syntastic_check_on_open = 1
endif
"}}}
"Plugin :Tagbar "{{{
map <F3> :TagbarToggle<cr>
let g:tagbar_sort = 0
let g:tagbar_compact = 1
let g:tagbar_autoshowtag = 1
let g:tagbar_width = 25
let g:tagbar_iconchars = ['+', '-']
"}}}

"All Window, Tab, Navigation related {{{"{{{
"Resize splits when the window is resize
au VimResized * :wincmd=

"Resize split when the window is resized 
au VimResized * exe "normal! \<c-w>=" 
"Tabs navigation 
nmap <silent>tz  :tabnext<CR>
nmap <silent>tr  :tabprevious<CR>
nmap <silent>tn  :tabnew<CR> 
nmap <silent>tc  :tabclose<CR> 
nmap <silent>ts  :tab split<CR> 
nmap <silent>tl  :tablast<CR> 
nmap <silent>tf  :tabfirst<CR> 
nmap <silent>te  :tabedit<CR>

"switch  between windows 
noremap <silent> fh <esc><C-W><left>
noremap <silent> fl <esc><C-W><right>
noremap <silent> fk <esc><C-W><up>
noremap <silent> fj <esc><C-W><down>


inoremap <silent> <C-l> <esc><C-W><left>
inoremap <silent> <C-h> <esc><C-W><right>
inoremap <silent> <C-k> <esc><C-W><up>
inoremap <silent> <C-j> <esc><C-W><down>

:nnoremap <silent>vs :vsplit<CR>  
:nnoremap <silent>hs :split <CR> 

:nnoremap <silent><bar> <C-W><bar> 
:nnoremap <silent>_ <C-W>_
:nnoremap <silent>f= <C-W>=
"
"{{ Window 
nmap <leader>q :q!<CR> 
nmap <leader>wq :wq<CR> 
nmap <leader>ww :w<CR> 
vnoremap <left>  :2wincmd <<cr>
vnoremap <right> :2wincmd ><cr>
vnoremap <up>    :2wincmd +<cr>
vnoremap <down>  :2wincmd -<cr>
"}}
"}}}"}}}

" CDC = Change to Directory of Current file"{{{
command CDC cd %:p:h
"}}}
" Plugin: YouCompleteMe {{{
let g:ycm_min_num_of_chars_for_completion = 3  
let g:ycm_collect_identifiers_from_tags_files = 1
let g:ycm_seed_identifiers_with_syntax = 1
let g:ycm_key_list_select_completion   = ['<Tab>']
let g:ycm_key_list_previous_completion = ['<S-Tab>']
nnoremap <localleader>dia :YcmForceCompileAndDiagnostics<cr>
nnoremap <localleader>gd  :YcmCompleter GoToDefinitionElseDeclaration<CR>
nnoremap <localleader>d  :YcmCompleter GoToDefinition<CR>
nnoremap <localleader>D  :YcmCompleter GoToDeclaration<CR>
"let g:ycm_filetype_specific_completion_to_disable = {'javascript': 1}
let g:ycm_filetype_blacklist = {
      \ 'tagbar' : 1,
      \ 'qf' : 1,
      \ 'notes' : 1,
      \ 'markdown' : 1,
      \ 'unite' : 1,
      \ 'text' : 1,
      \ 'vimwiki' : 1,
      \ 'pandoc' : 1,
      \ 'clojure' : 1,
      \}
" }}}
"Plugin: Doxygen "{{{
let MakeDoxygenComment_briefTag		= "@brief "
let MakeDoxygenComment_paramTag		= "@param " 
let MakeDoxygenComment_returnTag	= "@return "
"}}}
" Plugin: Ack "{{{
let g:ackprg="ack-grep -H --nocolor --nogroup --column" 
"Open a new tab and search for something 
nmap <silent>grep :tab split<CR>:Ack ""<left> 
"Immediately search for the word under the cursor in new Tab 
nmap <silent>Grep :tab split<CR>:Ack <C-r><C-w><CR> 
"}}}
" Plugin: Vimux "{{{
let VimuxUseNearestPane = 1
let g:VimuxOrientation = "v"
let g:VimuxHeight = "20"
let g:VimuxUseNearestPane = 0
nmap <silent>T :VimuxPromptCommand<CR>
nmap <silent>!! :VimuxRunLastCommand<CR>
vmap <silent>Ts "vy :call VimuxSendText(@v)<CR>:call VimuxSendKeys("Enter")<CR>
nmap <silent>Tc :VimuxInterruptRunner<CR>
"}}}
" Plugin: Dispatch "{{{

function! DetermineCplusplusProject() 
        exec ':Rooter'
        let s:project = system('ls | grep "*.pro"') "since Qt project have a project conf file with .pro extension 
        if( s:project == '') "Not a Qt project 
            "
            "
        else "Qt Project 
            let b:dispatch = '/home/batlab/bin/qt_make.sh' 
        endif 
endfunction 

autocmd FileType java let  b:dispatch = 'javac %'
autocmd FileType c    let  b:dispatch = 'gcc -ggdb3 %'
autocmd Filetype sql  let  b:dispatch = 'source %'
autocmd Filetype tex  let  b:dispatch = 'latex % && xdvi *.dvi'
autocmd FileType js   let  b:dispatch = 'jshint %'
autocmd FileType java  :call DetermineJavaProject() 
nnoremap <F5> :Dispatch<CR> 
inoremap <F5> <ESC>:Dispatch<CR> 
""}}}
" Plugin: nerdTree "{{{
nmap <F4> :NERDTreeToggle<CR> 
inoremap <F4> <ESC>:NERDTreeToggle<CR> 
"}}}
" Plugin: Ultisnip  "{{{

let g:UltiSnipsExpandTrigger="sn"
let g:ulti_expand_or_jump_res = 0 "default value, just set once
function! Ulti_ExpandOrJump_and_getRes()
call UltiSnips_ExpandSnippetOrJump()
return g:ulti_expand_or_jump_res
endfunction
inoremap <NL> <C-R>=(Ulti_ExpandOrJump_and_getRes() > 0)?"":IMAP_Jumpfunc('', 0)<CR>
let g:UltiSnipsSnippetsDir = "~/.vim/my/UltiSnips/"
"}}}
" Plugin: Emmet "{{{
imap ö <C-y>,
nmap ö <C-y> 
vmap ö <C-y> 
"}}}
" Plugin: FuzzyFinder "{{{
nmap ,f :FufFileWithCurrentBufferDir<CR>
nmap ,b :FufBuffer<CR>
nmap ,t :FufTaggedFile<CR>
"}}}
"Search and Replace "{{{
"unmap <F1> "Since F1 is a Build-in mapping use for help 
nnoremap <F1> /<c-r><c-w><cr>
nnoremap <C-F1> /<c-r><c-w><cr>N:%s/<c-r><c-w>//gc<left><left><left>
nnoremap <A-F1> /<c-r><c-w><cr>N:%s/<c-r><c-w>//gc<left><left><left>
" search & current selection, support new-line
vnoremap <F1> "sy/<c-r>=substitute(@s,'\n','\\n','g')<cr>/<cr>
vnoremap <C-F1> "sy/<c-r>=substitute(@s,'\n','\\n','g')<cr>/<cr>N:%s/<c-r>=substitute(@s,'\n','\\n','g')<cr>//gc<left><left><left>
vnoremap <A-F1> "sy/<c-r>=substitute(@s,'\n','\\n','g')<cr>/<cr>N:%s/<c-r>=substitute(@s,'\n','\\n','g')<cr>//gc<left><left><left>
"}}}
" Align text {{{
nnoremap <leader>Al :left<cr>
nnoremap <leader>Ac :center<cr>
nnoremap <leader>Ar :right<cr>
vnoremap <leader>Al :left<cr>
vnoremap <leader>Ac :center<cr>
vnoremap <leader>Ar :right<cr>
"}}}
" Clear search {{{
nnoremap <C-l> :noh<cr>
"}}}
" Reselect text that was just pasted {{{
" http://stevelosh.com/blog/2010/09/coming-home-to-vim/
nnoremap <leader>v V`]
"}}}
" System clipboard interaction {{{ 
" https://github.com/henrik/dotfiles/blob/master/vim/config/mappings.vim
noremap <leader>y "*y
noremap <leader>p :set paste<CR>"*p<CR>:set nopaste<CR>
"}}}
"Mark{{{
nnoremap <leader>ma :marks<CR>
"}}}

nnoremap <localleader>; A;<Esc>
nnoremap mn ]m  " Jump to the next function 
nnoremap mN [m  " jump to the previous Function 

"WinMove {{{
noremap <C-e> 5<C-e>
noremap <C-y> 5<C-y>
"}}}
"Markdown " {{{2
augroup markdown 
   au!
   au BufRead,BufNewFile *.md set filetype=markdown
   nmap <leader>md :%!markdown --html4tags <cr>
   au BufEnter * let &complete=".,w,b,u,t,i"
   au BufNewFile,BufRead,BufWrite *.txt,*.md,*.mkd,*.markdown,*.mdwn setl ft=markdown ts=3 sw=3
   au BufNewFile,BufRead,BufWrite *.txt,*.md,*.mkd,*.markdown,*.mdwn let &complete="k".expand("%:p:h")."/*.md"
   au BufNewFile,BufRead,BufWrite *.txt,*.md,*.mkd,*.markdown,*.mdwn set dictionary=~/.vim/dict/german.dict  
   au BufRead,BufWrite,InsertChange *.txt,*.md,*.mkd,*.markdown,*.mdwn syn match ErrorMsg '\%>77v.\+'
   "au BufNewFile,BufRead */_posts/*.markdown setl completefunc=TagComplete | cd $BLOG/source
   let g:tcommentGuessFileType_markdown = 'html'
augroup end
"}}}
"Plugin: CtrlP {{{
nnoremap <silent>mru :CtrlPMRUFiles<CR>  
"}}}


" eof
" vim:ft=vim:fdm=marker:ff=unix:nowrap:tabstop=4:shiftwidth=4:softtabstop=4:smarttab:shiftround:expandtab
