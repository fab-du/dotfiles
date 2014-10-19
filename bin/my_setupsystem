#!/bin/bash 

# Ubuntu-only stuff. Abort if not Ubuntu.
[[ "$(cat /etc/issue 2> /dev/null)" =~ Ubuntu ]] || return 1


packages=(
    build-essential libssl-dev
    git-core
    tree sl id3tool cowsay
    nmap telnet
    htop
)

 Update APT.
e_header "Updating APT"
sudo apt-get -qq update
sudo apt-get -qq dist-upgrade


if (( ${#list[@]} > 0 )); then
e_header "Installing APT packages: ${list[*]}"
for package in "${list[@]}"; do
sudo apt-get -qq install "$package"
done
fi
