"Integration ---------------------------------------------"{{{
Plugin 'tpope/vim-fugitive'     
Plugin 'airblade/vim-gitgutter' 
Plugin 'benmills/vimux'         
Plugin 'tpope/vim-classpath'
Plugin 'youjumpiwatch/vim-androidmanifest'
Plugin 'vim-scripts/adt.vim'

"shell , completly write in vimL 
"mainly important for window system
"where the shell is not great at all. :/

if has('win32') || has('win64')
    Plugin 'Shougo/vimshell.vim'    
endif

" features 
" :Open something ( url , file , email ...)
" :FullScreen 
"  and this great function amongst others :  xolox#misc#os#exec()
" :call xolox#misc#os#exec({'command': 'vimrun', 'async': 1})
Plugin 'xolox/vim-shell'        

 " colored man in vim 
Plugin 'jez/vim-superman'       
" End Integration -----------------------------------------"}}}

" Code completion ------------------------------------"{{{
Plugin 'vim-scripts/javacomplete'
Plugin 'marijnh/tern_for_vim'
Plugin 'Valloric/YouCompleteMe'
Plugin 'rdnetto/YCM-Generator'
Plugin 'tdcdev/ycm_simple_conf'
" End Code completion ---------------------------------"}}}

"helper :  ---------------------------------------"{{{
" use by xolox plugins and others
" and this great function amongst others :  xolox#misc#os#exec()
Plugin 'xolox/vim-misc'
Plugin 'vim-scripts/DfrankUtil'
" End helper :  ---------------------------------------"}}}

" Full Language Support "{{{
Plugin 'vim-ruby/vim-ruby'
Plugin 'moll/vim-node'
Plugin 'fatih/vim-go'
Plugin 'vim-scripts/dbext.vim' 
Plugin 'nono/jquery.vim'
Plugin 'Townk/vim-qt'
Plugin 'suan/vim-instant-markdown'
Plugin 'pangloss/vim-javascript'
Plugin 'jelera/vim-javascript-syntax'
Plugin 'burnettk/vim-angular'
Plugin 'tpope/vim-markdown'
Plugin 'yuratomo/java-api-android'
" End Full Language Support "}}}

"Make"{{{
Plugin 'thinca/vim-quickrun' 
Plugin 'tpope/vim-dispatch'
if has('nvim')
    Plugin 'benekastah/neomake'
endif 
" End Make"}}}

" Enhance vim built-in Features"{{{
Plugin 'sjl/gundo.vim'
Plugin 'mbbill/undotree'
Plugin 'airblade/vim-rooter'
" End Enhance vim built-in Features"}}}

" Code Navigation"{{{
Plugin 'mileszs/ack.vim'
Plugin 'rking/ag.vim'
Plugin 'justinmk/vim-sneak'
Plugin 'majutsushi/tagbar'
" End Code Navigation"}}}

" Vanity stuff"{{{
Plugin 'bling/vim-airline'
Plugin 'jszakmeister/vim-togglecursor' 
Plugin 'junegunn/goyo.vim'
" End Vanity stuff"}}}

" Snippet and dic"{{{
Plugin 'guileen/vim-node-dict'
Plugin 'jamescarr/snipmate-nodejs'
Plugin 'vim-scripts/UltiSnips' 
" End Snippet and dic"}}}

" Codify"{{{
Plugin 'tpope/vim-unimpaired'
Plugin 'scrooloose/nerdcommenter'
Plugin 'tpope/vim-surround'
Plugin 'godlygeek/tabular'
Plugin 'mattn/emmet-vim'
Plugin 'kana/vim-smartinput'
Plugin 'Valloric/MatchTagAlways'
" End Codify"}}}

" File Navigation"{{{
Plugin 'kien/ctrlp.vim'
Plugin 'Shougo/unite.vim'
" End File Navigation"}}}

" @TODO  "{{{
Plugin 'tpope/vim-abolish'
Plugin 'scrooloose/syntastic'
Plugin 'kana/vim-textobj-user' "}}}


Plugin 'scrooloose/nerdtree'
Plugin 'othree/yajs.vim'
Plugin 'othree/javascript-libraries-syntax.vim'
Plugin 'christoomey/vim-tmux-navigator'

