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
nnoremap <silent> wh <esc><C-W><left>
nnoremap <silent> wl <esc><C-W><right>
nnoremap <silent> wk <esc><C-W><up>
nnoremap <silent> wj <esc><C-W><down>


inoremap <silent> <C-l> <esc><C-W><left>
inoremap <silent> <C-h> <esc><C-W><right>
inoremap <silent> <C-k> <esc><C-W><up>
inoremap <silent> <C-j> <esc><C-W><down>

nnoremap <silent>vs :vsplit new<CR>  
nnoremap <silent>hs :split <CR> 

nnoremap <silent><bar> <C-W><bar> 
nnoremap <silent>_ <C-W>_
nnoremap <silent>w= <C-W>=




"{{ Window 

nnoremap <leader>q :q!<CR> 
nnoremap <leader>wq :wq<CR> 
nnoremap <leader>ww :w<CR> 

" Resize windows with arrow keys
nnoremap <C-Up> <C-w>+
nnoremap <C-Down> <C-w>-
nnoremap <C-Left> <C-w><
nnoremap <C-Right> <C-w>>


"}}


