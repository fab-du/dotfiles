

"funktion keys mappings 

"search and replace "{{{
nnoremap <f1> /<c-r><c-w><cr>
nnoremap <c-f1> /<c-r><c-w><cr>n:%s/<c-r><c-w>//gc<left><left><left>
nnoremap <a-f1> /<c-r><c-w><cr>n:%s/<c-r><c-w>//gc<left><left><left>
" search & current selection, support new-line
vnoremap <f1> "sy/<c-r>=substitute(@s,'\n','\\n','g')<cr>/<cr>
vnoremap <c-f1> "sy/<c-r>=substitute(@s,'\n','\\n','g')<cr>/<cr>n:%s/<c-r>=substitute(@s,'\n','\\n','g')<cr>//gc<left><left><left>
vnoremap <a-f1> "sy/<c-r>=substitute(@s,'\n','\\n','g')<cr>/<cr>n:%s/<c-r>=substitute(@s,'\n','\\n','g')<cr>//gc<left><left><left>
"}}}

" a shortcut to show the numbered register contents
map <f2> :reg "0123456789-*+:/<cr>

map 	 <f3> :TagbarToggle<cr>

nmap 	 <f4> :NERDTreeToggle<cr> 
inoremap <f4> <esc>:NERDTreeToggle<cr> 

nnoremap <f5> :Dispatch<cr> 
inoremap <f5> <esc>:Dispatch<cr> 

nmap <silent> <f6> :SyntasticCheck<cr>

" editing 

nnoremap <localleader>; A;<Esc>
nnoremap mn ]m  " Jump to the next function 
nnoremap mN [m  " jump to the previous Function 
nnoremap <C-l> :noh<cr>
" Reselect text that was just pasted {{{
" http://stevelosh.com/blog/2010/09/coming-home-to-vim/
nnoremap <leader>v V`]



" editing (faster) 
noremap <C-e> 5<C-e>
noremap <C-y> 5<C-y>
" Align text {{{
nnoremap <leader>Al :left<cr>
nnoremap <leader>Ac :center<cr>
nnoremap <leader>Ar :right<cr>
vnoremap <leader>Al :left<cr>
vnoremap <leader>Ac :center<cr>
vnoremap <leader>Ar :right<cr>
"}}}


"Marks 
nnoremap <leader>ma :marks<CR>

"plugin mapping
" Plugin: Emmet "{{{
imap ö <C-y>,
nmap ö <C-y> 
vmap ö <C-y> 
"}}}

"Ultisnipp 
let g:UltiSnipsExpandTrigger="sn"

" Plugin: Ack "{{{
let g:ackprg="ack-grep -H --nocolor --nogroup --column" 
"Open a new tab and search for something 
nmap <silent>grep :tab split<CR>:Ack ""<left> 
"Immediately search for the word under the cursor in new Tab 
nmap <silent>Grep :tab split<CR>:Ack <C-r><C-w><CR> 
"}}}

" CDC = Change to Directory of Current file"{{{
command CDC cd %:p:h
"}}}

"Plugin: CtrlP {{{
nnoremap <silent>mru :CtrlPMRUFiles<CR>  
"}}}

" Plugin: FuzzyFinder "{{{
nmap ,f :FufFileWithCurrentBufferDir<CR>
nmap ,b :FufBuffer<CR>
nmap ,t :FufTaggedFile<CR>
"}}}


