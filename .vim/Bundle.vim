let extend_installation=$FAB_DU_DOT_EXTENDED 
if extend_installation == '1'

if !filereadable(expand("~/.vim/autoload/plug.vim")) 
	echo "Installing Plug Manager ..."
	echo ""
	silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
endif

call plug#begin('~/.vim/bundle')
"Integration ---------------------------------------------"{{{
Plug 'tpope/vim-fugitive'     
Plug 'airblade/vim-gitgutter' 
Plug 'benmills/vimux'         
Plug 'christoomey/vim-tmux-navigator'
Plug 'junegunn/fzf', { 'dir': '~/.fzf' }
Plug 'tpope/vim-classpath' , { 'for' : 'java'}
Plug 'youjumpiwatch/vim-androidmanifest'
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
Plug 'artur-shaik/vim-javacomplete2'

"Plug 'Valloric/YouCompleteMe' , { 'do' : 'git submodule update --init --recursive && ./install.py' } 
"autocmd! User YouCompleteMe if !has('vim_starting') |  call youcompleteme#Enable() endif
"Plug 'rdnetto/YCM-Generator'  , { 'for' : 'cpp'}  
"Plug 'tdcdev/ycm_simple_conf' , { 'for' : 'cpp'}  
" End Code completion ---------------------------------"}}}

"helper :  ---------------------------------------"{{{
" use by xolox plugins and others
" and this great function amongst others :  xolox#misc#os#exec()
Plug 'xolox/vim-misc'
Plug 'vim-scripts/DfrankUtil'
" End helper :  ---------------------------------------"}}}

" Full Language Support "{{{
Plug 'vim-ruby/vim-ruby'
Plug 'fatih/vim-go'
Plug 'vim-scripts/dbext.vim'
Plug 'Townk/vim-qt'
Plug 'suan/vim-instant-markdown', {'for' : 'markdown', 'do' : 'npm install instant-markdown-d -g'}
Plug 'pangloss/vim-javascript'
Plug 'burnettk/vim-angular'
Plug 'moll/vim-node', {'for' : 'javascript.node'}
Plug 'tpope/vim-markdown' , {'for' : 'markdown'} 
" End Full Language Support "}}}

"Make"{{{
Plug 'thinca/vim-quickrun' 
if has('nvim')
    Plug 'benekastah/neomake'
endif 
" End Make"}}}

" Enhance vim built-in Features"{{{
Plug 'sjl/gundo.vim'
Plug 'mbbill/undotree'
Plug 'airblade/vim-rooter'
Plug '907th/vim-auto-save'

" End Enhance vim built-in Features"}}}

" Code Navigation"{{{
Plug 'mileszs/ack.vim', {'on' : 'Ack'}
Plug 'rking/ag.vim', {'on' : 'Ag'}
Plug 'justinmk/vim-sneak'
Plug 'majutsushi/tagbar'
" End Code Navigation"}}}

" Vanity stuff"{{{
Plug 'bling/vim-airline'

if g:is_vim
	Plug 'jszakmeister/vim-togglecursor' 
endif 

Plug 'junegunn/goyo.vim', {'on' : 'Goyo'}
" End Vanity stuff"}}}

" Snippets and dictionaries"{{{
Plug 'jamescarr/snipmate-nodejs', { 'for' : 'javascript.node'}
Plug 'bonsaiben/bootstrap-snippets', { 'for' :  'html' }
Plug 'vim-scripts/UltiSnips' | Plug 'honza/vim-snippets'
" End Snippets and dictionaries"}}}

" Codify"{{{
Plug 'tpope/vim-unimpaired'
Plug 'scrooloose/nerdcommenter'
Plug 'tpope/vim-surround'
Plug 'godlygeek/tabular'
Plug 'mattn/emmet-vim', { 'for' : 'html' }
Plug 'kana/vim-smartinput'
Plug 'Valloric/MatchTagAlways' "Match HTML tags
" End Codify"}}}

" File Navigation"{{{
Plug 'kien/ctrlp.vim'
Plug 'Shougo/unite.vim'
Plug 'Shougo/vimproc.vim', { 'do': 'make' }
" En File Navigation"}}}

" @TODO  "{{{
Plug '/home/batie/dotfiles/.vim/custom_plugins/tomorow_bright'
Plug 'tpope/vim-abolish'
Plug 'scrooloose/syntastic' 
Plug 'kana/vim-textobj-user' 
" End of TODO}}}

Plug 'scrooloose/nerdtree', {'on': 'NERDTreeToggle'}
Plug 'othree/html5.vim', { 'for' : 'html'}
"Plug 'othree/javascript-libraries-syntax.vim', {'for' : 'javascript'}
Plug 'wincent/ferret', { 'on' : ['Ack', 'Acks']}
Plug 'peterhoeg/vim-qml', { 'for' : 'qml'}

" local bundle
" Mainly for plugins dev and 
" plugin I m testing and did not adopt yet.
if filereadable(expand("~/.bundle_local.vim")) 
    source '~/.bundle_local.vim'
endif

function! DoRemote(arg)
  UpdateRemotePlugins
endfunction
Plug 'Shougo/deoplete.nvim', { 'do': function('DoRemote') }
Plug 'carlitux/deoplete-ternjs', { 'do': 'npm install -g tern'  }
Plug 'zchee/deoplete-go', {'do': 'make'}
Plug 'zchee/deoplete-jedi'

"rails
Plug 'tpope/vim-rails' | Plug 'tpope/vim-bundler'  | Plug 'tpope/vim-abolish' |Plug 'tpope/vim-abolish' | Plug 'vim-scripts/dbext.vim' |  Plug 'tpope/vim-rake' 
Plug 'tpope/vim-endwise'

Plug 'xuhdev/vim-latex-live-preview'


call plug#end()
endif

