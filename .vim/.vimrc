source $HOME/.vim/vim/core.vim
source $HOME/.vim/vim/color.vim
source $HOME/.vim/vim/switch.vim
source $HOME/.vim/vim/plugin.vim
source $HOME/.vim/vim/mapping.vim


let g:pandoc#after#modules#enabled = ["nrrwrgn", "ultisnips"]
let g:dbext_default_profile_mysql_local = 'type=MYSQL:user=wai:passwd=wai:dbname=wai_db'

"# move to line , type ,sel for "select"
"# and type 'e' for execute 
"# en 0 

" <leader>se for multiple query 
"
map <leader>l :DBListTable<CR> 

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

