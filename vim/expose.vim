so ~/vim.minimal/expose_core.vim 
so ~/vim.minimal/expose_filetype.vim 
so ~/vim.minimal/expose_flavour.vim 
so ~/vim.minimal/expose_plugin.vim 
so ~/vim.minimal/mapping.vim 


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
