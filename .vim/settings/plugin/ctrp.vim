
if g:is_win 
    let g:ctrlp_user_command = 'dir %s /-n /b /s /a-d'  " Windows
else
    let g:ctrlp_user_command = 'find %s -type f'        " MacOSX/Linux
endif 


let g:ctrlp_working_path_mode = 'ra'

let g:ctrlp_map = '<c-p>' "how to change this§
let g:ctrlp_cmd = 'CtrlP'
