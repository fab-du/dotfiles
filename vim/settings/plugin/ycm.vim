 let g:ycm_min_num_of_chars_for_completion=3
 let g:ycm_collect_identifiers_from_tags_files=1 
 let g:ycm_auto_trigger=1
 let g:ycm_key_list_select_completion=['<Tab>']
 let g:ycm_key_list_previous_completion = ['<S-Tab>']
" nnoremap <localleader>dia :YcmForceCompileAndDiagnostics<cr>
 "nnoremap <localleader>gd  :YcmCompleter GoToDefinitionElseDeclaration<CR>
 "nnoremap <localleader>d  :YcmCompleter GoToDefinition<CR>
 "nnoremap <localleader>D  :YcmCompleter GoToDeclaration<CR>
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
