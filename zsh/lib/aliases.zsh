alias sudo='sudo -E'
alias cal='cal -m'
alias cdu='cdu -dh -M1'
alias cdf='cdf -h'

alias weather='weather -i LBSF'

alias g='git'
alias gs='git status'
alias gst='git status'
alias gc='git commit -v'
alias gca='git commit -av'
alias gdv='git diff -w "$@" | vim -R -'
alias gp='git push'
alias gl='git pull'
alias gr='git rebase -i'

alias be="bundle exec"
alias bo="bundle open"
alias befs="bundle exec foreman start"

alias Exit=exit
alias xit=exit
alias -g raisl=rails

## Temporaire Aliases #### 

################################### 
#Schnell editing 
alias e_vimrc='vim $HOME/.vimrc' 
alias e_tmux='vim $HOME/.tmux.conf' 
alias e_bashrc='vim $HOME/.bashrc' 
alias e_zsh='vim $HOME/.zshrc' 
alias e_awe='vim $HOME/.config/awesome' 


####Screen Setup########## 
alias xrandr_dual='xrandr --output LVDS1 --auto --output VGA1 --auto --right-of LVDS1' 
alias xrandr_lvds1_off='xrandr --output LVDS1 --off'
alias xrandr_vga1_off='xrandr --output VGA1 --off'
alias xrandr_rotate_left='xrandr --output VGA1 --rotate left '

######Youtube download############ 
alias youtube_mp3='youtube-dl --extract-audio --audio-format mp3' 
alias youtube_video='cclive'

######NOTE############## 
alias NOTE='cd $HOME/Dropbox/'


###############################
#tmux aliases 
alias tmux="tmux -2"
alias tvs='tmux split-window -v'
alias ths='tmux split-window -h'
alias tnew='tmux new -s'
alias tls='tmux ls'
alias tdt='tmux detach'
alias tkill='tmux kill-session -t'

alias tmux_win_create='tmux new-windo'
alias tmux_win_rename='tmux '
alias tmux_session_kill='tmux killall tmux'
alias tmux_window_kill='tmux kill-window'


alias cwork='cd $HOME/workspace/'
alias ctmp='cd $HOME/tmp'

alias Note='cd $HOME/Dropbox/'
alias JS='cd $HOME/Project/JS' 
alias QT='cd $HOME/Project/QT'
alias WEB='cd $HOME/Project/WEB'
alias NODE='cd $HOME/Project/JS/NODE/'
alias ANDROID='cd $HOME/Project/ANDROID/'
alias JAVA='cd $HOME/Project/JAVA/'
alias J2EE='cd $HOME/Project/J2EE/'

alias doc='cd $HOME/Dokumente'
alias down='cd $HOME/Downloads'

#Android Programming Aliases : 
alias android_make_build_xml='android update project -p'
alias android_clean_debug='ant clean debug'
alias android_clean_release='ant clean release'
alias android_list_target='android list target | less'

#Gdb 
alias gdb_build_for_debuging='gcc -ggdb3'

alias ll='ls -l'
alias la='ls -A'
alias l='ls -CF'
alias ls='ls --color=auto' 
alias ls_bin='ls -alh'


alias ch='cd ~'
alias _='sudo'
alias cvim='cd ~/.vim/'
alias ..='cd ..' 
alias .2='cd ../../'
alias .3='cd ../../../' 
alias .4='cd ../../../../' 
alias .5='cd ../../../../../' 

alias vimrc='vim ~/.vimrc'
alias untar='tar -zxvf'
#jalias apt-get='sudo apt-get' 

#color diff
alias diff='colordiff' 

#make mount command output pretty and human readable format 
alias mount='mount |column -t'

# handy short cuts #
alias h='history'
alias j='jobs -l'

alias path='echo -e ${PATH//:/\\n}'
alias now='date +"%T'
alias nowtime='now'
alias nowdate='date +"%d-%m-%Y"'

#11: Control output of networking tool called ping
# Stop after sending count ECHO_REQUEST packets #
alias ping='ping -c 5'
# Do not wait interval 1 second, go fast #
alias fastping='ping -c 100 -s.2'

#Show open port 
alias ports='netstat -tulanp'

# do not delete / or prompt if deleting more than 3 files at a time #
alias rm='rm -I --preserve-root'
 
# confirmation #
alias mv='mv -i'
alias cp='cp -i'
alias ln='ln -i'

#alias pandoc='pandoc --latex-engine=luatex --toc'
 
# Parenting changing perms on / #
alias chown='chown --preserve-root'
alias chmod='chmod --preserve-root'
alias chgrp='chgrp --preserve-root'


#25: Get system memory, cpu usage, and gpu memory info quickly
## pass options to free ## 
alias meminfo='free -m -l -t'
 
## get top process eating memory
alias psmem='ps auxf | sort -nr -k 4'
alias psmem10='ps auxf | sort -nr -k 4 | head -10'
 
## get top process eating cpu ##
alias pscpu='ps auxf | sort -nr -k 3'
alias pscpu10='ps auxf | sort -nr -k 3 | head -10'
 
## Get server cpu info ##
alias cpuinfo='lscpu'
 
## older system use /proc/cpuinfo ##
##alias cpuinfo='less /proc/cpuinfo' ##
 
## get GPU ram on desktop / laptop## 
alias gpumeminfo='grep -i --color memory /var/log/Xorg.0.log'


#23: Desktop specific - play avi/mp3 files on demand
## play video files in a current directory ##
# cd ~/Download/movie-name 
# playavi or vlc 
alias playavi='mplayer *.avi'
alias vlc='vlc *.avi'
 
# play all music files from the current directory #
alias playwave='for i in *.wav; do mplayer "$i"; done'
alias playogg='for i in *.ogg; do mplayer "$i"; done'
alias playmp3='for i in *.mp3; do mplayer "$i"; done'
 
# play files from nas devices #
alias nplaywave='for i in /nas/multimedia/wave/*.wav; do mplayer "$i"; done'
alias nplayogg='for i in /nas/multimedia/ogg/*.ogg; do mplayer "$i"; done'
alias nplaymp3='for i in /nas/multimedia/mp3/*.mp3; do mplayer "$i"; done'
 
# shuffle mp3/ogg etc by default #
alias music='mplayer --shuffle *'

#26: Control Home Router
#The curl command can be used to reboot Linksys routers.
# Reboot my home Linksys WAG160N / WAG54 / WAG320 / WAG120N Router / Gateway from *nix.
alias rebootlinksys="curl -u 'admin:my-super-password' 'http://192.168.1.2/setup.cgi?todo=reboot'"
 
# Reboot tomato based Asus NT16 wireless bridge 
alias reboottomato="ssh admin@192.168.1.1 /sbin/reboot"
# Changing/making/removing directory
setopt auto_pushd
setopt pushd_ignore_dups
setopt pushdminus

alias -g ...='../..'
alias -g ....='../../..'
alias -g .....='../../../..'
alias -g ......='../../../../..'

alias 1='cd -'
alias 2='cd -2'
alias 3='cd -3'
alias 4='cd -4'
alias 5='cd -5'
alias 6='cd -6'
alias 7='cd -7'
alias 8='cd -8'
alias 9='cd -9'

alias d='dirs -v | head -10'

# List directory contents
alias lsa='ls -lah'
alias l='ls -lah'
alias ll='ls -lh'
alias la='ls -lAh'
alias ls='ls -h --color=always --group-directories-first'
alias lsl='ls -l'
