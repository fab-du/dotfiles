let g:quickrun_config = {}
let g:quickrun_config['_'] = {
	\ 'hook/echo/priority_exit'                      : 100,
	\ 'hook/echo/enable_output_exit'                 : 1,
	\ 'hook/close_unite_quickfix/enable_hook_loaded' : 0,
	\ 'hook/unite_quickfix/enable_failure'           : 0,
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

let g:quickrun_config.markdown = {
\ 'cmdopt': '-s',
\ 'type': 'markdown/pandoc',
\ 'outputter': 'browser'
\ }

let g:quickrun_config['javascript'] = {
    \ 'exec'      : '%c %s:p',
    \ 'command'   : 'node',
    \ 'runner'    : 'vimproc',
    \ }

let g:quickrun_config['javascript/jshint'] = {
    \ 'exec'      : '%c %s:p ',
    \ 'command'   : 'jshint',
    \ 'outputter'    : 'quickfix',
    \ "runner/vimproc/updatetime" : 60,
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

let g:quickrun_config['qml/qmlscene'] = {
    \ 'command' : 'qmlscene',
    \ 'exec'    : '%c %s:p',
    \ 'runner'  : 'vimproc',
    \ 'quickfix/errorformat' : 'file:\/\/%f:%l %m',
    \ }

let g:quickrun_config['qml'] = g:quickrun_config['qml/qmlscene']

let g:quickrun_config['plantuml'] = {
    \ 'exec' : '%c %s:p ',
    \ 'command' : 'plantuml',
    \ 'cmdopt'  : '& -verbose -o "../out"',
    \}

let g:quickrun_config['vhdl'] = {
    \ 'exec' : '%c %s:p ',
    \ 'command' : '/home/batlab/Xilinx/Vivado/2014.4/bin/xvhdl',
    \}

let g:quickrun_config['java'] = {
    \ 'command' : 'ant',
    \}
