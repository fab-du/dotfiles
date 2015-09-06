if has("autocmd")
    autocmd Filetype java :call Setup_java()
endif

function Setup_java()
    set path=** "find on stackoverflow ( Fix the path Issue ) 
    setlocal omnifunc=javacomplete#Complete 
    setlocal completefunc=javacomplete#CompleteParamsInfo
    inoremap <buffer> <C-x><C-p> <C-X><C-U><C-P>
    let &tags =  expand("%:h:h:h") . "/tags"
    set dictionary=~/.vim/dict/java.dict
    nnoremap <buffer> <silent><leader>bean :call AddBean()<CR>
    nnoremap <buffer><silent><leader>pack  :call InsertJavaPackage()<CR>
    nnoremap <leader>jim :call JavaInsertImport()<CR> 


    if ! empty(glob('AndroidManifest.xml'))
        compiler ant
        setlocal makeprg=ant\ -find\ build.xml\ clean\ debug\ install
    endif

endfunction 


function DetermineJavaProject()
    exe ':Rooter'    
    let s:foo = system('ls | grep "AndroidManifest.xml" ')
    if( s:foo == '')
        set makeprg= ant\ -Dbuild.compiler.emacs=true\ -quiet\ -find\ build.xml\ ${*:-classes}\ 2>&1\ |\ grep\ '\[javac\]' 
    else
        set makeprg = '$HOME/bin/android/runAndroid.sh' 
    endif 
endfunction 

function InsertJavaPackage()
  let filename = expand("%")
  let filename = substitute(filename, "\.java$", "", "")
  let dir = getcwd() . "/" . filename
  let dir = substitute(dir, "^.*\/src\/", "", "")
  let dir = substitute(dir, "^.*\/main\/", "", "")
  let dir = substitute(dir, "^.*\/java\/", "", "")
  let dir = substitute(dir, "\/[^\/]*$", "", "")
  let dir = substitute(dir, "\/", ".", "g")
  let filename = substitute(filename, "^.*\/", "", "")
  let dir = "package " . dir . ";"
  let result = append(0, dir)
  let result = append(1, "")
  let result = append(2, "public class " . filename . " {")
  let result = append(3, "public " . filename . " (){")
  let result = append(4, "}")
  let result = append(4, "}")
endfunction 

function JavaInsertImport()
  exe "normal mz"
  let cur_class = expand("<cword>")
  try
    if search('^\s*import\s.*\.' . cur_class . '\s*;') > 0
      throw getline('.') . ": import already exist!"
    endif
    wincmd }
    wincmd P
    1
    if search('^\s*public.*\s\%(class\|interface\)\s\+' . cur_class) > 0
      1
      if search('^\s*package\s') > 0
        yank y
      else
        throw "Package definition not found!"
      endif
    else
      throw cur_class . ": class not found!"
    endif
    wincmd p
    normal! G
    " insert after last import or in first line
    if search('^\s*import\s', 'b') > 0
      put y
    else
      1
      put! y
    endif
    substitute/^\s*package/import/g
    substitute/\s\+/ /g
    exe "normal! 2ER." . cur_class . ";\<Esc>lD"
  catch /.*/
    echoerr v:exception
  finally
    " wipe preview window (from buffer list)
    silent! wincmd P
    if &previewwindow
      bwipeout
    endif
    exe "normal! `z"
  endtry
endfunction 

function AddBean() 
  let line = line('.')
  let name = inputdialog('Enter the name of the variable: ')
  let type = inputdialog('Enter the type of the variable: ')
  let upperName = substitute(name, '^\(\w\)\(.*\)$', '\u\1\2', '')
  call append(line, "\t}")
  call append(line, "\t\tthis.".name." = ".name.";")
  call append(line, "\tpublic void set".upperName."(".type." ".name.") {")
  call append(line, "")
  call append(line, "\t}")
  call append(line, "\t\treturn (this.".name.");")
  call append(line, "\tpublic ".type." get"."".upperName."() { ")
  call append(line, "")
  call append(line, "\tprivate ".type." ".name.";")
  call append(line, "\t//".name)
  return line
endfunction 
