function! s:isNode()
	let shebang = getline(1)
	if shebang =~# '^#!.*/bin/env\s\+node\>' | return 1 | en
	if shebang =~# '^#!.*/bin/node\>' | return 1 | en
	return 0
endfunction


if g:plugin_manager_installed
call plug#begin('~/.vim/bundle')
"Integration ---------------------------------------------"{{{
Plug 'tpope/vim-fugitive'     
Plug 'airblade/vim-gitgutter' 
Plug 'benmills/vimux'         
Plug 'christoomey/vim-tmux-navigator'
Plug 'junegunn/fzf', { 'dir': '~/.fzf' }
Plug 'tpope/vim-classpath' , { 'for' : 'java'}
Plug 'youjumpiwatch/vim-androidmanifest' , { 'for' : 'java'}
Plug 'vim-scripts/adt.vim', { 'for' : 'java'}

"shell , completly write in vimL 
"mainly important for window system
"where the shell is not great at all. :/

if has('win32') || has('win64')
    Plug 'Shougo/vimshell.vim'    
endif

" features 
" :Open something ( url , file , email ...)
" :FullScreen 
"  and this great function amongst others :  xolox#misc#os#exec()
" :call xolox#misc#os#exec({'command': 'vimrun', 'async': 1})
Plug 'xolox/vim-shell'        

 " colored man in vim 
Plug 'jez/vim-superman'       
" End Integration -----------------------------------------"}}}

" Code completion ------------------------------------"{{{
"Plug 'vim-scripts/javacomplete', { 'for' : 'java'} 
Plug 'artur-shaik/vim-javacomplete2'

Plug 'marijnh/tern_for_vim', {'for': 'javascript', 'do' : 'npm install'}
Plug 'Valloric/YouCompleteMe' , { 'do' : 'git submodule update --init --recursive && ./install.sh' } 
autocmd! User YouCompleteMe call youcompleteme#Enable()
Plug 'rdnetto/YCM-Generator'  , { 'for' : 'cpp'}  
Plug 'tdcdev/ycm_simple_conf' , { 'for' : 'cpp'}  
" End Code completion ---------------------------------"}}}

"helper :  ---------------------------------------"{{{
" use by xolox plugins and others
" and this great function amongst others :  xolox#misc#os#exec()
Plug 'xolox/vim-misc'
Plug 'vim-scripts/DfrankUtil'
" End helper :  ---------------------------------------"}}}

" Full Language Support "{{{
Plug 'vim-ruby/vim-ruby', { 'for' : 'ruby'}
Plug 'moll/vim-node', { 'for' : 'node'}
Plug 'fatih/vim-go'
Plug 'vim-scripts/dbext.vim', { 'for': 'sql'}
Plug 'nono/jquery.vim'
Plug 'Townk/vim-qt', { 'for' : 'cpp'}
Plug 'suan/vim-instant-markdown', {'for' : 'markdown', 'do' : 'npm install instant-markdown-d -g'}
Plug 'pangloss/vim-javascript'
Plug 'jelera/vim-javascript-syntax'
Plug 'burnettk/vim-angular'
Plug 'tpope/vim-markdown' , {'for' : 'markdown'} 
Plug 'yuratomo/java-api-android'
" End Full Language Support "}}}

"Make"{{{
Plug 'thinca/vim-quickrun' 
Plug 'tpope/vim-dispatch'
if has('nvim')
    Plug 'benekastah/neomake'
endif 
" End Make"}}}

" Enhance vim built-in Features"{{{
Plug 'sjl/gundo.vim'
Plug 'mbbill/undotree'
Plug 'airblade/vim-rooter'
" End Enhance vim built-in Features"}}}

" Code Navigation"{{{
Plug 'mileszs/ack.vim'
Plug 'rking/ag.vim', {'on' : 'Ag'}
Plug 'justinmk/vim-sneak'
Plug 'majutsushi/tagbar'
" End Code Navigation"}}}

" Vanity stuff"{{{
Plug 'bling/vim-airline'
Plug 'jszakmeister/vim-togglecursor' 
Plug 'junegunn/goyo.vim'
" End Vanity stuff"}}}

" Snippet and dic"{{{
Plug 'jamescarr/snipmate-nodejs', { 'for' : 'node'}
Plug 'vim-scripts/UltiSnips' | Plug 'honza/vim-snippets'
" End Snippet and dic"}}}

" Codify"{{{
Plug 'tpope/vim-unimpaired'
Plug 'scrooloose/nerdcommenter'
Plug 'tpope/vim-surround'
Plug 'godlygeek/tabular'
Plug 'mattn/emmet-vim', { 'for' : 'html'}
Plug 'kana/vim-smartinput'
Plug 'Valloric/MatchTagAlways'
" End Codify"}}}

" File Navigation"{{{
Plug 'kien/ctrlp.vim'
Plug 'Shougo/unite.vim'
Plug 'Shougo/vimproc.vim', { 'do': 'make' }

" En File Navigation"}}}

" @TODO  "{{{
Plug 'tpope/vim-abolish'
Plug 'scrooloose/syntastic'
Plug 'kana/vim-textobj-user' "}}}


Plug 'scrooloose/nerdtree', {'on': 'NERDTreeToggle'}
Plug 'othree/yajs.vim'
Plug 'xaviershay/tslime.vim'
Plug 'bonsaiben/bootstrap-snippets', { 'for' :  'html' }
Plug 'wincent/ferret'
Plug 'peterhoeg/vim-qml', { 'for' : 'qml'}

"vim plugin developpment
Plug '~/vim_java_utils'
Plug '~/dictplugin'

call plug#end()

endif
