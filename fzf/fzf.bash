# Setup fzf
# ---------
if [[ ! "$PATH" == */home/batie/.fzf/bin* ]]; then
  export PATH="$PATH:/home/batie/.fzf/bin"
fi

# Man path
# --------
if [[ ! "$MANPATH" == */home/batie/.fzf/man* && -d "/home/batie/.fzf/man" ]]; then
  export MANPATH="$MANPATH:/home/batie/.fzf/man"
fi

# Auto-completion
# ---------------
[[ $- == *i* ]] && source "/home/batie/.fzf/shell/completion.bash" 2> /dev/null

# Key bindings
# ------------
source "/home/batie/.fzf/shell/key-bindings.bash"

