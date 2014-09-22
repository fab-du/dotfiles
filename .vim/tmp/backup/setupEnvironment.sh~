#!/bin/bash 

export PROCESS='nproc'

if [[ ${1}="-y" ]]; then
    export PARAM=-y 
    export SKIP=1 
else 
    export PARAM=""
    export SKIP=0
fi

clear 

echo ">>>Author: Siyapdje, Fabrice Dufils (batLab)<<<<"
echo
echo "Build environment setup Skript "
echo 
echo "Diese Skript installiert alle benoetige Packette"
echo "fuer Androidentwicklung, Androidsystementwicklung. "
echo 
echo " '-y' argument , bestätigt alle Angabe bei der Installation"
echo "Siehe man apt-get."
echo 
echo "Alle Datein die von Netz runtergeladen werden, werden im verzeichinss"
echo " '$HOME/android_build' gespeichert. "
echo 
echo "Zitat:In Opensource Welt bewegen sie sich die Sachen unheimlich schnell."
echo "Warum dieses Zitat ??????"
echo "1. Da Links von Packages koennen sich aendern."
echo "2. Neue Version von Software "
echo "3. Package nicht mehr benoetigt"
echo "usw. Also bitte auf den Link source.android.com gehen"
echo "Information sammeln um diese Skript dementsprechen zu aendern."
echo "--------------------------------------------------------------------" 
echo "--------------------------------------------------------------------" 
echo "--------------------------------------------------------------------" 



if [[ ${SKIP}=1 ]]; then
    echo "unerwartete Installation "
else
    read -p "Druecken Sie Enter um die Intallation fortzuführen" 
fi

clear 
clear 

if[ ! -d $HOME/android_build ]; then 
    mkdir -p $HOME/android_build
    cd $HOME/android_build 
fi

echo 
echo ">>>>>Python Installation<<<<<<"
echo 
sudo apt-get install build-essential gcc $PARAM
wget http://www.python.org/ftp/python/3.3.2/Python-3.3.2.tgz
tar -xvzf Python-3.3.2.tgz
cd $HOME/android_build/Python-3.3.2 
./configure --prefix=/usr/local/python3.3 
make -j${PROCESS}
sudo make install -j${PROCESS}
sudo ln -s /usr/local/python3.3/bin/python /usr/bin/python3.3

if [ ${SKIP} = 1 ]; then
  echo "Unattended installation. skipping pause..."
else
  read -p "Press [Enter] key to continue..."
fi
clear

echo
echo "Installing CCache!"
echo
wget http://www.samba.org/ftp/ccache/ccache-3.1.9.tar.gz
tar -xvzf ccache-3.1.9.tar.gz
cd ~/tr-be-script/ccache-3.1.9
./configure
make -j${PROCESS}
sudo make install -j${PROCESS}
echo "export USE_CCACHE=1" >> ~/.bashrc
ccache -M 25G
cd ~/tr-be-script

if [ ${SKIP} = 1 ]; then
  echo "Unattended installation. skipping pause..."
else
  read -p "Press [Enter] key to continue..."
fi
clear


echo
echo "Installing JDK 6!"
echo
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java6-installer
java -version

if [ ${SKIP} = 1 ]; then
  echo "Unattended installation. skipping pause..."
else
  read -p "Press [Enter] key to continue..."
fi

clear

echo
echo "Installing GNU Make!"
echo
cd ~/tr-be-script
wget http://ftp.gnu.org/gnu/make/make-3.82.tar.gz
tar -xvzf make-3.82.tar.gz
cd ~/tr-be-script/make-3.82
./configure
sudo make install -j${JOBS}
cd ~/

if [ ${SKIP} = 1 ]; then
  echo "Unattended installation. skipping pause..."
else
  read -p "Press [Enter] key to continue..."
fi

clear

echo
echo "Installing Required Packages!"
echo
sudo apt-get update
sudo apt-get install git gnupg flex bison gperf build-essential \
zip curl libc6-dev libncurses5-dev:i386 x11proto-core-dev \
libx11-dev:i386 libreadline6-dev:i386 libgl1-mesa-glx:i386 \
libgl1-mesa-dev g++-multilib mingw32 tofrodos \
python-markdown libxml2-utils xsltproc zlib1g-dev:i386 \
android-tools-adb android-tools-fastboot libcloog-isl-dev \
texinfo gcc-multilib \
schedtool libxml2-utils libxml2 \

sudo ln -s /usr/lib/i386-linux-gnu/mesa/libGL.so.1 /usr/lib/i386-linux-gnu/libGL.so

if [ ${SKIP} = 1 ]; then
  echo "Unattended installation. skipping pause..."
else
  read -p "Press [Enter] key to continue..."
fi

clear

echo
echo "Add terminal to The mouse right button shortcut!"
echo
sudo apt-get install nautilus-open-terminal $PARAM
nautilus -q

echo
echo "Installing GIT!"
echo
sudo apt-get install git $PARAM

echo
echo "Installing Repo"
echo
if [ ! -d ~/bin ]; then
  mkdir -p ~/bin
fi
curl http://commondatastorage.googleapis.com/git-repo-downloads/repo > ~/bin/repo
chmod a+x ~/bin/repo

echo
echo "Installing ADB Drivers!"
echo
wget http://www.broodplank.net/51-android.rules
sudo mv -f 51-android.rules /etc/udev/rules.d/51-android.rules
sudo chmod 644 /etc/udev/rules.d/51-android.rules

if [ ${SKIP} = 1 ]; then
  echo "Unattended installation. skipping pause..."
else
  read -p "Press [Enter] key to continue..."
fi

clear

echo
echo "Downloading and Configuring Android SDK!!"
echo "Making sure unzip is installed"
echo
sudo apt-get install unzip $PARAM

if [ `getconf LONG_BIT` = "64" ]
then
        echo
echo "Downloading SDK for 64bit Linux System"
        wget http://dl.google.com/android/adt/adt-bundle-linux-x86_64-20131030.zip
        echo "Download Complete!!"
        echo "Extracting"
        mkdir ~/adt-bundle
        mv adt-bundle-linux-x86_64-20131030.zip ~/adt-bundle/adt_x64.zip
        cd ~/adt-bundle
        unzip adt_x64.zip
        mv -f adt-bundle-linux-x86_64-20131030/* .
        echo "Configuring environment"
        echo -e '\n# Android tools\nexport PATH=${PATH}:~/adt-bundle/sdk/tools\nexport PATH=${PATH}:~/adt-bundle/sdk/platform-tools\nexport PATH=${PATH}:~/bin' >> ~/.bashrc
        echo -e '\nPATH="$HOME/adt-bundle/sdk/tools:$HOME/adt-bundle/sdk/platform-tools:$PATH"' >> ~/.profile
        echo "Placing desktop shortcuts"
        ln -s ~/adt-bundle/eclipse/eclipse ~/Desktop/Eclipse
        ln -s ~/adt-bundle/sdk/tools/android ~/Desktop/SDK-Manager
        echo "Done!!"
else

        echo
echo "Downloading SDK for 32bit Linux System"
        wget http://dl.google.com/android/adt/adt-bundle-linux-x86-20131030.zip
        echo "Download Complete!!"
        echo "Extracting"
        mkdir ~/adt-bundle
        mv adt-bundle-linux-x86-20131030.zip ~/adt-bundle/adt_x86.zip
        cd ~/adt-bundle
        unzip adt_x86.zip
        mv -f adt-bundle-linux-x86_64-20131030/* .
        echo "Configuring environment"
        echo -e '\n# Android tools\nexport PATH=${PATH}:~/adt-bundle/sdk/tools\nexport PATH=${PATH}:~/adt-bundle/sdk/platform-tools\nexport PATH=${PATH}:~/bin' >> ~/.bashrc
        echo -e '\nPATH="$HOME/adt-bundle/sdk/tools:$HOME/adt-bundle/sdk/platform-tools:$PATH"' >> ~/.profile
        echo "Placing desktop shortcuts"
        ln -s ~/adt-bundle/eclipse/eclipse ~/Desktop/Eclipse
        ln -s ~/adt-bundle/sdk/tools/android ~/Desktop/SDK-Manager
        echo "Done!!"
fi

if [ ${SKIP} = 1 ]; then
  echo "Unattended installation. skipping pause..."
else
  read -p "Press [Enter] key to continue..."
fi

clear

echo
echo "Installing DSIXDA's Android Kitchen"
echo
cd ~/tr-be-script
wget https://github.com/dsixda/Android-Kitchen/archive/master.zip
unzip master.zip
mv -f Android-Kitchen-master ~/Android-Kitchen
echo -e '\n#!/bin/bash\ncd ~/Android-Kitchen\n./menu' >> ~/Android-Kitchen/kitchen
chmod 755 ~/Android-Kitchen/kitchen
ln -s ~/Android-Kitchen/kitchen ~/bin/kitchen
ln -s ~/Android-Kitchen/kitchen ~/Desktop/Android-Kitchen

if [ ${SKIP} = 1 ]; then
  echo "Unattended installation. skipping pause..."
else
  read -p "Press [Enter] key to continue..."
fi

clear

echo
echo "Cleaning up temporary files..."
echo
rm -f           $HOME/android_build/Python-3.3.2.tgz
sudo rm -rf     $HOME/android_build/Python-3.3.2
rm -f           $HOME/android_build/make-3.82.tar.gz
rm -rf          $HOME/android_build/make-3.82
rm -f           $HOME/android_build/ccache-3.1.9.tar.gz
rm -rf          $HOME/android_build/ccache-3.1.9
rm -rf          $HOME/adt-bundle/adt-bundle-linux-x86_64-20131030
rm -rf          $HOME/adt-bundle/adt-bundle-linux-x86-20131030
rm -f           $HOME/adt-bundle/adt_x64.zip
rm -f           $HOME/adt-bundle/adt_x86.zip
rm -f           $HOME/android_build/master.zip

clear

echo 
echo "Thanks for using this script!"
echo "Now, Enjoy compiling roms/kernels :)"
read -p "Press [Enter] key to exit..."
exit




