"CtrlP Mapping

if exists('g:loaded_ctrlp')
	nnoremap <leader>b     :CtrlPBuffer<CR>
	nnoremap <leader>f     :CtrlP<CR>
	nnoremap <leader>mru   :CtrlPMRUFiles<CR>
	nnoremap <leader>t     :CtrlPTag<CR>
endif
            
"tabularize
if exists('g:loaded_tabularize')
	nnoremap =  :Tabularize /
	vnoremap =  ":Tabularize /"
	nnoremap == :Tabularize /=<CR>
	vnoremap == :Tabularize /=<CR>
	nnoremap =: :Tabularize /:<CR>
	vnoremap =: :Tabularize /:<CR>
endif


"Surround "mapping"
nnoremap <C-"> viw<esc>a"<esc>hbi"<esc>lel 
nnoremap <C-'> viw<esc>a'<esc>hbi'<esc>lel
                         
"Sneak mapping 
if exists('g:loaded_sneak_plugin')
	nnoremap <C-Space> <Plug>SneakForward
	nmap ; <Plug>SneakPrevious
	xmap ; <Plug>SneakPrevious
	omap ; <Plug>SneakPrevious
	nmap s <Plug>Sneak_f
	nmap S <Plug>Sneak_F
	xmap s <Plug>Sneak_f
	xmap S <Plug>Sneak_F
	omap s <Plug>Sneak_f
	omap S <Plug>Sneak_F
	nmap s <Plug>Sneak_t
	nmap T <Plug>Sneak_T
	xmap t <Plug>Sneak_t
	xmap T <Plug>Sneak_T
	omap t <Plug>Sneak_t
	omap T <Plug>Sneak_T
endif

"Quickfix window 
nnoremap <silent><leader>qc :cclose<CR> 
nnoremap <silent><leader>qo :copen<CR>

"Smart tags 
nnoremap <silent> ü <C-]> 
" jump to Tag in split
nnoremap <silent> Ü :let word=expand("<cword>")<CR>:vsp<CR>:wincmd w<cr>:exec("tag".word)<cr> 


if exists('g:loaded_tagbar')
	nnoremap <F3>       :TagbarToggle<cr>
	inoremap <F3>  <ESC>:TagbarToggle<cr>
endif

if exists('g:loaded_ner')
	nnoremap <F4>       :NERDTreeToggle<CR> 
	inoremap <F4>  <ESC>:<NERDTreeToggle<CR> 
endif

if exists('g:loaded_syntastic')
	nnoremap <F5>       :SyntasticCheck<CR> 
	inoremap <C-F5><ESC>:SyntasticCheck<CR> 
endif

if exists('g:loaded_dispatch')
	nnoremap <F6>       :Dispatch<CR>
	inoremap <F6>       :Dispatch<CR>
endif

if exists('g:loaded_quickrun')
	nnoremap <leader>qr :QuickRun -outputter/buffer/split "botright 8sp"<CR>
endif

set pastetoggle     =<F10>
"nnoremap <F11>      :registers<CR> 
nnoremap <F12>      :nohls

nmap <expr>t nr2char( getchar())
nmap <expr>t1 ":tabn 1 <cr>"
nmap <expr>t2 ":tabn 2 <cr>" 
nmap <expr>t3 ":tabn 3 <cr>"
nmap <expr>t4 ":tabn 4 <cr>"
nmap <expr>t5 ":tabn 5 <cr>"
nmap <expr>t6 ":tabn 6 <cr>"
nmap <expr>t7 ":tabn 7 <cr>"
nmap <expr>t8 ":tabn 8 <cr>"
nmap <expr>t9 ":tabn 9 <cr>"
nnoremap <silent>tz :tabnext<CR>
nnoremap <silent>tr :tabprevious<CR>
nnoremap <silent>tn :tabnew<CR>
nnoremap <silent>tc :tabclose<CR>
nnoremap <silent>ts :tab split<CR>
nnoremap <silent>tl :tablast<CR>
nnoremap <silent>tf :tabfirst<CR>
nnoremap <silent>te :tabedit<CR>
"switch between windows
if exists('g:loaded_tmux_navigator')
	nnoremap <silent> fh :TmuxNavigateLeft  "<esc><C-W><left>
	nnoremap <silent> fl :TmuxNavigateRight "<esc><C-W><right>
	nnoremap <silent> fk :TmuxNavigateUp    "<esc><C-W><up>
	nnoremap <silent> fj :TmuxNavigateDown  "<esc><C-W><down>
else
	nnoremap <silent> fh <esc><C-W><left>
	nnoremap <silent> fl <esc><C-W><right>
	nnoremap <silent> fk <esc><C-W><up>
	nnoremap <silent> fj <esc><C-W><down>
endif
"Split window
nnoremap <silent>fv <esc>:vsplit 
nnoremap <silent>_ <C-W>_
nnoremap <silent><bar> <C-W><bar>
nnoremap <silent>f= <C-W>=

"Clipboard interaction
nnoremap<silent><leader>p mz:-1r !xclip -o -sel clip<CR>`z
vnoremap<silent><leader>y :!xclip -f -sel clip<cr>

nnoremap <silent> g<leader>.   :call <SID>go_current()<CR>
nnoremap <silent> g<leader>p   :call <SID>go_root()<CR> 
nnoremap <silent> g<leader>f   :Unite function<cr>
nnoremap <silent> g<leader>l   :Unite line -auto-preview<cr>
nnoremap <silent> g<leader>v   :Unite runtimepath -default-action=rec<cr>
nnoremap <silent> g<leader>t   :Unite tag <cr>

function s:go_root()
   exec "CDC"
   exec "Rooter"
   exec "FZF " . getcwd()
endfunction

function s:go_current()
   :CDC
   exec "FZF " . fnameescape(expand("%:p:h"))
endfunction

"Fugitive
if exists('g:loaded_fugitive')
	nnoremap <leader>gs :Gstatus<cr>
	nnoremap <leader>gd :Gdiff<cr>
	nnoremap <leader>gb :Gblame<cr>
	nnoremap <leader>gw :Gwrite
	nnoremap <leader>gr :Gread
	nnoremap <leader>dp :diffput<cr>:diffupdate<cr>
	vnoremap <leader>dp :diffput<cr>:diffupdate<cr>
	nnoremap <leader>dg :diffget<cr>:diffupdate<cr>
	vnoremap <leader>dg :diffget<cr>:diffupdate<cr>
endif
