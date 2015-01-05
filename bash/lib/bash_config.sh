# Source global definitions
if [ -f /etc/bashrc ]; then
. /etc/bashrc
fi

# Window size sanity check
shopt -s checkwinsize

#enable vi mode"
set -o vi

# User/root variables definition
if [ -z "${debian_chroot:-}" ] && [ -r /etc/debian_chroot ]; then
    debian_chroot=$(cat /etc/debian_chroot)
fi

# Colored XTERM promp
case "$TERM" in
    xterm-color) color_prompt=yes;;
esac

# Colored prompt
force_color_prompt=yes

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

HISTCONTROL=ignoreboth

shopt -s histappend
HISTSIZE=1000
HISTFILESIZE=2000

shopt -s checkwinsize
