
# Add fpath
fpath=( "$HOME/.zsh/functions" $fpath )

# Color
eval `dircolors -b $HOME/.dircolors`

source ~/dotfiles/zsh/lib/aliases.zsh
source ~/dotfiles/zsh/lib/keys.zsh
source ~/dotfiles/zsh/lib/options.zsh
source ~/dotfiles/zsh/lib/completion.zsh

[ -f ~/.zshrc_local ] && . ~/.zshrc_local
[ -f ~/.fzf/fzf.zsh ] && . ~/.fzf/fzf.zsh

