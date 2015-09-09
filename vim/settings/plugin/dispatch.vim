
"autocmd FileType java let b:dispatch = 'javac %'
autocmd FileType c let b:dispatch = 'gcc -ggdb3 %'
autocmd Filetype sql let b:dispatch = 'source %'
autocmd Filetype tex let b:dispatch = 'latex % && xdvi *.dvi'
autocmd FileType js let b:dispatch = 'jshint %'
