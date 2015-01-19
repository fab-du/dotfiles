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
noremap <silent> wh <esc><C-W><left>
noremap <silent> wl <esc><C-W><right>
noremap <silent> wk <esc><C-W><up>
noremap <silent> wj <esc><C-W><down>


inoremap <silent> <C-l> <esc><C-W><left>
inoremap <silent> <C-h> <esc><C-W><right>
inoremap <silent> <C-k> <esc><C-W><up>
inoremap <silent> <C-j> <esc><C-W><down>

:nnoremap <silent>vs :vsplit new<CR>  
:nnoremap <silent>hs :split <CR> 

:nnoremap <silent><bar> <C-W><bar> 
:nnoremap <silent>_ <C-W>_
:nnoremap <silent>w= <C-W>=




"{{ Window 

nmap <leader>q :q!<CR> 
nmap <leader>wq :wq<CR> 
nmap <leader>ww :w<CR> 

" Resize windows with arrow keys
nnoremap <C-Up> <C-w>+
nnoremap <C-Down> <C-w>-
nnoremap <C-Left> <C-w><
nnoremap <C-Right> <C-w>>


"}}


