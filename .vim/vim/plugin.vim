" Plugin: YouCompleteMe {{{
let g:ycm_min_num_of_chars_for_completion = 3  
let g:ycm_collect_identifiers_from_tags_files = 1
let g:ycm_seed_identifiers_with_syntax = 1
let g:ycm_key_list_select_completion   = ['<Tab>']
let g:ycm_key_list_previous_completion = ['<S-Tab>']
nnoremap <localleader>dia :YcmForceCompileAndDiagnostics<cr>
nnoremap <localleader>gd  :YcmCompleter GoToDefinitionElseDeclaration<CR>
nnoremap <localleader>d  :YcmCompleter GoToDefinition<CR>
nnoremap <localleader>D  :YcmCompleter GoToDeclaration<CR>
"let g:ycm_filetype_specific_completion_to_disable = {'javascript': 1}
let g:ycm_filetype_blacklist = {
      \ 'tagbar' : 1,
      \ 'qf' : 1,
      \ 'notes' : 1,
      \ 'markdown' : 1,
      \ 'unite' : 1,
      \ 'text' : 1,
      \ 'vimwiki' : 1,
      \ 'pandoc' : 1,
      \ 'clojure' : 1,
      \}
" }}}

""" Syntastic settings <F6>"{{{
let g:syntastic_enable_highlighting = 0
let g:syntastic_check_on_wq = 0
let g:syntastic_error_symbol = '✗'
let g:syntastic_style_error_symbol = 'S'
let g:syntastic_warning_symbol = '⚠'
let g:syntastic_style_warning_symbol = 'S'
let g:syntastic_always_populate_loc_list = 1
let g:syntastic_aggregate_errors = 1
"jump to the first issue detected if error"
let g:syntastic_auto_jump = 2
nnoremap <silent><F6> :SyntasticCheck<cr>

if ! &diff
    let g:syntastic_check_on_open = 1
endif
"}}}

"Plugin :Tagbar "{{{
let g:tagbar_sort = 0
let g:tagbar_compact = 1
let g:tagbar_autoshowtag = 1
let g:tagbar_width = 25
let g:tagbar_iconchars = ['+', '-']
"}}}

" {{{ Markdown
augroup markdown 
   au!
   au BufRead,BufNewFile *.md set filetype=markdown
   nmap <leader>md :%!markdown --html4tags <cr>
   au BufEnter * let &complete=".,w,b,u,t,i"
   au BufNewFile,BufRead,BufWrite *.txt,*.md,*.mkd,*.markdown,*.mdwn setl ft=markdown ts=3 sw=3
   au BufNewFile,BufRead,BufWrite *.txt,*.md,*.mkd,*.markdown,*.mdwn let &complete="k".expand("%:p:h")."/*.md"
   au BufNewFile,BufRead,BufWrite *.txt,*.md,*.mkd,*.markdown,*.mdwn set dictionary=~/.vim/dict/german.dict  
   au BufRead,BufWrite,InsertChange *.txt,*.md,*.mkd,*.markdown,*.mdwn syn match ErrorMsg '\%>77v.\+'
   "au BufNewFile,BufRead */_posts/*.markdown setl completefunc=TagComplete | cd $BLOG/source
   let g:tcommentGuessFileType_markdown = 'html'
augroup end
"}}}

" Plugin: Ultisnip  "{{{
let g:ulti_expand_or_jump_res = 0 "default value, just set once
function! Ulti_ExpandOrJump_and_getRes()
call UltiSnips_ExpandSnippetOrJump()
return g:ulti_expand_or_jump_res
endfunction
inoremap <NL> <C-R>=(Ulti_ExpandOrJump_and_getRes() > 0)?"":IMAP_Jumpfunc('', 0)<CR>
let g:UltiSnipsSnippetsDir = "~/.vim/my/UltiSnips/"
"}}}

"QuickRun 
let g:quickrun_config = {}

let g:quickrun_config.markdown = {
\ 'type': 'markdown/pandoc',
\ 'cmdopt': '-s',
\ 'outputter': 'browser'
\ }


" JavaScript {{{
" ---------------------------------------------------------------------------------------------------
let g:quickrun_config['javascript'] = {
	\ 'exec'      : '%c %s:p',
	\ 'command'   : 'node',
	\ 'runner'    : 'vimproc',
\ }

let g:quickrun_config['javascript/jshint'] = {
	\ 'exec'      : '%c %s:p ',
	\ 'command'   : 'jshint',
	\ 'runner'    : 'vimproc',
\ }

let g:quickrun_config['javascript/jslint'] = {
	\ 'exec'      : '%c %s:p ',
	\ 'command'   : 'jslint',
	\ 'runner'    : 'vimproc',
\ }

let g:quickrun_config['javascript/gjslint'] = {
	\ 'exec'      : '%c %s:p ',
	\ 'command'   : 'gjslint',
	\ 'runner'    : 'vimproc',
\ }

let g:quickrun_config['javascript/mocha'] = {
	\ 'exec'      : '%c %o %s:p',
	\ 'command'   : 'mocha',
	\ 'cmdopt'    : '--no-colors -R spec',
	\ 'runner'    : 'vimproc',
\ }


" Qt {{{
" ---------------------------------------------------------------------------------------------------
let g:quickrun_config['qml/qmlscene'] = {
	\ 'command' : 'qmlscene',
	\ 'exec'    : '%c %s:p',
	\ 'runner'  : 'vimproc',
	\ 'quickfix/errorformat' : 'file:\/\/%f:%l %m',
\ }

let g:quickrun_config['qml'] = g:quickrun_config['qml/qmlscene']

" Plugin Tabular {{{
"
inoremap <silent> <Bar>   <Bar><Esc>:call <SID>align()<CR>a
function! s:align()
  let p = '^\s*|\s.*\s|\s*$'
  if exists(':Tabularize') && getline('.') =~# '^\s*|' && (getline(line('.')-1) =~# p || getline(line('.')+1) =~# p)
    let column = strlen(substitute(getline('.')[0:col('.')],'[^|]','','g'))
    let position = strlen(matchstr(getline('.')[0:col('.')],'.*|\s*\zs.*'))
    Tabularize/|/l1
    normal! 0
    call search(repeat('[^|]*|',column).'\s\{-\}'.repeat('.',position),'ce',line('.'))
  endif
endfunction

if exists(":Tabularize")
  nnoremap <Leader>a= :Tabularize /=<CR>
  vnoremap <Leader>a= :Tabularize /=<CR>
  nnoremap <Leader>a: :Tabularize /:\zs<CR>
  vnoremap <Leader>a: :Tabularize /:\zs<CR>
endif
" }}}
"
"Plugin DBext {{{ 
"# move to line , type ,sel for "select"
"# and type 'e' for execute 
"# en 0 
" <leader>se for multiple query 

nnoremap <leader>l :DBListTable<CR> 

"}}}
