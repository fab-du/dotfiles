
if executable('ag')
    set grepprg=ag\ --nogroup\ --nocolor\ --column
    set grepformat=%f:%l:%c%m

" bind K to grep word under cursor
nnoremap <leader>s :grep! "\b<C-R><C-W>\b"<CR>:cw<CR>

endif

