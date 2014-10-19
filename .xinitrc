
# Source profile File 
source ~/.profile 

# source xmodmap 
if [ -s ~/.xmodmaprc ]; then
    xmodmap ~/.xmodmaprc
fi

xset r rate 300 20
