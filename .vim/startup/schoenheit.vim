
colorscheme blackboard   
"let g:lucius_contrast='normal'
set background=dark
if !exists('my_colors_name')
        let my_colors_name = "lucius"   " change this variable (here or in the vimrc)
                                           " if you want to try a different colorscheme
endif
if has('gui_running') || &t_Co < 88        " only load 'special' terminal colors if the terminal
                                           " supports them  AND we aren't starting the GUI
        exe 'colorscheme' my_colors_name
elseif exists(':CSApproxSnapshot') == 2    " CSApprox installed and working
                                           " Note: this implicitly tests has('gui')
        let g:CSApprox_attr_map = { 'bold' : 'bold', 'italic' : '', 'sp' : '' }
        exe 'colorscheme' my_colors_name
elseif exists(':GuiColorScheme') == 2      " no CSApprox, but we have guicolorscheme installed
        exe 'GuiColorScheme' my_colors_name
else                                       " software support is lacking
        exe 'colorscheme' my_colors_name
endif



"Menu editing 
autocmd CursorMovedI * if pumvisible() == 0|pclose|endif
autocmd InsertLeave * if pumvisible() == 0|pclose|endif


set guicursor=i:ver25-iCursor
" highlight
"hi clear Cursor
"hi Cursor       guicursor=i:ver25-iCursor
"hi clear lCursor
"hi lCursor      gui=inverse,bold
"hi CursorIM     guifg=#ff0000

hi Normal       ctermbg=none ctermfg=245  guibg=#000000 guifg=#cccccc
hi Comment      ctermbg=none ctermfg=Cyan  guibg=#000000 guifg=Cyan
"hi LineNr       ctermbg=none ctermfg=232  guibg=#010101 guifg=#333333
hi Line         ctermbg=232  ctermfg=none guibg=#222222 guifg=NONE
hi CursorLine   ctermbg=234  ctermfg=none guibg=#1a1512 guifg=NONE
hi CursorLineNr ctermbg=234  ctermfg=33   guibg=#1a1512 guifg=#268bd2 cterm=bold gui=bold
hi SpecialKey   ctermbg=none ctermfg=232  guibg=NONE    guifg=#0a0a0a
hi FoldColumn   ctermbg=234  ctermfg=232  guibg=#222222 guifg=#444444
hi Folded       ctermbg=234  ctermfg=237  guibg=#222222 guifg=#444444 cterm=bold gui=bold
hi Pmenu        ctermbg=255  ctermfg=235  guibg=#aaaaaa guifg=#333333
hi PmenuSel     ctermbg=255  ctermfg=24   guibg=#333333 guifg=#cccccc
hi PmenuSbar    ctermbg=245  ctermfg=240  guibg=#000000 guifg=#222222
hi PmenuThumb   ctermbg=255  ctermfg=245  guibg=#000000 guifg=#555555
hi clear Visual
hi Visual       ctermbg=0    ctermfg=none guibg=#000000 guifg=NONE    cterm=inverse,bold gui=inverse,bold
hi TabLine      ctermbg=235  ctermfg=237  guibg=#222222 guifg=#444444 cterm=none gui=none
hi TabLineFill  ctermbg=235  ctermfg=none guibg=#000000 guifg=NONE    cterm=none gui=none
hi TabLineSel   ctermbg=24   ctermfg=255  guibg=#045b84 guifg=#ffffff cterm=bold gui=bold
hi clear SignColumn

hi vertsplit guifg=none guibg=none ctermbg=none ctermfg=none 

" Line number
" ---------------------------------------------------------------------------------------------------
let s:default_updatetime   = &updatetime
let s:immediate_updatetime = 10

function! s:CursorLineNrColorDefault()
        if &updatetime == s:immediate_updatetime
                let &updatetime = s:default_updatetime
        endif
        hi CursorLineNr ctermfg=33 guifg=#268bd2
        hi CursorLine   cterm=none gui=none
        hi Cursor       gui=inverse,bold
endfunction

function! s:CursorLineNrColorInsert(mode)
        if a:mode == 'i'
                hi CursorLineNr ctermfg=64 guifg=#859900
                hi CursorLine   cterm=underline gui=underline
        elseif a:mode == 'r'
                hi CursorLineNr ctermfg=124 guifg=#ff0000
                hi CursorLine  cterm=underline gui=undercurl
        elseif a:mode == 'replace-one-character'
                let &updatetime = s:immediate_updatetime
                hi CursorLineNr ctermfg=124 guifg=#ff0000
                hi CursorLine   cterm=underline gui=none
                hi Cursor       guifg=#ff0000 gui=inverse
        endif
endfunction

function! s:CursorLineNrColorVisual()
        let &updatetime = s:immediate_updatetime
        hi CursorLineNr ctermfg=61 guifg=#6c71c4
        hi CursorLine   cterm=none gui=none
        return ''
endfunction


vnoremap <silent> <expr> <SID>(CursorLineNrColorVisual)  <SID>CursorLineNrColorVisual()
" MEMO: need 'lh' to fire CursorMoved event to update highlight..., not cool.
nnoremap <silent> <script> v v<SID>(CursorLineNrColorVisual)lh
nnoremap <silent> <script> V V<SID>(CursorLineNrColorVisual)lh
nnoremap <silent> <script> <C-v> <C-v><SID>(CursorLineNrColorVisual)lh
nnoremap r :call <SID>CursorLineNrColorInsert('replace-one-character')<CR>r

augroup ChangeLineNumber
        autocmd!
        autocmd VimEnter    * call s:CursorLineNrColorDefault()
        autocmd InsertEnter * call s:CursorLineNrColorInsert(v:insertmode)
        autocmd InsertLeave * call s:CursorLineNrColorDefault()
        autocmd CursorHold  * call s:CursorLineNrColorDefault()
augroup END
