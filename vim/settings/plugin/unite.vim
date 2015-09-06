augroup vimrc_unite
  autocmd!
  " obliterate unite buffers (marks especially).
  autocmd BufLeave \[unite\]* if "nofile" ==# &buftype | setlocal bufhidden=wipe | endif
  autocmd FileType unite call s:unite_settings()
augroup END


function! s:unite_settings()
  setlocal nopaste
  unmap! <buffer> <c-d>
  unmap  <buffer> M
  nnoremap <silent><buffer> <C-n> j
  nnoremap <silent><buffer> <C-p> k

  if b:unite.profile_name ==# 'buffers'
    inoremap <silent><buffer> <c-l> <esc>:Unite neomru/file<cr>
  endif
endfunction
