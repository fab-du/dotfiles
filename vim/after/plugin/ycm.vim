let g:ycm_min_num_of_chars_for_completion=3
let g:ycm_collect_identifiers_from_tags_files=1 
let g:ycm_auto_trigger=1
let g:ycm_python_binary_path        = '/usr/bin/py3clean'
let g:ycm_server_python_interpreter = '/usr/bin/python2'
let g:ycm_key_list_select_completion   = ['<C-n>', '<Down>']
let g:ycm_key_list_previous_completion = ['<C-p>', '<Up>']
let g:SuperTabDefaultCompletionType    = '<C-n>'

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
