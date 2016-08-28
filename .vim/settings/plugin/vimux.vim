let VimuxUseNearestPane = 1
let g:VimuxOrientation = "v"
let g:VimuxHeight = "15"
let g:VimuxPromptString = ">"

 function! VimuxSlime()
  call VimuxSendText(@v)
  call VimuxSendKeys("Enter")
 endfunction

 " If text is selected, save it in the v buffer and send that buffer it to tmux
 vnoremap <Leader>vs "vy :call VimuxSlime()<CR>

 " Select current paragraph and send it to tmux
 nnoremap <Leader>vs vip<LocalLeader>vs<CR>
