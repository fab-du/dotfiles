
"2. Upper/Lower word
nmap <leader>u mQviwU`Q
nmap <leader>l mQviwu`Q

"3. Upper/Lower the firs char of word 
nmap <leader>U mQgewvU`Q
nmap <leader>L mQgewvu`Q


"System Clipboard interaction 
noremap <leader>y "*y 
noremap <leader>p :set paste<CR>"*p<CR>:set nopaste<CR>

"make <c-l> clear the highlight as well as redraw
nnoremap <C-L> :nohls<CR><C-L>
inoremap <C-L> <C-O>:nohls<CR>


"custom comma motion mapping
nmap di, f,dT,
nmap ci, f,cT,
nmap da, f,ld2F,i,<ESC>l "delete argument 
nmap ca, f,ld2F,i,<ESC>a "delete arg and insert

" delete surrounding characters
noremap ds{ F{xf}x
noremap cs{ F{xf}xi
noremap ds" F"x,x
noremap cs" F"x,xi
noremap ds' F'x,x
noremap cs' F'x,xi
noremap ds( F(xf)x
noremap cs( F(xf)xi
noremap ds) F(xf)x
noremap cs) F(xf)xi
