"mark syntax errors with :signs
let g:syntastic_enable_signs=1
"automatically jump to the error when saving the file
let g:syntastic_auto_jump=0
"show the error list automatically
let g:syntastic_auto_loc_list=0
"don't care about warnings
let g:syntastic_quiet_messages = {'level': 'warnings'}

let g:syntastic_always_populate_loc_list = 0                                    
let g:syntastic_auto_loc_list = 0 

"Disable default behavieu
let g:syntastic_mode_map = {
        \ "mode": "passive",
	\  "active_filetypes": ["javascript", "php"] }
