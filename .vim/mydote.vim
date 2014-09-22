
let g:quickrun_config = {}
let g:quickrun_config['_'] = {
	\ 'hook/echo/priority_exit'                      : 100,
	\ 'hook/echo/enable_output_exit'                 : 1,
	\ 'hook/close_unite_quickfix/enable_hook_loaded' : 1,
	\ 'hook/unite_quickfix/enable_failure'           : 1,
	\ 'hook/close_quickfix/enable_exit'              : 1,
	\ 'hook/close_buffer/enable_failure'             : 1,
	\ 'hook/close_buffer/enable_empty_data'          : 1,
	\ 'hook/echo/enable'                             : 1,
	\ 'hook/echo/output_success'                     : 'Success !!',
	\ 'hook/echo/output_failure'                     : 'Failure...',
	\ 'hook/inu/enable'                              : 1,
	\ 'hook/inu/echo'                                : 0,
	\ 'hook/inu/wait'                                : 5,
	\ 'hook/time/enable'                             : 1,
	\ 'outputter'                                    : 'multi:buffer:quickfix',
	\ 'outputter/buffer/split'                       : ':botright 8sp',
	\ 'outputter/buffer/close_on_empty'              : 1,
	\ 'runner'                                       : 'vimproc',
	\ 'runner/vimproc/updatetime'                    : 40,
\ }



" JavaScript {{{
" ---------------------------------------------------------------------------------------------------
let g:quickrun_config['javascript'] = {
	\ 'exec'      : '%c %s:p',
	\ 'command'   : 'node',
	\ 'runner'    : 'vimproc',
\ }

let g:quickrun_config['javascript/jshint'] = {
	\ 'exec'      : '%c %s:p ',
	\ 'command'   : 'jshint',
	\ 'runner'    : 'vimproc',
\ }

let g:quickrun_config['javascript/jslint'] = {
	\ 'exec'      : '%c %s:p ',
	\ 'command'   : 'jslint',
	\ 'runner'    : 'vimproc',
\ }

let g:quickrun_config['javascript/gjslint'] = {
	\ 'exec'      : '%c %s:p ',
	\ 'command'   : 'gjslint',
	\ 'runner'    : 'vimproc',
\ }

let g:quickrun_config['javascript/mocha'] = {
	\ 'exec'      : '%c %o %s:p',
	\ 'command'   : 'mocha',
	\ 'cmdopt'    : '--no-colors -R spec',
	\ 'runner'    : 'vimproc',
\ }


" JSON {{{
" ---------------------------------------------------------------------------------------------------
" jq
let g:quickrun_config['json/jq'] = {
	\ 'command' : 'jq',
	\ 'exec'    : '%c . %s:p',
\ }
"}}}
"}}} 


" Java {{{
" ---------------------------------------------------------------------------------------------------
let g:quickrun_config['java/javac'] = {
	\ 'exec'                       : ['/home/batlab/bin/java/vimAnt.sh %o %s', '%c %s:t:r %a'],
	\ 'hook/output_encode/encoding': '&termencoding',
        \ 'hook/sweep/files'           : '%S:p:r.class',
\ }

let g:quickrun_config['java/android'] = {
	\ 'exec' : ['android update project --path ./ > /dev/null', 'ant clean > /dev/null', 'ant debug > /dev/null', 'adb install bin/*.apk'],
\ }
" }}}


" VimScript {{{
" ---------------------------------------------------------------------------------------------------
let g:quickrun_config['vim/async'] = {
	\ 'command' : 'vim',
	\ 'exec'    : '%C -N -u NONE -i NONE -V1 -e -s --cmd "source %s" --cmd qall!',
	\ 'runner'  : 'vimproc',
\ }
" }}}

" Qt {{{
" ---------------------------------------------------------------------------------------------------
let g:quickrun_config['qml/qmlscene'] = {
	\ 'command' : 'qmlscene',
	\ 'exec'    : '%c %s:p',
	\ 'runner'  : 'vimproc',
	\ 'quickfix/errorformat' : 'file:\/\/%f:%l %m',
\ }

let g:quickrun_config['qml'] = g:quickrun_config['qml/qmlscene']

"}}}


call javacomplete#SetSourcePath('/home/batlab/bin/java/src')
nnoremap <leader>r :QuickRun<CR>

