
 if [ -f ~/.profile ]; then
     . ~/.profile
 fi

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


# for bash terminal 
#if [ -f ~/.bashrc ]; then
   #. ~/.bashrc;
#fi



