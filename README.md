dotfiles
========

dotfiles

### Actuel: 

* .tmux.conf
* .xinitrc
* .vimrc
* .gitconfig
* .conkyrc
* .xmodmaprc
* .xsessionrc
* .profile 
* .vim [dir]
* .config[dir]
*  bin[dir]

### Installation 

```sh
chsh -s $(which zsh)  
```

#### Minimal installation

For example on a server where you may not need all dependency to be install.
Like vim plugin or software

```sh
wget -P -qO- https://raw.githubusercontent/bat-lab/dotfiles/install/install.sh | bash 
```




