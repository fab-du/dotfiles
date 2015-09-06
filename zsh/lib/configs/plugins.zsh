
zle_line_init(){
    zle autosuggest-start
}

zle -N zle-line-init

bindkey '^z' zle-line-init
