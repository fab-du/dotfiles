export PATH=$PATH:/usr/local/bin
export PATH=$PATH:/usr/local/heroku/bin
export PATH=$PATH:$HOME/bin

# ccache path exported before compiler
export PATH=/usr/lib/ccache/bin:$PATH

export PYTHONPATH=$PYTHONPATH:$HOME/projects

export ANDROID_SDK="$HOME/adt-bundle/sdk"

export PATH="$PATH:$ANDROID_SDK/tools"

export ECLPSE_HOME="$HOME/adt-bundle/eclipse"
export PATH=$ECLPSE_HOME:$PATH

export MY_BIN="$HOME/bin"
export PATH=$MY_BIN:$PATH

export JAVA_HOME="/usr/lib/jvm/java-7-oracle"
export JAVA_HOME="/usr/lib/jvm/java-1.7.0-openjdk-i386"
export PATH="/usr/lib/jvm/java-1.7.0-openjdk-i386/bin:$PATH"

#export JAVA_HOME="/home/batie/Downloads/jdk8"
#export PATH="/home/batie/Downloads/jdk8/bin:$PATH"

#export JAVA_HOME="/home/batie/Downloads/jersey-2.19.zip"
#export PATH="/home/batie/Downloads/jdk8/bin:$PATH"

export QMAKESPEC=/usr/lib/i386-linux-gnu/qt5/mkspecs/linux-g++
export QMAKESPEC PATH 

export EDITOR=vim
#export TERM=xterm-256color
export ANDROID_PRODUCT_OUT=$HOME/batlab/Android
export ANDROID_HOME=$HOME/adt-bundle/sdk/
export QT_SELECT=5

export FZF=/home/batie/Downloads/fzf-master/bin 
export FZF PATH

export MPD_PORT=6602
export MPD_HOST=localhost
export MPD_PORT PATH
export MPD_HOST PATH

export NVM_DIR="/home/batie/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

export NODE_DIR=/home/batie/.nvm/versions/node/v4.0.0/bin

export NVM_DIR PATH
export NODE_DIR PATH
