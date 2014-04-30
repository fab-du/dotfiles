## Temporaire Aliases #### 

alias set_addr='http://141.19.96.35/svn/set52'

###############################
#tmux aliases 
alias vs='tmux split-window -v'
alias tmux="TERM=screen-256color-bce tmux"
alias hs='tmux split-window -h'
alias tmux_session='tmux ls'
alias tmux_new_session='tmux new -s'
alias tmux_session_detach='tmux detach'

alias tmux_win_create='tmux new-windo'
alias tmux_win_rename='tmux '
alias tmux_session_kill='tmux killall tmux'
alias tmux_window_kill='tmux kill-window'


alias cwork='cd /home/batlab/workspace/'

#Android Programming Aliases : 
alias android_make_build_xml='android update project -p'
alias android_clean_debug='ant clean debug'
alias android_clean_release='ant clean release'
alias android_list_target='android list target | less'

#Qt Programming 
alias qt_qmake_no_pro_file='qmake project' 
alias qt_build='make && sudo make install'

#Gdb 
alias gdb_build_for_debuging='gcc -ggdb3'

alias ll='ls -l'
alias la='ls -A'
alias l='ls -CF'
alias ls='ls --color=auto' 


alias ch='cd ~'
alias cvim='cd ~/.vim/'
alias cdoc='cd $HOME/documents' 
alias cdown='cd $HOME/downloads'
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
