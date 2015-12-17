
export FZF_DEFAULT_COMMAND='ag -l -g ""'

export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"

# If you're running fzf in a large git repository, git ls-tree can boost up the speed of the traversal.

#export FZF_DEFAULT_COMMAND='
#(git ls-tree -r --name-only HEAD ||
#find * -name ".*" -prune -o -type f -print -o -type l -print) 2> /dev/null'

#bind-key -n 'M-l' run "tmux split-window -p 40 'tmux send-keys -t #{pane_id} \"$(locate / | fzf -m | paste -sd\\  -)\"'"





# Setup fzf
# ---------
if [[ ! "$PATH" =~ "/home/batie/bin_external/fzf/bin" ]]; then
  export PATH="$PATH:/home/batie/bin_external/fzf/bin"
fi

# Man path
# --------
if [[ ! "$MANPATH" =~ "/home/batie/bin_external/fzf/man" && -d "/home/batie/bin_external/fzf/man" ]]; then
  export MANPATH="$MANPATH:/home/batie/bin_external/fzf/man"
fi

# Auto-completion
# ---------------
[[ $- =~ i ]] && source "/home/batie/bin_external/fzf/shell/completion.zsh" 2> /dev/null

# Key bindings
# ------------
source "/home/batie/bin_external/fzf/shell/key-bindings.zsh"

# Further custumization
#

function detofr {
    readonly DICT_PATH=~/Downloads/de_fr.txt
    if [ -z "$1" ]; then
        cat $DICT_PATH | fzf-tmux | xclip -i -selection clipboard
    else
        ag --no-number --ignore-case "$1" $DICT_PATH | fzf-tmux -q "$1" | xclip -i -selection clipboard
    fi
}

function buff {
    readonly BUFF=~/.buffer
     cat ~/.buffer | fzf-tmux |  xclip -i
}

function gi() { curl -L -s https://www.gitignore.io/api/$@ ;}

# fe [FUZZY PATTERN] - Open the selected file with the default editor
#   - Bypass fuzzy finder if there's only one match (--select-1)
#   - Exit if there's no match (--exit-0)
fe() {
  local file
  file=$(fzf --query="$1" --select-1 --exit-0)
  [ -n "$file" ] && ${EDITOR:-vim} "$file"
}

# Modified version where you can press
#   - CTRL-O to open with `open` command,
#   - CTRL-E or Enter key to open with the $EDITOR
fo() {
  local out file key
  out=$(fzf-tmux --query="$1" --exit-0 --expect=ctrl-o,ctrl-e)
  key=$(head -1 <<< "$out")
  file=$(head -2 <<< "$out" | tail -1)
  if [ -n "$file" ]; then
    [ "$key" = ctrl-o ] && open "$file" || ${EDITOR:-vim} "$file"
  fi
}

# fd - cd to selected directory
fd() {
  local dir
  dir=$(find ${1:-*} -path '*/\.*' -prune \
                  -o -type d -print 2> /dev/null | fzf +m) &&
  cd "$dir"
}


# cdf - cd into the directory of the selected file
cdf() {
   local file
   local dir
   file=$(fzf +m -q "$1") && dir=$(dirname "$file") && cd "$dir"
}


# fh - repeat history
fh() {
  print -z $( ([ -n "$ZSH_NAME" ] && fc -l 1 || history) | fzf +s --tac | sed 's/ *[0-9]* *//')
}

# Another CTRL-R script to insert the selected command from history into the command line/region
__fzf_history ()
{
    builtin history -a;
    builtin history -c;
    builtin history -r;
    builtin typeset \
        READLINE_LINE_NEW="$(
            HISTTIMEFORMAT= builtin history |
            command fzf +s --tac +m -n2..,.. --tiebreak=index --toggle-sort=ctrl-r |
            command sed '
                /^ *[0-9]/ {
                    s/ *\([0-9]*\) .*/!\1/;
                    b end;
                };
                d;
                : end
            '
        )";
    READLINE_LINE="${READLINE_LINE:+${READLINE_LINE:0:READLINE_POINT}}${READLINE_LINE_NEW}${READLINE_LINE:+${READLINE_LINE:READLINE_POINT}}";
    READLINE_POINT="$((READLINE_POINT + ${#READLINE_LINE_NEW}))"
}

#builtin set -o histexpand;
#builtin bind '"\er": redraw-current-line';
#builtin bind '"\e^": magic-space';
#builtin bind -x '"\C-x1": __fzf_history';
#builtin bind '"\C-r": "\C-x1\e^\er"'

# fkill - kill process
fkill() {
  pid=$(ps -ef | sed 1d | fzf -m | awk '{print $2}')

  if [ "x$pid" != "x" ]
  then
    kill -${1:-9} $pid
  fi
}

# fs [FUZZY PATTERN] - Select selected tmux session
#   - Bypass fuzzy finder if there's only one match (--select-1)
#   - Exit if there's no match (--exit-0)
fs() {
  local session
  session=$(tmux list-sessions -F "#{session_name}" | \
    fzf --query="$1" --select-1 --exit-0) &&
  tmux switch-client -t "$session"
}

# ftpane - switch pane
ftpane () {
  local panes current_window target target_window target_pane
  panes=$(tmux list-panes -s -F '#I:#P - #{pane_current_path} #{pane_current_command}')
  current_window=$(tmux display-message  -p '#I')

  target=$(echo "$panes" | fzf) || return

  target_window=$(echo $target | awk 'BEGIN{FS=":|-"} {print$1}')
  target_pane=$(echo $target | awk 'BEGIN{FS=":|-"} {print$2}' | cut -c 1)

  if [[ $current_window -eq $target_window ]]; then
    tmux select-pane -t ${target_window}.${target_pane}
  else
    tmux select-pane -t ${target_window}.${target_pane} &&
    tmux select-window -t $target_window
  fi
}


