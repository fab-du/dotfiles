
call plug#begin('~/.vim/bundle')
"Integration ---------------------------------------------"{{{
Plug 'tpope/vim-fugitive'     
Plug 'airblade/vim-gitgutter' 
Plug 'benmills/vimux'         
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
Plug 'vim-scripts/javacomplete', { 'for' : 'java'} 
Plug 'marijnh/tern_for_vim'
Plug 'Valloric/YouCompleteMe' , { 'for' : 'C++'} 
Plug 'rdnetto/YCM-Generator'  , { 'for' : 'C++'}  
Plug 'tdcdev/ycm_simple_conf' , { 'for' : 'C++'}  
" End Code completion ---------------------------------"}}}

"helper :  ---------------------------------------"{{{
" use by xolox plugins and others
" and this great function amongst others :  xolox#misc#os#exec()
Plug 'xolox/vim-misc'
Plug 'vim-scripts/DfrankUtil'
" End helper :  ---------------------------------------"}}}

" Full Language Support "{{{
Plug 'vim-ruby/vim-ruby'
Plug 'moll/vim-node'
Plug 'fatih/vim-go'
Plug 'vim-scripts/dbext.vim' 
Plug 'nono/jquery.vim'
Plug 'Townk/vim-qt'
Plug 'suan/vim-instant-markdown'
Plug 'pangloss/vim-javascript'
Plug 'jelera/vim-javascript-syntax'
Plug 'burnettk/vim-angular'
Plug 'tpope/vim-markdown'
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
Plug 'rking/ag.vim'
Plug 'justinmk/vim-sneak'
Plug 'majutsushi/tagbar'
" End Code Navigation"}}}

" Vanity stuff"{{{
Plug 'bling/vim-airline'
Plug 'jszakmeister/vim-togglecursor' 
Plug 'junegunn/goyo.vim'
" End Vanity stuff"}}}

" Snippet and dic"{{{
Plug 'guileen/vim-node-dict'
Plug 'jamescarr/snipmate-nodejs'
Plug 'vim-scripts/UltiSnips' | Plug 'honza/vim-snippets'
" End Snippet and dic"}}}

" Codify"{{{
Plug 'tpope/vim-unimpaired'
Plug 'scrooloose/nerdcommenter'
Plug 'tpope/vim-surround'
Plug 'godlygeek/tabular'
Plug 'mattn/emmet-vim'
Plug 'kana/vim-smartinput'
Plug 'Valloric/MatchTagAlways'
" End Codify"}}}

" File Navigation"{{{
Plug 'kien/ctrlp.vim'
Plug 'Shougo/unite.vim'
" En File Navigation"}}}

" @TODO  "{{{
Plug 'tpope/vim-abolish'
Plug 'scrooloose/syntastic'
Plug 'kana/vim-textobj-user' "}}}


Plug 'scrooloose/nerdtree', {'on', 'NERDTreeToggle'}
Plug 'othree/yajs.vim'
Plug 'othree/javascript-libraries-syntax.vim'
Plug 'christoomey/vim-tmux-navigator'

call plug#end()
