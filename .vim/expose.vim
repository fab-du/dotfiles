let settings_dir='~/dotfiles/.vim/settings/'

let funcs    =  expand( expand(settings_dir) . 'function' )
let ft       =  expand( expand(settings_dir) . 'filetype' )
let flavour  =  expand( expand(settings_dir) . 'flavour' )
let plugin   =  expand( expand(settings_dir) . 'plugin' )

let settings=[ funcs, ft, flavour, plugin ]

for path in settings
 let files = split(globpath(path, '*.vim'), '\n')
    for file in files
        exec 'source' file
    endfor
endfor

so ~/dotfiles/.vim/mapping.vim
