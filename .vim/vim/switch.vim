" All About switching window , tab ..... 

"Resize splits when the window is resize
au VimResized * :wincmd=

"Resize split when the window is resized 
au VimResized * exe "normal! \<c-w>=" 
"Tabs navigation 
nnoremap <silent>tz  :tabnext<CR>
nnoremap <silent>tr  :tabprevious<CR>
nnoremap <silent>tn  :tabnew<CR> 
nnoremap <silent>tc  :tabclose<CR> 
nnoremap <silent>ts  :tab split<CR> 
nnoremap <silent>tl  :tablast<CR> 
nnoremap <silent>tf  :tabfirst<CR> 
nnoremap <silent>te  :tabedit<CR>

"switch  between windows 
nnoremap <silent> fh <esc><C-W><left>
nnoremap <silent> fl <esc><C-W><right>
nnoremap <silent> fk <esc><C-W><up>
nnoremap <silent> fj <esc><C-W><down>


inoremap <silent> <C-l> <esc><C-W><left>
inoremap <silent> <C-h> <esc><C-W><right>
inoremap <silent> <C-k> <esc><C-W><up>
inoremap <silent> <C-j> <esc><C-W><down>

nnoremap <silent>f<bar> :vsplit<CR>  
nnoremap <silent>f_ :split <CR> 

nnoremap <silent><bar> <C-W><bar> 
nnoremap <silent>_ <C-W>_
nnoremap <silent>f= <C-W>=
"
"{{ Window 
nnoremap <leader>q :q!<CR> 
nnoremap <leader>wq :wq<CR> 
nnoremap <leader>ww :w<CR> 
vnoremap <left>  :2wincmd <<cr>
vnoremap <right> :2wincmd ><cr>
vnoremap <up>    :2wincmd +<cr>
vnoremap <down>  :2wincmd -<cr>
"}}
"}}}"}}}

" Edit a new file starting in the same dir as the current file
nnoremap <leader>ce :e <C-R>=expand("%:p:h") . "/" <cr>
nnoremap <leader>cs :sp <C-R>=expand("%:p:h") . "/" <cr>
nnoremap <leader>ct :tabnew <C-R>=expand("%:p:h") . "/" <cr>
