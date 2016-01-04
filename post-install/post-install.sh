#! /bin/bash
set -e

DEBIAN_FRONTEND=noninteractive sudo apt-get update && sudo apt-get install -y openssh-server \
      ca-certificates curl unzip tar \
      zsh stow   
# Install development packages
DEBIAN_FRONTEND=noninteractive sudo apt-get install -y python-pip build-essential git-core mercurial bzr python-dev ctags cmake software-properties-common python-software-properties direnv
DEBIAN_FRONTEND=noninteractive sudo apt-get install -y i3 gnome-terminal terminator feh dmenu dunst connman-ui rox-filer hexchat tightvncserver vim-gnome libxss1 libappindicator1 libindicator7 libnspr4 libnss3 libappindicator1 firefox gnome-settings-daemon xautolock i3blocks xclip


DEBIAN_FRONTEND=noninteractive sudo add-apt-repository "deb http://archive.ubuntu.com/ubuntu $(lsb_release -sc) universe"
DEBIAN_FRONTEND=noninteractive sudo add-apt-repository -y ppa:neovim-ppa/unstable 
DEBIAN_FRONTEND=noninteractive sudo apt-get update && sudo apt-get -y install python3-dev python3-pip neovim rofi
sudo easy_install supervisor
sudo pip install neovim

sudo su
mkdir -p /usr/local/go && curl -Ls https://storage.googleapis.com/golang/go1.5.2.linux-amd64.tar.gz | tar xvzf - -C /usr/local/go --strip-components=1
exit

git clone https://github.com/bketelsen/dotfiles /home/bketelsen/dotfiles
#git pull
cd /home/bketelsen/dotfiles && git submodule update --init --recursive
#install fonts
/home/bketelsen/dotfiles/_vendor/powerline-fonts/install.sh

# put vim config in place
cd /home/bketelsen/dotfiles  
stow -vv vim  
stow -vv neovim
stow -vv zsh 
stow -vv zsh-custom 
stow -vv git 
rm -rf /home/bketelsen/.i3 
stow -vv i3  
stow -vv config


