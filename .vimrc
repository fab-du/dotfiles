source $HOME/dotfiles/.vim/expose.vim

" to display a better text for closed folds
fu! CustomFoldText()
    let line = getline(v:foldstart)
    if (&foldmethod == 'marker')
        let line = substitute(line, split(&foldmarker, ',')[0], '', 1)
    endif
    let stripped_line = substitute(line, '^\s*', '', 1)
    let stripped_line = substitute(stripped_line, '{\s*$', '', 1)
    let n = len(line) - len(stripped_line)
    return '+' . repeat('-', n-2) . ' ' . stripped_line
endfu

inoremap <C-B> `
cnoremap <C-B> `
inoremap <C-T> ~
cnoremap <C-T> ~

" typos
iabbrev lenght length
iabbrev wiht with
iabbrev retrun return


" quickfix window
nnoremap <silent> <leader>xx :cwindow<CR>
nnoremap <silent> <leader>xp :clist<CR>
nnoremap <silent> <leader>xc :cclose<CR>
nnoremap <silent> <leader>xz :call setqflist([])<CR>


nnoremap <TAB> }
xnoremap <TAB> }

nnoremap \ {
xnoremap \ {


" keep search matches in the middle of the window
nnoremap n nzvzz
nnoremap N Nzvzz

" don't lose selection after indenting
vnoremap < <gv
vnoremap > >gv


" useful cheats
inoremap <C-A> <ESC>I
inoremap <C-Q> <ESC>A
inoremap <C-E> <ESC>lwi
inoremap <C-S> <ESC>lbi
inoremap <C-D> <ESC>o
inoremap <C-F> <ESC>O


inoremap <silent> <Bar>   <Bar><Esc>:call <SID>align()<CR>a

function! s:align()
  let p = '^\s*|\s.*\s|\s*$'
  if exists(':Tabularize') && getline('.') =~# '^\s*|' && (getline(line('.')-1) =~# p || getline(line('.')+1) =~# p)
    let column = strlen(substitute(getline('.')[0:col('.')],'[^|]','','g'))
    let position = strlen(matchstr(getline('.')[0:col('.')],'.*|\s*\zs.*'))
    Tabularize/|/l1
    normal! 0
    call search(repeat('[^|]*|',column).'\s\{-\}'.repeat('.',position),'ce',line('.'))
  endif
endfunction

