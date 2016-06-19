#!/bin/bash

set -e

os=`uname`
arch=`uname -m`
fzf_for_linux_32bits="https://github.com/junegunn/fzf-bin/releases/download/0.12.2/fzf-0.12.2-linux_386.tgz"
fzf_for_linux_64bits="https://github.com/junegunn/fzf-bin/releases/download/0.12.2/fzf-0.12.2-linux_amd64.tgz"
fzf_for_darwin_32bits="https://github.com/junegunn/fzf-bin/releases/download/0.12.2/fzf-0.12.2-darwin_386.tgz"
fzf_for_darwin_64bits="https://github.com/junegunn/fzf-bin/releases/download/0.12.2/fzf-0.12.2-darwin_amd64.tgz"
tmpdir="$HOME""/tmp_fzf/fzf"


if [[ "$os" == "Linux" ]]; then
	if [[ "$arch" == "x86_64" ]]; then
		fzf=$fzf_for_linux_64bits
	else 
		fzf=$fzf_for_linux_32bits
	fi
elif [[ "$os" == "Darwin" ]]; then
	if [[ "$arch" == "x86_64" ]]; then
		fzf=$fzf_for_darwin_64bits
	else 
		fzf=$fzf_for_darwin_32bits
	fi
fi

echo $fzf

mkdir -p "$HOME""/bin_external"
curl -fLo "$tmpdir"".tgz" --create-dirs "$fzf"
exec_file=$(tar -xzvf "$tmpdir"".tgz" -C "$HOME""/tmp_fzf")
echo $exec_file
mv  "$HOME""/tmp_fzf/""$exec_file" "$HOME""/bin_external/fzf"
rm -rf "$HOME""/tmp_fzf"
