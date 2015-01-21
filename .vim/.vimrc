source $HOME/.vim/vim/core.vim
source $HOME/.vim/vim/color.vim
source $HOME/.vim/vim/switch.vim
source $HOME/.vim/vim/plugin.vim
source $HOME/.vim/vim/mapping.vim


let g:pandoc#after#modules#enabled = ["nrrwrgn", "ultisnips"]
let g:dbext_default_profile_mysql_local = 'type=MYSQL:user=wai:passwd=wai:dbname=wai_db'

inoremap jk <esc>

nnoremap ü <C-]>
nnoremap Ü <C-O>

vnoremap <leader>tab :call <SID>table()<cr>
function! s:table() range
   exe "'<,'>Tab /<bar>"
   let hsepline= substitute(getline("."),'[^|]','-','g')
   exe "norm! o" .  hsepline
   exe "'<,'>s/-|/ |/g"
   exe "'<,'>s/|-/| /g"
   exe "'<,'>s/^| \\|\\s*|$\\||//g"
endfunction

command! -range=% Rst :'<,'>!pandoc -f markdown -t rst

" Put all js file in args list 


function! s:put_in_args( dirname ) 
  exec Rooter 
  s:dir_found = finddir( dirname )

    if s:dir_found
     let s:result = system( 'shell find . -name "*.js" -type f -print' )
      execute("argadd"." ". s:result) 
    endif
endfunction


" move up/down quickly by using Alt-j, Alt-k
" which will move us around by functions
nnoremap <silent> fn }
nnoremap <silent> fp {
autocmd FileType ruby map <buffer>  fn ]m
autocmd FileType ruby map <buffer>  fp [m
autocmd FileType rspec map <buffer> fn }
autocmd FileType rspec map <buffer> fp {
autocmd FileType *.js map <buffer> <A-k> }
autocmd FileType *.js map <buffer> <A-j> {

set tags=./tags;

function! DelTagOfFile(file)
  let fullpath = a:file
  let cwd = getcwd()
  let tagfilename = cwd . "/tags"
  let f = substitute(fullpath, cwd . "/", "", "")
  let f = escape(f, './')
  let cmd = 'sed -i "/' . f . '/d" "' . tagfilename . '"'
  let resp = system(cmd)
endfunction

function! UpdateTags()
  let f = expand("%:p")
  let cwd = getcwd()
  let tagfilename = cwd . "/tags"
  let cmd = 'ctags -a -f ' . tagfilename . ' --c++-kinds=+p --fields=+iaS --extra=+q ' . '"' . f . '"'
  call DelTagOfFile(f)
  let resp = system(cmd)
endfunction
autocmd BufWritePost *.cpp,*.h,*.c call UpdateTags()

