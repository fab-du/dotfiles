
set fillchars+=stl:-,stlnc:-,vert:\|
set hlsearch
set laststatus=2 


hi VertSplit ctermfg=White ctermbg=NONE cterm=none

hi LineNr guifg=#818698 guibg=NONE
hi LineNr ctermfg=102   ctermbg=NONE

"Fold 
hi Folded ctermfg=225 ctermbg=NONE cterm=NONE

"Normal text
hi Normal cterm=NONE ctermfg=White

"" Grayish comments
hi Comment ctermfg=248

"" Bluish identifiers
hi Identifier ctermfg=Cyan

"" No background for wildmenu, selection is red, bold and underlined
hi WildMenu ctermfg=196 ctermbg=NONE cterm=bold,underline
hi WildMenu guifg=#ee1111 guibg=#000000 gui=bold,underline

"" Slim separator lines
hi StatusLine ctermfg=White  ctermbg=NONE  cterm=bold
"hi StatusLine guifg=White   guibg=NONE gui=NONE

au InsertEnter * hi Statusline ctermfg=223 ctermbg=NONE
au InsertLeave * hi Statusline ctermfg=White ctermbg=NONE 

hi StatusLineNC ctermfg=Grey  ctermbg=NONE  cterm=NONE
hi StatusLineNC guifg=0   guibg=NONE gui=NONE

"Search result 
hi search ctermfg=Yellow ctermbg=Blue cterm=bold,underline 



set statusline=♥♥%f  
set statusline+=%= 
set statusline+=%l
set statusline+=%L

