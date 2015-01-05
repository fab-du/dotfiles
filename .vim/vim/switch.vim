" All About switching window , tab ..... 

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

:nnoremap <silent>f<bar> :vsplit<CR>  
:nnoremap <silent>f_ :split <CR> 

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

" Edit a new file starting in the same dir as the current file
map <leader>ce :e <C-R>=expand("%:p:h") . "/" <cr>
map <leader>cs :sp <C-R>=expand("%:p:h") . "/" <cr>
map <leader>ct :tabnew <C-R>=expand("%:p:h") . "/" <cr>
