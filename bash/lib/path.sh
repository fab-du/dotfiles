export PATH=$PATH:/usr/local/bin
export PATH=$PATH:/usr/local/heroku/bin
export PATH=$PATH:/home/batlab/bin
export PATH=$PATH:/home/batlab/.cabal/bin
export PATH=$PATH:/opt/diet/bin
export PATH=$PATH:/opt/nginx/sbin
# ccache path exported before compiler
export PATH=/usr/lib/ccache/bin:$PATH

export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin

export PYTHONPATH=$PYTHONPATH:$HOME/projects

export ANDROID_SDK="/home/batlab/android-sdks"

export PATH="$PATH:$ANDROID_SDK/tools"

export ANY_CONNECT=/opt/cisco/anyconnect 
export PATH=$PATH:$ANY_CONNECT/bin  
source ~/.bashrc


export ECLPSE_HOME="/home/batlab/eclipse"
export PATH=$ECLPSE_HOME:$PATH

export MY_BIN="$HOME/bin"
export PATH=$MY_BIN:$PATH

export JAVA_HOME="/usr/lib/jvm/java-7-oracle"
export PATH="/usr/lib/jvm/java-7-oracle/bin:$PATH"

QMAKESPEC=/usr/lib/i386-linux-gnu/qt5/mkspecs/linux-g++
export QMAKESPEC PATH 
