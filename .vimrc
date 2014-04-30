source ~/.vim/.vimrc
inoremap jk <Esc>


nmap <localleader>pC :call CreateNewProject()<CR>  


function CreateNewProject() 
"let proName = input("Enter Project Name", "") 
"let proTyp = input("Enter Project Typ", "")  
let proName = input("Project Directorie", "","file") 
let pro = inputlist(['Select the Project Typ:', '1, android','2, java', '3, C','4,c++','5,php','6,ruby']) 
if pro==1
echo proName 
exec ':ProjectCreate'." ".proName." "."-n"." "."android"
elseif pro==2 
echo proName 
exe ':ProjectCreate'." ".proName." "."-n"." "."java"
elseif pro==3
echo proName 
exe ':ProjectCreate'." ".proName." "."-n"." "."c"
elseif pro==4 
echo proName 
exe ':ProjectCreate'." ".proName." "."-n"." "."c++"
elseif pro==5
echo proName 
exe ':ProjectCreate'." ".proName." "."-n"." "."php"
elseif pro==6
echo proName
exe ':ProjectCreate'." ".proName." "."-n"." "."ruby"
else
exe ':ProjectCreate'." ".proName." "."-n"." "."none"
endif
endfunction 

" CDC = Change to Directory of Current file
command CDC cd %:p:h
command Qmake :!/home/batlab/bin/myQmake.sh 
inoremap <F1> :ProjectTreeToggle <CR> 
nmap  <F1> :ProjectTreeToggle<CR>  
nmap  <localleader>pb :ProjectBuild<CR> 
nmap  <localleader>pr :ProjectRefresh<CR> 
nmap  <localleader>po :ProjectOpen . <CR> 
nmap  <localleader>pc :ProjectClose . <CR> 
command LCD   :ProjectLCD <CR> 
command PTodo :ProjectTodo <CR> 

nmap  <localleader>jgs   <ESC>:JavaGetSet<CR>  
nmap  <localleader>jg    <ESC>:JavaGet<CR>
nmap  <localleader>js    <ESC>:JavaSet<CR>
nmap  <localleader>jc    <ESC>:JavaCorrect<CR>  
nmap  <localleader>jr    <ESC>:JavaRename<CR> 
nmap  <localleader>jdc   <ESC>:JavaDocComment<CR>  
nmap  <localleader>jim   <ESC>:JavaImport<CR>
nmap  <localleader>jio   <ESC>:JavaImportOrganize<CR> 
nmap  <localleader>jmov  <ESC>:JavaMove<CR> 
nmap  <localleader>jf    <ESC>:JavaFormat<CR> 
nmap  <localleader>jv     <ESC>:Validate<CR> 


autocmd BufNewFile *.java call InsertJavaPackage()
function! InsertJavaPackage()
  let dir = getcwd()
  let dir = substitute(dir, "^.*\/com\/", "com/", "")
  let dir = substitute(dir, "\/", ".", "g")
  let dir = "package " . dir . ";"
  let result = append(0, "")
  let result = append(1, dir)
  let filename = expand("%")
  let filename = substitute(filename, "\.java", "", "")
  let result = append(2, "")
  let result = append(3, "class " . filename . " {")
  let result = append(4, "}")
endfunction

"Ack configuration with grep 
let g:ackprg="ack-grep -H --nocolor --nogroup --column" 
"Open a new tab and search for something 
nmap <silent>grep :tab split<CR>:Ack ""<left> 
"Immediately search for the word under the cursor in new Tab 
nmap <silent>Grep :tab split<CR>:Ack <C-r><C-w><CR> 


autocmd Filetype * runtime! autoload/eclim/<amatch>/complete.vim
    \ | let s:cfunc = 'eclim#'.expand('<amatch>').'#complete#CodeComplete'
    \ | if exists('*'.s:cfunc) | let &l:omnifunc=s:cfunc | endif
:let g:EclimCompletionMethod = 'omnifunc'

