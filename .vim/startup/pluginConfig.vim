"Plugin: Doxygen 
let MakeDoxygenComment_briefTag		= "@brief "
let MakeDoxygenComment_paramTag		= "@param " 
let MakeDoxygenComment_returnTag	= "@return "
" NERD Tree {{{

noremap  <F3>      :NERDTreeToggle<cr>
inoremap <F3> <esc>:NERDTreeToggle<cr>

augroup ps_nerdtree
    au!
    au Filetype nerdtree setlocal nolist
    au Filetype nerdtree nnoremap <buffer> H :vertical resize -10<cr>
    au Filetype nerdtree nnoremap <buffer> L :vertical resize +10<cr>
augroup END

let NERDTreeHighlightCursorline = 1
let NERDTreeIgnore = ['.vim$', '\~$', '.*\.pyc$', 'pip-log\.txt$', 'whoosh_index',
                    \ 'xapian_index', '.*.pid', 'monitor.py', '.*-fixtures-.*.json',
                    \ '.*\.o$', 'db.db', 'tags.bak', '.*\.pdf$', '.*\.mid$',
                    \ '.*\.midi$']

let NERDTreeMinimalUI = 1
let NERDTreeDirArrows = 1
let NERDChristmasTree = 1
let NERDTreeChDirMode = 2
let NERDTreeMapJumpFirstChild = 'gK'

" }}}
"Plugin Errormarker
let errormarker_errorgroup      = "Error"
let errormarker_warninggroup    = "Todo"
let &errorformat                = "%f:%l: %t%*[^:]:%m," . &errorformat
let &errorformat                = "%f:%l:%c: %t%*[^:]:%m," . &errorformat
let errormarker_warningtypes    = "wW"

"Plugin MRU 
let MRU_Exclude_Files = '^/tmp/.*\|^/var/tmp/.*'
"" let MRU_Include_Files = '\.c$\|\.h$' 
 map <silent>mru :MRU<CR>
 let MRU_Max_Menu_Entries = 20 



"Plugin BufExplorer
noremap <silent>be <Esc>:BufExplorer<CR> 
let g:bufExplorerOpenMode=1
let g:bufExplorerSortBy='mru'
let g:bufExplorerSplitType='v'
let g:bufExplorerSplitVertSize = 40
let g:bufExplorerShowDirectories=1
"Plugin ultisnips-----------------------------------  
let g:UltiSnipsExpandTrigger="sn"
let g:ulti_expand_or_jump_res = 0 "default value, just set once
function! Ulti_ExpandOrJump_and_getRes()
call UltiSnips_ExpandSnippetOrJump()
return g:ulti_expand_or_jump_res
endfunction
inoremap <NL> <C-R>=(Ulti_ExpandOrJump_and_getRes() > 0)?"":IMAP_Jumpfunc('', 0)<CR>
let g:UltiSnipsSnippetsDir = "~/.vim/my/UltiSnips/"
"Plugin Emmet-----------------------------------------------------------
imap <S-e> <C-y>,
nmap <S-e> <C-y> 
vmap <S-e> <C-y> 
"--------------------------------------------------------------------------------------
"Plugin TagBar 
nnoremap <silent> <F2> :TagbarToggle<CR> 
imap              <F2> :TagbarToggle<CR> 	
"set tags+=~/.vim/tags/jdk_tags
" build tags of your own project with Ctrl-F12
map <C-F12> :!ctags -R --sort=yes --c++-kinds=+p --fields=+iaS --extra=+q .<CR>
"---------------------------------------------------
" Ctrl-P {{{

let g:ctrlp_dont_split = 'NERD_tree_2'
let g:ctrlp_jump_to_buffer = 0
let g:ctrlp_working_path_mode = 0
let g:ctrlp_match_window_reversed = 1
let g:ctrlp_split_window = 0
let g:ctrlp_max_height = 20
let g:ctrlp_extensions = ['tag']

let g:ctrlp_map = '<leader>,'
nnoremap <leader>. :CtrlPTag<cr>

let g:ctrlp_prompt_mappings = {
\ 'PrtSelectMove("j")':   ['<c-j>', '<down>', '<s-tab>'],
\ 'PrtSelectMove("k")':   ['<c-k>', '<up>', '<tab>'],
\ 'PrtHistory(-1)':       ['<c-n>'],
\ 'PrtHistory(1)':        ['<c-p>'],
\ 'ToggleFocus()':        ['<c-tab>'],
\ }

let ctrlp_filter_greps = "".
    \ "egrep -iv '\\.(" .
    \ "jar|class|swp|swo|log|so|o|pyc|jpe?g|png|gif|mo|po" .
    \ ")$' | " .
    \ "egrep -v '^(\\./)?(" .
    \ "deploy/|lib/|classes/|libs/|deploy/vendor/|.git/|.hg/|.svn/|.*migrations/|docs/build/" .
    \ ")'"

let my_ctrlp_user_command = "" .
    \ "find %s '(' -type f -or -type l ')' -maxdepth 15 -not -path '*/\\.*/*' | " .
    \ ctrlp_filter_greps

let my_ctrlp_git_command = "" .
    \ "cd %s && git ls-files --exclude-standard -co | " .
    \ ctrlp_filter_greps

let my_ctrlp_ffind_command = "ffind --semi-restricted --dir %s --type e -B -f"

let g:ctrlp_user_command = ['.git/', my_ctrlp_ffind_command, my_ctrlp_ffind_command]

" }}}
"easyMotion
let g:EasyMotion_leader_key = '<leader>' 
" YouCompleteMe {{{
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
" {{ Syntastic plugin 
let g:syntastic_error_symbol = '✗'
let g:syntastic_warning_symbol = '⚠'
"{{ Dispacher 
autocmd FileType java let  b:dispatch = 'javac %'
autocmd FileType c    let  b:dispatch = 'gcc -ggdb3 %'
autocmd Filetype sql  let  b:dispatch = 'source %'
autocmd Filetype tex  let  b:dispatch = 'latex % && xdvi *.dvi'
autocmd FileType js   let  b:dispatch = 'jshint %'
nnoremap <F5> :Dispatch<CR> 
inoremap <F5> <ESC>:Dispatch<CR> 
" Sparkup {{{

let g:sparkupNextMapping = '<localleader>s'

"}}}
" Plugin: Vimux 
let VimuxUseNearestPane = 1
let g:VimuxOrientation = "v"
let g:VimuxHeight = "20"
let g:VimuxUseNearestPane = 0
nmap <silent>T :VimuxPromptCommand<CR>
nmap <silent>!! :VimuxRunLastCommand<CR>
vmap <silent>Ts "vy :call VimuxSendText(@v)<CR>:call VimuxSendKeys("Enter")<CR>
nmap <silent>Tc :VimuxInterruptRunner<CR>
"Tagbar 
"
nnoremap <silent><F4> :TagbarToggle<CR>
inoremap <silent><F4> :TagbarToggle<CR>  
let g:tagbar_width = 40 
let g:tagbar_autoclose=1 
let g:tagbar_expand = 1
"eclim
"

"autocmd Filetype * runtime! autoload/eclim/<amatch>/complete.vim
    "\ | let s:cfunc = 'eclim#'.expand('<amatch>').'#complete#CodeComplete'
    "\ | if exists('*'.s:cfunc) | let &l:omnifunc=s:cfunc | endif
":let g:EclimCompletionMethod = 'omnifunc'

nmap <localleader>pC :call CreateNewProject()<CR>  
function CreateNewProject() 
"let proName = input("Enter Project Name", "") 
"let proTyp = input("Enter Project Typ", "")  
let proName = input("Project Directorie", "","file") 
let pro = inputlist(['Select the Project Typ:', '1, android','2, java', '3, C','4,c++','5,php','6,ruby']) 
if pro==1
echo proName 
exec ':ProjectCreate'." ".proName." "."-n"." "."android"
elseif pro==2 
echo proName 
exe ':ProjectCreate'." ".proName." "."-n"." "."java"
elseif pro==3
echo proName 
exe ':ProjectCreate'." ".proName." "."-n"." "."c"
elseif pro==4 
echo proName 
exe ':ProjectCreate'." ".proName." "."-n"." "."c++"
elseif pro==5
echo proName 
exe ':ProjectCreate'." ".proName." "."-n"." "."php"
elseif pro==6
echo proName
exe ':ProjectCreate'." ".proName." "."-n"." "."ruby"
else
exe ':ProjectCreate'." ".proName." "."-n"." "."none"
endif
endfunction 

" CDC = Change to Directory of Current file
command CDC cd %:p:h
inoremap <F1> :ProjectTreeToggle <CR> 
nmap  <F1> :ProjectTreeToggle<CR>  
nmap  <localleader>pb :ProjectBuild<CR> 
nmap  <localleader>pr :ProjectRefresh<CR> 
nmap  <localleader>po :ProjectOpen . <CR> 
nmap  <localleader>pc :ProjectClose . <CR> 
command LCD   :ProjectLCD <CR> 
command PTodo :ProjectTodo <CR> 

nmap <silent>ejgs   <ESC>:JavaGetSet<CR>  
nmap <silent>ejg    <ESC>:JavaGet<CR>
nmap <silent>ejs    <ESC>:JavaSet<CR>
nmap <silent>ejc    <ESC>:JavaCorrect<CR>  
nmap <silent>ejr    <ESC>:JavaRename<CR> 
nmap <silent>ejdc   <ESC>:JavaDocComment<CR>  
nmap <silent>ejim   <ESC>:JavaImport<CR>
nmap <silent>ejio   <ESC>:JavaImportOrganize<CR> 
nmap <silent>ejmov  <ESC>:JavaMove<CR> 
nmap <silent>ejf    <ESC>:JavaFormat<CR> 
nmap <silent>ejv     <ESC>:Validate<CR> 


"Ack 
let g:ackprg="ack-grep -H --nocolor --nogroup --column" 
"Open a new tab and search for something 
nmap <silent>grep :tab split<CR>:Ack ""<left> 
"Immediately search for the word under the cursor in new Tab 
nmap <silent>Grep :tab split<CR>:Ack <C-r><C-w><CR> 
"powerLine
let g:promptline_powerline_symbols =1 
let g:promptline_theme = 'jelly'
let g:promptline_preset = {
        \'a' : [ promptline#slices#host() ],
        \'b' : [ promptline#slices#user() ],
        \'c' : [ promptline#slices#cwd() ],
        \'y' : [ promptline#slices#vcs_branch() ],
        \'warn' : [ promptline#slices#last_exit_code() ]}

let git_sha_slice = {
      \'function_name': 'git_sha',
      \'function_body': [
        \'function git_sha {',
        \'  local sha',
        \'  sha=$(git rev-parse --short HEAD 2>/dev/null) || return 1',
        \'  printf "%s" "$sha"',
        \'}']}
let g:airline#extensions#tabline#enabled = 1
let g:airline_powerline_fonts=1


