augroup markdown 
au!
au BufRead,BufNewFile *.md set filetype=markdown
au BufRead,BufNewFile *.md nmap<leader>md :%!markdown --html4tags <cr>
"au BufEnter * let &complete=".,w,b,u,t,i,k"
au BufNewFile,BufRead,BufWrite *.md,*.mkd,*.markdown,*.mdwn setl ft=markdown ts=3 sw=3
au BufNewFile,BufRead,BufWrite *.md,*.mkd,*.markdown,*.mdwn setl ft=pandoc ts=3 sw=3
au BufNewFile,BufRead,BufWrite *.md,*.mkd,*.markdown,*.mdwn let &complete="k".expand("%:p:h")."/*.md"
"au BufNewFile,BufRead,BufWrite *.md,*.mkd,*.markdown,*.mdwn set dictionary=~/vim_external/dic/german.dic 
"au BufNewFile,BufRead,BufWrite *.md,*.mkd,*.markdown,*.mdwn setlocal spell spelllang=de_de 
au BufRead,BufWrite,InsertChange *.md,*.mkd,*.markdown,*.mdwn syn match ErrorMsg '\%>77v.\+'
let g:tcommentGuessFileType_markdown = 'html'
hi clear SpellBad 
hi SpellBad cterm=underline ctermfg=245 guibg=#000000 guifg=#000000
augroup end

