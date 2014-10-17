#!/bin/sh 


echo
echo "Making System up to Date"
echo

sudo apt-get update -y 
sudo apt-get upgrade -y 


echo
echo "install synaptic, aptitude, Gdebi" 
echo
sudo apt-get install aptitude synaptic gdebi-core


echo
echo "Install google chrome Browser"  
echo
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo gdebi google-chrome-stable_current_amd64.deb

#Some plugin 
sudo apt-get install pepperflashplugin-nonfree
sudo apt-get install flashplugin-installer


#The gnome system monitor is a simple tool that shows processes, 
#resource usage (cpu, memory, network) and disk usage. 
#Better than the Task manager tool that comes with xfce.
sudo apt-get install gnome-system-monitor

sudo apt-get install libreoffice
sudo apt-get install vlc
sudo apt-get install xubuntu-restricted-extras libavcodec-extra

sudo apt-get install libdvdread4
sudo /usr/share/doc/libdvdread4/install-css.sh

#Install Skype 
wget http://download.skype.com/linux/skype-ubuntu-precise_4.2.0.13-1_i386.deb
sudo gdebi skype-ubuntu-precise_4.2.0.13-1_i386.deb

#Install Dropbox 
sudo gdebi dropbox_1.6.0_amd64.deb

if [[ ! -f $HOME/.gtkrc-2.0 ]]; then
        touch $HOME/.gtkrc-2.0 
fi

echo"  gtk-menu-popup-delay = 0      ">>$HOME/.gtkrc-2.0
echo"  gtk-menu-popdown-delay = 0    ">>$HOME/.gtkrc-2.0
echo"  gtk-menu-bar-popup-delay = 0  ">>$HOME/.gtkrc-2.0
echo"  gtk-enable-animations = 0     ">>$HOME/.gtkrc-2.0
echo"  gtk-timeout-expand = 0        ">>$HOME/.gtkrc-2.0
echo"  gtk-timeout-initial = 0       ">>$HOME/.gtkrc-2.0
echo"  gtk-timeout-repeat = 0        ">>$HOME/.gtkrc-2.0

#Gksudo is a gui tool to run gui apps as root.
#To launch any gui app with root privileges, use gksudo
# gksudo thunar

sudo apt-get install gksu

#Now extract and copy all the wallpapers in 
#the following directory. Note that you need root privileges 
#to be able to write inside that directory.

wget https://launchpad.net/elementaryos/0.2-luna/luna-wallpapers/+download/luna-wallpapers.tar.gz
gksudo thunar /usr/share/xfce4/backdrops


sudo apt-get install rar

