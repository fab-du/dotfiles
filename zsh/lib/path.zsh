# ccache path exported before compiler
export PATH=/usr/lib/ccache/bin:$PATH

export MY_BIN="$HOME/bin"
export PATH=$MY_BIN:$PATH

#export PYTHONPATH=$PYTHONPATH:$HOME/

export EDITOR=nvim
export QT_SELECT=5
export MPD_HOST="localhost"
export MPD_PORT="6601"
export BROWSER="firefox"
export CLICOLOR=true
export PROJECTS="$HOME/Code"
export MAVEN_OPTS="-Xmx1024m"
export GOPATH="$PROJECTS/Go"
export PATH="$PATH:$GOPATH/bin"

# Options to fzf command
export FZF_DEFAULT_COMMAND='rg --files --no-ignore --hidden --follow --glob "!.git/*"'
